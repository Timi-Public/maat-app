import imgImage67 from "../../public/assets/figma/ac73d.png";
import imgPolygonLogoSvgRealCompanyAlphabetLetterPLogo2 from "../../public/assets/figma/cac17.png";
import imgUsdc1 from "../../public/assets/figma/70448.png";
import imgImage20 from "../../public/assets/figma/c2411.png";
import imgRectangle157 from "../../public/assets/figma/e8964.svg";
import imgLine29 from "../../public/assets/figma/84433.svg";
import imgPolygonLogoSvgRealCompanyAlphabetLetterPLogo1 from "../../public/assets/figma/f178a.svg";
import imgMaskGroup from "../../public/assets/figma/a6657.svg";
import imgEllipse14 from "../../public/assets/figma/3337a.svg";
import imgGroup50 from "../../public/assets/figma/201b3.svg";
import imgVector from "../../public/assets/figma/73cef.svg";
import imgGroup45 from "../../public/assets/figma/2916d.svg";
import imgGroup25 from "../../public/assets/figma/44cec.svg";
import img16 from "../../public/assets/figma/deddb.svg";
import imgGroup13 from "../../public/assets/figma/5ced0.svg";
import imgGroup61 from "../../public/assets/figma/d25ac.svg";
import imgVector1 from "../../public/assets/figma/46535.svg";
import imgGroup64 from "../../public/assets/figma/0b037.svg";
import imgGroup39 from "../../public/assets/figma/3fead.svg";
import imgVector2 from "../../public/assets/figma/ba5e7.svg";
import imgGroup4 from "../../public/assets/figma/5876c.svg";
import imgGroup5 from "../../public/assets/figma/81acd.svg";
import imgGroup7 from "../../public/assets/figma/157ae.svg";
import imgGroup8 from "../../public/assets/figma/51334.svg";
import imgVector3 from "../../public/assets/figma/e86e0.svg";
import imgBattery from "../../public/assets/figma/3d361.svg";
import imgWifi from "../../public/assets/figma/52928.svg";
import imgCellularConnection from "../../public/assets/figma/fd94c.svg";
import { useRef, useState } from 'react';

function TokenomicsMetricCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const scrollToPage = (page: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: [0, 350, track.scrollWidth - track.clientWidth][page], behavior: 'smooth' });
  };
  const updatePage = (event: { currentTarget: HTMLDivElement }) => {
    const track = event.currentTarget;
    setActivePage(Math.max(0, Math.min(2, Math.round(track.scrollLeft / 350))));
  };
  const metrics = [
    { label:'流通市值', value:'2.33M', unit:'USDC' },
    { label:'24H 成交额', value:'43.7M', unit:'USDC' },
    { label:'流通供应量', value:'5,290,944', unit:'MAAT' },
    { label:'流动性池规模', value:'47,428', unit:'USDC' },
    { label:'当前总供应量', value:'20,787,580', unit:'MAAT' },
    { label:'累计销毁量', value:'212,420', unit:'MAAT' },
  ];

  return <div className="maat-tokenomics-metric-carousel" aria-label="Tokenomics 统计">
    <div ref={trackRef} className="maat-tokenomics-metric-track" onScroll={updatePage} role="region" tabIndex={0} aria-label="代币统计，可左右滑动">
      {metrics.map((metric) => <div key={metric.label} className="maat-overview-card maat-overview-metric maat-tokenomics-metric-card">
        <span className="maat-overview-label">{metric.label}</span>
        <strong>{metric.value}</strong>
        <span className="maat-overview-unit">{metric.unit}</span>
      </div>)}
    </div>
    <div className="maat-tokenomics-metric-pages" role="group" aria-label="统计卡片页码">
      {[0, 1, 2].map((page) => <button key={page} type="button" aria-label={`第 ${page + 1} 组统计`} aria-pressed={activePage === page} data-active={activePage === page} onClick={() => scrollToPage(page)} />)}
    </div>
  </div>;
}

