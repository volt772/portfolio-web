// 실제 스크린샷 대신 JSX와 App.css로 그리는 데스크톱 프로그램 미리보기입니다.
// 입력창과 버튼은 장식용이며 동작하지 않으므로 aria-hidden으로 보조기기에서 제외합니다.
export default function DesktopPreview({ project }) {
  return (
    <div
      className={`preview desktop-preview ${project.theme}`}
      aria-hidden="true"
    >
      {/* 두 프로그램이 공유하는 창 테두리와 제목 표시줄 */}
      <div className="desktop-window">
        <div className="window-bar">
          <span>● ● ●</span>
          {project.title}
        </div>
        {/* projects.json의 id에 따라 화면을 선택하고, 미등록 id는 제목만 표시합니다. */}
        {project.id === "outlook-auto-config" ? (
          <div className="outlook-demo">
            {/* 아웃룩 메일 화면을 배경으로 계정 설정 창을 겹쳐 표시합니다. */}
            <div className="mail-client-header"><b className="outlook-mark">O</b><strong>Outlook</strong><span>메일 · 일정 · 연락처</span></div>
            <div className="mail-client-layout">
              <aside><b>받은 편지함 <span>3</span></b><span>보낸 편지함</span><span>임시 보관함</span><span>지운 편지함</span></aside>
              <div className="mail-client-list"><b>받은 편지함</b><div>팀 주간 일정 안내<small>오늘 09:30</small></div><div>프로젝트 자료 공유<small>오늘 09:12</small></div></div>
            </div>
            {/* 이메일 주소 입력과 자동 설정 버튼을 표현한 샘플 창 */}
            <div className="account-dialog">
              <div className="account-dialog-title"><span className="account-icon">✉</span><div><strong>메일 계정 자동 설정</strong><small>회사 이메일로 간편하게 연결하세요.</small></div></div>
              <div className="mock-label">이메일 주소</div>
              <div className="mock-input">name@company.com<span>│</span></div>
              <div className="mock-primary">계정 자동 설정 <span>→</span></div>
              <div className="account-hint"><span>✓</span> 메일 서버 설정을 자동으로 찾아 연결합니다.</div>
            </div>
          </div>
        ) : project.id === "messenger" ? (
          <div className="messenger-demo">
            {/* 메신저 왼쪽: 프로필과 대화 목록 */}
            <aside className="conversation-list">
              <div className="messenger-profile"><span className="chat-avatar self">나</span><div><b>내 프로필</b><small><i /> 온라인</small></div></div>
              <div className="mock-search">⌕ 이름 또는 대화 검색</div>
              <div className="conversation active"><span className="chat-avatar">김</span><div><b>김민수</b><small>자료 공유드립니다.</small></div><em>2</em></div>
              <div className="conversation"><span className="chat-avatar team">팀</span><div><b>프로젝트 팀</b><small>내일 회의에서 만나요!</small></div></div>
              <div className="conversation"><span className="chat-avatar colleague">이</span><div><b>이지은</b><small>네, 감사합니다.</small></div></div>
            </aside>
            {/* 메신저 오른쪽: 선택한 상대와의 대화, 첨부 파일, 입력 영역 */}
            <div className="chat-panel">
              <div className="chat-header"><div><b>김민수</b><small><i /> 온라인</small></div><span>···</span></div>
              <div className="chat-messages"><div className="chat-date">오늘</div><div className="chat-bubble received">안녕하세요!<br />요청하신 자료 공유드립니다.</div><div className="chat-attachment"><span>▤</span><div><b>프로젝트 자료.pdf</b><small>PDF · 2.4 MB</small></div></div><div className="chat-bubble sent">확인했습니다.<br />감사합니다!</div><div className="chat-time">읽음 · 10:42</div></div>
              <div className="chat-composer"><span>메시지를 입력하세요</span><b>➤</b></div>
            </div>
          </div>
        ) : <div className="desktop-fallback">{project.title}</div>}
      </div>
    </div>
  );
}
