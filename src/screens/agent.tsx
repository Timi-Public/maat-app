import img2 from "../../public/assets/figma/0f0a4.png";
import img11320261 from "../../public/assets/figma/1fc88.png";
import imgMayorOfCannesDavidLisnardDeliversASpeechDuringACeremonyToR1 from "../../public/assets/figma/60b32.png";
import imgImage67 from "../../public/assets/figma/ac73d.png";
import imgImage73 from "../../public/assets/figma/88303.png";
import imgImage74 from "../../public/assets/figma/7e172.png";
import imgImage76 from "../../public/assets/figma/51afa.png";
import imgRiskShield from "../../public/assets/figma/58f42.png";
import imgImage20 from "../../public/assets/figma/c2411.png";
import imgRectangle157 from "../../public/assets/figma/4ebf3.svg";
import imgEllipse14 from "../../public/assets/figma/3337a.svg";
import imgLine12 from "../../public/assets/figma/84433.svg";
import imgLine28 from "../../public/assets/figma/1f674.svg";
import imgLine36 from "../../public/assets/figma/16ac0.svg";
import img1 from "../../public/assets/figma/c58f2.svg";
import imgEllipse56 from "../../public/assets/figma/19557.svg";
import imgEllipse57 from "../../public/assets/figma/19d1f.svg";
import imgLine29 from "../../public/assets/figma/ab452.svg";
import imgEllipse71 from "../../public/assets/figma/d3a0b.svg";
import imgGroup4 from "../../public/assets/figma/b727f.svg";
import imgGroup5 from "../../public/assets/figma/81acd.svg";
import imgGroup7 from "../../public/assets/figma/157ae.svg";
import imgGroup8 from "../../public/assets/figma/51334.svg";
import imgVector from "../../public/assets/figma/e86e0.svg";
import imgVector7 from "../../public/assets/figma/9983b.svg";
import imgVector8 from "../../public/assets/figma/d7fb3.svg";
import imgVector9 from "../../public/assets/figma/b4139.svg";
import imgVector1 from "../../public/assets/figma/73cef.svg";
import imgGroup45 from "../../public/assets/figma/2916d.svg";
import imgGroup56 from "../../public/assets/figma/44cec.svg";
import img16 from "../../public/assets/figma/deddb.svg";
import imgGroup46 from "../../public/assets/figma/5ced0.svg";
import imgVector2 from "../../public/assets/figma/83150.svg";
import imgGroup57 from "../../public/assets/figma/8bbfb.svg";
import imgGroup11 from "../../public/assets/figma/d25ac.svg";
import imgGroup82 from "../../public/assets/figma/379f1.svg";
import imgGroup84 from "../../public/assets/figma/a3e9a.svg";
import imgBattery from "../../public/assets/figma/3d361.svg";
import imgWifi from "../../public/assets/figma/52928.svg";
import imgCellularConnection from "../../public/assets/figma/fd94c.svg";
import { useRef, useState } from 'react';

function AgentMetricCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const scrollToPage = (page: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: page === 0 ? 0 : track.scrollWidth - track.clientWidth, behavior: 'smooth' });
  };
  const updatePage = (event: { currentTarget: HTMLDivElement }) => {
    const track = event.currentTarget;
    setActivePage(track.scrollLeft > (track.scrollWidth - track.clientWidth) / 2 ? 1 : 0);
  };

  return <div className="maat-agent-metric-carousel" aria-label="Agent 交易统计">
    <div ref={trackRef} className="maat-agent-metric-track" onScroll={updatePage} role="region" tabIndex={0} aria-label="交易统计，可左右滑动">
      <div className="maat-overview-card maat-overview-metric maat-agent-metric-card">
        <span className="maat-overview-label">监测市场</span>
        <strong>21,009</strong>
        <span className="maat-overview-unit">↑</span>
        <span className="maat-overview-icon" aria-hidden="true"><img alt="" src={imgEllipse56} /><svg className="maat-overview-token-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" /><path d="m12 7.7 3.8 4.3-3.8 4.3-3.8-4.3L12 7.7Z" /></svg></span>
      </div>
      <div className="maat-overview-card maat-overview-metric maat-agent-metric-card">
        <span className="maat-overview-label">有效交易信号</span>
        <strong>105</strong>
        <span className="maat-overview-unit">条</span>
        <span className="maat-overview-icon" aria-hidden="true"><img alt="" src={imgEllipse57} /><svg className="maat-overview-liquidity-icon" viewBox="0 0 24 24"><path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" /><path d="M6.5 8.5h11l1.7 8a2.5 2.5 0 0 1-2.4 3H7.2a2.5 2.5 0 0 1-2.4-3l1.7-8Z" /><path d="m12 11 2.2 2.2-2.2 2.2-2.2-2.2L12 11Z" /></svg></span>
      </div>
      <div className="maat-overview-card maat-agent-metric-card maat-agent-volume-card">
        <span className="maat-overview-label">24H 成交额</span>
        <span className="maat-agent-volume-icon maat-agent-volume-icon-chart" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5v15h16M7 16l4-4 3 2 6-7" /></svg></span>
        <strong>$52.26M</strong>
      </div>
      <div className="maat-overview-card maat-agent-metric-card maat-agent-volume-card">
        <span className="maat-overview-label">24H 成交笔数</span>
        <span className="maat-agent-volume-icon maat-agent-volume-icon-layers" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" /><path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5" /></svg></span>
        <strong>—</strong>
      </div>
    </div>
    <div className="maat-agent-metric-pages" role="group" aria-label="统计卡片页码">
      {[0, 1].map((page) => <button key={page} type="button" aria-label={`第 ${page + 1} 组统计`} aria-pressed={activePage === page} data-active={activePage === page} onClick={() => scrollToPage(page)} />)}
    </div>
  </div>;
}

