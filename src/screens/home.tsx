import imgAbstractBackgroundBluePalette2 from "../../public/assets/figma/f6a4c.png";
import imgExecC676EbceB2664D67A47FAd0Eb056068A1 from "../../public/assets/figma/7fd49.png";
import imgImage49 from "../../public/assets/figma/d26b2.png";
import imgGoogleSearch2 from "../../public/assets/figma/a6ddc.png";
import imgPolygonLogoSvgRealCompanyAlphabetLetterPLogo1 from "../../public/assets/figma/cac17.png";
import imgImage45 from "../../public/assets/figma/749f4.png";
import imgImage44 from "../../public/assets/figma/119c0.png";
import imgImage46 from "../../public/assets/figma/ff5bb.png";
import imgImage50 from "../../public/assets/figma/181ea.png";
import imgImage51 from "../../public/assets/figma/35d51.png";
import imgImage41 from "../../public/assets/figma/7a76e.png";
import imgImage47 from "../../public/assets/figma/58f42.png";
import imgImage48 from "../../public/assets/figma/21a3d.png";
import imgImage67 from "../../public/assets/figma/ac73d.png";
import imgImage20 from "../../public/assets/figma/c2411.png";
import imgRectangle157 from "../../public/assets/figma/709ab.svg";
import imgAbstractBackgroundBluePalette1 from "../../public/assets/figma/50699.svg";
import imgGroup51 from "../../public/assets/figma/61e66.svg";
import imgLine27 from "../../public/assets/figma/cfc67.svg";
import imgLine9 from "../../public/assets/figma/84433.svg";
import imgGoogleSearch1 from "../../public/assets/figma/7583f.svg";
import imgEllipse14 from "../../public/assets/figma/3337a.svg";
import imgEllipse51 from "../../public/assets/figma/19557.svg";
import imgEllipse52 from "../../public/assets/figma/19d1f.svg";
import imgLine2 from "../../public/assets/figma/14d5e.svg";
import imgLine3 from "../../public/assets/figma/ab452.svg";
import imgLine13 from "../../public/assets/figma/f6f13.svg";
import imgLine24 from "../../public/assets/figma/3a972.svg";
import imgLine25 from "../../public/assets/figma/137a7.svg";
import imgRectangle131 from "../../public/assets/figma/eb1db.svg";
import imgRectangle139 from "../../public/assets/figma/04fea.svg";
import imgRectangle140 from "../../public/assets/figma/4d073.svg";
import imgRectangle141 from "../../public/assets/figma/0e57d.svg";
import imgRectangle142 from "../../public/assets/figma/a3910.svg";
import imgRectangle132 from "../../public/assets/figma/0bc4b.svg";
import imgRectangle133 from "../../public/assets/figma/5a62f.svg";
import imgRectangle134 from "../../public/assets/figma/43d9c.svg";
import imgRectangle135 from "../../public/assets/figma/37f5b.svg";
import imgRectangle136 from "../../public/assets/figma/2db64.svg";
import imgRectangle137 from "../../public/assets/figma/12ef1.svg";
import imgRectangle138 from "../../public/assets/figma/3b3ee.svg";
import imgRectangle143 from "../../public/assets/figma/0d04b.svg";
import imgLine26 from "../../public/assets/figma/7d80a.svg";
import imgVector5 from "../../public/assets/figma/88e92.svg";
import imgVector6 from "../../public/assets/figma/7be7a.svg";
import imgGroup15 from "../../public/assets/figma/5a2ec.svg";
import imgVector from "../../public/assets/figma/58267.svg";
import imgFrame from "../../public/assets/figma/10357.svg";
import imgFrame1 from "../../public/assets/figma/b3d94.svg";
import imgVector1 from "../../public/assets/figma/a4970.svg";
import imgVector2 from "../../public/assets/figma/a48ed.svg";
import imgVector3 from "../../public/assets/figma/fc06f.svg";
import imgVector4 from "../../public/assets/figma/55918.svg";
import imgVector7 from "../../public/assets/figma/54374.svg";
import imgFrame2 from "../../public/assets/figma/2b32b.svg";
import imgFrame3 from "../../public/assets/figma/c8e32.svg";
import imgVector8 from "../../public/assets/figma/67be3.svg";
import imgVector9 from "../../public/assets/figma/f859d.svg";
import imgGroup4 from "../../public/assets/figma/5876c.svg";
import imgGroup5 from "../../public/assets/figma/81acd.svg";
import imgGroup7 from "../../public/assets/figma/157ae.svg";
import imgGroup8 from "../../public/assets/figma/51334.svg";
import imgGroup16 from "../../public/assets/figma/49144.svg";
import imgGroup17 from "../../public/assets/figma/08ea6.svg";
import imgGroup28 from "../../public/assets/figma/c9aa3.svg";
import imgVector10 from "../../public/assets/figma/b7ee5.svg";
import imgGroup27 from "../../public/assets/figma/44cec.svg";
import imgVector11 from "../../public/assets/figma/73cef.svg";
import img16 from "../../public/assets/figma/deddb.svg";
import imgGroup13 from "../../public/assets/figma/5ced0.svg";
import imgGroup1 from "../../public/assets/figma/b0335.svg";
import imgGroup11 from "../../public/assets/figma/d25ac.svg";
import imgGroup36 from "../../public/assets/figma/3fead.svg";
import imgVector12 from "../../public/assets/figma/0f6ae.svg";
import imgVector13 from "../../public/assets/figma/9ac3f.svg";
import imgGroup45 from "../../public/assets/figma/2916d.svg";
import imgVector14 from "../../public/assets/figma/e86e0.svg";
import imgBattery from "../../public/assets/figma/3d361.svg";
import imgWifi from "../../public/assets/figma/52928.svg";
import imgCellularConnection from "../../public/assets/figma/fd94c.svg";
import { useRef, useState } from "react";
import { motion } from "motion/react";

