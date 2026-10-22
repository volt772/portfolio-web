import { useRef, useState } from "react";
import "./App.css";
import projects from "./projects.json";
import { compareProjects } from "./projectSort";

const categories = ["Mobile", "Desktop", "Backend"];
const labels = {
  weather: "잠실 야구장",
  mail: "받은 메일함",
  diary: "하루 기록",
  todo: "오늘의 할 일",
  money: "이번 달 가계부",
  fitness: "나의 활동",
};

function Screen({ type, secondary }) {
  return (
    <div className={`screen screen-${type}`}>
      <div className="status">
        <span>9:41</span>
        <span>▮▮ ▰</span>
      </div>
      <div className="island" />
      <div className="screen-content">
        <div className="screen-heading">
          {secondary ? "나의 기록" : labels[type]}
          <span>＋</span>
        </div>
        <div className="screen-date">10월 22일 목요일</div>
        {type === "weather" ? (
          <>
            <div className="weather-place">서울 · 잠실</div>
            <div className="sun" />
            <div className="temperature">24°</div>
            <div className="weather-caption">맑음 · 직관하기 좋은 날</div>
            <div className="mini-panel weather-hours">
              {["지금", "15시", "16시", "17시"].map((v, i) => (
                <div key={v}>
                  {v}
                  <b>☀</b>
                  <strong>{24 - i}°</strong>
                </div>
              ))}
            </div>
            <div className="mini-panel">
              오늘의 경기{" "}
              <strong className="match">
                두산 <span>VS</span> LG
              </strong>
              <small>잠실 야구장 · 18:30</small>
            </div>
          </>
        ) : type === "mail" ? (
          <>
            <div className="mail-tabs">
              전체 <span>안 읽음</span>
              <span>중요</span>
            </div>
            {[
              "주간 회의 안내",
              "프로젝트 일정 공유",
              "디자인 검토 요청",
              "이번 주 업무 보고",
              "새로운 소식을 전해요",
            ].map((v, i) => (
              <div className="mail-row" key={v}>
                <i>{["김", "이", "박", "최", "정"][i]}</i>
                <div>
                  <strong>{v}</strong>
                  <small>안녕하세요. 확인 부탁드립니다.</small>
                </div>
              </div>
            ))}
          </>
        ) : type === "diary" ? (
          <>
            <div className="diary-question">오늘 하루는 어땠나요?</div>
            <div className="moods">
              ☹ ◔ <b>☺</b> ◡
            </div>
            <div className="mini-panel diary-entry">
              <small>THURSDAY, OCTOBER 22</small>
              <h4>작지만 기분 좋은 순간</h4>
              <p>
                따뜻한 커피 한 잔과 함께
                <br />
                여유롭게 시작한 아침.
                <br />
                오늘도 나만의 속도로.
              </p>
              <div className="diary-art">☕</div>
            </div>
          </>
        ) : type === "todo" ? (
          <>
            <div className="task-summary">
              <strong>나의 하루</strong>
              <small>오늘도 하나씩, 천천히</small>
              <div className="progress">
                <i />
              </div>
              <small>2 / 5 완료</small>
            </div>
            {[
              "아침 스트레칭",
              "책 10페이지 읽기",
              "프로젝트 작업하기",
              "장보기",
              "내일 일정 정리",
            ].map((v, i) => (
              <div className={`task ${i < 2 ? "done" : ""}`} key={v}>
                <span>{i < 2 ? "✓" : "○"}</span>
                {v}
              </div>
            ))}
          </>
        ) : type === "money" ? (
          <>
            <div className="balance">
              <small>이번 달 지출</small>
              <strong>
                482,500<span>원</span>
              </strong>
              <small>지난달보다 12% 줄었어요</small>
            </div>
            <div className="bars">
              {[40, 65, 45, 90, 58, 76, 35].map((v, i) => (
                <i key={i} style={{ height: v + "%" }} />
              ))}
            </div>
            <h4>최근 내역</h4>
            {["커피 한 잔", "점심 식사", "교통비"].map((v, i) => (
              <div className="expense" key={v}>
                <span>{v}</span>
                <strong>−{[4500, 12000, 1500][i].toLocaleString()}원</strong>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="activity-ring">
              <div>
                <strong>
                  64<small>분</small>
                </strong>
                <span>오늘의 운동</span>
              </div>
            </div>
            <div className="activity-stats">
              <div>
                <strong>328</strong>
                <small>kcal</small>
              </div>
              <div>
                <strong>6,240</strong>
                <small>걸음</small>
              </div>
            </div>
            <h4>활동 기록</h4>
            <div className="mini-panel">
              아침 러닝 <small>32분 · 4.2km</small>
            </div>
            <div className="mini-panel">
              가벼운 스트레칭 <small>12분</small>
            </div>
          </>
        )}
      </div>
      <div className="phone-nav">
        ⌂ <span>▦</span> ♡ <span>○</span>
      </div>
    </div>
  );
}
function Preview({ project }) {
  if (project.image)
    return (
      <div className={`preview ${project.theme}`}>
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} 실행 화면`}
        />
      </div>
    );
  if (project.category === "Backend") return null;
  if (project.category === "Desktop")
    return (
      <div
        className={`preview desktop-preview ${project.theme}`}
        aria-hidden="true"
      >
        <div className="desktop-window">
          <div className="window-bar">
            <span>● ● ●</span>
            {project.title}
          </div>
          {project.id === "outlook-auto-config" ? (
            <div className="outlook-demo">
              <div className="mail-client-header"><b className="outlook-mark">O</b><strong>Outlook</strong><span>메일 · 일정 · 연락처</span></div>
              <div className="mail-client-layout">
                <aside><b>받은 편지함 <span>3</span></b><span>보낸 편지함</span><span>임시 보관함</span><span>지운 편지함</span></aside>
                <div className="mail-client-list"><b>받은 편지함</b><div>팀 주간 일정 안내<small>오늘 09:30</small></div><div>프로젝트 자료 공유<small>오늘 09:12</small></div></div>
              </div>
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
              <aside className="conversation-list">
                <div className="messenger-profile"><span className="chat-avatar self">나</span><div><b>내 프로필</b><small><i /> 온라인</small></div></div>
                <div className="mock-search">⌕ 이름 또는 대화 검색</div>
                <div className="conversation active"><span className="chat-avatar">김</span><div><b>김민수</b><small>자료 공유드립니다.</small></div><em>2</em></div>
                <div className="conversation"><span className="chat-avatar team">팀</span><div><b>프로젝트 팀</b><small>내일 회의에서 만나요!</small></div></div>
                <div className="conversation"><span className="chat-avatar colleague">이</span><div><b>이지은</b><small>네, 감사합니다.</small></div></div>
              </aside>
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
  return (
    <div className={`preview ${project.theme}`} aria-hidden="true">
      <div className="phone">
        <Screen type={project.screen} />
      </div>
      <div className="phone second-phone">
        <Screen type={project.screen} secondary />
      </div>
    </div>
  );
}
function App() {
  const [active, setActive] = useState("Mobile");
  const tabRefs = useRef([]);
  const visible = projects
    .filter((project) => project.category === active)
    .sort(compareProjects);
  function onTabKey(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % 3;
    else if (event.key === "ArrowLeft") next = (index + 2) % 3;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = 2;
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
            Allen<span>.</span>
          </h1>
          <p>Software Developer</p>
        </div>
        <span className="header-label">PORTFOLIO</span>
      </header>
      <main>
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
          <span>샘플 프로젝트</span>
        </div>
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
        <span>© {new Date().getFullYear()} Allen</span>
        <span>꾸준히 만들고, 조금씩 개선합니다.</span>
      </footer>
    </div>
  );
}
export default App;
