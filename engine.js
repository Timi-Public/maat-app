/* Simulated engine figures shared by Agent Overview, 智能分析 and 引擎监控.
   Market prices, liquidity, volume, spreads and end dates come from the Polymarket snapshot.
   Model estimates, scores, engine metrics, risk blocks and log entries are labelled demos.
   Engine owns every simulated number so Overview and both tabs always agree. */
window.Engine = (() => {
  const hash = s => { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } h ^= h >>> 16; h = Math.imul(h, 0x85ebca6b); h ^= h >>> 13; h = Math.imul(h, 0xc2b2ae35); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
  const rnd = (key, i) => hash(key + ':' + i);
  // Linear interpolation between random anchors: changes smoothly inside each period.
  const walk = (key, period, min, max, t = Date.now()) => { const i = Math.floor(t / period), f = (t % period) / period, a = rnd(key, i), b = rnd(key, i + 1); return min + (a + (b - a) * f) * (max - min); };
  // A new random value once per period.
  const step = (key, period, min, max, t = Date.now()) => Math.round(min + rnd(key, Math.floor(t / period)) * (max - min));
  const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
  const scale = (n, lo, hi, a, b) => a + clamp((n - lo) / (hi - lo), 0, 1) * (b - a);

  // Leo PRD 11-10 (§4, §5.1): candidates 90–200 every 30 min, larger in Polymarket's busy hours;
  // valid signals are 10–20% of candidates and change with them; latency 45–200 ms every 5 s;
  // queue 25–100+ every 15 s; 24H risk blocks start at 10 at 00:00 (UTC+8) and add 3 or 4 every 5 min, up to 980;
  // positions 30–100 every 5 hours; markets in liquidity service are 10–20% of high-liquidity markets every 30 min.
  const HALF_HOUR = 1800000;
  const monitored = () => D?.summary?.globalEventCount || null;
  // Busy hours follow US trading activity on Polymarket (UTC 13–23 busy, 00–04 moderate, otherwise quiet).
  const busy = t => { const h = new Date(t ?? Date.now()).getUTCHours(); return h >= 13 ? 1 : h <= 4 ? .5 : 0; };
  const candidates = t => { const now = t ?? Date.now(), lo = 90 + busy(now) * 60; return step('candidates', HALF_HOUR, lo, lo + 50, now); };
  const signals = t => { const now = t ?? Date.now(); return Math.max(1, Math.round(candidates(now) * (.1 + rnd('valid', Math.floor(now / HALF_HOUR)) * .1))); };
  const latency = t => step('latency', 5000, 45, 200, t);
  const queued = t => { const n = step('queued', 15000, 25, 104, t); return n >= 100 ? '100+' : n; };
  const blocked = t => {
    const local = (t ?? Date.now()) + 8 * 3600000, day = Math.floor(local / 86400000), slots = Math.floor((local % 86400000) / 300000);
    let n = 10; for (let i = 0; i < slots && n < 980; i++) n += rnd('blocked:' + day, i) < .5 ? 3 : 4;
    return Math.min(980, n);
  };
  const passed = t => { const s = signals(t); return s - Math.round(s * walk('pass', HALF_HOUR, .1, .22, t)); };
  // Market Monitor 待执行信号 uses the same valid-signal figure as Overview (Leo PRD 11-10 §5.1).
  const pending = t => signals(t);
  const positions = t => step('positions', 18000000, 30, 100, t);
  const activeServices = eligible => eligible ? Math.max(1, Math.round(eligible * (.1 + rnd('services', Math.floor(Date.now() / HALF_HOUR)) * .1))) : 0;

  // Model estimate: 2–5 pp away from the market YES price, rounded to 0.1 pp so YES + NO = 100.
  const model = m => {
    const base = Number(m.prices[0]), size = (2 + hash(m.id) * 3) / 100;
    let dir = hash(m.id + ':dir') < .5 ? -1 : 1;
    if (base + dir * size > .99 || base + dir * size < .01) dir = -dir;
    return Math.round(clamp(base + dir * size, .01, .99) * 1000) / 1000;
  };
  const pct = p => ({ yes: (Math.round(p * 1000) / 10).toFixed(1), no: ((1000 - Math.round(p * 1000)) / 10).toFixed(1) });
  const edge = m => Math.round((model(m) - Number(m.prices[0])) * 1000) / 10;
  const spread = m => {
    const book = D.orderBooks.find(b => b.marketId === m.id);
    if (book?.asks?.[0] && book?.bids?.[0]) return book.asks[0].price - book.bids[0].price;
    return Number.isFinite(m.spread) ? m.spread : null;
  };
  const daysLeft = m => Math.max(0, (Date.parse(m.endDate) - Date.now()) / 86400000);
  const factors = m => {
    const e = Math.abs(edge(m)), sp = spread(m), days = daysLeft(m);
    return [
      { key: 'edge', score: scale(e, 2, 5, 62, 100) },
      { key: 'liquidity', score: scale(Math.log10(Math.max(1, m.liquidity)), 4.6, 7, 40, 100) },
      { key: 'volume', score: scale(Math.log10(Math.max(1, m.volume24hr)), 4.6, 6.4, 40, 100) },
      { key: 'spread', score: sp == null ? 60 : scale(sp * 100, 3, .1, 40, 100) },
      { key: 'time', score: days < 1 ? 45 : days < 7 ? 72 : days < 120 ? 100 : 76 }
    ];
  };
  const weights = { edge: .32, liquidity: .22, volume: .18, spread: .14, time: .14 };
  const score = m => { const w = factors(m).reduce((s, f) => s + f.score * weights[f.key], 0); return Math.round(clamp(50 + (w - 40) / 60 * 45, 50, 95)); };
  const risk = m => { const sp = spread(m); return m.liquidity < 300000 || daysLeft(m) < 2 || (sp != null && sp > .02) ? 'mid' : 'low'; };
  const decision = m => score(m) < 72 ? 'watch' : edge(m) > 0 ? 'yes' : 'no';

  // AI Signals (Leo PRD 11-10): hot events refreshed every 30 minutes, scrolling; Agent shows up to 20, Overview 10.
  // Each signal is stamped with the time its event was read, a few minutes apart inside the window.
  const signalWindow = (t = Date.now()) => Math.floor(t / HALF_HOUR);
  const signalSet = (n = 20, t = Date.now()) => {
    const pool = U.featured(), k = pool.length ? signalWindow(t) % pool.length : 0;
    return pool.slice(k).concat(pool.slice(0, k)).slice(0, n);
  };
  const signalTime = (i = 0, t = Date.now()) => { const w = signalWindow(t); let at = w * HALF_HOUR + HALF_HOUR; for (let j = 0; j <= i; j++) at -= Math.round((1 + rnd('sigt:' + w, j) * 2) * 60000); return Math.max(w * HALF_HOUR, at); };
  // Market Monitor (Leo 11-02, re-sent 11-05): three real events per subtab, rotating every 8 minutes.
  // 候选市场 = one 买入 YES, one 买入 NO, one 观望; 当前持仓 = three other events, held side follows the model.
  const monitorPool = (t = Date.now()) => { const pool = U.featured(), k = pool.length ? (Math.floor(t / 480000) * 3) % pool.length : 0; return pool.slice(k).concat(pool.slice(0, k)); };
  const pick = (pool, wants, sideOf) => {
    const out = [];
    for (const want of wants) { const m = pool.find(x => sideOf(x) === want && !out.some(o => o.m.id === x.id)); if (m) out.push({ m, side: want }); }
    for (const m of pool) { if (out.length >= 3) break; if (!out.some(o => o.m.id === m.id)) out.push({ m, side: sideOf(m) }); }
    return out.slice(0, 3);
  };
  const candidateSet = t => pick(monitorPool(t), ['yes', 'no', 'watch'], decision);
  const holdingSet = t => { const skip = candidateSet(t).map(x => x.m.id); return pick(monitorPool(t).filter(m => !skip.includes(m.id)), ['yes', 'no'], m => edge(m) >= 0 ? 'yes' : 'no'); };
  const hhmm = ms => new Date(ms).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kuala_Lumpur' });
  const decisionLabel = d => ({ yes: 'YES', no: 'NO', watch: U.t('观望', 'WATCH') })[d];
  const decisionClass = d => ({ yes: 'yes-label', no: 'no-label', watch: 'hold-label' })[d];
  // Overview platform cards: demo figures (echo 11-03 note #1 asked for demo numbers; Leo has not defined the four metrics).
  // Active markets = positions (same as Market Monitor); liquidity = services in progress × demo average collateral.
  const platform = (t = Date.now()) => {
    const eligible = window.D ? (D.summary.eligibleEventCount ?? D.markets.filter(U.eligible).length) : 0;
    const liquidity = Math.round(activeServices(eligible) * walk('svc-size', 3600000, 2400, 3200, t) / 100) * 100;
    const agents = Math.round(walk('aum', 21600000, 1650000, 1950000, t) / 1000) * 1000;
    const volume = Math.round((38600000 + Math.max(0, t - Date.UTC(2026, 10, 1)) / 3600000 * 52000) / 1000) * 1000;
    return { assets: agents + liquidity, volume, markets: positions(t), liquidity };
  };
  return { platform, hhmm, decisionLabel, decisionClass, hash, rnd, step, walk, monitored, signals, latency, queued, blocked, candidates, passed, pending, positions, activeServices, model, pct, edge, spread, daysLeft, factors, score, risk, decision, signalSet, signalTime, signalWindow, candidateSet, holdingSet };
})();

