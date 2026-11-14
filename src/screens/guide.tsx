import { useState } from 'react';
import imgWhitepaperBackground from '../../public/assets/whitepaper-network-bg.png';

const guideTabs = ['Agent Trading', 'Liquidity Marketplace', 'Account'];

function ArrowRight() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M10 4l6 6-6 6" /></svg>;
}

function GuideLink({ children, onClick, quiet = false }) {
  return <button className={`maat-guide-link${quiet ? ' is-quiet' : ''}`} type="button" onClick={onClick}>{children}<ArrowRight /></button>;
}

function StepFlow() {
  return <div className="maat-guide-flow" aria-label="输入金额，确认参数，开始运行">
    <span>输入金额</span><i aria-hidden="true">→</i><span>确认参数</span><i aria-hidden="true">→</i><span>开始运行</span>
  </div>;
}

export default function Guide({ go, onBack }) {
  const [activeTab, setActiveTab] = useState(guideTabs[0]);

  return <main className="maat-guide-page">
    <header className="maat-guide-header maat-whitepaper-hero">
      <img className="maat-guide-header-bg" src={imgWhitepaperBackground} alt="" aria-hidden="true" />
      <button className="maat-guide-back" type="button" aria-label="返回" onClick={onBack}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
      </button>
      <h1>使用指南</h1>
      <svg className="maat-guide-book" viewBox="0 0 36 36" aria-hidden="true"><path d="M18 9c-4-3-9-3-13-2v22c5-1 9-1 13 2m0-22c4-3 9-3 13-2v22c-5-1-9-1-13 2m0-22v22" /></svg>
    </header>

    <nav className="maat-guide-tabs" aria-label="指南分类" role="tablist">
      {guideTabs.map((tab) => <button type="button" role="tab" aria-selected={activeTab === tab} data-active={activeTab === tab} key={tab} onClick={() => setActiveTab(tab)}>{tab}</button>)}
    </nav>

    {activeTab === 'Agent Trading' ? <div className="maat-guide-content">
      <section className="maat-guide-section">
        <h2>连接与浏览</h2>
        <p>不连接钱包也能浏览，查看账户需要连接。<br className="maat-guide-wide-break"/>在钱包 App 内打开会自动连接。网络为 Polygon。</p>
        <button type="button" className="maat-guide-primary" onClick={() => go('connect')}>连接钱包</button>
      </section>

      <section className="maat-guide-section">
        <h2>运行 Agent</h2>
        <StepFlow />
        <p>每个周期 8 小时，之后平仓 3–5 小时，结束后可提出或继续运行。平仓满 3 小时可提前继续，10 分钟后恢复。</p>
      </section>

      <section className="maat-guide-section">
        <h2>申请流动性服务</h2>
        <p>在市场发现中选择事件，确认锁定资金、服务费和期限后提交。进度在「我的服务」查看。</p>
      </section>

      <GuideLink onClick={() => go('liquidity')}>探索市场</GuideLink>

      <section className="maat-guide-section maat-guide-data">
        <h2>数据来源</h2>
        <p>行情、订单簿与成交来自 Polymarket 公开数据</p>
        <GuideLink quiet onClick={() => go('data')}>查看数据来源</GuideLink>
      </section>
    </div> : activeTab === 'Liquidity Marketplace' ? <div className="maat-guide-content">
      <section className="maat-guide-section">
        <h2>申请流动性服务</h2>
        <p>在市场发行中选择可申请事件，确认锁定资金、服务费和服务期限后提交申请。</p>
        <button type="button" className="maat-guide-primary" onClick={() => go('liquidity')}>探索市场</button>
      </section>
      <section className="maat-guide-section">
        <h2>查看我的服务</h2>
        <p>申请进度、服务状态和收益记录都可以在「我的服务」页面查看。</p>
        <GuideLink quiet onClick={() => go('service')}>查看服务详情</GuideLink>
      </section>
      <section className="maat-guide-section maat-guide-data"><h2>数据来源</h2><p>市场行情、订单簿与成交记录来自 Polymarket 公开数据。</p><GuideLink quiet onClick={() => go('data')}>查看数据来源</GuideLink></section>
    </div> : <div className="maat-guide-content">
      <section className="maat-guide-section">
        <h2>连接账户</h2>
        <p>连接 Polygon 网络上的钱包后，可查看账户资产、Agent 运行情况和资金活动。</p>
        <button type="button" className="maat-guide-primary" onClick={() => go('connect')}>连接钱包</button>
      </section>
      <section className="maat-guide-section">
        <h2>账户与资产</h2>
        <p>钱包资产与合约中资产分开展示。奖励、邀请关系和活动记录可以在账户页面查看。</p>
        <GuideLink quiet onClick={() => go('account')}>打开账户</GuideLink>
      </section>
      <section className="maat-guide-section maat-guide-data"><h2>数据来源</h2><p>市场数据来自 Polymarket，账户状态与交易记录来自 Polygon 链上数据。</p><GuideLink quiet onClick={() => go('data')}>查看数据来源</GuideLink></section>
    </div>}
  </main>;
}