export default function Component() {
  const backgroundChoice = new URLSearchParams(window.location.search).get('bg');
  const backgroundVideo = backgroundChoice === '1'
    ? './assets/space-universe-stars-256164.mp4'
    : backgroundChoice === '3'
      ? 'https://cdn.pixabay.com/video/2023/11/18/189638-886016298_tiny.mp4'
      : './assets/agent-trading-network.mp4';

  return (
    <div className="bg-white relative size-full" data-node-id="208:11137" data-name="智能交易·总览">
      <div className="absolute contents left-0 top-0" data-node-id="208:11138" data-name="Mask group">
        <div className="absolute bg-black h-[2471px] left-0 top-0 w-[375px]" data-node-id="208:11139" />
        <div className="absolute bg-[rgba(0,0,0,0.6)] h-[400px] left-0 [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-position:0px_-82px] [mask-size:375px_2471px] top-[82px] w-[375px]" data-node-id="208:11141" style={{ maskImage: `url("${imgRectangle157}")` }} />
      </div>
      <div className="-translate-x-1/2 absolute bg-[#0a0a0a] border border-[#2c2c2d] border-solid h-[30px] left-[calc(50%+123.5px)] rounded-[16px] top-[59px] w-[88px]" data-node-id="208:11142" />
      <p className="[word-break:break-word] absolute capitalize font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[287px] text-[12px] text-white top-[67px] whitespace-nowrap" data-node-id="208:11143" style={{ fontVariationSettings: '"wdth" 100' }}>
        连接钱包
      </p>
      <div className="absolute bg-white h-[54px] left-[20px] rounded-[40px] top-[2383px] w-[266px]" data-node-id="208:11144" />
      <div className="absolute left-[68px] size-[40px] top-[2390px]" data-node-id="208:11145">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse14} />
      </div>
      <div className="absolute bg-white left-[301px] rounded-[40px] size-[54px] top-[2383px]" data-node-id="208:11146" />
      <div className="-translate-x-1/2 absolute bg-white h-[4px] left-1/2 rounded-[10px] top-[2457px] w-[135px]" data-node-id="208:11147" />
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[498px] left-1/2 rounded-[16px] top-[274px] w-[335px]" data-node-id="208:11148" />
      <div className="absolute bg-[#2a2a2c] h-[22px] left-[109px] rounded-[20px] top-[294px] w-[61px]" data-node-id="208:11149" />
      <div className="absolute border border-[#262527] border-solid h-[22px] left-[229px] rounded-[20px] top-[294px] w-[111px]" data-node-id="228:15144" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[130px] text-[#c1c1c1] text-[10px] top-[299px] whitespace-nowrap" data-node-id="208:11150" style={{ fontVariationSettings: '"wdth" 100' }}>
        未激活
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[255px] text-[#c1c1c1] text-[10px] top-[299px] whitespace-nowrap" data-node-id="228:15150" style={{ fontVariationSettings: '"wdth" 100' }}>
        切换托管
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[300px] text-[10px] text-white top-[299px] whitespace-nowrap" data-node-id="228:15152" style={{ fontVariationSettings: '"wdth" 100' }}>
        未激活
      </p>
      <div className="absolute h-0 left-[35px] top-[534px] w-[305px]" data-node-id="208:11151">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine12} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[666px] left-1/2 rounded-[16px] top-[1116px] w-[335px]" data-node-id="208:11152" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[18px] left-[84px] text-[12px] text-white top-[1180px] w-[256px]" data-node-id="208:11153" style={{ fontVariationSettings: '"wdth" 100' }}>
        Will Jon Ossoff win the 2028 Democratic presidential nomination?
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-103.5px)] text-[#c1c1c1] text-[10px] top-[1224px] uppercase whitespace-nowrap" data-node-id="208:11154" style={{ fontVariationSettings: '"wdth" 100' }}>
        信号生成时间 11-09 00:35 UTC+8
      </p>
      <div className="absolute bg-[rgba(53,177,90,0.2)] h-[22px] left-[247px] rounded-[20px] top-[1251px] w-[39px]" data-node-id="208:11155" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+69.5px)] text-[#35b15a] text-[10px] top-[1256px] uppercase whitespace-nowrap" data-node-id="208:11156" style={{ fontVariationSettings: '"wdth" 100' }}>
        YEs
      </p>
      <div className="absolute bg-[rgba(255,64,107,0.2)] h-[22px] left-[301px] rounded-[20px] top-[1251px] w-[39px]" data-node-id="208:11157" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+125.5px)] text-[#ff406b] text-[10px] top-[1256px] uppercase whitespace-nowrap" data-node-id="208:11158" style={{ fontVariationSettings: '"wdth" 100' }}>
        NO
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1256px] uppercase whitespace-nowrap" data-node-id="208:11159" style={{ fontVariationSettings: '"wdth" 100' }}>
        交易方向
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1288px] uppercase whitespace-nowrap" data-node-id="208:11160" style={{ fontVariationSettings: '"wdth" 100' }}>
        隐含概率
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+59.5px)] text-[10px] text-white top-[1288px] uppercase whitespace-nowrap" data-node-id="208:11161" style={{ fontVariationSettings: '"wdth" 100' }}>
        5.2%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+121.5px)] text-[10px] text-white top-[1288px] uppercase whitespace-nowrap" data-node-id="208:11162" style={{ fontVariationSettings: '"wdth" 100' }}>
        94.8%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1315px] uppercase whitespace-nowrap" data-node-id="208:11163" style={{ fontVariationSettings: '"wdth" 100' }}>
        模型估计概率
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+59.5px)] text-[10px] text-white top-[1315px] uppercase whitespace-nowrap" data-node-id="208:11164" style={{ fontVariationSettings: '"wdth" 100' }}>
        1.2%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+121.5px)] text-[10px] text-white top-[1315px] uppercase whitespace-nowrap" data-node-id="208:11165" style={{ fontVariationSettings: '"wdth" 100' }}>
        98.8%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[0] left-[calc(50%+114.5px)] text-[10px] text-white top-[1342px] uppercase whitespace-nowrap" data-node-id="208:11166" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[12px]">{`74 / `}</span>
        <span className="leading-[12px] text-[#c1c1c1]">100</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1342px] uppercase whitespace-nowrap" data-node-id="208:11167" style={{ fontVariationSettings: '"wdth" 100' }}>
        模型信号评分
      </p>
      <div className="absolute h-0 left-[35px] top-[1369px] w-[305px]" data-node-id="208:11168">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine12} />
        </div>
      </div>
      <div className="maat-agent-title-card -translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[96px] left-1/2 rounded-[16px] top-[109px] w-[335px]" data-node-id="208:11169">
        <video className="maat-agent-title-video" aria-hidden="true" autoPlay loop muted playsInline preload="metadata">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-155.5px)] text-[#3096f7] text-[12px] text-center top-[225px] uppercase whitespace-nowrap" data-node-id="208:11170" style={{ fontVariationSettings: '"wdth" 100' }}>
        总览
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-89.5px)] text-[#c1c1c1] text-[12px] text-center top-[225px] uppercase whitespace-nowrap" data-node-id="208:11171" style={{ fontVariationSettings: '"wdth" 100' }}>
        智能分析
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-11.5px)] text-[#c1c1c1] text-[12px] text-center top-[225px] uppercase whitespace-nowrap" data-node-id="208:11172" style={{ fontVariationSettings: '"wdth" 100' }}>
        交易执行
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%+66.5px)] text-[#c1c1c1] text-[12px] text-center top-[225px] uppercase whitespace-nowrap" data-node-id="208:11173" style={{ fontVariationSettings: '"wdth" 100' }}>
        引擎监控
      </p>
      <div className="absolute h-0 left-[20px] top-[254px] w-[335px]" data-node-id="208:11174">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine28} />
        </div>
      </div>
      <div className="absolute bg-[#2967ff] h-[2px] left-[20px] top-[251px] w-[24px]" data-node-id="208:11175" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-152.5px)] text-[#3096f7] text-[12px] top-[1918px] uppercase whitespace-nowrap" data-node-id="208:11176" style={{ fontVariationSettings: '"wdth" 100' }}>
        当前持仓
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-84.5px)] text-[#c1c1c1] text-[12px] top-[1918px] uppercase whitespace-nowrap" data-node-id="208:11177" style={{ fontVariationSettings: '"wdth" 100' }}>
        候选市场
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-16.5px)] text-[#c1c1c1] text-[12px] top-[1918px] uppercase whitespace-nowrap" data-node-id="208:11178" style={{ fontVariationSettings: '"wdth" 100' }}>
        最近成交
      </p>
      <div className="absolute bg-[#2967ff] h-[2px] left-[35px] top-[1944px] w-[24px]" data-node-id="208:11179" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Condensed_Semibold'] font-[650] leading-[0] left-[35px] text-[0px] text-white top-[297px] tracking-[-0.2344px] whitespace-nowrap" data-node-id="208:11180" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="font-['SF_Pro:Semibold'] font-[590] leading-[16px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          My Agen
        </span>
        <span className="font-['SF_Pro:Semibold'] font-[590] leading-[16px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          t
        </span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[336px] uppercase whitespace-nowrap" data-node-id="208:11181" style={{ fontVariationSettings: '"wdth" 100' }}>
        资金 (余额 : 3,250.00 USDC)
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[406px] uppercase whitespace-nowrap" data-node-id="208:11182" style={{ fontVariationSettings: '"wdth" 100' }}>
        限额 20-1,000 USDC
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+27.5px)] text-[#c1c1c1] text-[10px] top-[406px] uppercase whitespace-nowrap" data-node-id="208:11183" style={{ fontVariationSettings: '"wdth" 100' }}>
        USDC
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+27.5px)] text-[#c1c1c1] text-[10px] top-[336px] uppercase whitespace-nowrap" data-node-id="208:11184" style={{ fontVariationSettings: '"wdth" 100' }}>
        本周期盈亏
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[549px] uppercase whitespace-nowrap" data-node-id="208:11185" style={{ fontVariationSettings: '"wdth" 100' }}>
        当前状态
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-102.5px)] text-[10px] text-white top-[549px] uppercase whitespace-nowrap" data-node-id="208:11186" style={{ fontVariationSettings: '"wdth" 100' }}>
        未激活
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+109.5px)] text-[10px] text-white top-[549px] uppercase whitespace-nowrap" data-node-id="208:11187" style={{ fontVariationSettings: '"wdth" 100' }}>
        8H / 周期
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[448px] uppercase whitespace-nowrap" data-node-id="208:11188" style={{ fontVariationSettings: '"wdth" 100' }}>
        账户当前权益
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[502px] uppercase whitespace-nowrap" data-node-id="208:11189" style={{ fontVariationSettings: '"wdth" 100' }}>
        USDC
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[35px] text-[20px] text-white top-[470px] whitespace-nowrap" data-node-id="208:11190" style={{ fontVariationSettings: '"wdth" 100' }}>
        998.74
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[35px] text-[20px] text-white top-[576px] whitespace-nowrap" data-node-id="228:15217" style={{ fontVariationSettings: '"wdth" 100' }}>
        00:00:00
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+27.5px)] text-[#c1c1c1] text-[10px] top-[448px] whitespace-nowrap" data-node-id="208:11191" style={{ fontVariationSettings: '"wdth" 100' }}>
        Token 余额
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+27.5px)] text-[#c1c1c1] text-[10px] top-[502px] uppercase whitespace-nowrap" data-node-id="208:11192" style={{ fontVariationSettings: '"wdth" 100' }}>
        MAAT
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[613px] uppercase whitespace-nowrap" data-node-id="208:11193" style={{ fontVariationSettings: '"wdth" 100' }}>
        已运行时间
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[654px] uppercase whitespace-nowrap" data-node-id="228:15323" style={{ fontVariationSettings: '"wdth" 100' }}>
        00:00:00
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-62.5px)] text-[#c1c1c1] text-[10px] top-[654px] uppercase whitespace-nowrap" data-node-id="228:15325" style={{ fontVariationSettings: '"wdth" 100' }}>
        0.0%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+108.5px)] text-[#c1c1c1] text-[10px] top-[654px] uppercase whitespace-nowrap" data-node-id="228:15327" style={{ fontVariationSettings: '"wdth" 100' }}>
        08:00:00
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-134.5px)] text-[#c1c1c1] text-[10px] top-[681px] uppercase whitespace-nowrap" data-node-id="228:15219" style={{ fontVariationSettings: '"wdth" 100' }}>
        输入资金后开始运行
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[0] left-[215px] text-[0px] text-white top-[470px] whitespace-nowrap" data-node-id="208:11194" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[22px] text-[20px]">{`125 `}</span>
        <span className="font-['SF_Pro:Medium'] font-[510] leading-[12px] text-[#c1c1c1] text-[10px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          / 1,000
        </span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[215px] text-[#34b15a] text-[20px] top-[366px] whitespace-nowrap" data-node-id="208:11195" style={{ fontVariationSettings: '"wdth" 100' }}>
        +0.34
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[280px] text-[#34b15a] text-[10px] top-[373px] whitespace-nowrap" data-node-id="208:11196" style={{ fontVariationSettings: '"wdth" 100' }}>
        +0.034%
      </p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[194px] left-1/2 rounded-[16px] top-[902px] w-[335px]" data-node-id="208:11197" />
      <div className="absolute h-0 left-[84px] top-[973px] w-[206px]" data-node-id="208:11198">
        <div className="absolute inset-[-0.5px_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine36} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1040px] whitespace-nowrap" data-node-id="208:11199" style={{ fontVariationSettings: '"wdth" 100' }}>
        数据延迟(ms)
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-36.5px)] text-[#c1c1c1] text-[10px] top-[1040px] uppercase whitespace-nowrap" data-node-id="208:11200" style={{ fontVariationSettings: '"wdth" 100' }}>
        待处理订单(笔)
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+84.5px)] text-[#c1c1c1] text-[10px] top-[1040px] uppercase whitespace-nowrap" data-node-id="208:11201" style={{ fontVariationSettings: '"wdth" 100' }}>
        风控拦截(24H)
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[35px] text-[14px] text-white top-[1060px] whitespace-nowrap" data-node-id="208:11202" style={{ fontVariationSettings: '"wdth" 100' }}>
        127
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[151px] text-[14px] text-white top-[1060px] whitespace-nowrap" data-node-id="208:11203" style={{ fontVariationSettings: '"wdth" 100' }}>
        73
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[321px] text-[14px] text-white top-[1060px] whitespace-nowrap" data-node-id="208:11204" style={{ fontVariationSettings: '"wdth" 100' }}>
        30
      </p>
      <div className="absolute h-0 left-[35px] top-[1025px] w-[305px]" data-node-id="208:11205">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine12} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[1165px] w-[305px]" data-node-id="208:11206">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine12} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[14px] left-[35px] text-[14px] text-white top-[922px] tracking-[-0.2344px] whitespace-nowrap" data-node-id="208:11207" style={{ fontVariationSettings: '"wdth" 100' }}>
        Engine Status
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[14px] left-[35px] text-[14px] text-white top-[1136px] tracking-[-0.2344px] whitespace-nowrap" data-node-id="208:11208" style={{ fontVariationSettings: '"wdth" 100' }}>
        AI Signals
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-140.5px)] text-[#c1c1c1] text-[10px] top-[998px] uppercase whitespace-nowrap" data-node-id="208:11209" style={{ fontVariationSettings: '"wdth" 100' }}>
        市场扫描
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-60.5px)] text-[#c1c1c1] text-[10px] top-[998px] uppercase whitespace-nowrap" data-node-id="208:11210" style={{ fontVariationSettings: '"wdth" 100' }}>
        信号识别
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+19.5px)] text-[#c1c1c1] text-[10px] top-[998px] uppercase whitespace-nowrap" data-node-id="208:11211" style={{ fontVariationSettings: '"wdth" 100' }}>
        风控校验
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+99.5px)] text-[#c1c1c1] text-[10px] top-[998px] uppercase whitespace-nowrap" data-node-id="208:11212" style={{ fontVariationSettings: '"wdth" 100' }}>
        订单执行
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[112px] text-[#ff406b] text-[10px] top-[478px] whitespace-nowrap" data-node-id="208:11213" style={{ fontVariationSettings: '"wdth" 100' }}>
        -0.126%
      </p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[551px] left-1/2 rounded-[16px] top-[1802px] w-[335px]" data-node-id="208:11214" />
      <div className="absolute h-[44px] left-[35px] rounded-[30px] top-[2262px] w-[305px]" data-node-id="208:11215" style={{ backgroundImage: "linear-gradient(62.335630528755885deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[16px] left-[129px] text-[14px] text-white top-[2276px] whitespace-nowrap" data-node-id="208:11216" style={{ fontVariationSettings: '"wdth" 100' }}>
        探索流动性市场
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[14px] left-[35px] text-[14px] text-white top-[1822px] tracking-[-0.2344px] whitespace-nowrap" data-node-id="208:11217" style={{ fontVariationSettings: '"wdth" 100' }}>
        Market Monitor
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1856px] uppercase whitespace-nowrap" data-node-id="208:11218" style={{ fontVariationSettings: '"wdth" 100' }}>
        监测市场(个)
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-23.5px)] text-[#c1c1c1] text-[10px] top-[1856px] uppercase whitespace-nowrap" data-node-id="208:11219" style={{ fontVariationSettings: '"wdth" 100' }}>
        持仓市场(个)
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[35px] text-[20px] text-white top-[1876px] whitespace-nowrap" data-node-id="208:11220" style={{ fontVariationSettings: '"wdth" 100' }}>
        21,009
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[164px] text-[20px] text-white top-[1876px] whitespace-nowrap" data-node-id="208:11221" style={{ fontVariationSettings: '"wdth" 100' }}>
        2,181
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+84.5px)] text-[#c1c1c1] text-[10px] top-[1856px] uppercase whitespace-nowrap" data-node-id="208:11222" style={{ fontVariationSettings: '"wdth" 100' }}>
        待执行信号(条)
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[313px] text-[20px] text-white top-[1876px] whitespace-nowrap" data-node-id="208:11223" style={{ fontVariationSettings: '"wdth" 100' }}>
        29
      </p>
      <div className="absolute bg-[#2a2a2c] h-[4px] left-[35px] rounded-[10px] top-[640px] w-[305px]" data-node-id="208:11224" />
      <div className="absolute bg-gradient-to-r from-[#2967ff] h-[4px] left-[35px] rounded-[10px] to-[#2f96f7] top-[640px] w-[171px]" data-node-id="208:11225" />
      <div className="absolute bg-[#2a2a2c] h-[4px] left-[183px] rounded-[10px] top-[1346px] w-[104px]" data-node-id="208:11226" />
      <div className="absolute bg-gradient-to-r from-[#2967ff] h-[4px] left-[183px] rounded-[10px] to-[#2f96f7] top-[1346px] w-[58px]" data-node-id="208:11227" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[18px] left-[84px] text-[12px] text-white top-[1384px] w-[256px]" data-node-id="208:11228" style={{ fontVariationSettings: '"wdth" 100' }}>
        Will David Lisnard win the 2027 French presidential election?
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-103.5px)] text-[#c1c1c1] text-[10px] top-[1428px] uppercase whitespace-nowrap" data-node-id="208:11229" style={{ fontVariationSettings: '"wdth" 100' }}>
        信号生成时间 11-09 00:35 UTC+8
      </p>
      <div className="absolute bg-[rgba(53,177,90,0.2)] h-[22px] left-[247px] rounded-[20px] top-[1455px] w-[39px]" data-node-id="208:11230" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+69.5px)] text-[#35b15a] text-[10px] top-[1460px] uppercase whitespace-nowrap" data-node-id="208:11231" style={{ fontVariationSettings: '"wdth" 100' }}>
        YEs
      </p>
      <div className="absolute bg-[rgba(255,64,107,0.2)] h-[22px] left-[301px] rounded-[20px] top-[1455px] w-[39px]" data-node-id="208:11232" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+125.5px)] text-[#ff406b] text-[10px] top-[1460px] uppercase whitespace-nowrap" data-node-id="208:11233" style={{ fontVariationSettings: '"wdth" 100' }}>
        NO
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1460px] uppercase whitespace-nowrap" data-node-id="208:11234" style={{ fontVariationSettings: '"wdth" 100' }}>
        交易方向
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1492px] uppercase whitespace-nowrap" data-node-id="208:11235" style={{ fontVariationSettings: '"wdth" 100' }}>
        隐含概率
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+59.5px)] text-[10px] text-white top-[1492px] uppercase whitespace-nowrap" data-node-id="208:11236" style={{ fontVariationSettings: '"wdth" 100' }}>
        5.2%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+121.5px)] text-[10px] text-white top-[1492px] uppercase whitespace-nowrap" data-node-id="208:11237" style={{ fontVariationSettings: '"wdth" 100' }}>
        94.8%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1519px] uppercase whitespace-nowrap" data-node-id="208:11238" style={{ fontVariationSettings: '"wdth" 100' }}>
        模型估计概率
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+59.5px)] text-[10px] text-white top-[1519px] uppercase whitespace-nowrap" data-node-id="208:11239" style={{ fontVariationSettings: '"wdth" 100' }}>
        1.2%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+121.5px)] text-[10px] text-white top-[1519px] uppercase whitespace-nowrap" data-node-id="208:11240" style={{ fontVariationSettings: '"wdth" 100' }}>
        98.8%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[0] left-[calc(50%+114.5px)] text-[10px] text-white top-[1546px] uppercase whitespace-nowrap" data-node-id="208:11241" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[12px]">{`74 / `}</span>
        <span className="leading-[12px] text-[#c1c1c1]">100</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1546px] uppercase whitespace-nowrap" data-node-id="208:11242" style={{ fontVariationSettings: '"wdth" 100' }}>
        模型信号评分
      </p>
      <div className="absolute bg-[#2a2a2c] h-[4px] left-[183px] rounded-[10px] top-[1550px] w-[104px]" data-node-id="208:11243" />
      <div className="absolute bg-gradient-to-r from-[#2967ff] h-[4px] left-[183px] rounded-[10px] to-[#2f96f7] top-[1550px] w-[58px]" data-node-id="208:11244" />
      <div className="absolute h-0 left-[35px] top-[1573px] w-[305px]" data-node-id="208:11245">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine12} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[2051px] w-[305px]" data-node-id="208:11246">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine12} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[18px] left-[84px] text-[12px] text-white top-[1588px] w-[256px]" data-node-id="208:11247" style={{ fontVariationSettings: '"wdth" 100' }}>
        Will the Fed increase interest rates by 25 bps after the December 2026 meeting?
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[18px] left-[35px] text-[12px] text-white top-[1963px] w-[251px]" data-node-id="208:11248" style={{ fontVariationSettings: '"wdth" 100' }}>
        Will the US confirm that aliens exist before 2027?
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[18px] left-[35px] text-[12px] text-white top-[2066px] w-[251px]" data-node-id="208:11249" style={{ fontVariationSettings: '"wdth" 100' }}>
        Will David Lisnard win the 2027 French presidential election?
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-103.5px)] text-[#c1c1c1] text-[10px] top-[1632px] uppercase whitespace-nowrap" data-node-id="208:11250" style={{ fontVariationSettings: '"wdth" 100' }}>
        信号生成时间 11-09 00:35 UTC+8
      </p>
      <div className="absolute bg-[rgba(53,177,90,0.2)] h-[22px] left-[247px] rounded-[20px] top-[1659px] w-[39px]" data-node-id="208:11251" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+69.5px)] text-[#35b15a] text-[10px] top-[1664px] uppercase whitespace-nowrap" data-node-id="208:11252" style={{ fontVariationSettings: '"wdth" 100' }}>
        YEs
      </p>
      <div className="absolute bg-[rgba(53,177,90,0.2)] h-[22px] left-[301px] rounded-[20px] top-[1963px] w-[39px]" data-node-id="208:11253" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+123.5px)] text-[#35b15a] text-[10px] top-[1968px] uppercase whitespace-nowrap" data-node-id="208:11254" style={{ fontVariationSettings: '"wdth" 100' }}>
        YEs
      </p>
      <div className="absolute bg-[rgba(53,177,90,0.2)] h-[22px] left-[301px] rounded-[20px] top-[2169px] w-[39px]" data-node-id="208:11255" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+123.5px)] text-[#35b15a] text-[10px] top-[2174px] uppercase whitespace-nowrap" data-node-id="208:11256" style={{ fontVariationSettings: '"wdth" 100' }}>
        YEs
      </p>
      <div className="absolute bg-[rgba(255,64,107,0.2)] h-[22px] left-[301px] rounded-[20px] top-[1659px] w-[39px]" data-node-id="208:11257" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+125.5px)] text-[#ff406b] text-[10px] top-[1664px] uppercase whitespace-nowrap" data-node-id="208:11258" style={{ fontVariationSettings: '"wdth" 100' }}>
        NO
      </p>
      <div className="absolute bg-[rgba(255,64,107,0.2)] h-[22px] left-[301px] rounded-[20px] top-[2066px] w-[39px]" data-node-id="208:11259" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+125.5px)] text-[#ff406b] text-[10px] top-[2071px] uppercase whitespace-nowrap" data-node-id="208:11260" style={{ fontVariationSettings: '"wdth" 100' }}>
        NO
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1664px] uppercase whitespace-nowrap" data-node-id="208:11261" style={{ fontVariationSettings: '"wdth" 100' }}>
        交易方向
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1696px] uppercase whitespace-nowrap" data-node-id="208:11262" style={{ fontVariationSettings: '"wdth" 100' }}>
        隐含概率
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+59.5px)] text-[10px] text-white top-[1696px] uppercase whitespace-nowrap" data-node-id="208:11263" style={{ fontVariationSettings: '"wdth" 100' }}>
        5.2%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+121.5px)] text-[10px] text-white top-[1696px] uppercase whitespace-nowrap" data-node-id="208:11264" style={{ fontVariationSettings: '"wdth" 100' }}>
        94.8%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1723px] uppercase whitespace-nowrap" data-node-id="208:11265" style={{ fontVariationSettings: '"wdth" 100' }}>
        模型估计概率
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+59.5px)] text-[10px] text-white top-[1723px] uppercase whitespace-nowrap" data-node-id="208:11266" style={{ fontVariationSettings: '"wdth" 100' }}>
        1.2%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+121.5px)] text-[10px] text-white top-[1723px] uppercase whitespace-nowrap" data-node-id="208:11267" style={{ fontVariationSettings: '"wdth" 100' }}>
        98.8%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[0] left-[calc(50%+114.5px)] text-[10px] text-white top-[1750px] uppercase whitespace-nowrap" data-node-id="208:11268" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[12px]">{`74 / `}</span>
        <span className="leading-[12px] text-[#c1c1c1]">100</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1750px] uppercase whitespace-nowrap" data-node-id="208:11269" style={{ fontVariationSettings: '"wdth" 100' }}>
        模型信号评分
      </p>
      <div className="absolute contents left-[35px] top-[1588px]" data-node-id="208:11270" data-name="Mask group">
        <div className="absolute h-[34px] left-[26px] [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-position:9px_0px] [mask-size:34px_34px] top-[1588px] w-[53px]" data-node-id="208:11272" style={{ maskImage: `url("${img1}")` }} data-name="美联储是怎样一个机构- 美中文化交流促进会 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img2} />
        </div>
      </div>
      <div className="absolute bg-[#2a2a2c] h-[4px] left-[183px] rounded-[10px] top-[1754px] w-[104px]" data-node-id="208:11273" />
      <div className="absolute bg-gradient-to-r from-[#2967ff] h-[4px] left-[183px] rounded-[10px] to-[#2f96f7] top-[1754px] w-[58px]" data-node-id="208:11274" />
      <div className="absolute h-[44px] left-[35px] rounded-[30px] top-[708px] w-[145px]" data-node-id="208:11275" style={{ backgroundImage: "linear-gradient(76.00589440319598deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
      <div className="absolute border border-[#2a2a2c] border-solid h-[44px] left-[195px] rounded-[30px] top-[708px] w-[145px]" data-node-id="208:11276" />
      <div className="absolute bg-[#232323] h-[38px] left-[35px] rounded-[8px] top-[358px] w-[145px]" data-node-id="208:11277" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[75px] text-[12px] text-white top-[723px] uppercase whitespace-nowrap" data-node-id="208:11278" style={{ fontVariationSettings: '"wdth" 100' }}>
        开始运行
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[247px] text-[12px] text-white top-[723px] uppercase whitespace-nowrap" data-node-id="208:11279" style={{ fontVariationSettings: '"wdth" 100' }}>
        提出
      </p>
      <div className="absolute left-[20px] top-[792px] w-[335px] z-[2]">
        <AgentMetricCarousel />
      </div>
      <div className="-translate-x-1/2 absolute bg-[rgba(42,108,254,0.2)] border-[#2967ff] border-[0.6px] border-solid left-[calc(50%-120.5px)] rounded-[6px] size-[34px] top-[956px]" data-node-id="208:11290" />
      <div className="-translate-x-1/2 absolute bg-[#141414] left-[calc(50%-40.5px)] rounded-[6px] size-[34px] top-[956px]" data-node-id="208:11291" />
      <div className="-translate-x-1/2 absolute bg-[#141414] left-[calc(50%+39.5px)] rounded-[6px] size-[34px] top-[956px]" data-node-id="208:11292" />
      <div className="-translate-x-1/2 absolute bg-[#141414] left-[calc(50%+119.5px)] rounded-[6px] size-[34px] top-[956px]" data-node-id="208:11293" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[35px] text-[16px] text-white top-[2014px] whitespace-nowrap" data-node-id="208:11294" style={{ fontVariationSettings: '"wdth" 100' }}>
        0.3%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[86px] text-[#34b15a] text-[10px] top-[2021px] whitespace-nowrap" data-node-id="208:11295" style={{ fontVariationSettings: '"wdth" 100' }}>
        +0.1%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[35px] text-[16px] text-white top-[2117px] whitespace-nowrap" data-node-id="208:11296" style={{ fontVariationSettings: '"wdth" 100' }}>
        84.7%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[97px] text-[#ff406b] text-[10px] top-[2124px] whitespace-nowrap" data-node-id="208:11297" style={{ fontVariationSettings: '"wdth" 100' }}>
        -0.2%
      </p>
      <div className="absolute h-0 left-[35px] top-[2154px] w-[305px]" data-node-id="208:11298">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine12} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[2242px] w-[305px]" data-node-id="208:11299">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine12} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[35px] text-[12px] text-white top-[2169px] w-[251px]" data-node-id="208:11300" style={{ fontVariationSettings: '"wdth" 100' }}>
        Will the Iranian regime fall before 2027?
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[22px] left-[35px] text-[16px] text-white top-[2206px] whitespace-nowrap" data-node-id="208:11301" style={{ fontVariationSettings: '"wdth" 100' }}>
        84.7%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[93px] text-[#ff406b] text-[10px] top-[2213px] whitespace-nowrap" data-node-id="208:11302" style={{ fontVariationSettings: '"wdth" 100' }}>
        -0.2%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[calc(50%-147.5px)] text-[20px] text-white top-[145px] tracking-[1px] whitespace-nowrap" data-node-id="208:11303" style={{ fontVariationSettings: '"wdth" 100' }}>
        Agent Trading
      </p>
      <div className="absolute bg-[rgba(53,177,90,0.2)] h-[22px] left-[255px] rounded-[20px] top-[146px] w-[80px]" data-node-id="208:11304" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[270px] text-[#34b15a] text-[10px] top-[151px] whitespace-nowrap" data-node-id="208:11305" style={{ fontVariationSettings: '"wdth" 100' }}>
        引擎运行中
      </p>
      <div className="absolute contents left-[35px] top-[1181px]" data-node-id="208:11306" data-name="Mask group">
        <div className="absolute h-[43px] left-[35px] [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-size:34px_34px] top-[1181px] w-[34px]" data-node-id="208:11308" style={{ maskImage: `url("${img1}")` }} data-name="当地时间11月3日,美国2026年中期选举举行,佐治亚州民主党参议员乔恩 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img11320261} />
        </div>
      </div>
      <div className="absolute contents left-[35px] top-[1384px]" data-node-id="208:11309" data-name="Mask group">
        <div className="absolute h-[34px] left-[27px] [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-position:8px_0px] [mask-size:34px_34px] top-[1384px] w-[51px]" data-node-id="208:11311" style={{ maskImage: `url("${img1}")` }} data-name="Mayor of Cannes David Lisnard delivers a speech during a ceremony to r 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMayorOfCannesDavidLisnardDeliversASpeechDuringACeremonyToR1} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[35px] text-[#2a73fd] text-[10px] top-[1923px] whitespace-nowrap" data-node-id="208:11312" style={{ fontVariationSettings: '"wdth" 100' }}>
        当前持仓
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[105px] text-[#c1c1c1] text-[10px] top-[1923px] whitespace-nowrap" data-node-id="208:11313" style={{ fontVariationSettings: '"wdth" 100' }}>
        候选市场
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[175px] text-[#c1c1c1] text-[10px] top-[1923px] whitespace-nowrap" data-node-id="208:11314" style={{ fontVariationSettings: '"wdth" 100' }}>
        最近成交
      </p>
      <div className="absolute h-0 left-[35px] top-[1948px] w-[305px]" data-node-id="208:11315">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute bg-[#2967ff] h-[2px] left-[35px] top-[1945px] w-[40px]" data-node-id="208:11316" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[2321px] uppercase whitespace-nowrap" data-node-id="208:11320" style={{ fontVariationSettings: '"wdth" 100' }}>
        数据来源
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-20.5px)] text-[#c1c1c1] text-[10px] top-[2321px] whitespace-nowrap" data-node-id="208:11321" style={{ fontVariationSettings: '"wdth" 100' }}>
        Polymarket · 11-03 00:53 UTC+8
      </p>
      <div className="absolute contents left-[20px] top-[61px]" data-node-id="208:11322">
        <div className="absolute left-[20px] rounded-[8px] size-[30px] top-[61px]" data-node-id="208:11323" style={{ backgroundImage: "linear-gradient(45deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
        <div className="absolute left-[26.18px] size-[17.647px] top-[67.18px]" data-node-id="208:11324" data-name="image 67">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage67} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[18px] left-[60px] text-[16px] text-white top-[67px] uppercase whitespace-nowrap" data-node-id="208:11325" style={{ fontVariationSettings: '"wdth" 100' }}>
        MAAT
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[50px] text-[20px] text-white top-[366px] whitespace-nowrap" data-node-id="208:11326" style={{ fontVariationSettings: '"wdth" 100' }}>
        1,000
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[145px] text-[#2a73fd] text-[10px] top-[371px] whitespace-nowrap" data-node-id="208:11327" style={{ fontVariationSettings: '"wdth" 100' }}>
        Max
      </p>
      <div className="absolute h-[24px] left-[55px] top-[961px] w-[23px]" data-node-id="208:11382" data-name="image 73">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage73} />
      </div>
      <div className="absolute h-[24px] left-[135px] top-[961px] w-[25px]" data-node-id="208:11383" data-name="image 74">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage74} />
      </div>
      <div className="absolute left-[215px] size-[24px] top-[961px]" data-name="Risk check illustration">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRiskShield} />
      </div>
      <div className="absolute left-[295px] size-[24px] top-[961px]" data-node-id="208:11384" data-name="image 76">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage76} />
      </div>
      <div className="absolute left-[119px] size-[6px] top-[302px]" data-node-id="228:15142">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse71} />
      </div>
      <div className="absolute h-[18px] left-[77px] top-[2401px] w-[22px]" data-node-id="228:15329">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
      </div>
      <div className="absolute inset-[97.17%_40%_2.1%_55.73%]" data-node-id="228:15339">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5} />
      </div>
      <div className="absolute h-[18px] left-[168px] top-[2401px] w-[12px]" data-node-id="228:15343" data-name="image 20">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage20} />
      </div>
      <div className="absolute contents left-[36px] top-[2401px]" data-node-id="228:15344">
        <div className="absolute bg-[#c1c1c1] left-[36px] rounded-[2px] size-[8.308px] top-[2401px]" data-node-id="228:15345" />
        <div className="absolute bg-[#c1c1c1] left-[45.69px] rounded-[2px] size-[8.308px] top-[2401px]" data-node-id="228:15346" />
        <div className="absolute bg-[#c1c1c1] left-[36px] rounded-[2px] size-[8.308px] top-[2410.69px]" data-node-id="228:15347" />
        <div className="absolute bg-[#c1c1c1] left-[45.69px] rounded-[2px] size-[8.308px] top-[2410.69px]" data-node-id="228:15348" />
      </div>
      <div className="absolute inset-[97.17%_62.4%_2.1%_32.27%]" data-node-id="228:15349">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
      </div>
      <div className="absolute h-[18px] left-[258px] right-[113px] top-[2401px]" data-node-id="228:15353">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup8} />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[200/177.78671264648438] left-[84.8%] right-[9.87%] top-[calc(50%+1174.5px)]" data-node-id="228:15357" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute h-[20px] left-[256px] top-[2118px] w-[84px]" data-node-id="228:15358">
        <div className="absolute inset-[-6.49%_0_-6.05%_0]">
          <img alt="" className="block max-w-none size-full" src={imgVector7} />
        </div>
      </div>
      <div className="absolute h-[20px] left-[256px] top-[2015px] w-[84px]" data-node-id="228:15359">
        <div className="absolute inset-[-5.24%_-0.43%_-5.2%_-0.66%]">
          <img alt="" className="block max-w-none size-full" src={imgVector8} />
        </div>
      </div>
      <div className="absolute h-[20px] left-[256px] top-[2207px] w-[84px]" data-node-id="228:15360">
        <div className="absolute inset-[-3.75%_-0.21%_-3.75%_0]">
          <img alt="" className="block max-w-none size-full" src={imgVector9} />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[186.3157958984375/186.3157958984375] left-[54.67%] right-[41.07%] top-[calc(50%-1161.5px)]" data-node-id="228:15361" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
      </div>
      <div className="absolute left-[236px] size-[16px] top-[66px]" data-node-id="228:15362">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup45} />
      </div>
      <div className="absolute inset-[92.15%_34.4%_7.28%_61.87%]" data-node-id="228:15367">
        <div className="absolute inset-[-0.36%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup56} />
        </div>
      </div>
      <div className="absolute contents inset-[32.9%_10.93%_66.61%_85.87%]" data-node-id="228:15370" data-name="页面-2">
        <div className="absolute contents inset-[32.9%_10.93%_66.61%_85.87%]" data-node-id="228:15371" data-name="个人中心">
          <div className="absolute inset-[32.9%_10.93%_66.61%_85.87%]" data-node-id="228:15372" data-name="编组-16">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={img16} />
          </div>
        </div>
      </div>
      <div className="absolute inset-[32.9%_57.6%_66.61%_39.2%]" data-node-id="228:15376">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup46} />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[166.6666717529297/166.66673278808594] left-[34.13%] right-[62.67%] top-[calc(50%-505.5px)]" data-node-id="228:15379" data-name="Vector">
        <div className="absolute inset-[-0.42%]">
          <img alt="" className="block max-w-none size-full" src={imgVector2} />
        </div>
      </div>
      <div className="absolute inset-[29.34%_23.2%_70.25%_73.6%]" data-node-id="228:15380">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup57} />
      </div>
      <div className="absolute inset-[93.97%_9.33%_5.63%_88%]" data-node-id="228:15383">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup11} />
      </div>
      <div className="absolute inset-[12.14%_33.6%_87.45%_63.73%]" data-node-id="228:15386">
        <div className="absolute inset-[-1%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup82} />
        </div>
      </div>
      <div className="absolute inset-[27.56%_87.47%_71.95%_9.33%]" data-node-id="228:15389">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup84} />
      </div>
      <div className="absolute h-[44px] left-0 top-0 w-[375px]" data-node-id="208:11385" data-name="Status Bar">
        <div className="absolute h-[16px] right-[14px] top-[15px] w-[68px]" data-node-id="I208:11385;0:49" data-name="Connections">
          <div className="absolute h-[12px] right-0 top-[2px] w-[25px]" data-node-id="I208:11385;0:51" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[6.25%_39.71%_0_29.41%]" data-node-id="I208:11385;0:55" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute h-[12px] right-[50px] top-[2px] w-[18px]" data-node-id="I208:11385;0:60" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
        </div>
        <div className="absolute h-[23px] left-[21px] top-[8px] w-[56px]" data-node-id="I208:11385;0:66" data-name="Time">
          <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] leading-[normal] left-[0.33px] not-italic right-[1.67px] text-[15px] text-center text-white top-[calc(50%-5.5px)] tracking-[-0.3333px]" data-node-id="I208:11385;0:67">
            9:27
          </p>
        </div>
      </div>
    </div>
  );
}
