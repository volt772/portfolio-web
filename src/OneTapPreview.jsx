import "./OneTapPreview.css";

// 원본의 휴대폰 캐릭터를 SVG로 단순화하여 외부 이미지 없이 표시합니다.
function Mascot({ timing }) {
  return (
    <svg className="ot-mascot" viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="57" fill="#fff5e6" stroke="#262626" strokeWidth="2" />
      <ellipse cx="60" cy="101" rx="25" ry="4" fill="#ded8ce" />
      <rect x="40" y="24" width="40" height="76" rx="7" fill="#fffaf0" stroke="#303030" strokeWidth="3" />
      <path d="M52 28h16M53 94h14" stroke="#303030" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="51" cy="57" rx="2.5" ry={timing ? 2 : 4} fill="#303030" /><ellipse cx="69" cy="57" rx="2.5" ry={timing ? 2 : 4} fill="#303030" />
      <path d="M51 68Q60 78 69 68" stroke="#303030" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="47" cy="64" rx="4" ry="2" fill="#f5b1a8" /><ellipse cx="73" cy="64" rx="4" ry="2" fill="#f5b1a8" />
      <path d="M40 70Q27 80 40 84M80 70Q93 80 80 84" stroke="#303030" strokeWidth="2" />
    </svg>
  );
}

function GamePhone({ timing = false }) {
  return (
    <div className={`ot-phone ${timing ? "ot-timing" : "ot-reaction"}`}>
      <div className="ot-camera"><i /></div>
      <div className="ot-game">
        <Mascot timing={timing} />
        <div className="ot-message">
          {timing ? <><p>숨겨진 목표 시간이 있어요.<br />타이밍에 맞춰 버튼을 눌러보세요!</p><span className="ot-tap">지금이다!</span></> : <p>곧 버튼이 나타날 거예요!<br />어디서 뿅 하고 나올지 기대해봐요 🎯</p>}
        </div>
      </div>
      <div className="ot-nav"><span className={!timing ? "ot-active" : ""}>☝{!timing && " 반응"}</span><span className={timing ? "ot-active" : ""}>◷{timing && " 타이밍"}</span><span>⊙</span><b>ⓘ</b></div>
    </div>
  );
}

// 두 게임 모드의 장식용 미리보기이며 버튼은 동작하지 않습니다.
export default function OneTapPreview() {
  return <div className="preview ot-preview" aria-hidden="true"><div className="ot-stage"><GamePhone /><GamePhone timing /></div></div>;
}
