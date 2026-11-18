export default function JoblogWebPreview() {
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

