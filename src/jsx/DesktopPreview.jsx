import OutlookAutoConfigPreview from "./OutlookAutoConfigPreview";
import MessengerPreview from "./MessengerPreview";

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
          <OutlookAutoConfigPreview />
        ) : project.id === "messenger" ? (
          <MessengerPreview />
        ) : <div className="desktop-fallback">{project.title}</div>}
      </div>
    </div>
  );
}
