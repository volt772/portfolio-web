import "../css/RemainingMobilePreviews.css";

const timers = [["31:45", "#859fa9"], ["37:47", "#ff7950"], ["36:49", "#ffbc19"], ["48:50", "#2bb9ed"], ["52:52", "#31b2a7"]];
// 폰과 확대 영역이 같은 타이머 표현을 공유합니다. 실제 카운트다운은 하지 않습니다.
function Timer({ timer: [time, color] }) {
  return <div className="lm-timer" style={{ "--timer-color": color }}><b>{time}</b><div><span>Ⅱ</span><span>■</span></div><i /></div>;
}
export default function LaundryTimerPreview() {
  return <div className="preview rm-preview lm-preview" aria-hidden="true"><div className="rm-stage">
    <div className="rm-phone"><div className="rm-camera"><i /></div><div className="lm-content"><div className="lm-reset">전체 리셋</div>{timers.map(timer => <Timer key={timer[0]} timer={timer} />)}<span className="lm-add">＋</span></div></div>
    <div className="lm-detail">{timers.slice(1, 3).map(timer => <Timer key={timer[0]} timer={timer} />)}</div>
  </div></div>;
}