function OverviewCarousel() {
  const trackRef = useRef(null);
  const [activePage, setActivePage] = useState(0);
  const scrollToPage = (page) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: page === 0 ? 0 : track.scrollWidth - track.clientWidth, behavior: "smooth" });
  };
  const updatePage = (event) => {
    const track = event.currentTarget;
    setActivePage(track.scrollLeft >= (track.scrollWidth - track.clientWidth) / 2 ? 1 : 0);
  };

  return <>
    <div ref={trackRef} className="maat-overview-track" onScroll={updatePage} role="region" tabIndex={0} aria-label="资产与服务概览，可左右滑动">
      <div className="maat-overview-card maat-overview-metric">
        <span className="maat-overview-label">平台管理资产</span>
        <strong>2.33M</strong>
        <span className="maat-overview-unit">USDC</span>
        <span className="maat-overview-icon"><img alt="" src={imgEllipse51} /><svg className="maat-overview-token-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7" /><path d="m12 7.7 3.8 4.3-3.8 4.3-3.8-4.3L12 7.7Z" /></svg></span>
      </div>
      <div className="maat-overview-card maat-overview-metric">
        <span className="maat-overview-label">累计交易额</span>
        <strong>43.7M</strong>
        <span className="maat-overview-unit">USDC</span>
        <span className="maat-overview-icon"><img alt="" src={imgEllipse52} /><svg className="maat-overview-liquidity-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" /><path d="M6.5 8.5h11l1.7 8a2.5 2.5 0 0 1-2.4 3H7.2a2.5 2.5 0 0 1-2.4-3l1.7-8Z" /><path d="m12 11 2.2 2.2-2.2 2.2-2.2-2.2L12 11Z" /></svg></span>
      </div>
      <div className="maat-overview-card maat-overview-service" data-node-id="maat-overview-agent" data-maat-route="agent">
        <span className="maat-overview-service-icon maat-agent-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 18v-5m5 5V7m5 11v-8m5 8V4" /></svg></span>
        <span className="maat-overview-service-title">Agent Trading</span>
        <span className="maat-overview-status"><i />运行中</span>
      </div>
      <div className="maat-overview-card maat-overview-service" data-node-id="maat-overview-liquidity" data-maat-route="liquidity">
        <span className="maat-overview-service-icon maat-liquidity-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3.5S5.5 11 5.5 15.2a6.5 6.5 0 1 0 13 0C18.5 11 12 3.5 12 3.5Z" /><path d="M9 16.5c.4 1.2 1.4 1.9 2.8 2" /></svg></span>
        <span className="maat-overview-service-title">Liquidity Marketplace</span>
        <span className="maat-overview-status"><i />运行中</span>
      </div>
    </div>
    <div className="maat-overview-pages" role="group" aria-label="卡片组">
      {[0, 1].map((page) => <button key={page} type="button" aria-label={`第 ${page + 1} 组卡片`} aria-pressed={activePage === page} data-active={activePage === page} onClick={() => scrollToPage(page)} />)}
    </div>
  </>;
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-node-id="208:10684" data-name="首页">
      <div className="absolute bg-black h-[4092px] left-0 top-0 w-[375px]" data-node-id="208:10685" />
      <div className="absolute contents left-0 top-[9.74px]" data-node-id="208:10686" data-name="Mask group">
        <div className="absolute bg-[rgba(0,0,0,0.6)] h-[386.76px] left-0 [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-position:0px_-79.286px] [mask-size:375px_4082.255px] top-[89.03px] w-[375px]" data-node-id="208:10688" style={{ maskImage: `url("${imgRectangle157}")` }} />
      </div>
      <div className="absolute left-[20px] top-[111px] h-[506px] w-[335px] overflow-hidden rounded-[16px]" data-node-id="208:10689" data-name="Mask group">
        <div className="absolute h-[506px] left-0 [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-size:335px_506px] top-0 w-[379px]" data-node-id="208:10691" style={{ maskImage: `url("${imgAbstractBackgroundBluePalette1}")` }} data-name="abstract-background-blue-palette 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAbstractBackgroundBluePalette2} />
        </div>
        <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.7)] h-[506px] left-1/2 [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-size:335px_506px] rounded-[16px] top-0 w-[335px]" data-node-id="208:10692" style={{ maskImage: `url("${imgAbstractBackgroundBluePalette1}")` }} />
        <div className="absolute flex h-[116.892px] items-center justify-center left-[242.95px] top-[35.55px] w-[115.098px] maat-hero-coin" data-node-id="208:10693">
          <div className="-rotate-20 flex-none">
            <div className="h-[92px] [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-position:-242.951px_-35.554px] [mask-size:335px_506px] relative w-[89px]" style={{ maskImage: `url("${imgAbstractBackgroundBluePalette1}")` }} data-name="exec-c676ebce-b266-4d67-a47f-ad0eb056068a 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgExecC676EbceB2664D67A47FAd0Eb056068A1} />
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute border border-[rgba(12,28,67,0.8)] border-solid h-[506px] left-1/2 [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-size:335px_506px] rounded-[16px] top-0 w-[335px]" data-node-id="208:10694" style={{ maskImage: `url("${imgAbstractBackgroundBluePalette1}")` }} />
      </div>
      <div className="absolute bg-[#00091f] border border-[#112557] border-solid h-[24px] left-[57px] rounded-[20px] top-[131px] w-[73px]" data-node-id="208:10695" />
      <div className="absolute bg-[#00091f] border border-[#112557] border-solid h-[24px] left-[140px] rounded-[20px] top-[131px] w-[58px]" data-node-id="208:10696" />
      <div className="absolute bg-[#00091f] border border-[#112557] border-solid h-[24px] left-[208px] rounded-[20px] top-[131px] w-[60px]" data-node-id="208:10697" />
      <p className="[word-break:break-word] absolute capitalize font-['SF_Pro:Regular'] font-normal leading-[12px] left-[67px] text-[10px] text-white top-[137px] whitespace-nowrap" data-node-id="208:10698" style={{ fontVariationSettings: '"wdth" 100' }}>
        polymarket
      </p>
      <p className="[word-break:break-word] absolute capitalize font-['SF_Pro:Regular'] font-normal leading-[12px] left-[150px] text-[10px] text-white top-[137px] whitespace-nowrap" data-node-id="208:10699" style={{ fontVariationSettings: '"wdth" 100' }}>
        Polygon
      </p>
      <p className="[word-break:break-word] absolute capitalize font-['SF_Pro:Regular'] font-normal leading-[12px] left-[218px] text-[10px] text-white top-[137px] whitespace-nowrap" data-node-id="208:10700" style={{ fontVariationSettings: '"wdth" 100' }}>
        AI Agent
      </p>
      <div className="absolute left-[35px] size-[12px] top-[137px]" data-node-id="208:10701">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup51} />
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[18px] left-[20px] text-[16px] text-white top-[747px] whitespace-nowrap" data-node-id="208:10704" style={{ fontVariationSettings: '"wdth" 100' }}>
        智能交易与流动性服务
      </p>
      <div className="maat-overview-carousel absolute left-[20px] top-[637px] w-[335px]">
        <OverviewCarousel />
      </div>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[90px] left-[calc(50%-87.5px)] rounded-[16px] top-[637px] w-[160px]" data-node-id="208:10705" />
      <div className="-translate-x-1/2 absolute bg-[#0a0a0a] border border-[#2c2c2d] border-solid h-[30px] left-[calc(50%+123.5px)] rounded-[16px] top-[61px] w-[88px]" data-node-id="208:10706" />
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[90px] left-[calc(50%+87.5px)] rounded-[16px] top-[637px] w-[160px]" data-node-id="208:10707" />
      <p className="[word-break:break-word] absolute capitalize font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[287px] text-[12px] text-white top-[69px] whitespace-nowrap" data-node-id="208:10708" style={{ fontVariationSettings: '"wdth" 100' }}>
        连接钱包
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[652px] uppercase whitespace-nowrap" data-node-id="208:10709" style={{ fontVariationSettings: '"wdth" 100' }}>
        平台管理资产
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[700px] uppercase whitespace-nowrap" data-node-id="208:10710" style={{ fontVariationSettings: '"wdth" 100' }}>
        USDC
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+22.5px)] text-[#c1c1c1] text-[10px] top-[652px] uppercase whitespace-nowrap" data-node-id="208:10711" style={{ fontVariationSettings: '"wdth" 100' }}>
        累计交易额
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[66.5px] text-[20px] text-center text-white top-[670px] whitespace-nowrap" data-node-id="208:10712" style={{ fontVariationSettings: '"wdth" 100' }}>
        2.33M
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+22.5px)] text-[#c1c1c1] text-[10px] top-[700px] uppercase whitespace-nowrap" data-node-id="208:10713" style={{ fontVariationSettings: '"wdth" 100' }}>
        USDC
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[241px] text-[20px] text-center text-white top-[670px] whitespace-nowrap" data-node-id="208:10714" style={{ fontVariationSettings: '"wdth" 100' }}>
        43.7M
      </p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[408px] left-1/2 rounded-[16px] top-[1867px] w-[335px]" data-node-id="208:10715" />
      <div className="absolute flex h-[224px] items-center justify-center left-[52px] top-[1921px] w-0" data-node-id="208:10716">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[224px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine27} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[259px] left-1/2 rounded-[16px] top-[2295px] w-[335px]" data-node-id="208:10717" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[16px] left-[35px] text-[14px] text-white top-[2315px] whitespace-nowrap" data-node-id="208:10718" style={{ fontVariationSettings: '"wdth" 100' }}>
        Live Market Activity
      </p>
      <div className="-translate-x-1/2 absolute bg-[#141414] left-[calc(50%-135.5px)] rounded-[6px] size-[34px] top-[2059px]" data-node-id="208:10719" />
      <div className="-translate-x-1/2 absolute bg-[#141414] left-[calc(50%-135.5px)] rounded-[6px] size-[34px] top-[2145px]" data-node-id="208:10720" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[84px] text-[12px] text-white top-[1887px] whitespace-nowrap" data-node-id="208:10721" style={{ fontVariationSettings: '"wdth" 100' }}>
        Market Intelligence
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-103.5px)] text-[#c1c1c1] text-[10px] top-[1909px] uppercase whitespace-nowrap" data-node-id="208:10722" style={{ fontVariationSettings: '"wdth" 100' }}>
        市场数据分析
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[18px] left-[20px] text-[16px] text-white top-[1784px] whitespace-nowrap" data-node-id="208:10723" style={{ fontVariationSettings: '"wdth" 100' }}>
        AI 驱动的交易基础设施
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[20px] left-[20px] text-[#c1c1c1] text-[10px] top-[1812px] uppercase w-[335px]" data-node-id="208:10724" style={{ fontVariationSettings: '"wdth" 100' }}>
        从市场数据分析到订单执行，构建覆盖交易决策、自动化执行与风险管理的智能系统
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[18px] left-[20px] text-[16px] text-white top-[2574px] whitespace-nowrap" data-node-id="208:10725" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tokenomics
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[20px] left-[20px] text-[#c1c1c1] text-[10px] top-[2602px] uppercase w-[335px]" data-node-id="208:10726" style={{ fontVariationSettings: '"wdth" 100' }}>
        项目代币用于 AI Agent 模型运行消耗，并通过交易税销毁及协议回购销毁机制，连接平台业务需求与代币经济体系
      </p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[417px] left-1/2 rounded-[16px] top-[2657px] w-[335px]" data-node-id="208:10727" />
      <div className="-translate-x-1/2 absolute bg-[#141414] left-[calc(50%-135.5px)] rounded-[6px] size-[34px] top-[2956px]" data-node-id="208:10728" />
      <div className="-translate-x-1/2 absolute bg-[#141414] left-[calc(50%-135.5px)] rounded-[6px] size-[34px] top-[2902px]" data-node-id="208:10729" />
      <div className="-translate-x-1/2 absolute bg-[#141414] left-[calc(50%-135.5px)] rounded-[6px] size-[34px] top-[2848px]" data-node-id="208:10730" />
      <div className="absolute h-[24px] left-[41px] top-[2853px] w-[22px]" data-node-id="208:10731" data-name="image 49">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage49} />
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[79px] text-[12px] text-white top-[2677px] whitespace-nowrap" data-node-id="208:10732" style={{ fontVariationSettings: '"wdth" 100' }}>
        项目代币
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-108.5px)] text-[#c1c1c1] text-[10px] top-[2699px] whitespace-nowrap" data-node-id="208:10733" style={{ fontVariationSettings: '"wdth" 100' }}>
        Polygon ｜ MAAT
      </p>
      <div className="absolute h-[44px] left-[35px] rounded-[30px] top-[3010px] w-[305px]" data-node-id="208:10734" style={{ backgroundImage: "linear-gradient(62.335630528755885deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[16px] left-[136px] text-[14px] text-white top-[3024px] whitespace-nowrap" data-node-id="208:10735" style={{ fontVariationSettings: '"wdth" 100' }}>
        探索代币经济
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[2731px] uppercase whitespace-nowrap" data-node-id="208:10736" style={{ fontVariationSettings: '"wdth" 100' }}>
        初始发行总量
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-65.5px)] text-[#c1c1c1] text-[10px] top-[2753px] uppercase whitespace-nowrap" data-node-id="208:10737" style={{ fontVariationSettings: '"wdth" 100' }}>
        MaaT
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-133.5px)] text-[#c1c1c1] text-[10px] top-[2804px] uppercase whitespace-nowrap" data-node-id="208:10738" style={{ fontVariationSettings: '"wdth" 100' }}>
        MaaT
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+48.5px)] text-[#c1c1c1] text-[10px] top-[2804px] uppercase whitespace-nowrap" data-node-id="208:10739" style={{ fontVariationSettings: '"wdth" 100' }}>
        USDC
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+83.5px)] text-[#c1c1c1] text-[10px] top-[2753px] uppercase whitespace-nowrap" data-node-id="208:10740" style={{ fontVariationSettings: '"wdth" 100' }}>
        USDC
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[35px] text-[14px] text-white top-[2751px] whitespace-nowrap" data-node-id="208:10741" style={{ fontVariationSettings: '"wdth" 100' }}>
        21,000,000
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+29.5px)] text-[#c1c1c1] text-[10px] top-[2731px] uppercase whitespace-nowrap" data-node-id="208:10742" style={{ fontVariationSettings: '"wdth" 100' }}>
        市场价格
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[217px] text-[14px] text-white top-[2751px] whitespace-nowrap" data-node-id="208:10743" style={{ fontVariationSettings: '"wdth" 100' }}>
        0.0128
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[2782px] uppercase whitespace-nowrap" data-node-id="208:10744" style={{ fontVariationSettings: '"wdth" 100' }}>
        累计销毁
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[35px] text-[14px] text-white top-[2802px] whitespace-nowrap" data-node-id="208:10745" style={{ fontVariationSettings: '"wdth" 100' }}>
        --
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+29.5px)] text-[#c1c1c1] text-[10px] top-[2782px] uppercase whitespace-nowrap" data-node-id="208:10746" style={{ fontVariationSettings: '"wdth" 100' }}>
        流通市值
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[217px] text-[14px] text-white top-[2802px] whitespace-nowrap" data-node-id="208:10747" style={{ fontVariationSettings: '"wdth" 100' }}>
        --
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[79px] text-[12px] text-white top-[2848px] whitespace-nowrap" data-node-id="208:10748" style={{ fontVariationSettings: '"wdth" 100' }}>
        Agent 运行消耗
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-108.5px)] text-[#c1c1c1] text-[10px] top-[2870px] uppercase whitespace-nowrap" data-node-id="208:10749" style={{ fontVariationSettings: '"wdth" 100' }}>
        项目代币直接用于智能体模型运行
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[79px] text-[12px] text-white top-[2902px] whitespace-nowrap" data-node-id="208:10750" style={{ fontVariationSettings: '"wdth" 100' }}>
        交易税销毁
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-108.5px)] text-[#c1c1c1] text-[10px] top-[2924px] uppercase whitespace-nowrap" data-node-id="208:10751" style={{ fontVariationSettings: '"wdth" 100' }}>
        买入 5%，卖出 5%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[79px] text-[12px] text-white top-[2956px] whitespace-nowrap" data-node-id="208:10752" style={{ fontVariationSettings: '"wdth" 100' }}>
        回购与销毁
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-108.5px)] text-[#c1c1c1] text-[10px] top-[2978px] uppercase whitespace-nowrap" data-node-id="208:10753" style={{ fontVariationSettings: '"wdth" 100' }}>
        Agent 托管费用的 50% 用于代币回购销毁
      </p>
      <div className="absolute h-0 left-[35px] top-[2833px] w-[305px]" data-node-id="208:10754">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine9} />
        </div>
      </div>
      <div className="absolute left-[35px] rounded-[30px] size-[34px] top-[2677px]" data-node-id="208:10755" style={{ backgroundImage: "linear-gradient(85.6752390601863deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[18px] left-[20px] text-[16px] text-white top-[3094px] whitespace-nowrap" data-node-id="208:10756" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ecosystem
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[20px] left-[20px] text-[#c1c1c1] text-[10px] top-[3122px] uppercase w-[335px]" data-node-id="208:10757" style={{ fontVariationSettings: '"wdth" 100' }}>
        以 Polygon 区块链为基础，连接预测市场数据、自动交易与去中心化流动性协议
      </p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[202px] left-1/2 rounded-[16px] top-[3177px] w-[335px]" data-node-id="208:10758" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[79px] text-[12px] text-white top-[3197px] whitespace-nowrap" data-node-id="208:10759" style={{ fontVariationSettings: '"wdth" 100' }}>
        Polymarket
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-108.5px)] text-[#c1c1c1] text-[10px] top-[3219px] uppercase whitespace-nowrap" data-node-id="208:10760" style={{ fontVariationSettings: '"wdth" 100' }}>
        预测市场数据与交易执行
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[79px] text-[12px] text-white top-[3261px] whitespace-nowrap" data-node-id="208:10761" style={{ fontVariationSettings: '"wdth" 100' }}>
        Polygon
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-108.5px)] text-[#c1c1c1] text-[10px] top-[3283px] uppercase whitespace-nowrap" data-node-id="208:10762" style={{ fontVariationSettings: '"wdth" 100' }}>
        链上资产与智能合约基础设施
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[79px] text-[12px] text-white top-[3325px] whitespace-nowrap" data-node-id="208:10763" style={{ fontVariationSettings: '"wdth" 100' }}>
        Uniswap
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-108.5px)] text-[#c1c1c1] text-[10px] top-[3347px] uppercase whitespace-nowrap" data-node-id="208:10764" style={{ fontVariationSettings: '"wdth" 100' }}>
        项目代币交易与流动性池
      </p>
      <div className="absolute contents left-[35px] top-[3197px]" data-node-id="208:10765" data-name="Mask group">
        <div className="absolute left-[35px] [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-size:34px_34px] size-[34px] top-[3197px]" data-node-id="208:10767" style={{ maskImage: `url("${imgGoogleSearch1}")` }} data-name="Google Search 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGoogleSearch2} />
        </div>
      </div>
      <div className="absolute contents left-[35px] top-[3261px]" data-node-id="208:10768" data-name="Mask group">
        <div className="absolute left-[35px] [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-size:34px_34px] size-[34px] top-[3261px]" data-node-id="208:10770" style={{ maskImage: `url("${imgGoogleSearch1}")` }} data-name="Polygon Logo  SVG  Real Company  Alphabet, Letter P Logo 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPolygonLogoSvgRealCompanyAlphabetLetterPLogo1} />
        </div>
      </div>
      <div className="absolute contents left-[195px] top-[3502px]" data-node-id="208:10771" data-name="Mask group">
        <div className="absolute left-[195px] [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-size:34px_34px] size-[34px] top-[3502px]" data-node-id="208:10773" style={{ maskImage: `url("${imgGoogleSearch1}")` }} data-name="Polygon Logo  SVG  Real Company  Alphabet, Letter P Logo 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPolygonLogoSvgRealCompanyAlphabetLetterPLogo1} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute contents left-[calc(50%-135.5px)] top-[3325px]" data-node-id="208:10774">
        <div className="-translate-x-1/2 absolute bg-white left-[calc(50%-135.5px)] rounded-[6px] size-[34px] top-[3325px]" data-node-id="208:10775" />
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[84px] text-[#c1c1c1] text-[10px] top-[1931px] uppercase whitespace-nowrap" data-node-id="208:10776" style={{ fontVariationSettings: '"wdth" 100' }}>
        采集预测价格、交易量、订单簿深度与市场流动性信息
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[84px] text-[12px] text-white top-[1973px] whitespace-nowrap" data-node-id="208:10777" style={{ fontVariationSettings: '"wdth" 100' }}>
        AI Signal Engine
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-103.5px)] text-[#c1c1c1] text-[10px] top-[1995px] uppercase whitespace-nowrap" data-node-id="208:10778" style={{ fontVariationSettings: '"wdth" 100' }}>
        智能信号引擎
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[84px] text-[#c1c1c1] text-[10px] top-[2017px] uppercase whitespace-nowrap" data-node-id="208:10779" style={{ fontVariationSettings: '"wdth" 100' }}>
        基于量化指标与模型分析识别交易机会，生成策略信号
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[84px] text-[12px] text-white top-[2059px] whitespace-nowrap" data-node-id="208:10780" style={{ fontVariationSettings: '"wdth" 100' }}>
        Risk Management
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-103.5px)] text-[#c1c1c1] text-[10px] top-[2081px] uppercase whitespace-nowrap" data-node-id="208:10781" style={{ fontVariationSettings: '"wdth" 100' }}>
        风险管理系统
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[84px] text-[#c1c1c1] text-[10px] top-[2103px] uppercase w-[256px]" data-node-id="208:10782" style={{ fontVariationSettings: '"wdth" 100' }}>
        交易成本、资金敞口、仓位限制及执行条件进行校验
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[82px] text-[12px] text-white top-[2145px] whitespace-nowrap" data-node-id="208:10783" style={{ fontVariationSettings: '"wdth" 100' }}>
        Execution Engine
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[14px] left-[calc(50%-47.5px)] text-[12px] text-white top-[2422px] whitespace-nowrap" data-node-id="208:10784" style={{ fontVariationSettings: '"wdth" 100' }}>
        等待交易数据接入
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[35px] text-[12px] text-white top-[2520px] whitespace-nowrap" data-node-id="208:10785" style={{ fontVariationSettings: '"wdth" 100' }}>
        查看完整交易数据
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-105.5px)] text-[#c1c1c1] text-[10px] top-[2167px] uppercase whitespace-nowrap" data-node-id="208:10786" style={{ fontVariationSettings: '"wdth" 100' }}>
        自动交易执行
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[82px] text-[#c1c1c1] text-[10px] top-[2189px] uppercase w-[256px]" data-node-id="208:10787" style={{ fontVariationSettings: '"wdth" 100' }}>
        统一管理订单提交、成交跟踪、撤单与交易结果核算
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-114.5px)] text-[#c1c1c1] text-[10px] top-[2446px] uppercase whitespace-nowrap" data-node-id="208:10788" style={{ fontVariationSettings: '"wdth" 100' }}>
        已确认的预测市场成交记录将在这里按时间顺序展示
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[35px] text-[12px] text-white top-[2236px] whitespace-nowrap" data-node-id="208:10789" style={{ fontVariationSettings: '"wdth" 100' }}>
        探索智能分析与引擎监控
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[35px] text-[#2a73fd] text-[12px] top-[2351px] whitespace-nowrap" data-node-id="208:10790" style={{ fontVariationSettings: '"wdth" 100' }}>
        交易动态
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[135px] text-[#c1c1c1] text-[12px] top-[2351px] whitespace-nowrap" data-node-id="208:10791" style={{ fontVariationSettings: '"wdth" 100' }}>
        交易信号
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[241px] text-[#c1c1c1] text-[12px] top-[2351px] whitespace-nowrap" data-node-id="208:10792" style={{ fontVariationSettings: '"wdth" 100' }}>
        流动性
      </p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[260px] left-1/2 rounded-[16px] top-[3482px] w-[335px]" data-node-id="208:10793" />
      <div className="-translate-x-1/2 absolute bg-white left-[calc(50%-135.5px)] rounded-[6px] size-[34px] top-[3502px]" data-node-id="208:10794" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[18px] left-[20px] text-[16px] text-white top-[3399px] whitespace-nowrap" data-node-id="208:10795" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ecosystem
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[20px] left-[20px] text-[#c1c1c1] text-[10px] top-[3427px] uppercase w-[335px]" data-node-id="208:10796" style={{ fontVariationSettings: '"wdth" 100' }}>
        以 Polygon 区块链为基础，连接预测市场数据、自动交易与去中心化流动性协议
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[35px] text-[12px] text-white top-[3546px] whitespace-nowrap" data-node-id="208:10797" style={{ fontVariationSettings: '"wdth" 100' }}>
        智能合约
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[3568px] uppercase whitespace-nowrap" data-node-id="208:10798" style={{ fontVariationSettings: '"wdth" 100' }}>
        合约地址与权限信息
      </p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[212px] left-1/2 rounded-[16px] top-[3762px] w-[335px]" data-node-id="208:10799" />
      <div className="absolute bg-white h-[54px] left-[20px] rounded-[40px] top-[4004px] w-[266px]" data-node-id="208:10800" />
      <div className="absolute left-[25px] size-[40px] top-[4011px]" data-node-id="208:10801">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse14} />
      </div>
      <div className="absolute bg-white left-[301px] rounded-[40px] size-[54px] top-[4004px]" data-node-id="208:10802" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[14px] left-[79px] text-[12px] text-white top-[3782px] whitespace-nowrap" data-node-id="208:10803" style={{ fontVariationSettings: '"wdth" 100' }}>
        Maat
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-108.5px)] text-[#c1c1c1] text-[10px] top-[3804px] uppercase whitespace-nowrap" data-node-id="208:10804" style={{ fontVariationSettings: '"wdth" 100' }}>
        基于 Polymarket 的 AI 智能交易与预测市场流动性网络
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[3848px] uppercase whitespace-nowrap" data-node-id="208:10805" style={{ fontVariationSettings: '"wdth" 100' }}>
        白皮书
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+113.5px)] text-[#c1c1c1] text-[10px] top-[3848px] uppercase whitespace-nowrap" data-node-id="208:10806" style={{ fontVariationSettings: '"wdth" 100' }}>
        智能合约
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[3880px] uppercase whitespace-nowrap" data-node-id="208:10807" style={{ fontVariationSettings: '"wdth" 100' }}>
        官方社区
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-24.5px)] text-[#c1c1c1] text-[10px] top-[3848px] uppercase whitespace-nowrap" data-node-id="208:10808" style={{ fontVariationSettings: '"wdth" 100' }}>
        技术文档
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+102.5px)] text-[#c1c1c1] text-[10px] top-[3611px] uppercase whitespace-nowrap" data-node-id="208:10809" style={{ fontVariationSettings: '"wdth" 100' }}>
        待部署验证
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+122.5px)] text-[#c1c1c1] text-[10px] top-[3655px] uppercase whitespace-nowrap" data-node-id="208:10810" style={{ fontVariationSettings: '"wdth" 100' }}>
        待发布
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[195px] text-[12px] text-white top-[3546px] whitespace-nowrap" data-node-id="208:10811" style={{ fontVariationSettings: '"wdth" 100' }}>
        Polygon
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+7.5px)] text-[#c1c1c1] text-[10px] top-[3568px] uppercase whitespace-nowrap" data-node-id="208:10812" style={{ fontVariationSettings: '"wdth" 100' }}>
        审计状态与公开报告
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[35px] text-[12px] text-white top-[3610px] whitespace-nowrap" data-node-id="208:10813" style={{ fontVariationSettings: '"wdth" 100' }}>
        代币合约验证状态
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[35px] text-[12px] text-white top-[3654px] whitespace-nowrap" data-node-id="208:10814" style={{ fontVariationSettings: '"wdth" 100' }}>
        安全审计报告
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[35px] text-[12px] text-white top-[3703px] whitespace-nowrap" data-node-id="208:10815" style={{ fontVariationSettings: '"wdth" 100' }}>
        查看合约与安全资料
      </p>
      <div className="absolute left-[141px] size-[24px] top-[652px]" data-node-id="208:10816">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse51} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[652px]" data-node-id="208:10817">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse52} />
      </div>
      <div className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[0] left-[calc(50%-152.5px)] text-[20px] text-white top-[185px] tracking-[1px] whitespace-nowrap" data-node-id="208:10818" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[34px] mb-0">预测市场智能交易</p>
        <p className="leading-[34px]">与流动性网络</p>
      </div>
      <div className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[0] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[268px] uppercase w-[305px]" data-node-id="208:10819" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px] mb-0">基于 Polymarket 构建，以 AI Agent 智能交易与流动性</p>
        <p className="leading-[20px]">服务为核心，融合市场分析、自动化执行、风险管理与链上资产管理</p>
      </div>
      <div className="absolute h-[44px] left-[35px] rounded-[30px] top-[526px] w-[145px]" data-node-id="208:10820" style={{ backgroundImage: "linear-gradient(76.00589440319598deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
      <div className="absolute bg-[#080e1a] border border-[#0f2453] border-solid h-[44px] left-[195px] rounded-[30px] top-[526px] w-[145px]" data-node-id="208:10821" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[63px] text-[12px] text-white top-[541px] uppercase whitespace-nowrap" data-node-id="208:10822" style={{ fontVariationSettings: '"wdth" 100' }}>
        开启智能交易
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[218px] text-[12px] text-white top-[541px] uppercase whitespace-nowrap" data-node-id="208:10823" style={{ fontVariationSettings: '"wdth" 100' }}>
        探索流动性市场
      </p>
      <div className="absolute h-0 left-[35px] top-[2216px] w-[305px]" data-node-id="208:10824">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine2} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[3833px] w-[305px]" data-node-id="208:10825">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine3} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[3595px] w-[305px]" data-node-id="208:10826">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine3} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[2500px] w-[305px]" data-node-id="208:10827">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine3} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[2380px] w-[305px]" data-node-id="208:10828">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine3} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[3639px] w-[305px]" data-node-id="208:10829">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine3} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[3683px] w-[305px]" data-node-id="208:10830">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine3} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[35px] text-[10px] text-white top-[3942px] whitespace-nowrap" data-node-id="208:10831" style={{ fontVariationSettings: '"wdth" 100' }}>
        ©️ 2026 Maat 保留所有权利
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[20px] left-[20px] text-[#c1c1c1] text-[10px] top-[775px] uppercase w-[335px]" data-node-id="208:10832" style={{ fontVariationSettings: '"wdth" 100' }}>
        以智能代理连接预测市场交易需求与流动性资源，构建自动化、数据驱动的市场参与体系
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+11px)] text-[#c1c1c1] text-[10px] text-center top-[585px] uppercase whitespace-nowrap" data-node-id="208:10833" style={{ fontVariationSettings: '"wdth" 100' }}>
        还没有 USDC? 先准备资金
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-64.5px)] text-[10px] text-center text-white top-[494px] uppercase whitespace-nowrap" data-node-id="208:10834" style={{ fontVariationSettings: '"wdth" 100' }}>
        数据分析
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-0.5px)] text-[10px] text-center text-white top-[494px] uppercase whitespace-nowrap" data-node-id="208:10835" style={{ fontVariationSettings: '"wdth" 100' }}>
        信号决策
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+63.5px)] text-[10px] text-center text-white top-[494px] uppercase whitespace-nowrap" data-node-id="208:10836" style={{ fontVariationSettings: '"wdth" 100' }}>
        自动执行
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-99.5px)] text-[12px] text-center text-white top-[323px] uppercase whitespace-nowrap" data-node-id="208:10837" style={{ fontVariationSettings: '"wdth" 100' }}>
        AI智能分析
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%+110.5px)] text-[12px] text-center text-white top-[323px] uppercase whitespace-nowrap" data-node-id="208:10838" style={{ fontVariationSettings: '"wdth" 100' }}>
        预测市场流动性
      </p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[468px] left-1/2 rounded-[16px] top-[830px] w-[335px]" data-node-id="208:10839" />
      <div className="-translate-x-1/2 absolute bg-[#141414] left-[calc(50%-135.5px)] rounded-[6px] size-[34px] top-[850px]" data-node-id="208:10840" />
      <div className="absolute h-[44px] left-[35px] rounded-[30px] top-[1234px] w-[305px]" data-node-id="208:10841" style={{ backgroundImage: "linear-gradient(62.335630528755885deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[20px] left-[35px] text-[#c1c1c1] text-[10px] top-[930px] uppercase w-[305px]" data-node-id="208:10842" style={{ fontVariationSettings: '"wdth" 100' }}>
        通过 AI Agent 持续分析 Polymarket 市场数据，识别交易信号，执行自动化交易与做市策略，并结合风险控制机制管理交易过程
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[16px] left-[35px] text-[14px] text-white top-[904px] whitespace-nowrap" data-node-id="208:10843" style={{ fontVariationSettings: '"wdth" 100' }}>
        让智能代理参与预测市场交易
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[84px] text-[12px] text-white top-[850px] whitespace-nowrap" data-node-id="208:10844" style={{ fontVariationSettings: '"wdth" 100' }}>
        Agent Trading
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-103.5px)] text-[#c1c1c1] text-[10px] top-[872px] uppercase whitespace-nowrap" data-node-id="208:10845" style={{ fontVariationSettings: '"wdth" 100' }}>
        AI 智能代理交易
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[5px] left-[calc(50%-136.5px)] text-[#636262] text-[5px] top-[1070px] uppercase whitespace-nowrap" data-node-id="208:10846" style={{ fontVariationSettings: '"wdth" 100' }}>
        400
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[5px] left-[calc(50%-111.5px)] text-[#636262] text-[5px] top-[1070px] uppercase whitespace-nowrap" data-node-id="208:10847" style={{ fontVariationSettings: '"wdth" 100' }}>
        450
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[5px] left-[calc(50%-85.5px)] text-[#636262] text-[5px] top-[1070px] uppercase whitespace-nowrap" data-node-id="208:10848" style={{ fontVariationSettings: '"wdth" 100' }}>
        500
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[5px] left-[calc(50%-60.5px)] text-[#636262] text-[5px] top-[1070px] uppercase whitespace-nowrap" data-node-id="208:10849" style={{ fontVariationSettings: '"wdth" 100' }}>
        550
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[5px] left-[calc(50%-35.5px)] text-[#636262] text-[5px] top-[1070px] uppercase whitespace-nowrap" data-node-id="208:10850" style={{ fontVariationSettings: '"wdth" 100' }}>
        600
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[5px] left-[calc(50%-10.5px)] text-[#636262] text-[5px] top-[1070px] uppercase whitespace-nowrap" data-node-id="208:10851" style={{ fontVariationSettings: '"wdth" 100' }}>
        650
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[5px] left-[calc(50%+16.5px)] text-[#636262] text-[5px] top-[1070px] uppercase whitespace-nowrap" data-node-id="208:10852" style={{ fontVariationSettings: '"wdth" 100' }}>
        700
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[5px] left-[calc(50%+42.5px)] text-[#636262] text-[5px] top-[1070px] uppercase whitespace-nowrap" data-node-id="208:10853" style={{ fontVariationSettings: '"wdth" 100' }}>
        750
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[5px] left-[calc(50%+67.5px)] text-[#636262] text-[5px] top-[1070px] uppercase whitespace-nowrap" data-node-id="208:10854" style={{ fontVariationSettings: '"wdth" 100' }}>
        800
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[5px] left-[calc(50%+93.5px)] text-[#636262] text-[5px] top-[1070px] uppercase whitespace-nowrap" data-node-id="208:10855" style={{ fontVariationSettings: '"wdth" 100' }}>
        850
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[5px] left-[calc(50%+118.5px)] text-[#636262] text-[5px] top-[1070px] uppercase whitespace-nowrap" data-node-id="208:10856" style={{ fontVariationSettings: '"wdth" 100' }}>
        900
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[5px] left-[calc(50%+141.5px)] text-[#636262] text-[5px] top-[1070px] uppercase whitespace-nowrap" data-node-id="208:10857" style={{ fontVariationSettings: '"wdth" 100' }}>
        950
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[35px] text-[12px] text-white top-[1095px] whitespace-nowrap" data-node-id="208:10858" style={{ fontVariationSettings: '"wdth" 100' }}>
        智能交易系统
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[16px] left-[136px] text-[14px] text-white top-[1248px] whitespace-nowrap" data-node-id="208:10859" style={{ fontVariationSettings: '"wdth" 100' }}>
        进入智能交易
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1124px] uppercase whitespace-nowrap" data-node-id="208:10860" style={{ fontVariationSettings: '"wdth" 100' }}>
        监测盘口(个)
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-44.5px)] text-[#c1c1c1] text-[10px] top-[1124px] uppercase whitespace-nowrap" data-node-id="208:10861" style={{ fontVariationSettings: '"wdth" 100' }}>
        有效信号(条)
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+63.5px)] text-[#c1c1c1] text-[10px] top-[1124px] uppercase whitespace-nowrap" data-node-id="208:10862" style={{ fontVariationSettings: '"wdth" 100' }}>
        24小时成交(USDC)
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[35px] text-[14px] text-white top-[1144px] whitespace-nowrap" data-node-id="208:10863" style={{ fontVariationSettings: '"wdth" 100' }}>
        21,009
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[143px] text-[14px] text-white top-[1144px] whitespace-nowrap" data-node-id="208:10864" style={{ fontVariationSettings: '"wdth" 100' }}>
        67
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[297px] text-[14px] text-white top-[1144px] whitespace-nowrap" data-node-id="208:10865" style={{ fontVariationSettings: '"wdth" 100' }}>
        2.15M
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[35px] text-[12px] text-white top-[1195px] whitespace-nowrap" data-node-id="208:10866" style={{ fontVariationSettings: '"wdth" 100' }}>
        8小时运行周期
      </p>
      <div className="absolute h-0 left-[35px] top-[1175px] w-[305px]" data-node-id="208:10867">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine9} />
        </div>
      </div>
      <div className="absolute bg-[#2a2a2c] h-[24px] left-[270px] rounded-[20px] top-[1190px] w-[70px]" data-node-id="208:10868" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+92.5px)] text-[10px] text-white top-[1196px] uppercase whitespace-nowrap" data-node-id="208:10869" style={{ fontVariationSettings: '"wdth" 100' }}>
        自动化交易
      </p>
      <div className="absolute flex h-[80px] items-center justify-center left-[67.94px] top-[990px] w-0" data-node-id="208:10870">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[80px] items-center justify-center left-[93.5px] top-[990px] w-0" data-node-id="208:10871">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[80px] items-center justify-center left-[119.06px] top-[990px] w-0" data-node-id="208:10872">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[80px] items-center justify-center left-[144.62px] top-[990px] w-0" data-node-id="208:10873">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[80px] items-center justify-center left-[170.18px] top-[990px] w-0" data-node-id="208:10874">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[80px] items-center justify-center left-[195.74px] top-[990px] w-0" data-node-id="208:10875">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[80px] items-center justify-center left-[221.29px] top-[990px] w-0" data-node-id="208:10876">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[80px] items-center justify-center left-[246.85px] top-[990px] w-0" data-node-id="208:10877">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[80px] items-center justify-center left-[272.41px] top-[990px] w-0" data-node-id="208:10878">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[80px] items-center justify-center left-[297.97px] top-[990px] w-0" data-node-id="208:10879">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[80px] items-center justify-center left-[323.53px] top-[990px] w-0" data-node-id="208:10880">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[80px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[1030px] w-[304.432px]" data-node-id="208:10881">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine24} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[1016.41px] w-[304.432px]" data-node-id="208:10882">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine25} />
        </div>
      </div>
      <div className="absolute h-[39px] left-[50px] top-[990px] w-[12px]" data-node-id="208:10883">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle131} />
      </div>
      <div className="absolute h-[20.971px] left-[74.76px] top-[1033.5px] w-[12.495px]" data-node-id="208:10884">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle139} />
      </div>
      <div className="absolute h-[24.466px] left-[100.32px] top-[1037.77px] w-[12.495px]" data-node-id="208:10885">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle140} />
      </div>
      <div className="absolute h-[23.689px] left-[201.98px] top-[1033.5px] w-[12.495px]" data-node-id="208:10886">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle141} />
      </div>
      <div className="absolute h-[17.087px] left-[302.51px] top-[1031.55px] w-[12.495px]" data-node-id="208:10887">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle142} />
      </div>
      <div className="absolute left-[125px] size-[13px] top-[1016px]" data-node-id="208:10888">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle132} />
      </div>
      <div className="absolute h-[28px] left-[150px] top-[1001px] w-[13px]" data-node-id="208:10889">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle133} />
      </div>
      <div className="absolute h-[19px] left-[175px] top-[1010px] w-[13px]" data-node-id="208:10890">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle134} />
      </div>
      <div className="absolute h-[9px] left-[226px] top-[1020px] w-[13px]" data-node-id="208:10891">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle135} />
      </div>
      <div className="absolute h-[25px] left-[251px] top-[1004px] w-[13px]" data-node-id="208:10892">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle136} />
      </div>
      <div className="absolute h-[18px] left-[276px] top-[1011px] w-[13px]" data-node-id="208:10893">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle137} />
      </div>
      <div className="absolute h-[25px] left-[328px] top-[1004px] w-[12px]" data-node-id="208:10894">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle138} />
      </div>
      <div className="absolute h-[11px] left-[35px] top-[1010px] w-[44px]" data-node-id="208:10895">
        <div className="absolute inset-[0_0.54%_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgRectangle143} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[5px] left-[calc(50%-146.5px)] text-[5px] text-black top-[1013px] uppercase whitespace-nowrap" data-node-id="208:10896" style={{ fontVariationSettings: '"wdth" 100' }}>
        43.7M USDC
      </p>
      <div className="absolute bg-[rgba(54,184,93,0.8)] left-[77px] rounded-[2px] shadow-[0px_0px_4px_0px_#36b85d] size-[3px] top-[1014px]" data-node-id="208:10897" />
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[446px] left-1/2 rounded-[16px] top-[1318px] w-[335px]" data-node-id="208:10898" />
      <div className="absolute flex h-[34px] items-center justify-center left-[187px] top-[1498px] w-0" data-node-id="208:10899">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[34px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine26} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[44px] left-[35px] rounded-[30px] top-[1700px] w-[305px]" data-node-id="208:10900" style={{ backgroundImage: "linear-gradient(62.335630528755885deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[20px] left-[35px] text-[#c1c1c1] text-[10px] top-[1418px] uppercase w-[305px]" data-node-id="208:10901" style={{ fontVariationSettings: '"wdth" 100' }}>
        选择指定 Polymarket 交易盘口，提供基础流动性并支付服务费用，由平台结合配套资金与自动化做市系统，为目标盘口提供流动性支持
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[84px] text-[12px] text-white top-[1338px] whitespace-nowrap" data-node-id="208:10902" style={{ fontVariationSettings: '"wdth" 100' }}>
        Liquidity Marketplace
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[16px] left-[35px] text-[14px] text-white top-[1392px] whitespace-nowrap" data-node-id="208:10903" style={{ fontVariationSettings: '"wdth" 100' }}>
        为预测市场提供流动性支持
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-103.5px)] text-[#c1c1c1] text-[10px] top-[1360px] uppercase whitespace-nowrap" data-node-id="208:10904" style={{ fontVariationSettings: '"wdth" 100' }}>
        预测市场流动性服务
      </p>
      <div className="absolute bg-[#2a2a2c] h-[22px] left-[301px] rounded-[20px] top-[1552px] w-[39px]" data-node-id="208:10905" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[35px] text-[12px] text-white top-[1556px] whitespace-nowrap" data-node-id="208:10906" style={{ fontVariationSettings: '"wdth" 100' }}>
        流动性服务参数
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+123.5px)] text-[10px] text-white top-[1557px] uppercase whitespace-nowrap" data-node-id="208:10907" style={{ fontVariationSettings: '"wdth" 100' }}>
        12H
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1585px] uppercase whitespace-nowrap" data-node-id="208:10908" style={{ fontVariationSettings: '"wdth" 100' }}>
        基础流动性
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-15.5px)] text-[#c1c1c1] text-[10px] top-[1585px] uppercase whitespace-nowrap" data-node-id="208:10909" style={{ fontVariationSettings: '"wdth" 100' }}>
        服务费率
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+112.5px)] text-[#c1c1c1] text-[10px] top-[1585px] uppercase whitespace-nowrap" data-node-id="208:10910" style={{ fontVariationSettings: '"wdth" 100' }}>
        服务期限
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[323px] text-[14px] text-white top-[1605px] whitespace-nowrap" data-node-id="208:10911" style={{ fontVariationSettings: '"wdth" 100' }}>
        12
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[35px] text-[14px] text-white top-[1605px] whitespace-nowrap" data-node-id="208:10912" style={{ fontVariationSettings: '"wdth" 100' }}>
        1K-5K
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[16px] left-[172px] text-[14px] text-white top-[1605px] whitespace-nowrap" data-node-id="208:10913" style={{ fontVariationSettings: '"wdth" 100' }}>
        4%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1629px] uppercase whitespace-nowrap" data-node-id="208:10914" style={{ fontVariationSettings: '"wdth" 100' }}>
        USDC
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-15.5px)] text-[#c1c1c1] text-[10px] top-[1629px] uppercase whitespace-nowrap" data-node-id="208:10915" style={{ fontVariationSettings: '"wdth" 100' }}>
        按投入金额
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+132.5px)] text-[#c1c1c1] text-[10px] top-[1629px] uppercase whitespace-nowrap" data-node-id="208:10916" style={{ fontVariationSettings: '"wdth" 100' }}>
        小时
      </p>
      <div className="absolute h-0 left-[35px] top-[1656px] w-[305px]" data-node-id="208:10917">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine9} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[35px] text-[12px] text-white top-[1671px] whitespace-nowrap" data-node-id="208:10918" style={{ fontVariationSettings: '"wdth" 100' }}>
        服务中交易盘口
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[14px] left-[calc(50%+117.5px)] text-[#35b15a] text-[12px] top-[1671px] uppercase whitespace-nowrap" data-node-id="208:10919" style={{ fontVariationSettings: '"wdth" 100' }}>
        166个
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[16px] left-[129px] text-[14px] text-white top-[1714px] whitespace-nowrap" data-node-id="208:10920" style={{ fontVariationSettings: '"wdth" 100' }}>
        探索流动性市场
      </p>
      <div className="absolute h-[34px] left-[35px] top-[1498px] w-[152.5px]" data-node-id="208:10921">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
      </div>
      <div className="absolute flex h-[34px] items-center justify-center left-[187.5px] top-[1498px] w-[152.5px]" data-node-id="208:10922">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[34px] relative w-[152.5px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#141414] left-[calc(50%-135.5px)] rounded-[6px] size-[34px] top-[1338px]" data-node-id="208:10923" />
      <div className="absolute h-[24px] left-[41px] top-[1343px] w-[21px]" data-node-id="208:10924" data-name="image 45">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage45} />
      </div>
      <div className="-translate-x-1/2 absolute bg-[#141414] left-[calc(50%-135.5px)] rounded-[6px] size-[34px] top-[1887px]" data-node-id="208:10925" />
      <div className="-translate-x-1/2 absolute bg-[#141414] left-[calc(50%-135.5px)] rounded-[6px] size-[34px] top-[1973px]" data-node-id="208:10926" />
      <div className="absolute h-[24px] left-[40px] top-[1892px] w-[23px]" data-node-id="208:10927" data-name="image 44">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage44} />
      </div>
      <div className="absolute h-[24px] left-[41px] top-[1978px] w-[21px]" data-node-id="208:10928" data-name="image 46">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage46} />
      </div>
      <div className="absolute h-[24px] left-[41px] top-[2907px] w-[21px]" data-node-id="208:10929" data-name="image 50">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage50} />
      </div>
      <div className="absolute h-[24px] left-[41px] top-[2961px] w-[22px]" data-node-id="208:10930" data-name="image 51">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage51} />
      </div>
      <div className="absolute h-[24px] left-[41px] top-[855px] w-[21px]" data-node-id="208:10931" data-name="image 41">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage41} />
      </div>
      <div className="absolute h-[24px] left-[41px] top-[2064px] w-[21px]" data-node-id="208:10932" data-name="image 47">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage47} />
      </div>
      <div className="absolute left-[40px] size-[24px] top-[2150px]" data-node-id="208:10933" data-name="image 48">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage48} />
      </div>
      <div className="absolute inset-[14.3%_65.6%_85.41%_31.2%]" data-node-id="208:10934">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup15} />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[64.48234558105469/123.46971130371094] left-[40.8%] right-[58.13%] top-[calc(50%-1546px)]" data-node-id="208:10939" data-name="Vector">
        <div className="absolute inset-[-1.25%_-2.5%]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[64.48234558105469/123.46971130371094] left-[57.87%] right-[41.07%] top-[calc(50%-1546px)]" data-node-id="208:10940" data-name="Vector">
        <div className="absolute inset-[-1.25%_-2.5%]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <div className="absolute contents left-[20px] top-[61px]" data-node-id="208:10941">
        <div className="absolute left-[20px] rounded-[8px] size-[30px] top-[61px]" data-node-id="208:10942" style={{ backgroundImage: "linear-gradient(45deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
        <div className="absolute left-[26.18px] size-[17.647px] top-[67.18px]" data-node-id="208:10943" data-name="image 67">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage67} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[18px] left-[60px] text-[16px] text-white top-[67px] uppercase whitespace-nowrap" data-node-id="208:10944" style={{ fontVariationSettings: '"wdth" 100' }}>
        MAAT
      </p>
      <div className="absolute contents left-[35px] top-[3782px]" data-node-id="208:10945">
        <div className="absolute left-[35px] rounded-[8px] size-[34px] top-[3782px]" data-node-id="208:10946" style={{ backgroundImage: "linear-gradient(45deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
        <div className="absolute left-[42px] size-[20px] top-[3789px]" data-node-id="208:10947" data-name="image 67">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage67} />
        </div>
      </div>
      <div className="absolute left-[43px] size-[17.647px] top-[2685px]" data-node-id="208:10948" data-name="image 67">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage67} />
      </div>
      <div className="absolute bg-[#2967ff] h-[2px] left-[35px] top-[2377px] w-[48px]" data-node-id="208:10949" />
      <div className="absolute h-[122px] left-[35px] overflow-clip top-[357px] w-[305px]" data-node-id="208:10950" data-name="flow-cycle 1">
        <div className="absolute inset-[6.06%_2.79%_16.36%_4.85%]" data-node-id="208:10951" data-name="Frame">
          <div className="absolute inset-[-1.14%_-0.22%_-1.45%_-0.16%]">
            <img alt="" className="block max-w-none size-full" src={imgFrame} />
          </div>
        </div>
        <div className="absolute inset-[4.91%_2.43%_15.3%_4.49%]" data-node-id="208:10957" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
        </div>
        <div className="absolute inset-[86.67%_4.13%_13.33%_4.13%]" data-node-id="208:10977" data-name="Vector">
          <div className="absolute inset-[-0.55px_0]">
            <img alt="" className="block max-w-none size-full" src={imgVector1} />
          </div>
        </div>
        <div className="absolute inset-[35.88%_4.73%_39.66%_7.04%]" data-node-id="208:10978" data-name="Vector">
          <div className="absolute inset-[-48.6%_-5.39%]">
            <img alt="" className="block max-w-none size-full" src={imgVector2} />
          </div>
        </div>
        <div className="absolute inset-[35.88%_4.73%_39.66%_7.04%]" data-node-id="208:10979" data-name="Vector">
          <div className="absolute inset-[-5.36%_-0.59%]">
            <img alt="" className="block max-w-none size-full" src={imgVector3} />
          </div>
        </div>
        <div className="absolute inset-[35.88%_4.73%_39.66%_7.04%]">
          <svg className="maat-chart-flow absolute inset-[-5.36%_-0.59%] overflow-visible pointer-events-none" viewBox="0 0 272.297 33.0335" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <g className="maat-chart-flow-pulse">
              <animateMotion dur="4.8s" repeatCount="indefinite" calcMode="linear" path="M1.60041 12.5356C15.6659 16.6023 36.024 34.3477 59.7133 31.0204C82.2922 27.6932 103.39 6.62044 126.339 2.55378C148.548 -1.51289 171.127 8.09923 192.225 18.4507C215.545 29.9114 241.455 28.0629 270.696 13.6447" />
              <animate attributeName="opacity" dur="4.8s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;0.035;0.93;0.97;1" />
              <circle r="7" fill="#58CFFF" opacity=".28" />
              <circle r="4.4" fill="none" stroke="#8BEAFF" strokeWidth="1.2" opacity=".9" />
              <circle r="2.5" fill="#F3FEFF" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-[54.48%_82.86%_42.36%_15.87%]" data-node-id="208:10980" data-name="Vector">
          <div className="absolute inset-[-10.4%_-10.39%]">
            <img alt="" className="block max-w-none size-full" src={imgVector4} />
          </div>
        </div>
        <div className="absolute inset-[48.73%_63.45%_48.12%_35.29%]" data-node-id="208:10981" data-name="Vector">
          <div className="absolute inset-[-10.4%_-10.39%]">
            <img alt="" className="block max-w-none size-full" src={imgVector7} />
          </div>
        </div>
        <div className="absolute inset-[36.91%_41.12%_59.94%_57.62%]" data-node-id="208:10982" data-name="Vector">
          <div className="absolute inset-[-10.4%_-10.39%]">
            <img alt="" className="block max-w-none size-full" src={imgVector7} />
          </div>
        </div>
        <div className="absolute inset-[56%_19.76%_40.85%_78.98%]" data-node-id="208:10983" data-name="Vector">
          <div className="absolute inset-[-10.4%_-10.39%]">
            <img alt="" className="block max-w-none size-full" src={imgVector7} />
          </div>
        </div>
        <div className="absolute inset-[49.64%_9.68%_47.21%_89.05%]" data-node-id="208:10984" data-name="Vector">
          <div className="absolute inset-[-10.4%_-10.39%]">
            <img alt="" className="block max-w-none size-full" src={imgVector7} />
          </div>
        </div>
        <div className="absolute inset-[39.39%_90.78%_49.7%_4.85%]" data-node-id="208:10985" data-name="Frame">
          <div className="absolute inset-[-75.14%_-75.05%]">
            <img alt="" className="block max-w-none size-full" src={imgFrame2} />
          </div>
        </div>
        <div className="absolute inset-[57.88%_73.06%_37.88%_25.24%]" data-node-id="208:10990" data-name="Frame">
          <div className="absolute inset-[-7.73%_-7.72%]">
            <img alt="" className="block max-w-none size-full" src={imgFrame3} />
          </div>
        </div>
        <div className="absolute inset-[31.21%_49.88%_57.88%_45.75%]" data-node-id="208:10993" data-name="Frame">
          <div className="absolute inset-[-75.14%_-75.05%]">
            <img alt="" className="block max-w-none size-full" src={imgFrame2} />
          </div>
        </div>
        <div className="absolute inset-[47.58%_29.61%_48.18%_68.69%]" data-node-id="208:10998" data-name="Frame">
          <div className="absolute inset-[-7.73%_-7.72%]">
            <img alt="" className="block max-w-none size-full" src={imgFrame3} />
          </div>
        </div>
        <div className="absolute inset-[40.3%_2.55%_48.79%_93.08%]" data-node-id="208:11001" data-name="Frame">
          <div className="absolute inset-[-75.14%_-75.05%]">
            <img alt="" className="block max-w-none size-full" src={imgFrame2} />
          </div>
        </div>
        <motion.div className="absolute inset-[-3.03%_98.79%_96.97%_-1.21%]" data-node-id="208:11012" style={{ "--motion-design-transform": "initial", "--motion-design-transform-inverse": "initial", "--motion-layout-transform": "translate(0px)" } as React.CSSProperties} data-name="Vector">
          <div className="absolute inset-[-135.25%_-135.08%]">
            <img alt="" className="block max-w-none size-full" src={imgVector8} />
          </div>
        </motion.div>
        <motion.div className="absolute inset-[-1.24%_99.5%_98.76%_-0.5%]" data-node-id="208:11019" style={{ "--motion-design-transform": "initial", "--motion-design-transform-inverse": "initial", "--motion-layout-transform": "translate(0px)" } as React.CSSProperties} data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
        </motion.div>
      </div>
      <div className="absolute contents left-[195px] top-[3502px]" data-node-id="208:11020" data-name="Mask group">
        <div className="absolute left-[195px] [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-size:34px_34px] size-[34px] top-[3502px]" data-node-id="208:11022" style={{ maskImage: `url("${imgGoogleSearch1}")` }} data-name="Google Search 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGoogleSearch2} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-white h-[4px] left-1/2 rounded-[3px] top-[4078px] w-[135px]" data-node-id="208:11023" data-name="矩形" />
      <div className="absolute h-[18px] left-[77px] top-[4022px] w-[22px]" data-node-id="208:11024">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
      </div>
      <div className="absolute inset-[98.29%_40%_1.27%_55.73%]" data-node-id="208:11034">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5} />
      </div>
      <div className="absolute h-[18px] left-[168px] top-[4022px] w-[12px]" data-node-id="208:11038" data-name="image 20">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage20} />
      </div>
      <div className="absolute contents left-[36px] top-[4022px]" data-node-id="208:11039">
        <div className="absolute bg-white left-[36px] rounded-[2px] size-[8.308px] top-[4022px]" data-node-id="208:11040" />
        <div className="absolute bg-white left-[45.69px] rounded-[2px] size-[8.308px] top-[4022px]" data-node-id="208:11041" />
        <div className="absolute bg-white left-[36px] rounded-[2px] size-[8.308px] top-[4031.69px]" data-node-id="208:11042" />
        <div className="absolute bg-white left-[45.69px] rounded-[2px] size-[8.308px] top-[4031.69px]" data-node-id="208:11043" />
      </div>
      <div className="absolute inset-[98.29%_62.4%_1.27%_32.27%]" data-node-id="208:11044">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
      </div>
      <div className="absolute h-[18px] left-[258px] right-[113px] top-[4022px]" data-node-id="208:11048">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup8} />
      </div>
      <div className="absolute left-[35px] size-[20px] top-[3907px]" data-node-id="208:11052">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup16} />
      </div>
      <div className="absolute left-[70px] size-[20px] top-[3907px]" data-node-id="208:11055">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup17} />
      </div>
      <div className="absolute inset-[81.38%_83.47%_18.04%_11.2%]" data-node-id="208:11058">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup28} />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[19/21] left-[11.47%] right-[83.73%] top-[calc(50%+1473px)]" data-node-id="208:11062" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector10} />
      </div>
      <div className="absolute inset-[73.92%_36.27%_25.73%_60%]" data-node-id="208:11063">
        <div className="absolute inset-[-0.36%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup27} />
        </div>
      </div>
      <div className="absolute inset-[41.91%_34.4%_57.75%_61.87%]" data-node-id="208:11066">
        <div className="absolute inset-[-0.36%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup27} />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[186.3157958984375/186.3157958984375] left-[54.67%] right-[41.07%] top-[calc(50%-1970px)]" data-node-id="208:11069" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector11} />
      </div>
      <div className="absolute contents inset-[16.08%_10.93%_83.63%_85.87%]" data-node-id="208:11070" data-name="页面-2">
        <div className="absolute contents inset-[16.08%_10.93%_83.63%_85.87%]" data-node-id="208:11071" data-name="个人中心">
          <div className="absolute inset-[16.08%_10.93%_83.63%_85.87%]" data-node-id="208:11072" data-name="编组-16">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={img16} />
          </div>
        </div>
      </div>
      <div className="absolute inset-[16.08%_57.6%_83.63%_39.2%]" data-node-id="208:11076">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup13} />
      </div>
      <div className="absolute inset-[13.25%_59.47%_86.46%_37.33%]" data-node-id="208:11079">
        <div className="absolute inset-[-0.42%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup1} />
        </div>
      </div>
      <div className="absolute inset-[13.27%_15.47%_86.49%_81.87%]" data-node-id="208:11082">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup11} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[855px]" data-node-id="208:11085">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup36} />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[128.92849731445312/119.19869995117188] left-[9.33%] right-[87.2%] top-[calc(50%-1716px)]" data-node-id="208:11090" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector12} />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[199.99005126953125/199.9293975830078] left-[61.87%] right-[34.4%] top-[calc(50%-1716px)]" data-node-id="208:11091" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector13} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[2231px]" data-node-id="208:11092">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup36} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[1343px]" data-node-id="208:11097">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup36} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[2515px]" data-node-id="208:11102">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup36} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[3202px]" data-node-id="208:11107">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup36} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[3266px]" data-node-id="208:11112">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup36} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[3330px]" data-node-id="208:11117">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup36} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[3698px]" data-node-id="208:11122">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup36} />
      </div>
      <div className="absolute left-[236px] size-[16px] top-[68px]" data-node-id="208:11127">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup45} />
      </div>
      <div className="absolute inset-[30.52%_36.27%_69.13%_60%]" data-node-id="208:11132">
        <div className="absolute inset-[-0.36%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup27} />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[200/177.78671264648438] left-[84.8%] right-[9.87%] top-[calc(50%+1985px)]" data-node-id="208:11135" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector14} />
      </div>
      <div className="absolute h-[44px] left-0 top-0 w-[375px]" data-node-id="208:11136" data-name="Status Bar">
        <div className="absolute h-[16px] right-[14px] top-[15px] w-[68px]" data-node-id="I208:11136;0:49" data-name="Connections">
          <div className="absolute h-[12px] right-0 top-[2px] w-[25px]" data-node-id="I208:11136;0:51" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[6.25%_39.71%_0_29.41%]" data-node-id="I208:11136;0:55" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute h-[12px] right-[50px] top-[2px] w-[18px]" data-node-id="I208:11136;0:60" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
        </div>
        <div className="absolute h-[23px] left-[21px] top-[8px] w-[56px]" data-node-id="I208:11136;0:66" data-name="Time">
          <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] leading-[normal] left-[0.33px] not-italic right-[1.67px] text-[15px] text-center text-white top-[calc(50%-5.5px)] tracking-[-0.3333px]" data-node-id="I208:11136;0:67">
            9:27
          </p>
        </div>
      </div>
    </div>
  );
}
