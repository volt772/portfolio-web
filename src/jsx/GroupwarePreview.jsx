import "../css/GroupwarePreview.css";

// 커버 이미지 대신 두 안드로이드 화면을 JSX로 표현합니다. 내용은 장식용 샘플입니다.
function Phone({ title, children, calendar = false }) {
  return (
    <div className={`gw-phone ${calendar ? "gw-phone-calendar" : ""}`}>
      <div className="gw-status"><span>12:10</span><i /><span>▮▮ 83%</span></div>
      <div className="gw-toolbar"><span>☰</span><b>{title}</b><span>⌕</span></div>
      {children}
    </div>
  );
}

export default function GroupwarePreview() {
  const mails = [
    ["M", "메일 알림", "주간 업무 소식을 확인하세요", "#f5cd32"],
    ["팀", "프로젝트 팀", "이번 주 프로젝트 일정 공유", "#e94284"],
    ["개", "개발팀", "로그인 화면 검토 요청", "#2aa59d"],
    ["J", "Jira", "새로운 업무가 등록되었습니다", "#6cb86b"],
    ["인", "인사팀", "사내 교육 일정 안내", "#ee795b"],
    ["기", "기획팀", "회의 자료를 공유드립니다", "#7098ca"],
  ];
  return (
    <div className="preview gw-preview" aria-hidden="true">
      <div className="gw-stage">
        <Phone title="전체메일">
          {mails.map(([initial, sender, subject, color], index) => (
            <div className="gw-mail" key={sender}>
              <span className="gw-avatar" style={{ background: color }}>{initial}</span>
              <div><b>{sender}</b><p>{subject}</p></div>
              <aside><small>{index === 0 ? "11:52" : "어제"}</small><span>☆</span></aside>
            </div>
          ))}
        </Phone>
        <Phone title="2022-12" calendar>
          <div className="gw-calendar">
            {["일", "월", "화", "수", "목", "금", "토"].map(day => <b key={day}>{day}</b>)}
            {Array.from({ length: 35 }, (_, index) => {
              const date = index - 3;
              return <span key={index} className={date === 19 ? "gw-selected" : date < 1 ? "gw-muted" : ""}>{date < 1 ? date + 30 : date}<i>{date > 0 && date % 3 === 0 ? "•••" : ""}</i></span>;
            })}
          </div>
          <div className="gw-agenda"><b>12-19 (월)</b>
            {["주간 업무 회의", "프로젝트 일정 검토", "팀별 진행 상황 공유"].map((title, index) => (
              <div key={title}><strong>{title}</strong><span>{10 + index}:00 AM – {10 + index}:30 AM</span></div>
            ))}
          </div>
        </Phone>
      </div>
    </div>
  );
}