// Live figures on Agent pages: update text in place; re-render when the 5-minute signal or 8-minute monitor window turns.
(() => {
  let lastWindow = Engine.signalWindow() + ':' + Math.floor(Date.now() / 480000);
  const setText = (sel, v) => document.querySelectorAll(sel).forEach(el => { if (el.textContent !== String(v)) el.textContent = v; });
  setInterval(() => {
    if (!window.D || !['agent', 'home'].includes(S.route)) return;
    setText('[data-engine="latency"],#latency', Engine.latency());
    setText('[data-engine="queued"],#queued', Engine.queued());
    setText('[data-engine="blocked"],#blocked', Engine.blocked());
    for (const key of ['signals', 'passed', 'pending', 'candidates', 'positions']) setText(`[data-engine="${key}"]`, Number(Engine[key]()).toLocaleString('en-US'));
    const nodes = document.querySelectorAll('.engine-node');
    if (nodes.length) { const k = Math.floor(Date.now() / 1800) % nodes.length; nodes.forEach((n, i) => n.classList.toggle('active', i === k)); }
    const w = Engine.signalWindow() + ':' + Math.floor(Date.now() / 480000);
    if (w !== lastWindow) { lastWindow = w; if (((S.route === 'agent' && [0, 1].includes(S.agentTab)) || (S.route === 'home' && S.ovTab === 1)) && !S.overlay && document.activeElement?.tagName !== 'INPUT') render({ preserve: true }); }
  }, 1000);
})();
