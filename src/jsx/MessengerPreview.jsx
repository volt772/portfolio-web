// 장식용 샘플 화면으로 실제 계정이나 대화를 표시하지 않습니다.
export default function MessengerPreview() {
  return (
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
  );
}
