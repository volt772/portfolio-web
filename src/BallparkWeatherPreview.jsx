import "./LifestylePreviews.css";

// 장식용 샘플 날씨이며 실시간 데이터를 조회하지 않습니다.
function Cloud() {
  return <svg className="bp-cloud" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 32C23 18 36 16 45 22C49 6 72 4 81 19M30 60C11 62 10 39 25 37C34 29 45 35 47 43C50 20 78 21 85 36C99 43 94 63 80 64H30" /></svg>;
}
function Temperature() { return <div className="bp-temperature">73<small>°F</small></div>; }
export default function BallparkWeatherPreview() {
  return <div className="preview lp-preview bp-preview" aria-hidden="true"><div className="lp-stage">
    <div className="lp-phone bp-phone"><div className="lp-camera"><i /></div><div className="bp-condition">fog</div><Cloud /><Temperature /><div className="bp-place">Progressive Field</div><div className="bp-leagues"><span>NL Stadium</span><span>AL Stadium</span></div></div>
    <div className="bp-detail"><Temperature /><div className="bp-place">Progressive Field</div><h3>Weekly Weather</h3><div className="bp-week">{[["Jul 29",77,74],["Jul 30",76,75],["Jul 31",72,72]].map(([day, afternoon, evening]) => <div key={day}><b>{day}</b><Cloud /><span>3PM : {afternoon}°F</span><span>6PM : {evening}°F</span></div>)}</div></div>
  </div></div>;
}
