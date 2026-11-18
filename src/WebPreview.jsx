import "./WebPreview.css";

// 첨부 화면의 구조를 단순화한 장식용 미리보기입니다. 실제 메일/지원 데이터가 아닙니다.
function MailPreview() {
  const subjects = [
    "주간 업무 일정 안내",
    "프로젝트 자료 공유",
    "회의 일정 확인 요청",
    "새로운 소식을 전합니다",
    "서비스 이용 안내",
  ];
  return (
    <div className="web-mail">
      <div className="web-mail-rail">
        ✉<span>▣</span>
        <span>▦</span>
        <span>▤</span>
      </div>
      <aside className="web-mail-folders">
        <b className="web-mail-brand">기업메일</b>
        <div className="web-compose">메일쓰기</div>
        <span className="web-folder-active">
          받은메일함 <b>3</b>
        </span>
        <span>내게쓴메일함</span>
        <span>보낸메일함</span>
        <span>임시저장함</span>
        <span>스팸메일함</span>
        <span>휴지통</span>
      </aside>
      <div className="web-inbox">
        <div className="web-inbox-title">
          <b>받은메일함</b>
          <span>⌕</span>
        </div>
        <div className="web-mail-actions">□　삭제　 답장　 전달</div>
        {subjects.map((subject, index) => (
          <div className="web-mail-row" key={subject}>
            <span className="web-mail-star">{index === 1 ? "★" : "☆"}</span>
            <span className="web-mail-envelope">✉</span>
            <div>
              <b>{subject}</b>
            </div>
            <time>09:{30 + index * 5}</time>
          </div>
        ))}
      </div>
    </div>
  );
}

function JoblogPreview() {
  // 진행 상태별 배지 색상은 WebPreview.css에서 지정합니다.
  const statusClasses = {
    "서류탈락": "rejected",
    "진행중": "in-progress",
    "최종합격": "accepted",
  };
  const rows = [
    ["OOO", "지원접수", "11.18"],
    ["OOO", "진행중", "11.09"],
    ["OOO", "서류탈락", "10.17"],
    ["OOO", "지원접수", "08.12"],
    ["OOO", "최종합격", "08.11"],
  ];
  return (
    <div className="web-joblog">
      <div className="web-joblog-heading">
        <b>지원내역</b>
        <span>☰ 필터링⌄</span>
      </div>
      <div className="web-joblog-layout">
        <table className="web-joblog-table">
          <thead>
            <tr>
              <th>#</th>
              <th>기업명</th>
              <th>진행여부</th>
              <th>접수일</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([company, status, date], index) => (
              <tr key={`${company}-${date}`}>
                <td>{index + 1}</td>
                <td>{company}</td>
                <td>
                  <span
                    className={`web-job-status ${statusClasses[status] ?? ""}`}
                  >
                    {status}
                  </span>
                </td>
                <td>{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* 실제 입력 요소 대신 텍스트로 표현하여 탭 이동을 방해하지 않습니다. */}
        <aside className="web-job-filter">
          <div>
            <b>기본필터링</b>
            <span>내필터링</span>
          </div>
          <small>필터 체크/선택</small>
          {[
            "서류제출 예정",
            "지원접수",
            "전형진행중",
            "면접예정",
            "서류탈락",
            "최종합격",
            "응답대기중",
          ].map((label) => (
            <span key={label}>□ {label}</span>
          ))}
        </aside>
      </div>
    </div>
  );
}

// 브라우저 창과 배경을 공유하고 프로젝트 id에 맞는 웹서비스 화면을 표시합니다.
export default function WebPreview({ project }) {
  return (
    <div className={`preview web-preview ${project.theme}`} aria-hidden="true">
      <div className="web-browser">
        <div className="web-browser-bar">
          <span>● ● ●</span>
          <div>{project.title}</div>
          <span>＋</span>
        </div>
        {project.id === "mailplug-web" ? <MailPreview /> : <JoblogPreview />}
      </div>
    </div>
  );
}
