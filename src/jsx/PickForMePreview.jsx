import "../css/RemainingMobilePreviews.css";

const choices = ["🍽 음식", "☕ 음료", "🚌 교통", "✅ 할 일", "🎬 콘텐츠", "🏠 집에서", "📍 장소", "👔 옷차림", "🎁 선물", "🎵 음악", "📺 시청", "🧑‍🤝‍🧑 누구랑", "🧠 결정", "📅 시간대", "🔋 에너지", "🎯 운세", "🧹 청소", "🎓 과목"];
function Choices({ items }) {
  return <div className="pf-choices">{items.map(item => <span key={item}>{item}</span>)}</div>;
}
// 선택 화면과 주요 카테고리 확대 패널. 실제 랜덤 선택을 실행하는 버튼은 아닙니다.
export default function PickForMePreview() {
  return <div className="preview rm-preview pf-preview" aria-hidden="true"><div className="rm-stage">
    <div className="rm-phone"><div className="rm-camera"><i /></div><div className="pf-dice-area"><svg viewBox="0 0 60 60" className="pf-dice"><rect x="5" y="5" width="50" height="50" rx="12" fill="#f7f7f5" stroke="#ccc" strokeWidth="2" />{[[17,17],[43,17],[30,30],[17,43],[43,43]].map(([x,y], index) => <circle key={index} cx={x} cy={y} r="4" fill={index === 2 ? "#fa6845" : "#454545"} />)}</svg></div><Choices items={choices} /></div>
    <div className="pf-detail"><Choices items={choices.slice(0, 7).concat(choices[8])} /></div>
  </div></div>;
}
