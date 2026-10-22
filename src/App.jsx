import { useRef, useState } from "react";
import "./App.css";
import DesktopPreview from "./DesktopPreview";
import projects from "./projects.json";
import { compareProjects } from "./projectSort";

// 탭 표시 순서. 프로젝트 정보와 이미지 경로는 projects.json에서 관리합니다.
const categories = ["Mobile", "Desktop", "Backend"];
const currentYear = new Date().getFullYear();

// 카드 상단: 등록된 커버 이미지를 우선 사용하고, 데스크톱은 샘플 화면으로 대체합니다.
function Preview({ project }) {
  if (project.image)
    return (
      <div className="preview">
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} 실행 화면`}
        />
      </div>
    );
  if (project.category === "Desktop") {
    return <DesktopPreview project={project} />;
  }
  // 이미지가 없는 백엔드 등의 카드는 설명과 링크만 표시합니다.
  return null;
}

function App() {
  const [active, setActive] = useState("Mobile");
  // 키보드로 탭을 전환할 때 실제 버튼으로 포커스를 이동하기 위한 참조입니다.
  const tabRefs = useRef([]);
  // 선택한 카테고리만 표시합니다. project 값은 문자열 내림차순 → 숫자 내림차순입니다.
  const visible = projects
    .filter((project) => project.category === active)
    .sort(compareProjects);

  // 좌우 방향키는 탭을 순환하고, Home/End는 처음/마지막 탭으로 이동합니다.
  function onTabKey(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % categories.length;
    else if (event.key === "ArrowLeft")
      next = (index + categories.length - 1) % categories.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = categories.length - 1;
    else return;
    event.preventDefault();
    setActive(categories[next]);
    tabRefs.current[next].focus();
  }
  return (
    <div className="portfolio">
      <header>
        <div>
          <h1>
            JHN<span>.</span>
          </h1>
          <p>Software Developer</p>
        </div>
        <span className="header-label">PORTFOLIO</span>
      </header>
      <main>
        {/* 선택 상태와 탭/패널 연결을 보조기기에도 전달합니다. */}
        <div className="tabs" role="tablist" aria-label="프로젝트 카테고리">
          {categories.map((category, index) => (
            <button
              key={category}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              id={`tab-${category}`}
              aria-controls={`panel-${category}`}
              aria-selected={active === category}
              tabIndex={active === category ? 0 : -1}
              onKeyDown={(event) => onTabKey(event, index)}
              onClick={() => setActive(category)}
            >
              {category}
              <span>
                {projects.filter((p) => p.category === category).length}
              </span>
            </button>
          ))}
        </div>
        <div className="section-caption">
          <span>작은 아이디어를, 쓸모 있는 서비스로.</span>
          {/*<span>샘플 프로젝트</span>*/}
        </div>
        {/* 정렬된 프로젝트를 공통 카드 형식으로 렌더링합니다. 열 개수는 App.css에서 지정합니다. */}
        <section
          className="project-grid"
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          key={active}
        >
          {visible.map((project) => (
            <article
              className={`project-card ${active === "Backend" ? "backend-card" : ""}`}
              key={project.id}
            >
              <Preview project={project} />
              <div className="card-content">
                {active === "Backend" && (
                  <span className="code-icon" aria-hidden="true">
                    &lt;/&gt;
                  </span>
                )}
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {/* 백엔드는 GitHub 주소가 있으면 링크를, 없으면 준비 중 문구를 표시합니다. */}
                {active === "Backend" &&
                  (project.github ? (
                    <a
                      className="repo-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub에서 보기 ↗
                    </a>
                  ) : (
                    <span className="repo-pending">GitHub 링크 준비 중</span>
                  ))}
              </div>
            </article>
          ))}
        </section>
      </main>
      <footer>
        <span>© {currentYear} JeongHwaeNam</span>
        <span>꾸준히 만들고, 조금씩 개선합니다.</span>
      </footer>
    </div>
  );
}
export default App;
