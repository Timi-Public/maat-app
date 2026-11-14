import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import imgSwitchMetaMask from '../public/assets/figma/82dcd.svg';
import imgSocialX from '../public/assets/x-social.png';
import Connect from './screens/connect';
import Home from './screens/home';
import Agent from './screens/agent';
import Analysis from './screens/analysis';
import Execution from './screens/execution';
import Monitor from './screens/monitor';
import Tokenomics from './screens/tokenomics';
import Liquidity from './screens/liquidity';
import Service from './screens/service';
import DataSources from './screens/data';
import Whitepaper from './screens/whitepaper';
import Swap from './screens/swap';
import Profile from './screens/profile';
import Consumption from './screens/consumption';
import Activity from './screens/activity';
import Account from './screens/account';
import Guide from './screens/guide';

const screens = [
  { id:'connect', label:'连接钱包', height:881, Component:Connect },
  { id:'home', label:'首页', height:4092, Component:Home },
  { id:'agent', label:'Agent 总览', height:2471, Component:Agent },
  { id:'analysis', label:'智能分析', height:1749, Component:Analysis },
  { id:'execution', label:'交易执行', height:1378, Component:Execution },
  { id:'monitor', label:'引擎监控', height:1216, Component:Monitor },
  { id:'tokenomics', label:'Tokenomics', height:2937, Component:Tokenomics },
  { id:'liquidity', label:'流动性市场', height:2715, Component:Liquidity },
  { id:'service', label:'流动性服务详情', height:1057, Component:Service },
  { id:'data', label:'数据来源', height:982, Component:DataSources },
  { id:'guide', label:'使用指南', height:1280, Component:Guide },
  { id:'whitepaper', label:'白皮书', height:1974, Component:Whitepaper },
  { id:'swap', label:'Quick Swap', height:740, Component:Swap },
  { id:'profile', label:'个人资料', height:797, Component:Profile },
  { id:'consumption', label:'Agent 消耗详情', height:797, Component:Consumption },
  { id:'activity', label:'资金活动记录', height:797, Component:Activity },
  { id:'account', label:'账户与社区奖励', height:2020, Component:Account },
];
const byId = Object.fromEntries(screens.map(screen => [screen.id, screen]));
const homeTabs = new Set(['交易动态', '交易信号', '流动性']);
const localTabs = {
  home: homeTabs,
  agent: new Set(['当前持仓', '候选市场', '最近成交']),
  analysis: new Set(['全部信号', '有效信号', '已执行', '历史记录', '全部', 'YES', 'NO']),
  execution: new Set(['全部订单', '待执行', '执行中', '已完成', '失败', '全部', '进行中', '历史记录']),
  monitor: new Set(['全部', '运行中', '已暂停', '异常', '市场扫描', '信号分析', '风险检查', '订单执行']),
  liquidity: new Set(['全部市场', '服务中', '可加入', '我的服务', '市场', '服务']),
  account: new Set(['资产', '奖励', '全部', 'USDC', 'MAAT']),
  activity: new Set(['全部', '充值', '提现', '交易', '奖励']),
  data: new Set(['全部来源', '市场数据', '链上数据', '交易数据']),
};
const primaryNav = [
  { id:'home', label:'首页', left:22, width:42 },
  { id:'agent', label:'Agent', left:65, width:44 },
  { id:'tokenomics', label:'Tokenomics', left:109, width:44 },
  { id:'liquidity', label:'流动性市场', left:153, width:44 },
  { id:'account', label:'账户', left:197, width:44 },
  { id:'more', label:'更多功能', left:241, width:43 },
  { id:'swap', label:'Quick Swap', left:297, width:61 },
];
const navIconNodes = {
  home:'208:11039',
  agent:'208:11024',
  tokenomics:'208:11044',
  liquidity:'208:11038',
  account:'208:11034',
  more:'208:11048',
  swap:'208:11135',
};
const navIndicatorOffsets = { home:0, agent:43, tokenomics:86, liquidity:129, account:172, more:219 };
function activeNavForRoute(route) {
  if (['home','agent','tokenomics','liquidity','account','swap','profile','activity','consumption','service'].includes(route)) {
    if (route === 'service') return 'liquidity';
    if (['profile','activity','consumption'].includes(route)) return 'account';
    return route;
  }
  return 'more';
}
const moreMenuItems = [
  { id:'whitepaper', title:'Whitepaper', description:'项目愿景、产品机制与代币经济', icon:'book' },
  { id:'data', title:'Documentation', description:'使用指南与数据来源', icon:'document' },
  { id:'contracts', title:'Smart Contracts', description:'合约地址与权限信息', icon:'contract' },
  { id:'security', title:'Security & Audit', description:'审计状态与公开报告', icon:'shield' },
];
const languageOptions = ['English', '简体中文', '繁體中文（香港）', 'Tiếng Việt', '한국어'];
const textRoutes = new Map([
  ['首页','home'], ['Home','home'], ['Overview','home'], ['MAAT','home'],
  ['Agent 总览','agent'], ['Agent Trading','agent'], ['Agent','agent'], ['总览','agent'], ['Overview','home'],
  ['智能分析','analysis'], ['Smart Analysis','analysis'], ['Intelligence','analysis'], ['Signal Analysis','analysis'],
  ['交易执行','execution'], ['Execution','execution'],
  ['引擎监控','monitor'], ['Engine Monitor','monitor'], ['Monitoring','monitor'], ['Market Monitor','monitor'],
  ['Tokenomics','tokenomics'], ['项目代币','tokenomics'], ['探索代币经济','tokenomics'],
  ['Liquidity Marketplace','liquidity'], ['市场发行','liquidity'], ['流动性市场','liquidity'], ['探索流动性市场','liquidity'], ['Market Making','liquidity'],
  ['我的服务','service'], ['Liquidity Service','service'], ['查看服务详情','service'], ['申请流动性服务','service'], ['Service details','service'],
  ['数据来源','data'], ['Data Sources','data'], ['Sources','data'], ['Data source','data'],
  ['白皮书','whitepaper'], ['Whitepaper','whitepaper'], ['查看合约与安全资料','whitepaper'],
  ['Quick Swap','swap'], ['预览兑换','swap'], ['充值','swap'], ['充值 MAAT','swap'], ['Swap','swap'],
  ['个人资料','profile'], ['Profile','profile'], ['My profile','profile'],
  ['Agent 消耗详情','consumption'], ['消耗详情','consumption'],
  ['资金活动记录','activity'], ['Funds Activity','activity'], ['Activity','activity'], ['查看完整交易数据','activity'], ['View full market data','activity'],
  ['Account','account'], ['账户','account'], ['My Portfolio','account'], ['进入账户','account'], ['测试钱包','account'],
  ['连接钱包','connect'], ['Connect Wallet','connect'], ['全部钱包','connect'],
  ['开启智能交易','agent'], ['进入智能交易','agent'],
  ['探索智能分析与引擎监控','analysis']
]);
function initialRoute() {
  const query = new URLSearchParams(location.search).get('page');
  const hash = location.hash.replace(/^#\/?/, '');
  return byId[query] ? query : (byId[hash] ? hash : 'home');
}
function normalizeLabel(value) { return value.replace(/\s+/g, ' ').trim(); }
function isWalletAddressLabel(value) { return /^0x[a-f0-9.…-]+$/i.test(normalizeLabel(value)); }
function resolveRoute(label, currentRoute) {
  if (label === 'Overview' && currentRoute === 'agent') return 'agent';
  if (label === '总览') return 'agent';
  if (textRoutes.has(label)) return textRoutes.get(label);
  if (label === '查看全部' && currentRoute === 'account') return 'activity';
  if (label === '详情' && currentRoute === 'liquidity') return 'service';
  return null;
}
function selectHomeTab(frame, label) {
  frame.querySelectorAll('[data-maat-tab]').forEach((candidate) => {
    const selected = candidate.dataset.maatTab === label;
    candidate.dataset.maatSelected = String(selected);
    candidate.setAttribute('aria-selected', String(selected));
  });
}

function App() {
  const [route, setRoute] = useState(initialRoute);
  const [selectedTabs, setSelectedTabs] = useState({ home:'交易动态' });
  const [moreOpen, setMoreOpen] = useState(false);
  const [moreDetail, setMoreDetail] = useState(null);
  const [walletOpen, setWalletOpen] = useState(false);
  const [walletPickerOpen, setWalletPickerOpen] = useState(false);
  const [walletCopied, setWalletCopied] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('简体中文');
  const fixedNavRef = useRef(null);
  const navSourceRef = useRef(null);
  const phoneCaseRef = useRef(null);
  const walletCloseRef = useRef(null);
  const walletPickerCloseRef = useRef(null);
  const guideBackRouteRef = useRef('home');
  const screen = byId[route] || byId.home;
  const Current = screen.Component;
  const walletAddress = '0xef202f...dbfd17';

  const go = (next) => {
    if (!byId[next]) return;
    setMoreOpen(false);
    setMoreDetail(null);
    setWalletOpen(false);
    setWalletPickerOpen(false);
    setRoute(next);
    if (location.hash !== '#'+next) history.pushState(null, '', '#'+next);
    document.title = 'MAAT · '+byId[next].label;
  };
  useEffect(() => {
    const onHistoryChange = () => {
      const next = location.hash.replace(/^#\/?/, '');
      if (byId[next]) setRoute(next);
    };
    addEventListener('hashchange', onHistoryChange);
    addEventListener('popstate', onHistoryChange);
    window.MaatUI = {
      go,
      routes: () => screens.map(({id,label,height}) => ({id,label,height})),
      setCSS: (value) => { document.getElementById('maat-user-overrides').textContent = String(value || ''); },
      setTokens: (values) => {
        Object.entries(values || {}).forEach(([name,value]) => {
          const key = name.startsWith('--maat-') ? name : '--maat-'+name;
          if (/^--maat-[a-z0-9-]+$/i.test(key) && typeof value === 'string') document.getElementById('maat-frame')?.style.setProperty(key,value);
        });
      }
    };
    return () => {
      removeEventListener('hashchange', onHistoryChange);
      removeEventListener('popstate', onHistoryChange);
    };
  }, []);

  useEffect(() => {
    const frame = document.getElementById('maat-frame');
    const frameTop = frame?.getBoundingClientRect().top || 0;
    const tabs = localTabs[route] || new Set();
    const activeTab = selectedTabs[route] || (route === 'home' ? '交易动态' : '');
    frame?.querySelectorAll('[data-node-id]').forEach((node) => {
      const label = normalizeLabel(node.textContent || '');
      const bounds = node.getBoundingClientRect();
      if (bounds.top - frameTop < 110 && bounds.bottom - frameTop > 0 && bounds.width <= 180 && bounds.height <= 30 && isWalletAddressLabel(label)) {
        node.dataset.maatWalletButton = 'true';
        node.setAttribute('role', 'button');
        node.setAttribute('tabindex', '0');
        node.setAttribute('aria-label', '打开我的钱包');
        return;
      }
      if (tabs.has(label)) {
        node.dataset.maatTab = label;
        node.setAttribute('role', 'tab');
        node.setAttribute('tabindex', '0');
        node.setAttribute('aria-selected', String(label === activeTab));
        node.dataset.maatSelected = String(label === activeTab);
        return;
      }
      const destination = resolveRoute(label, route);
      if (!destination) return;
      node.dataset.maatRoute = destination;
      node.setAttribute('role', 'link');
      node.setAttribute('tabindex', '0');
      node.setAttribute('aria-label', `前往${byId[destination].label}`);
    });
  }, [route, selectedTabs]);

  // Keep one copy of the Figma home frame as the shared, persistent bottom bar.
  // Hide any route-specific copy inside the scrolling Figma canvas.
  useEffect(() => {
    const root = navSourceRef.current?.firstElementChild;
    const host = fixedNavRef.current;
    if (!root || !host) return;

    host.replaceChildren();
    host.style.height = '4092px';
    const collectBottomBarNodes = (sourceRoot, height) => {
      const sourceRect = sourceRoot.getBoundingClientRect();
      return Array.from(sourceRoot.children).filter((child) => {
        const rects = [child, ...Array.from(child.querySelectorAll('[data-node-id]'))]
          .map((node) => node.getBoundingClientRect())
          .filter((rect) => rect.width > 0 && rect.height > 0);
        const figmaSwapGlyph = child.matches('[data-node-id="208:11135"]') ||
          Boolean(child.querySelector('[data-node-id="208:11135"]'));
        if (figmaSwapGlyph) return true;
        return rects.some((rect) => {
          const top = rect.top - sourceRect.top;
          const left = rect.left - sourceRect.left;
          const width = rect.width;
          const heightPx = rect.height;
          const close = (value, target, tolerance = 3) => Math.abs(value-target) <= tolerance;
          // Page exports place their own copy of the bottom navigation at
          // slightly different bottom insets. Match the Figma bar geometry
          // throughout that bottom band instead of assuming one fixed Y value.
          const navBand = top >= height-160 && top <= height-8;
          const pill = navBand && close(left,20,5) && close(width,266,5) && close(heightPx,54,4);
          const swap = navBand && close(left,301,4) && close(width,54,4) && close(heightPx,54,4);
          const active = navBand && [25,68,112,153,197,241].some((x) => close(left,x,4)) &&
            close(width,40,4) && close(heightPx,40,4);
          const homeIndicator = navBand && close(width,135,5) && close(heightPx,4,2);
          const iconRow = navBand && heightPx <= 24 && width <= 30 &&
            [36,45,77,121,168,209,258].some((x) => close(left,x,4));
          const swapGlyph = navBand && close(left,318,5) && close(width,20,5) && close(heightPx,18,5);
          return pill || swap || active || homeIndicator || iconRow || swapGlyph;
        });
      });
    };

    const sourceNodes = collectBottomBarNodes(root, 4092);
    sourceNodes.forEach((child) => {
      const copy = child.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      host.appendChild(copy);
    });

    const activeNav = activeNavForRoute(route);
    host.dataset.active = activeNav;
    const indicator = host.querySelector('[data-node-id="208:10801"]');
    if (indicator) {
      indicator.style.transform = activeNav === 'swap'
        ? 'translateX(0) scale(.65)'
        : `translateX(${navIndicatorOffsets[activeNav] ?? 0}px)`;
      indicator.style.opacity = activeNav === 'swap' ? '0' : '1';
    }
    const activeIcon = host.querySelector(`[data-node-id="${navIconNodes[activeNav] || ''}"]`);
    if (activeIcon && activeNav !== 'home') activeIcon.style.filter = 'brightness(0) invert(1)';
    host.querySelectorAll('[data-node-id="208:11040"], [data-node-id="208:11041"], [data-node-id="208:11042"], [data-node-id="208:11043"]')
      .forEach((node) => { node.style.backgroundColor = activeNav === 'home' ? '#fff' : '#c1c1c1'; });
    const currentRoot = document.getElementById('maat-frame')?.firstElementChild;
    const currentNavNodes = currentRoot
      ? collectBottomBarNodes(currentRoot, screen.height)
      : [];
    currentNavNodes.forEach((node) => { node.style.visibility = 'hidden'; });

    return () => {
      currentNavNodes.forEach((node) => { node.style.visibility = ''; });
      host.replaceChildren();
    };
  }, [route, screen.height]);

  const onFrameClick = (event) => {
    const frame = event.currentTarget;
    if (openWalletFromFrame(event, frame)) return;
    const source = event.target.closest('[data-node-id]');
    if (!source) return;
    let node = source;
    while (node && node !== frame) {
      const label = normalizeLabel(node.textContent || '');
      if (node.dataset.maatTab) {
        const label = node.dataset.maatTab;
        setSelectedTabs((current) => ({ ...current, [route]:label }));
        selectHomeTab(frame, label);
        return;
      }
      const destination = node.dataset.maatRoute || resolveRoute(label, route);
      if (destination) { go(destination); return; }

      // Figma exports button backgrounds and their labels as separate layers.
      // If the click lands on the background, route through the unique linked
      // label geometrically contained by that layer.
      const area = node.getBoundingClientRect();
      if (area.width && area.height) {
        const tabs = new Set();
        frame.querySelectorAll('[data-maat-tab]').forEach((candidate) => {
          const bounds = candidate.getBoundingClientRect();
          const centerX = bounds.left + bounds.width / 2;
          const centerY = bounds.top + bounds.height / 2;
          if (centerX >= area.left - 2 && centerX <= area.right + 2 && centerY >= area.top - 2 && centerY <= area.bottom + 2) {
            tabs.add(candidate.dataset.maatTab);
          }
        });
        if (tabs.size === 1) { selectHomeTab(frame, [...tabs][0]); return; }

        const destinations = new Set();
        frame.querySelectorAll('[data-node-id]').forEach((candidate) => {
          const candidateRoute = candidate.dataset.maatRoute || resolveRoute(normalizeLabel(candidate.textContent || ''), route);
          if (!candidateRoute) return;
          const bounds = candidate.getBoundingClientRect();
          const centerX = bounds.left + bounds.width / 2;
          const centerY = bounds.top + bounds.height / 2;
          if (centerX >= area.left - 2 && centerX <= area.right + 2 && centerY >= area.top - 2 && centerY <= area.bottom + 2) {
            destinations.add(candidateRoute);
          }
        });
        if (destinations.size === 1) { go([...destinations][0]); return; }
      }
      node = node.parentElement?.closest('[data-node-id]') || null;
    }
  };

  const onFrameKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const walletButton = event.target.closest('[data-maat-wallet-button="true"]');
    if (walletButton) {
      event.preventDefault();
      setWalletOpen(true);
      setWalletPickerOpen(false);
      return;
    }
    const target = event.target.closest('[data-maat-route], [data-maat-tab]');
    if (!target) return;
    event.preventDefault();
    if (target.dataset.maatTab) {
      const label = target.dataset.maatTab;
      setSelectedTabs((current) => ({ ...current, [route]:label }));
      selectHomeTab(event.currentTarget, label);
    }
    else go(target.dataset.maatRoute);
  };

  const selectPrimaryNav = (id) => {
    if (id === 'more') { setMoreDetail(null); setMoreOpen(true); return; }
    go(id);
  };

  const selectMoreItem = (item) => {
    if (item.id === 'contracts' || item.id === 'security') {
      setMoreDetail(item.id);
      return;
    }
    if (item.id === 'data') {
      guideBackRouteRef.current = route;
      go('guide');
      return;
    }
    go(item.id);
  };

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setMoreOpen(false);
        setMoreDetail(null);
        setWalletOpen(false);
        setWalletPickerOpen(false);
        setLanguageOpen(false);
      }
    };
    addEventListener('keydown', onEscape);
    return () => removeEventListener('keydown', onEscape);
  }, []);

  useEffect(() => {
    if (walletOpen) walletCloseRef.current?.focus();
    if (walletPickerOpen) walletPickerCloseRef.current?.focus();
  }, [walletOpen, walletPickerOpen]);

  const copyWalletAddress = async () => {
    try {
      await navigator.clipboard?.writeText(walletAddress);
    } catch {
      // Clipboard access can be unavailable in an embedded preview; still
      // provide visible feedback so the control never appears inert.
    }
    setWalletCopied(true);
    window.setTimeout(() => setWalletCopied(false), 1600);
  };

  const openWalletFromFrame = (event, frame) => {
    const frameTop = frame.getBoundingClientRect().top;
    const addressNode = Array.from(frame.querySelectorAll('[data-node-id]')).find((node) => {
      const rect = node.getBoundingClientRect();
      const top = rect.top - frameTop;
      return top < 110 && rect.bottom - frameTop > 0 && rect.width <= 180 && rect.height <= 30 && isWalletAddressLabel(node.textContent || '');
    });
    if (!addressNode) return false;
    const rect = addressNode.getBoundingClientRect();
    const inWalletButton = event.clientX >= rect.left - 34 && event.clientX <= rect.right + 14 &&
      event.clientY >= rect.top - 9 && event.clientY <= rect.bottom + 9;
    if (!inWalletButton) return false;
    setMoreOpen(false);
    setWalletOpen(true);
    setWalletPickerOpen(false);
    return true;
  };

  return <>
    <main className="layout">
    <aside className="sidebar">
      <div className="sidebar-brand">M</div>
      <p className="sidebar-kicker">MAAT / FIGMA PAGE 5</p>
      <h1>MAAT 移动端<br/>设计稿</h1>
      <p>逐页还原原始图层与 375px 画布。点击页面名称切换，当前选中的是「{screen.label}」。</p>
      <nav className="page-list" aria-label="设计稿页面导航">
        {screens.map((page,index)=><button key={page.id} className="page-choice" data-active={route===page.id} onClick={()=>go(page.id)}>
          <span className="num">{String(index+1).padStart(2,'0')}</span><span>{page.label}</span><span className="arrow">↗</span>
        </button>)}
      </nav>
      <div className="sidebar-foot">原始画板宽度 375px · 页面高度按 Figma frame 设置</div>
    </aside>
    <nav className="tablet-route-picker" aria-label="设计稿页面导航">
      <label htmlFor="tablet-page-select">页面</label>
      <select id="tablet-page-select" value={route} onChange={(event) => go(event.target.value)}>
        {screens.map((page,index)=><option key={page.id} value={page.id}>{String(index+1).padStart(2,'0')} · {page.label}</option>)}
      </select>
    </nav>
    <section ref={phoneCaseRef} className="phone-case" aria-label={screen.label}>
      <div className="screen-viewport" key={route}>
        <div className="screen-frame-wrap" style={{height:screen.height+'px'}}>
          <div id="maat-frame" className="screen-frame" style={{height:screen.height+'px'}} onClick={onFrameClick} onKeyDown={onFrameKeyDown}>
            <Current go={go} onBack={() => go(guideBackRouteRef.current || 'home')} />
            {route !== 'guide' && <button className="maat-language-trigger" type="button" aria-label="选择语言" aria-haspopup="menu" aria-expanded={languageOpen} onClick={() => setLanguageOpen((open) => !open)} />}
          </div>
        </div>
      </div>
      <div ref={fixedNavRef} className="maat-fixed-nav-host" aria-hidden="true" />
      <nav className="maat-fixed-nav-hotspots" aria-label="主导航" style={{height:screen.height+'px'}}>
        {primaryNav.map((item) => <button key={item.id} type="button" aria-label={item.label}
          aria-current={activeNavForRoute(route)===item.id ? 'page' : undefined}
          data-active={activeNavForRoute(route)===item.id}
          style={{left:item.left+'px', top:(screen.height-90)+'px', width:item.width+'px'}}
          onClick={() => selectPrimaryNav(item.id)} />)}
      </nav>
    </section>
    {moreOpen && <div className="maat-more-backdrop" role="presentation" onClick={() => { setMoreOpen(false); setMoreDetail(null); }}>
      <section className={`maat-more-panel${moreDetail ? ' maat-more-detail-panel' : ''}`} role="dialog" aria-modal="true" aria-label={moreDetail === 'contracts' ? 'Smart Contracts' : moreDetail === 'security' ? 'Security & Audit' : '更多功能菜单'} onClick={(event) => event.stopPropagation()}>
        {moreDetail ? <>
          <div className="maat-more-detail-heading">
            <button type="button" className="maat-more-detail-back" aria-label="返回更多功能菜单" onClick={() => setMoreDetail(null)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 5-7 7 7 7" /></svg>
            </button>
            <span className="maat-more-item-icon" aria-hidden="true">
              {moreDetail === 'contracts'
                ? <svg viewBox="0 0 24 24"><path d="M6 3.5h8l5 5v12H6zM14 3.5v5h5M10 12l-2 2 2 2M14 12l2 2-2 2" /></svg>
                : <svg viewBox="0 0 24 24"><path d="M12 3.5 20 7v5.5c0 4.4-3.2 7-8 9-4.8-2-8-4.6-8-9V7zM8.5 12.2l2.3 2.3 4.8-5" /></svg>}
            </span>
            <strong>{moreDetail === 'contracts' ? 'Smart Contracts' : 'Security & Audit'}</strong>
          </div>
          {moreDetail === 'contracts' ? <>
            <div className="maat-more-detail-row"><span>项目代币合约 MAAT</span><span>待部署</span></div>
            <div className="maat-more-detail-row"><span>Agent Trading 业务合约</span><span>待部署</span></div>
            <div className="maat-more-detail-row"><span>Liquidity Marketplace 业务合约</span><span>待部署</span></div>
            <div className="maat-more-detail-row"><span>网络</span><span>Polygon (137)</span></div>
            <p className="maat-more-detail-note">部署后公布合约地址、权限与验证记录</p>
          </> : <>
            <div className="maat-more-detail-row"><span>安全审计报告</span><span>待发布</span></div>
            <div className="maat-more-detail-row"><span>审计机构</span><span>待公布</span></div>
            <div className="maat-more-detail-row"><span>代币合约验证状态</span><span>待部署验证</span></div>
            <p className="maat-more-detail-note">报告发布后提供原文与链接</p>
          </>}
        </> : <>
          <div className="maat-more-list">
            {moreMenuItems.map((item) => <button type="button" className="maat-more-item" key={item.title} onClick={() => selectMoreItem(item)}>
              <span className="maat-more-item-icon" aria-hidden="true">
                {item.icon === 'book' && <svg viewBox="0 0 24 24"><path d="M3.5 5.2c3.4-.8 6.2-.1 8.5 1.8v12c-2.3-1.9-5.1-2.6-8.5-1.8zM20.5 5.2c-3.4-.8-6.2-.1-8.5 1.8v12c2.3-1.9 5.1-2.6 8.5-1.8z" /></svg>}
                {item.icon === 'document' && <svg viewBox="0 0 24 24"><path d="M6 3.5h8l5 5v12H6zM14 3.5v5h5M9 13h7M9 16.5h7" /></svg>}
                {item.icon === 'contract' && <svg viewBox="0 0 24 24"><path d="M6 3.5h8l5 5v12H6zM14 3.5v5h5M10 12l-2 2 2 2M14 12l2 2-2 2" /></svg>}
                {item.icon === 'shield' && <svg viewBox="0 0 24 24"><path d="M12 3.5 20 7v5.5c0 4.4-3.2 7-8 9-4.8-2-8-4.6-8-9V7zM8.5 12.2l2.3 2.3 4.8-5" /></svg>}
              </span>
              <span className="maat-more-item-copy"><strong>{item.title}</strong><small>{item.description}</small></span>
            </button>)}
          </div>
          <div className="maat-more-community">
            <button type="button" className="maat-more-community-link" onClick={() => go('account')}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20M9.5 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM16 4a3.5 3.5 0 0 1 0 6.8M17 14.5a4 4 0 0 1 4 4V20" /></svg>
              <span>Community</span>
            </button>
            <div className="maat-more-socials">
              <button type="button" className="maat-more-social-mark" aria-label="X 社区" onClick={() => go('account')}>
                <img src={imgSocialX} alt="" />
              </button>
              <button type="button" className="maat-more-social-chat" aria-label="社区消息" onClick={() => go('account')}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.5-1.2A9 9 0 1 0 12 3Z"/><path d="M8.2 8.2c.3-.5.6-.5.9-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .7.5.8 1.1 1.4 1.9 1.9.3.2.5.2.7 0l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .3-.1.8-.4 1.1-.4.4-1 .6-1.5.6-.4 0-1-.1-1.6-.4-1.4-.6-2.7-1.7-3.6-2.9-.7-.9-1.1-1.9-1.2-2.6-.1-.7.2-1.3.5-1.6Z"/></svg>
              </button>
            </div>
          </div>
        </>}
      </section>
    </div>}
    {languageOpen && phoneCaseRef.current && createPortal(<div className="maat-language-layer" role="presentation" onClick={() => setLanguageOpen(false)}>
      <section className="maat-language-menu" role="menu" aria-label="语言" onClick={(event) => event.stopPropagation()}>
        <p className="maat-language-label">语言</p>
        {languageOptions.map((language) => <button key={language} type="button" role="menuitemradio" aria-checked={selectedLanguage === language} className="maat-language-option" data-selected={selectedLanguage === language} onClick={() => setSelectedLanguage(language)}>
          <span>{language}</span>
          {selectedLanguage === language && <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7" /></svg>}
        </button>)}
      </section>
    </div>, phoneCaseRef.current)}
    {(walletOpen || walletPickerOpen) && phoneCaseRef.current && createPortal(<div className="maat-wallet-backdrop" role="presentation" onClick={() => { setWalletOpen(false); setWalletPickerOpen(false); }}>
      {walletPickerOpen ? <section className="maat-wallet-picker" role="dialog" aria-modal="true" aria-labelledby="maat-wallet-picker-title" onClick={(event) => event.stopPropagation()}>
        <div className="maat-wallet-heading">
          <h2 id="maat-wallet-picker-title">连接钱包</h2>
          <button ref={walletPickerCloseRef} className="maat-wallet-close" type="button" aria-label="关闭连接钱包" onClick={() => setWalletPickerOpen(false)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </div>
        <div className="maat-wallet-options">
          <button className="maat-wallet-option" type="button" onClick={() => { setWalletPickerOpen(false); setWalletOpen(false); }}>
            <span className="maat-wallet-option-icon maat-wallet-option-test"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 4.5 12 7.5-12 7.5z" /></svg></span>
            <span className="maat-wallet-option-copy"><strong>测试钱包</strong><small>一键进入，查看登录后的页面</small></span>
            <svg className="maat-wallet-option-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>
          <button className="maat-wallet-option" type="button" onClick={() => { setWalletPickerOpen(false); setWalletOpen(false); }}>
            <span className="maat-wallet-option-icon maat-wallet-option-metamask"><img src={imgSwitchMetaMask} alt="" /></span>
            <span className="maat-wallet-option-copy"><strong>MetaMask</strong><small className="maat-wallet-detected">已检测到</small></span>
            <svg className="maat-wallet-option-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>
          <button className="maat-wallet-option" type="button" onClick={() => { setWalletPickerOpen(false); setWalletOpen(false); }}>
            <span className="maat-wallet-option-icon maat-wallet-option-okx"><strong>OKX</strong></span>
            <span className="maat-wallet-option-copy"><strong>OKX Wallet</strong></span>
            <svg className="maat-wallet-option-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>
          <button className="maat-wallet-option" type="button" onClick={() => { setWalletPickerOpen(false); setWalletOpen(false); }}>
            <span className="maat-wallet-option-icon maat-wallet-option-trust"><strong>T</strong></span>
            <span className="maat-wallet-option-copy"><strong>Trust Wallet</strong></span>
            <svg className="maat-wallet-option-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>
        </div>
      </section> : <section className="maat-wallet-sheet" role="dialog" aria-modal="true" aria-labelledby="maat-wallet-title" onClick={(event) => event.stopPropagation()}>
        <div className="maat-wallet-heading">
          <h2 id="maat-wallet-title">我的钱包</h2>
          <button ref={walletCloseRef} className="maat-wallet-close" type="button" aria-label="关闭我的钱包" onClick={() => setWalletOpen(false)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </div>
        <div className="maat-wallet-identity">
          <span className="maat-wallet-avatar" aria-hidden="true">
            <svg viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="28" fill="#d9afd4" />
              <path d="M28 6v7" stroke="#f4e9f2" strokeWidth="3" strokeLinecap="round" />
              <rect x="22" y="7" width="12" height="5" rx="2" fill="#f6eef4" />
              <rect x="10" y="18" width="36" height="31" rx="14" fill="#865b88" />
              <rect x="15" y="25" width="26" height="16" rx="6" fill="#e8f4e9" />
              <rect x="20" y="29" width="3" height="8" rx="1.5" fill="#30303a" />
              <rect x="33" y="29" width="3" height="8" rx="1.5" fill="#30303a" />
              <path d="M23 45h10" stroke="#42334a" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <div className="maat-wallet-details">
            <div className="maat-wallet-address-line">
              <strong>{walletAddress}</strong>
              <button className="maat-wallet-copy" type="button" aria-label="复制钱包地址" onClick={copyWalletAddress}>
                {walletCopied ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8V4h12v12h-4M4 8h12v12H4z" /></svg>}
              </button>
            </div>
            <span className="maat-wallet-network"><i />Test wallet · Polygon</span>
          </div>
        </div>
        <div className="maat-wallet-divider" />
        <div className="maat-wallet-actions">
          <button type="button" onClick={() => { setWalletOpen(false); setWalletPickerOpen(true); }}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7v5h-5M4 17v-5h5" /><path d="M6.2 9a7 7 0 0 1 11.5-2.1L20 9M4 15l2.3 2.1A7 7 0 0 0 18 15" /></svg>
            切换钱包
          </button>
          <button type="button" onClick={() => { setWalletOpen(false); go('connect'); }}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17" /></svg>
            断开连接
          </button>
        </div>
        <a className="maat-wallet-explorer" href="https://polygonscan.com/" target="_blank" rel="noreferrer">
          在 PolygonScan 查看
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 5h6v6M19 5l-9 9" /><path d="M18 13v5H5V5h5" /></svg>
        </a>
      </section>
      }
      <span className="maat-wallet-home-indicator" aria-hidden="true" />
    </div>, phoneCaseRef.current)}
    </main>
    {createPortal(<div className="maat-nav-source" aria-hidden="true">
      <div ref={navSourceRef} className="maat-nav-source-frame">
        <Home />
      </div>
    </div>, document.body)}
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
