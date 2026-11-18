// 원본의 메뉴·조회·목록·상세입력 구조만 참고한 장식용 화면입니다.
// 대학명, 이름, 학번, 사번 등 실제 식별 정보는 포함하지 않습니다.
export default function AcademicPreview() {
  return (
    <div className="academic-demo">
      <div className="academic-top"><b>종합정보시스템</b><span>학사행정　 ⚙</span></div>
      <div className="academic-layout">
        <aside className="academic-menu">
          <b>▦ Menu</b>
          <div className="academic-search">메뉴 검색　⌕</div>
          <span>학사관리　⌄</span>
          <div className="academic-submenu"><b>수업관리</b><span>교과목 조회</span><span>수강 관리</span></div>
          <span>성적관리　⌄</span>
          <span>교직원 업무　⌄</span>
        </aside>
        <div className="academic-workspace">
          <div className="academic-title">▣ 교과목 조회 <span>×</span></div>
          <div className="academic-content">
            <div className="academic-query"><span>학년도 <b>2026⌄</b></span><span>학기 <b>1학기⌄</b></span><em>조회</em></div>
            <div className="academic-section"><b>▪ 교과목 목록</b><span>총 3건</span></div>
            <div className="academic-grid">
              <table>
                <thead><tr><th>No</th><th>교과목</th><th>구분</th><th>학점</th><th>상태</th></tr></thead>
                <tbody>
                  {["자료구조", "데이터베이스", "소프트웨어공학"].map((name, index) => (
                    <tr key={name}><td>{index + 1}</td><td>{name}</td><td>전공</td><td>3</td><td>개설</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="academic-section"><b>▪ 교과목 상세</b><span>신규　 저장</span></div>
            <div className="academic-details">
              <span>교과목명 <b>자료구조</b></span><span>이수구분 <b>전공⌄</b></span>
              <span>학점 <b>3</b></span><span>개설상태 <b>개설⌄</b></span>
              <span className="academic-note">비고 <b> </b></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
