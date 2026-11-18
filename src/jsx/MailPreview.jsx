// 첨부 화면의 구조를 단순화한 장식용 미리보기입니다. 실제 메일/지원 데이터가 아닙니다.
export default function MailPreview() {
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

