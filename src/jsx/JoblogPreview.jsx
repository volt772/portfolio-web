import "../css/RemainingMobilePreviews.css";

// 모바일 잡로그 전용 샘플입니다. Web 탭의 채용지원관리웹과는 별개입니다.
const applications = [
  ["번개장터", "응답대기중", "알바천국", "mint"],
  ["하이브", "면접예정", "피플앤잡", "sky"],
  ["번개장터", "입사완료", "사람인", "lime"],
  ["배달의민족", "서류제출 예정", "링크드인", "gray"],
  ["좋은회사", "무응답", "로켓펀치", "sky"],
];
export default function JoblogPreview() {
  return <div className="preview rm-preview jl-preview" aria-hidden="true"><div className="rm-stage">
    <div className="rm-phone"><div className="rm-camera"><i /></div><div className="jl-content"><div className="jl-toolbar">⌕　☰　▧</div>
      {applications.map(([company, status, source, color], index) => <div className="jl-application" key={`${company}-${index}`}><div className="jl-badges"><span className={`jl-${color}`}>{status}</span><span className="jl-source">{source}</span></div><div className="jl-company"><b>{company}</b><small>{index + 1}일 지남</small></div></div>)}<span className="jl-add">＋</span>
    </div></div>
    <div className="rm-phone rm-secondary jl-detail"><div className="rm-camera"><i /></div><div className="jl-content"><div className="jl-back">←</div><h3>배달의민족</h3>
      {[["지역", "서울"], ["지원 경로", "링크드인"], ["진행 상태", "서류제출 예정"], ["지원일", "2025-08-04"]].map(([label, value]) => <div className="jl-field" key={label}><b>{label}</b><span>{value}</span></div>)}<p>지원 동기 강조 필요</p><div className="jl-actions"><span>삭제</span><span>수정</span></div>
    </div></div>
  </div></div>;
}