export default function DiscoverOverflowBehavior() {
  return (
    <div className="bg-white relative size-full" data-node-id="208:11896" data-name="Discover (overflow behavior)">
      <div className="absolute contents left-0 top-0" data-node-id="208:11897" data-name="Mask group">
        <div className="absolute bg-black h-[2937px] left-0 top-0 w-[375px]" data-node-id="208:11898" />
        <div className="absolute bg-[rgba(0,0,0,0.6)] h-[294.732px] left-0 [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-position:0px_-60.42px] [mask-size:375px_2164.066px] top-[60.42px] w-[375px]" data-node-id="208:11900" style={{ maskImage: `url("${imgRectangle157}")` }} />
      </div>
      <div className="-translate-x-1/2 absolute bg-[#0a0a0a] border border-[#2c2c2d] border-solid h-[30px] left-[calc(50%+123.5px)] rounded-[16px] top-[59px] w-[88px]" data-node-id="208:11901" />
      <p className="[word-break:break-word] absolute capitalize font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[287px] text-[12px] text-white top-[67px] whitespace-nowrap" data-node-id="208:11902" style={{ fontVariationSettings: '"wdth" 100' }}>
        连接钱包
      </p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[436px] left-1/2 rounded-[16px] top-[109px] w-[335px]" data-node-id="208:11903" />
      <div className="absolute h-[26px] left-[35px] rounded-[20px] top-[457px] w-[60px]" data-node-id="208:11904" style={{ backgroundImage: "linear-gradient(246.57130533484414deg, rgb(47, 150, 247) 0%, rgb(41, 103, 255) 100%)" }} />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[14px] left-[35px] text-[14px] text-white top-[129px] tracking-[-0.2344px] whitespace-nowrap" data-node-id="208:11905" style={{ fontVariationSettings: '"wdth" 100' }}>
        Tokenomics
      </p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[471px] left-1/2 rounded-[16px] top-[675px] w-[335px]" data-node-id="208:11906" />
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[186px] left-1/2 rounded-[16px] top-[1166px] w-[335px]" data-node-id="208:11907" />
      <div className="absolute h-[44px] left-[35px] rounded-[30px] top-[1082px] w-[305px]" data-node-id="208:11908" style={{ backgroundImage: "linear-gradient(62.335630528755885deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[16px] left-[150px] text-[14px] text-white top-[1096px] whitespace-nowrap" data-node-id="208:11909" style={{ fontVariationSettings: '"wdth" 100' }}>
        预览兑换
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[915px] uppercase whitespace-nowrap" data-node-id="208:11910" style={{ fontVariationSettings: '"wdth" 100' }}>
        兑换率
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+42.5px)] text-[10px] text-white top-[915px] uppercase whitespace-nowrap" data-node-id="208:11911" style={{ fontVariationSettings: '"wdth" 100' }}>
        1 MAAT = 0.0128 USDC
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[942px] uppercase whitespace-nowrap" data-node-id="208:11912" style={{ fontVariationSettings: '"wdth" 100' }}>
        MAAT 交易税
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[12px] top-[1230px] uppercase whitespace-nowrap" data-node-id="208:11913" style={{ fontVariationSettings: '"wdth" 100' }}>
        钱包 MAAT 余额
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[0] left-[calc(50%+61.5px)] text-[#c1c1c1] text-[0px] top-[1230px] uppercase whitespace-nowrap" data-node-id="208:11914" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="font-['SF_Pro:Medium'] font-[510] leading-[14px] text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
          1,000.00
        </span>
        <span className="leading-[14px] text-[12px]">{` `}</span>
        <span className="leading-[14px] text-[10px]">MAAT</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[12px] top-[1274px] uppercase whitespace-nowrap" data-node-id="208:11915" style={{ fontVariationSettings: '"wdth" 100' }}>
        项目 MAAT 余额
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[0] left-[calc(50%+39.5px)] text-[#c1c1c1] text-[0px] top-[1274px] uppercase whitespace-nowrap" data-node-id="208:11916" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="font-['SF_Pro:Medium'] font-[510] leading-[14px] text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
          875.00
        </span>
        <span className="leading-[14px] text-[12px]">{` `}</span>
        <span className="leading-[14px] text-[10px]">MAAT</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[12px] top-[1318px] whitespace-nowrap" data-node-id="208:11917" style={{ fontVariationSettings: '"wdth" 100' }}>
        Agent 消耗详情
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%+128.5px)] text-[#2967ff] text-[12px] top-[1274px] whitespace-nowrap" data-node-id="208:11918" style={{ fontVariationSettings: '"wdth" 100' }}>
        充值
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[0] left-[calc(50%+69.5px)] text-[10px] text-white top-[942px] uppercase whitespace-nowrap" data-node-id="208:11919" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[12px]">{`5% `}</span>
        <span className="leading-[12px] text-[#c1c1c1]">(97.54 MAAT)</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[969px] uppercase whitespace-nowrap" data-node-id="208:11920" style={{ fontVariationSettings: '"wdth" 100' }}>
        价格影响
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+123.5px)] text-[10px] text-white top-[969px] uppercase whitespace-nowrap" data-node-id="208:11921" style={{ fontVariationSettings: '"wdth" 100' }}>
        0.12%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[996px] uppercase whitespace-nowrap" data-node-id="208:11922" style={{ fontVariationSettings: '"wdth" 100' }}>
        最少获得
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+80.5px)] text-[10px] text-white top-[996px] uppercase whitespace-nowrap" data-node-id="208:11923" style={{ fontVariationSettings: '"wdth" 100' }}>
        1,843.98 MAAT
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1023px] uppercase whitespace-nowrap" data-node-id="208:11924" style={{ fontVariationSettings: '"wdth" 100' }}>
        预计网络费
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+108.5px)] text-[10px] text-white top-[1023px] uppercase whitespace-nowrap" data-node-id="208:11925" style={{ fontVariationSettings: '"wdth" 100' }}>
        0.02 POL
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1050px] uppercase whitespace-nowrap" data-node-id="208:11926" style={{ fontVariationSettings: '"wdth" 100' }}>
        滑点容忍度
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+108.5px)] text-[10px] text-white top-[1050px] uppercase whitespace-nowrap" data-node-id="208:11927" style={{ fontVariationSettings: '"wdth" 100' }}>
        0.5%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[14px] left-[35px] text-[14px] text-white top-[695px] tracking-[-0.2344px] whitespace-nowrap" data-node-id="208:11928" style={{ fontVariationSettings: '"wdth" 100' }}>
        Quick Swap
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[14px] left-[35px] text-[14px] text-white top-[1186px] tracking-[-0.2344px] whitespace-nowrap" data-node-id="208:11929" style={{ fontVariationSettings: '"wdth" 100' }}>
        Agent Token Consumption
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[14px] left-[79px] text-[12px] text-white top-[173px] whitespace-nowrap" data-node-id="208:11930" style={{ fontVariationSettings: '"wdth" 100' }}>
        MAAT
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+114.5px)] text-[#c1c1c1] text-[10px] top-[174px] whitespace-nowrap" data-node-id="208:11931" style={{ fontVariationSettings: '"wdth" 100' }}>
        Polygon
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[10px] text-white top-[217px] whitespace-nowrap" data-node-id="208:11932" style={{ fontVariationSettings: '"wdth" 100' }}>
        发行价格
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+11.5px)] text-[10px] text-white top-[217px] whitespace-nowrap" data-node-id="208:11933" style={{ fontVariationSettings: '"wdth" 100' }}>
        当前价格
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%-132.5px)] text-[10px] text-white top-[464px] whitespace-nowrap" data-node-id="208:11934" style={{ fontVariationSettings: '"wdth" 100' }}>
        24H
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-47.5px)] text-[#c1c1c1] text-[10px] top-[464px] whitespace-nowrap" data-node-id="208:11935" style={{ fontVariationSettings: '"wdth" 100' }}>
        7D
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+31.5px)] text-[#c1c1c1] text-[10px] top-[464px] whitespace-nowrap" data-node-id="208:11936" style={{ fontVariationSettings: '"wdth" 100' }}>
        30D
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+113.5px)] text-[#c1c1c1] text-[10px] top-[464px] whitespace-nowrap" data-node-id="208:11937" style={{ fontVariationSettings: '"wdth" 100' }}>
        ALL
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[44.5px] text-[20px] text-center text-white top-[239px] whitespace-nowrap" data-node-id="208:11938" style={{ fontVariationSettings: '"wdth" 100' }}>
        --
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[199px] text-[#34b15a] text-[20px] top-[239px] whitespace-nowrap" data-node-id="208:11939" style={{ fontVariationSettings: '"wdth" 100' }}>
        0.0128
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+88.5px)] text-[#c1c1c1] text-[10px] top-[245px] uppercase whitespace-nowrap" data-node-id="208:11940" style={{ fontVariationSettings: '"wdth" 100' }}>
        USDC
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[0] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[276px] uppercase whitespace-nowrap" data-node-id="208:11941" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[12px]">{`11-09 03:34 UTC+8 `}</span>
        <span className="leading-[12px] text-white">0.0128 USDC</span>
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-125.5px)] text-[#c1c1c1] text-[10px] top-[245px] uppercase whitespace-nowrap" data-node-id="208:11942" style={{ fontVariationSettings: '"wdth" 100' }}>
        USDC
      </p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[574px] left-1/2 rounded-[16px] top-[1372px] w-[335px]" data-node-id="208:11943" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[35px] text-[#2a73fd] text-[10px] top-[1610px] whitespace-nowrap" data-node-id="208:11944" style={{ fontVariationSettings: '"wdth" 100' }}>
        最近销毁记录
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[125px] text-[#c1c1c1] text-[10px] top-[1610px] whitespace-nowrap" data-node-id="208:11945" style={{ fontVariationSettings: '"wdth" 100' }}>
        最近回购记录
      </p>
      <div className="absolute h-0 left-[35px] top-[1635px] w-[305px]" data-node-id="208:11946">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute bg-[#2967ff] h-[2px] left-[35px] top-[1632px] w-[41px]" data-node-id="208:11947" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1564px] uppercase whitespace-nowrap" data-node-id="208:11948" style={{ fontVariationSettings: '"wdth" 100' }}>
        累计销毁占初始发行量
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1650px] uppercase whitespace-nowrap" data-node-id="208:11949" style={{ fontVariationSettings: '"wdth" 100' }}>
        销毁时间
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-32.5px)] text-[#c1c1c1] text-[10px] top-[1650px] uppercase whitespace-nowrap" data-node-id="208:11950" style={{ fontVariationSettings: '"wdth" 100' }}>
        数量 / 来源
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1694px] uppercase whitespace-nowrap" data-node-id="208:11951" style={{ fontVariationSettings: '"wdth" 100' }}>
        11-09 03:50
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-32.5px)] text-[#c1c1c1] text-[10px] top-[1716px] uppercase whitespace-nowrap" data-node-id="208:11952" style={{ fontVariationSettings: '"wdth" 100' }}>
        交易税
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+112.5px)] text-[#c1c1c1] text-[10px] top-[1650px] uppercase whitespace-nowrap" data-node-id="208:11953" style={{ fontVariationSettings: '"wdth" 100' }}>
        链上记录
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+121.5px)] text-[#c1c1c1] text-[10px] top-[1564px] uppercase whitespace-nowrap" data-node-id="208:11954" style={{ fontVariationSettings: '"wdth" 100' }}>
        0.99%
      </p>
      <div className="absolute bg-[#2a2a2c] h-[4px] left-[35px] rounded-[10px] top-[1586px] w-[305px]" data-node-id="208:11955" />
      <div className="absolute bg-gradient-to-r from-[#2967ff] h-[4px] left-[35px] rounded-[10px] to-[#2f96f7] top-[1586px] w-[5px]" data-node-id="208:11956" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[14px] left-[35px] text-[14px] text-white top-[1392px] tracking-[-0.2344px] whitespace-nowrap" data-node-id="208:11957" style={{ fontVariationSettings: '"wdth" 100' }}>{`Buyback & Burn`}</p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[475px] left-1/2 rounded-[16px] top-[1966px] w-[335px]" data-node-id="208:11958" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[14px] left-[35px] text-[14px] text-white top-[1986px] tracking-[-0.2344px] whitespace-nowrap" data-node-id="208:11959" style={{ fontVariationSettings: '"wdth" 100' }}>
        Token Allocation
      </p>
      <div className="-translate-x-1/2 absolute bg-[#111] border border-[#262527] border-solid h-[358px] left-1/2 rounded-[16px] top-[2461px] w-[335px]" data-node-id="208:11960" />
      <div className="absolute h-0 left-[35px] top-[2544px] w-[305px]" data-node-id="208:11961">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[2588px] w-[305px]" data-node-id="208:11962">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[2632px] w-[305px]" data-node-id="208:11963">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[2676px] w-[305px]" data-node-id="208:11964">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Semibold'] font-[590] leading-[14px] left-[35px] text-[14px] text-white top-[2481px] tracking-[-0.2344px] whitespace-nowrap" data-node-id="208:11965" style={{ fontVariationSettings: '"wdth" 100' }}>{`Contract & Security`}</p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1426px] whitespace-nowrap" data-node-id="208:11966" style={{ fontVariationSettings: '"wdth" 100' }}>
        初始发行总量
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1500px] whitespace-nowrap" data-node-id="208:11967" style={{ fontVariationSettings: '"wdth" 100' }}>
        累计销毁量
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-111.5px)] text-[#c1c1c1] text-[10px] top-[2083px] whitespace-nowrap" data-node-id="208:11968" style={{ fontVariationSettings: '"wdth" 100' }}>
        MAAT
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[92.5px] text-[20px] text-center text-white top-[1448px] whitespace-nowrap" data-node-id="208:11969" style={{ fontVariationSettings: '"wdth" 100' }}>
        21,000,000
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[35px] text-[20px] text-white top-[1522px] whitespace-nowrap" data-node-id="208:11970" style={{ fontVariationSettings: '"wdth" 100' }}>
        207,142
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[69px] text-[20px] text-white top-[2055px] whitespace-nowrap" data-node-id="208:11971" style={{ fontVariationSettings: '"wdth" 100' }}>
        21M
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-66.5px)] text-[#c1c1c1] text-[10px] top-[1528px] uppercase whitespace-nowrap" data-node-id="208:11972" style={{ fontVariationSettings: '"wdth" 100' }}>
        USDC
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-0.5px)] text-[#c1c1c1] text-[10px] top-[1500px] whitespace-nowrap" data-node-id="208:11973" style={{ fontVariationSettings: '"wdth" 100' }}>
        当前总供应量
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[187px] text-[20px] text-white top-[1522px] whitespace-nowrap" data-node-id="208:11974" style={{ fontVariationSettings: '"wdth" 100' }}>
        20,792,858
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+123.5px)] text-[#c1c1c1] text-[10px] top-[1528px] uppercase whitespace-nowrap" data-node-id="208:11975" style={{ fontVariationSettings: '"wdth" 100' }}>
        USDC
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-29.5px)] text-[#c1c1c1] text-[10px] top-[1454px] uppercase whitespace-nowrap" data-node-id="208:11976" style={{ fontVariationSettings: '"wdth" 100' }}>
        MAAT
      </p>
      <div className="absolute h-0 left-[35px] top-[498px] w-[305px]" data-node-id="208:11977">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[513px] whitespace-nowrap" data-node-id="208:11978" style={{ fontVariationSettings: '"wdth" 100' }}>
        数据来源 Uniswap
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+25.5px)] text-[#c1c1c1] text-[10px] top-[513px] whitespace-nowrap" data-node-id="208:11979" style={{ fontVariationSettings: '"wdth" 100' }}>
        更新于 11-03 00:53 UTC+8
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+66.5px)] text-[#c1c1c1] text-[10px] top-[696px] whitespace-nowrap" data-node-id="208:11980" style={{ fontVariationSettings: '"wdth" 100' }}>
        通过 Uniswap 执行
      </p>
      <div className="absolute left-[20px] top-[565px] w-[335px] z-[2]">
        <TokenomicsMetricCarousel />
      </div>
      <div className="-translate-x-1/2 absolute bg-[#1c1c1f] h-[78px] left-1/2 rounded-[10px] top-[729px] w-[305px]" data-node-id="208:11991" />
      <div className="-translate-x-1/2 absolute bg-[#1c1c1f] h-[78px] left-1/2 rounded-[10px] top-[817px] w-[305px]" data-node-id="208:11992" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-137.5px)] text-[#c1c1c1] text-[10px] top-[832px] whitespace-nowrap" data-node-id="208:11993" style={{ fontVariationSettings: '"wdth" 100' }}>
        预计获得
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[94px] text-[20px] text-center text-white top-[858px] whitespace-nowrap" data-node-id="208:11994" style={{ fontVariationSettings: '"wdth" 100' }}>
        1,853.24
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+42.5px)] text-[#c1c1c1] text-[10px] top-[832px] whitespace-nowrap" data-node-id="208:11995" style={{ fontVariationSettings: '"wdth" 100' }}>
        余额 1,000.00 MAAT
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-137.5px)] text-[#c1c1c1] text-[10px] top-[744px] whitespace-nowrap" data-node-id="208:11996" style={{ fontVariationSettings: '"wdth" 100' }}>
        支付
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[22px] left-[50px] text-[20px] text-white top-[770px] whitespace-nowrap" data-node-id="208:11997" style={{ fontVariationSettings: '"wdth" 100' }}>
        25
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+41.5px)] text-[#c1c1c1] text-[10px] top-[744px] whitespace-nowrap" data-node-id="208:11998" style={{ fontVariationSettings: '"wdth" 100' }}>
        余额 3,250.00 USDC
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[307.5px] text-[12px] text-center text-white top-[774px] whitespace-nowrap" data-node-id="208:11999" style={{ fontVariationSettings: '"wdth" 100' }}>
        USDC
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[307.5px] text-[12px] text-center text-white top-[862px] whitespace-nowrap" data-node-id="208:12000" style={{ fontVariationSettings: '"wdth" 100' }}>
        MAAT
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[16px] left-[calc(50%-32.5px)] text-[14px] text-white top-[1692px] uppercase whitespace-nowrap" data-node-id="208:12001" style={{ fontVariationSettings: '"wdth" 100' }}>
        98 Maat
      </p>
      <div className="absolute h-0 left-[35px] top-[1809px] w-[305px]" data-node-id="208:12002">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[1743px] w-[305px]" data-node-id="208:12003">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[1677px] w-[305px]" data-node-id="208:12004">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+27.5px)] text-[#c1c1c1] text-[10px] top-[2024px] uppercase whitespace-nowrap" data-node-id="208:12005" style={{ fontVariationSettings: '"wdth" 100' }}>
        生态激励
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-134.5px)] text-[#c1c1c1] text-[10px] top-[2203px] uppercase whitespace-nowrap" data-node-id="208:12006" style={{ fontVariationSettings: '"wdth" 100' }}>
        生态激励
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-134.5px)] text-[#c1c1c1] text-[10px] top-[2223px] uppercase whitespace-nowrap" data-node-id="208:12007" style={{ fontVariationSettings: '"wdth" 100' }}>
        48 个月线性释放
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+27.5px)] text-[#c1c1c1] text-[10px] top-[2054px] uppercase whitespace-nowrap" data-node-id="208:12008" style={{ fontVariationSettings: '"wdth" 100' }}>
        流动性
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+27.5px)] text-[#c1c1c1] text-[10px] top-[2084px] uppercase whitespace-nowrap" data-node-id="208:12009" style={{ fontVariationSettings: '"wdth" 100' }}>
        团队
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%+27.5px)] text-[#c1c1c1] text-[10px] top-[2114px] uppercase whitespace-nowrap" data-node-id="208:12010" style={{ fontVariationSettings: '"wdth" 100' }}>
        储备
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+130.5px)] text-[10px] text-white top-[2024px] uppercase whitespace-nowrap" data-node-id="208:12011" style={{ fontVariationSettings: '"wdth" 100' }}>
        40%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+130.5px)] text-[10px] text-white top-[2054px] uppercase whitespace-nowrap" data-node-id="208:12012" style={{ fontVariationSettings: '"wdth" 100' }}>
        25%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+130.5px)] text-[10px] text-white top-[2084px] uppercase whitespace-nowrap" data-node-id="208:12013" style={{ fontVariationSettings: '"wdth" 100' }}>
        20%
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+132.5px)] text-[10px] text-white top-[2114px] uppercase whitespace-nowrap" data-node-id="208:12014" style={{ fontVariationSettings: '"wdth" 100' }}>
        15%
      </p>
      <div className="absolute h-0 left-[35px] top-[1875px] w-[305px]" data-node-id="208:12015">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[2150px] w-[305px]" data-node-id="208:12016">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[2250px] w-[305px]" data-node-id="208:12017">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[2312px] w-[305px]" data-node-id="208:12018">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[2374px] w-[305px]" data-node-id="208:12019">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[18px] left-[35px] text-[12px] text-white top-[2165px] whitespace-nowrap" data-node-id="208:12020" style={{ fontVariationSettings: '"wdth" 100' }}>
        代币释放计划
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[241px] text-[12px] text-white top-[2212px] whitespace-nowrap" data-node-id="208:12021" style={{ fontVariationSettings: '"wdth" 100' }}>
        8,400,000 MAAT
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-134.5px)] text-[#c1c1c1] text-[10px] top-[2265px] uppercase whitespace-nowrap" data-node-id="208:12022" style={{ fontVariationSettings: '"wdth" 100' }}>
        流动性
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-134.5px)] text-[#c1c1c1] text-[10px] top-[2285px] uppercase whitespace-nowrap" data-node-id="208:12023" style={{ fontVariationSettings: '"wdth" 100' }}>
        上线时分批配置
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[242px] text-[12px] text-white top-[2274px] whitespace-nowrap" data-node-id="208:12024" style={{ fontVariationSettings: '"wdth" 100' }}>
        5,250,000 MAAT
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-134.5px)] text-[#c1c1c1] text-[10px] top-[2327px] uppercase whitespace-nowrap" data-node-id="208:12025" style={{ fontVariationSettings: '"wdth" 100' }}>
        团队
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-134.5px)] text-[#c1c1c1] text-[10px] top-[2347px] uppercase whitespace-nowrap" data-node-id="208:12026" style={{ fontVariationSettings: '"wdth" 100' }}>
        锁定 12 个月，36 个月释放
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[242px] text-[12px] text-white top-[2336px] whitespace-nowrap" data-node-id="208:12027" style={{ fontVariationSettings: '"wdth" 100' }}>
        4,200,000 MAAT
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-134.5px)] text-[#c1c1c1] text-[10px] top-[2389px] uppercase whitespace-nowrap" data-node-id="208:12028" style={{ fontVariationSettings: '"wdth" 100' }}>
        储备
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-134.5px)] text-[#c1c1c1] text-[10px] top-[2409px] uppercase whitespace-nowrap" data-node-id="208:12029" style={{ fontVariationSettings: '"wdth" 100' }}>
        按治理决议释放
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[14px] left-[244px] text-[12px] text-white top-[2398px] whitespace-nowrap" data-node-id="208:12030" style={{ fontVariationSettings: '"wdth" 100' }}>
        3,150,000 MAAT
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[12px] top-[2515px] uppercase whitespace-nowrap" data-node-id="208:12031" style={{ fontVariationSettings: '"wdth" 100' }}>
        所属公链
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%+106.5px)] text-[#c1c1c1] text-[12px] top-[2515px] whitespace-nowrap" data-node-id="208:12032" style={{ fontVariationSettings: '"wdth" 100' }}>
        Polygon
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[12px] top-[2559px] uppercase whitespace-nowrap" data-node-id="208:12033" style={{ fontVariationSettings: '"wdth" 100' }}>
        代币合约
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%+94.5px)] text-[#c1c1c1] text-[12px] top-[2559px] whitespace-nowrap" data-node-id="208:12034" style={{ fontVariationSettings: '"wdth" 100' }}>
        待部署
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[12px] top-[2603px] uppercase whitespace-nowrap" data-node-id="208:12035" style={{ fontVariationSettings: '"wdth" 100' }}>
        合约验证
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%+92.5px)] text-[#c1c1c1] text-[12px] top-[2603px] whitespace-nowrap" data-node-id="208:12036" style={{ fontVariationSettings: '"wdth" 100' }}>
        待部署验证
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[12px] top-[2647px] uppercase whitespace-nowrap" data-node-id="208:12037" style={{ fontVariationSettings: '"wdth" 100' }}>
        合约权限
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%+116.5px)] text-[#c1c1c1] text-[12px] top-[2647px] whitespace-nowrap" data-node-id="208:12038" style={{ fontVariationSettings: '"wdth" 100' }}>
        待部署
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[12px] top-[2691px] uppercase whitespace-nowrap" data-node-id="208:12039" style={{ fontVariationSettings: '"wdth" 100' }}>
        安全审计
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%+116.5px)] text-[#c1c1c1] text-[12px] top-[2691px] whitespace-nowrap" data-node-id="208:12040" style={{ fontVariationSettings: '"wdth" 100' }}>
        待发布
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[12px] top-[2739px] uppercase whitespace-nowrap" data-node-id="208:12041" style={{ fontVariationSettings: '"wdth" 100' }}>
        审计报告
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[2787px] uppercase whitespace-nowrap" data-node-id="208:12042" style={{ fontVariationSettings: '"wdth" 100' }}>
        在区块链浏览器查看
      </p>
      <div className="absolute h-0 left-[35px] top-[2720px] w-[305px]" data-node-id="208:12043">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[2772px] w-[305px]" data-node-id="208:12044">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute contents left-[20px] top-[61px]" data-node-id="208:12045">
        <div className="absolute left-[20px] rounded-[8px] size-[30px] top-[61px]" data-node-id="208:12046" style={{ backgroundImage: "linear-gradient(45deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
        <div className="absolute left-[26.18px] size-[17.647px] top-[67.18px]" data-node-id="208:12047" data-name="image 67">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage67} />
        </div>
      </div>
      <div className="absolute contents left-[35px] top-[163px]" data-node-id="208:12048">
        <div className="absolute left-[35px] rounded-[8px] size-[34px] top-[163px]" data-node-id="208:12049" style={{ backgroundImage: "linear-gradient(45deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
        <div className="absolute left-[42px] size-[20px] top-[170px]" data-node-id="208:12050" data-name="image 67">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage67} />
        </div>
      </div>
      <div className="absolute contents left-[168px] top-[792px]" data-node-id="208:12051">
        <div className="absolute left-[168px] rounded-[12px] size-[40px] top-[792px]" data-node-id="208:12052" style={{ backgroundImage: "linear-gradient(45deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
      </div>
      <div className="absolute contents left-[260px] top-[859px]" data-node-id="208:12053">
        <div className="absolute left-[260px] rounded-[100px] size-[20px] top-[859px]" data-node-id="208:12054" style={{ backgroundImage: "linear-gradient(45deg, rgb(41, 103, 255) 0%, rgb(47, 150, 247) 100%)" }} />
        <div className="absolute left-[265px] size-[10px] top-[864px]" data-node-id="208:12055" data-name="image 67">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage67} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Bold'] font-bold leading-[18px] left-[60px] text-[16px] text-white top-[67px] uppercase whitespace-nowrap" data-node-id="208:12056" style={{ fontVariationSettings: '"wdth" 100' }}>
        MAAT
      </p>
      <div className="absolute contents left-[283px] top-[173px]" data-node-id="208:12057" data-name="Mask group">
        <div className="absolute left-[283px] [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-size:14px_14px] size-[14px] top-[173px]" data-node-id="208:12059" style={{ maskImage: `url("${imgPolygonLogoSvgRealCompanyAlphabetLetterPLogo1}")` }} data-name="Polygon Logo  SVG  Real Company  Alphabet, Letter P Logo 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPolygonLogoSvgRealCompanyAlphabetLetterPLogo2} />
        </div>
      </div>
      <div className="absolute left-[260px] size-[20px] top-[771px]" data-node-id="208:12060" data-name="usdc的搜索结果_百度图片搜索 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUsdc1} />
      </div>
      <div className="absolute h-0 left-[35px] top-[1259px] w-[305px]" data-node-id="208:12061">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <div className="absolute h-0 left-[35px] top-[1303px] w-[305px]" data-node-id="208:12062">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine29} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1760px] uppercase whitespace-nowrap" data-node-id="208:12063" style={{ fontVariationSettings: '"wdth" 100' }}>
        11-09 03:50
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-32.5px)] text-[#c1c1c1] text-[10px] top-[1782px] uppercase whitespace-nowrap" data-node-id="208:12064" style={{ fontVariationSettings: '"wdth" 100' }}>
        交易税
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[16px] left-[calc(50%-32.5px)] text-[14px] text-white top-[1758px] uppercase whitespace-nowrap" data-node-id="208:12065" style={{ fontVariationSettings: '"wdth" 100' }}>
        98 Maat
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1826px] uppercase whitespace-nowrap" data-node-id="208:12066" style={{ fontVariationSettings: '"wdth" 100' }}>
        11-09 03:50
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-32.5px)] text-[#c1c1c1] text-[10px] top-[1848px] uppercase whitespace-nowrap" data-node-id="208:12067" style={{ fontVariationSettings: '"wdth" 100' }}>
        交易税
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[16px] left-[calc(50%-32.5px)] text-[14px] text-white top-[1824px] uppercase whitespace-nowrap" data-node-id="208:12068" style={{ fontVariationSettings: '"wdth" 100' }}>
        98 Maat
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-152.5px)] text-[#c1c1c1] text-[10px] top-[1892px] uppercase whitespace-nowrap" data-node-id="208:12069" style={{ fontVariationSettings: '"wdth" 100' }}>
        11-09 03:50
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[12px] left-[calc(50%-32.5px)] text-[#c1c1c1] text-[10px] top-[1914px] uppercase whitespace-nowrap" data-node-id="208:12070" style={{ fontVariationSettings: '"wdth" 100' }}>
        交易税
      </p>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[16px] left-[calc(50%-32.5px)] text-[14px] text-white top-[1890px] uppercase whitespace-nowrap" data-node-id="208:12071" style={{ fontVariationSettings: '"wdth" 100' }}>
        98 Maat
      </p>
      <div className="absolute left-[35px] size-[110px] top-[2020px]" data-node-id="208:12072" data-name="Mask group">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMaskGroup} />
      </div>
      <div className="absolute bg-[#4a98ff] left-[195px] rounded-[2px] size-[10px] top-[2025px]" data-node-id="208:12080" />
      <div className="absolute bg-[#4a98ff] left-[35px] rounded-[2px] size-[10px] top-[2204px]" data-node-id="208:12081" />
      <div className="absolute bg-[#3bae95] left-[195px] rounded-[2px] size-[10px] top-[2055px]" data-node-id="208:12082" />
      <div className="absolute bg-[#3bae95] left-[35px] rounded-[2px] size-[10px] top-[2266px]" data-node-id="208:12083" />
      <div className="absolute bg-[#65b0d3] left-[195px] rounded-[2px] size-[10px] top-[2085px]" data-node-id="208:12084" />
      <div className="absolute bg-[#65b0d3] left-[35px] rounded-[2px] size-[10px] top-[2328px]" data-node-id="208:12085" />
      <div className="absolute bg-[#d2bc82] left-[195px] rounded-[2px] size-[10px] top-[2115px]" data-node-id="208:12086" />
      <div className="absolute bg-[#d2bc82] left-[35px] rounded-[2px] size-[10px] top-[2390px]" data-node-id="208:12087" />
      <div className="absolute contents left-[272px] top-[2515px]" data-node-id="208:12088" data-name="Mask group">
        <div className="absolute left-[272px] [mask-mode:alpha] [mask-composite:intersect] [mask-clip:no-clip] [mask-repeat:no-repeat] [mask-size:14px_14px] size-[14px] top-[2515px]" data-node-id="208:12090" style={{ maskImage: `url("${imgPolygonLogoSvgRealCompanyAlphabetLetterPLogo1}")` }} data-name="Polygon Logo  SVG  Real Company  Alphabet, Letter P Logo 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPolygonLogoSvgRealCompanyAlphabetLetterPLogo2} />
        </div>
      </div>
      <div className="absolute bg-[#1c1c1f] h-[22px] left-[210px] rounded-[20px] top-[2735px] w-[60px]" data-node-id="208:12091" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+32.5px)] text-[#c1c1c1] text-[10px] top-[2740px] uppercase whitespace-nowrap" data-node-id="208:12092" style={{ fontVariationSettings: '"wdth" 100' }}>
        查看PDF
      </p>
      <div className="absolute bg-[#1c1c1f] h-[22px] left-[280px] rounded-[20px] top-[2735px] w-[60px]" data-node-id="208:12093" />
      <p className="[word-break:break-word] absolute font-['SF_Pro:Medium'] font-[510] leading-[12px] left-[calc(50%+102.5px)] text-[#c1c1c1] text-[10px] top-[2740px] uppercase whitespace-nowrap" data-node-id="208:12094" style={{ fontVariationSettings: '"wdth" 100' }}>
        审计网址
      </p>
      <div className="absolute bg-white h-[54px] left-[20px] rounded-[40px] top-[2849px] w-[266px]" data-node-id="208:12095" />
      <div className="absolute left-[25px] size-[40px] top-[2856px]" data-node-id="208:12096">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse14} />
      </div>
      <div className="absolute bg-white left-[301px] rounded-[40px] size-[54px] top-[2849px]" data-node-id="208:12097" />
      <div className="-translate-x-1/2 absolute bg-white h-[4px] left-1/2 rounded-[10px] top-[2923px] w-[135px]" data-node-id="208:12098" />
      <div className="absolute inset-[10.49%_9.33%_84.95%_9.33%]" data-node-id="208:12099">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup50} />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[186.3157958984375/186.3157958984375] left-[54.67%] right-[41.07%] top-[calc(50%-1394.5px)]" data-node-id="208:12105" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute left-[236px] size-[16px] top-[66px]" data-node-id="208:12106">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup45} />
      </div>
      <div className="absolute inset-[37.35%_40%_62.17%_56.27%]" data-node-id="208:12111">
        <div className="absolute inset-[-0.36%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup25} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro:Regular'] font-normal leading-[14px] left-[calc(50%+141.5px)] text-[12px] text-white top-[1318px] tracking-[-0.2344px] uppercase whitespace-nowrap" data-node-id="208:12114" style={{ fontVariationSettings: '"wdth" 100' }}>
        →
      </p>
      <div className="absolute contents inset-[19.95%_10.93%_79.64%_85.87%]" data-node-id="208:12115" data-name="页面-2">
        <div className="absolute contents inset-[19.95%_10.93%_79.64%_85.87%]" data-node-id="208:12116" data-name="个人中心">
          <div className="absolute inset-[19.95%_10.93%_79.64%_85.87%]" data-node-id="208:12117" data-name="编组-16">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={img16} />
          </div>
        </div>
      </div>
      <div className="absolute inset-[19.95%_57.6%_79.64%_39.2%]" data-node-id="208:12121">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup13} />
      </div>
      <div className="absolute inset-[17.5%_63.73%_82.16%_33.6%]" data-node-id="208:12124">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup61} />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[16/18] flex items-center justify-center left-[48%] right-[47.73%] top-[calc(50%-656.5px)]" data-node-id="208:12127" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
          </div>
        </div>
      </div>
      <div className="absolute inset-[35.75%_9.33%_63.84%_86.93%]" data-node-id="208:12128">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup64} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[1698px]" data-node-id="208:12134">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup39} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[1764px]" data-node-id="208:12139">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup39} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[1830px]" data-node-id="208:12144">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup39} />
      </div>
      <div className="absolute left-[316px] size-[24px] top-[1896px]" data-node-id="208:12149">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup39} />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[125/125] left-[87.47%] right-[9.33%] top-[calc(50%+1097.5px)]" data-node-id="208:12154" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
      </div>
      <div className="absolute inset-[94.93%_61.87%_4.73%_35.47%]" data-node-id="208:12155">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup61} />
      </div>
      <div className="absolute h-[18px] left-[77px] top-[2867px] w-[22px]" data-node-id="208:12158">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
      </div>
      <div className="absolute inset-[97.62%_40%_1.77%_55.73%]" data-node-id="208:12168">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5} />
      </div>
      <div className="absolute h-[18px] left-[168px] top-[2867px] w-[12px]" data-node-id="208:12172" data-name="image 20">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage20} />
      </div>
      <div className="absolute contents left-[36px] top-[2867px]" data-node-id="208:12173">
        <div className="absolute bg-white left-[36px] rounded-[2px] size-[8.308px] top-[2867px]" data-node-id="208:12174" />
        <div className="absolute bg-white left-[45.69px] rounded-[2px] size-[8.308px] top-[2867px]" data-node-id="208:12175" />
        <div className="absolute bg-white left-[36px] rounded-[2px] size-[8.308px] top-[2876.69px]" data-node-id="208:12176" />
        <div className="absolute bg-white left-[45.69px] rounded-[2px] size-[8.308px] top-[2876.69px]" data-node-id="208:12177" />
      </div>
      <div className="absolute inset-[97.62%_62.4%_1.77%_32.27%]" data-node-id="208:12178">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
      </div>
      <div className="absolute h-[18px] left-[258px] right-[113px] top-[2867px]" data-node-id="208:12182">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup8} />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[200/177.78671264648438] left-[84.8%] right-[9.87%] top-[calc(50%+1407.5px)]" data-node-id="208:12186" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
      </div>
      <div className="absolute h-[44px] left-0 top-0 w-[375px]" data-node-id="208:12187" data-name="Status Bar">
        <div className="absolute h-[16px] right-[14px] top-[15px] w-[68px]" data-node-id="I208:12187;0:49" data-name="Connections">
          <div className="absolute h-[12px] right-0 top-[2px] w-[25px]" data-node-id="I208:12187;0:51" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
          <div className="absolute inset-[6.25%_39.71%_0_29.41%]" data-node-id="I208:12187;0:55" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute h-[12px] right-[50px] top-[2px] w-[18px]" data-node-id="I208:12187;0:60" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
        </div>
        <div className="absolute h-[23px] left-[21px] top-[8px] w-[56px]" data-node-id="I208:12187;0:66" data-name="Time">
          <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold'] leading-[normal] left-[0.33px] not-italic right-[1.67px] text-[15px] text-center text-white top-[calc(50%-5.5px)] tracking-[-0.3333px]" data-node-id="I208:12187;0:67">
            9:27
          </p>
        </div>
      </div>
    </div>
  );
}
