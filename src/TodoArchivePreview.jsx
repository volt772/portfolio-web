import "./TodoArchivePreview.css";

const tasks = [
  ["이불빨래", "빨래방에서~", "D Day", "today"],
  ["습기제거제 갈아주기", "굳어버리기 전에 꼭 갈아주기!", "D-12", "upcoming"],
  ["⚾ 야구장", "LG vs 두산✨", "D-5", "upcoming"],
  ["수강신청", "이번엔 꼭 성공하리라..", "D-4", "upcoming"],
  ["차 정기점검", "엔진오일 갈아야하나...", "D-2", "upcoming"],
  ["한의원", "침맞으러~", "D+2", "past"],
  ["필터 갈아주기", "새로운 필터로 갈아야함!", "D+4", "past"],
];

// 같은 목록 컴포넌트를 폰 화면과 오른쪽 확대 패널에서 재사용합니다.
function TaskList({ items }) {
  return items.map(([title, memo, due, state]) => (
    <div className={`ta-task ta-${state}`} key={title}>
      <div><b>{title}</b><small>{memo}</small></div><span>{due}</span>
    </div>
  ));
}

export default function TodoArchivePreview() {
  return (
    <div className="preview ta-preview" aria-hidden="true">
      <div className="ta-stage">
        <div className="ta-phone">
          <div className="ta-header"><i className="ta-camera" /><span className="ta-tools">▽　⚙</span><b>오늘 끝나는 체크리스트가<br />1개 있어요.</b><span className="ta-add">☷+</span></div>
          <div className="ta-list"><TaskList items={tasks} /></div>
        </div>
        <div className="ta-detail"><TaskList items={tasks.slice(0, 3)} /></div>
      </div>
    </div>
  );
}
