import { Stage, Phone } from "./UtilityPreviewFrame";

const notes = [
  ["정수기 필터 교체", "6개월 지났음. 이번 주말에 꼭 교체하기."],
  ["친구 생일 선물", "다음 주 친구 생일이다. 캔들 세트나 작은 화분을 준비해두자."],
  ["냉장고 정리", "유통기한 지난 제품들 정리하고, 필요한 장보기 리스트도 같이 정리하자."],
  ["오늘 회의 요약", "신제품 일정과 마케팅 협업 방향 정리. 관련 내용은 메모로 남겨두기."],
  ["책에서 본 문장", "작은 습관이 큰 변화를 만든다."],
];
function Note({ note }) { return <div className="spark-note"><b>{note[0]}</b><p>{note[1]}</p><small>2025-06-27 17:02</small></div>; }
export default function SparkNotePreview() {
  return <Stage theme="spark-preview"><Phone><div className="spark-toolbar">♨</div><div className="spark-grid">{notes.map(note => <Note key={note[0]} note={note} />)}</div></Phone><div className="utility-detail spark-detail"><div className="spark-toolbar">♨</div><Note note={notes[0]} /></div></Stage>;
}

