import { Stage, Phone } from "./UtilityPreviewFrame";
import "../css/TodoListPreview.css";

// 목록과 수정 화면을 재현한 정적인 썸네일입니다.
const groups = [
  { title: "진행 예정 (2)", tasks: [["월간 사용량 리포트 작성", "12월 31일 (토)"], ["신규 버전 배포 준비", "1월 3일 (화)"]] },
  { title: "진행 중 (1)", active: true, tasks: [["그룹웨어 앱 오류 수정", "12월 29일 (목)"]] },
  { title: "완료 (2)", done: true, tasks: [["회의록 정리 및 공유", "12월 27일 (화)"], ["앱 스토어 버전 등록", "12월 26일 (월)"]] },
];
export default function TodoListPreview() {
  return <Stage theme="todo-list-preview">
    <Phone><div className="tl-header">☰ <b>할 일</b><span>⌕ ⋮</span></div><div className="tl-tabs"><b>전체</b><span>내 할 일</span><span>공유됨</span></div>
      <div className="tl-list">{groups.map(group => <section className={`tl-group ${group.active ? "tl-active" : ""}`} key={group.title}><h3>{group.title}<span>⌃</span></h3>{group.tasks.map(([title,date]) => <div className="tl-task" key={title}><i className={group.done ? "tl-checked" : ""}>{group.done ? "✓" : ""}</i><div><b>{title}</b><small>▦ {date}</small>{group.active && <div className="tl-progress"><span/><small>70%</small></div>}</div><span className="tl-person">♙</span></div>)}</section>)}<div className="tl-add">＋</div></div>
    </Phone>
    <Phone className="utility-second"><div className="tl-header">← <b>할 일 수정</b><span className="tl-blue">저장</span></div><div className="tl-form"><span>제목</span><div className="tl-field">그룹웨어 앱 오류 수정</div><span>메모</span><div className="tl-field tl-memo">로그 확인 후 원인 분석<br/>수정 및 검증 진행</div></div><div className="tl-setting">▦　마감일<span className="tl-blue">12월 29일 (목)</span></div><div className="tl-setting">◇　우선순위<span className="tl-badge tl-high">높음 ⌄</span></div><div className="tl-setting">☷　상태<span className="tl-badge">진행 중 ⌄</span></div><div className="tl-setting">♙　담당자<span>나 ⌄</span></div></Phone>
  </Stage>;
}
