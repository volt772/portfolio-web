import "../css/ProoyaPreview.css";

// 원본 커버의 통계·팀기록 화면을 이미지 없이 구성한 장식용 미리보기입니다.
function ProoyaPhone({ children, secondary = false }) {
  return (
    <div className={`prooya-phone ${secondary ? "prooya-secondary" : ""}`}>
      <div className="prooya-camera"><i /></div>
      <div className="prooya-app-title">Prooya 직관기록</div>
      <div className="prooya-content">{children}</div>
    </div>
  );
}

const teams = [
  { name: "KT 위즈", short: "KT", color: "#353641", rate: 75, wins: 2, losses: 2 },
  { name: "LG 트윈스", short: "LG", color: "#a52b4e", rate: 70, wins: 4, losses: 0 },
  { name: "키움 히어로즈", short: "키움", color: "#8b294f", rate: 64, wins: 4, losses: 2 },
  { name: "NC 다이노스", short: "NC", color: "#45688c", rate: 62, wins: 2, losses: 1 },
  { name: "롯데 자이언츠", short: "롯데", color: "#28617c", rate: 60, wins: 1, losses: 0 },
];

// 구단 로고 이미지는 사용하지 않고 팀 약칭과 색상으로 구분합니다.
function TeamBadge({ team }) {
  return <span className="prooya-team-badge" style={{ background: team.color }}>{team.short}</span>;
}

export default function ProoyaPreview() {
  return (
    <div className="preview prooya-preview" aria-hidden="true">
      <div className="prooya-stage">
        <ProoyaPhone>
          <h3>직관기록</h3>
          <div className="prooya-summary">
            <div className="prooya-donut"><b>57%</b></div>
            <div className="prooya-totals"><div><b>승률</b><span>40승 0무 30패</span></div><div><b>직관횟수</b><span>70회</span></div></div>
          </div>
          <h3>팀별통산승률</h3>
          <div className="prooya-bars">
            {teams.map(team => <div key={team.short}><TeamBadge team={team} /><span className="prooya-bar-track"><i style={{ width: `${team.rate}%` }} /></span><b>{team.rate}%</b></div>)}
          </div>
        </ProoyaPhone>
        <ProoyaPhone secondary>
          <div className="prooya-season"><h3>2018시즌 팀기록</h3><span>시즌변경</span></div>
          <div className="prooya-team-summary"><div><b>두산베어스</b><span>20승 0무 8패</span></div><TeamBadge team={{ short: "두산", color: "#283054" }} /></div>
          <table className="prooya-table">
            <thead><tr><th>상대팀</th><th>승</th><th>무</th><th>패</th><th>%</th></tr></thead>
            <tbody>{teams.map(team => <tr key={team.short}><td><TeamBadge team={team} /><span>{team.name}</span></td><td>{team.wins}</td><td>0</td><td>{team.losses}</td><td>{Math.round(team.wins / (team.wins + team.losses) * 100)}</td></tr>)}</tbody>
          </table>
        </ProoyaPhone>
      </div>
    </div>
  );
}
