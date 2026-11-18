import "./LifestylePreviews.css";

// 기존 커버의 샘플 금액을 표시합니다. 현재 서비스 가격이나 전체 합계를 의미하지 않습니다.
const subscriptions = [["티","티빙","10,900","#194d65"],["쿠","쿠팡 플레이","4,990","#d5cd10"],["디","디즈니+","9,900","#58745b"],["유","유튜브 프리미엄","10,900","#95d800"],["넷","넷플릭스","17,000","#c5af09"],["애","애플 뮤직","8,900","#4d9296"],["벅","벅스","9,900","#1898b1"]];
function SubscriptionList({ items }) {
  return items.map(([initial, name, price, color]) => <div className="sj-row" key={name}><span style={{background:color}}>{initial}</span><b>{name}</b><small>₩{price}</small></div>);
}
function Summary() { return <><h3 className="sj-title">Subscriptions</h3><div className="sj-total"><b>₩154,080</b><span>per month</span></div></>; }
export default function SubscriptionJournalPreview() {
  return <div className="preview lp-preview sj-preview" aria-hidden="true"><div className="lp-stage"><div className="lp-phone"><div className="lp-camera"><i /></div><div className="sj-content"><Summary /><SubscriptionList items={subscriptions} /></div></div><div className="sj-detail"><Summary /><SubscriptionList items={subscriptions.slice(0,2)} /></div></div></div>;
}
