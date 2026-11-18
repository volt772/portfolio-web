import "../css/WebPreview.css";
import AcademicPreview from "./AcademicPreview";

import MailPreview from "./MailPreview";
import JoblogWebPreview from "./JoblogWebPreview";

// 브라우저 창과 배경을 공유하고 프로젝트 id에 맞는 웹서비스 화면을 표시합니다.
export default function WebPreview({ project }) {
  return (
    <div className={`preview web-preview ${project.theme}`} aria-hidden="true">
      <div className="web-browser">
        <div className="web-browser-bar">
          <span>● ● ●</span>
          <div>{project.title}</div>
          <span>＋</span>
        </div>
        {project.id === "mailplug-web" ? <MailPreview />
          : project.id === "joblog-web" ? <JoblogWebPreview />
          : project.id === "academic-system" ? <AcademicPreview />
          : null}
      </div>
    </div>
  );
}
