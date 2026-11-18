// 장식용 샘플 화면으로 실제 계정이나 대화를 표시하지 않습니다.
export default function OutlookAutoConfigPreview() {
  return (
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
  );
}
