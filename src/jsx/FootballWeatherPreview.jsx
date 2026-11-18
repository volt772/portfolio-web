import { Stage, Phone } from "./UtilityPreviewFrame";

// 같은 날씨 아이콘을 메인 화면과 확대 패널에서 공유합니다.
function WeatherIcon({ rain = false }) {
  return <svg className="football-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">{rain ? <><path d="M25 62C8 60 12 37 28 37C31 13 64 13 70 36C94 33 98 62 78 62Z"/><path d="M30 74l-5 12m26-12-5 12m26-12-5 12"/></> : <><circle cx="50" cy="50" r="25"/>{Array.from({length:8},(_, i) => <path key={i} d="M50 5v9" transform={`rotate(${i*45} 50 50)`}/>)}</>}</svg>;
}
function FootballTemperature() { return <><div className="football-temperature">16<small>°C</small></div><div className="football-place">포항 스틸러스</div><div className="football-switch">다른구장보기</div></>; }
function FootballForecast() { return <div className="football-forecast"><b>오늘날씨</b><div>{[false,true].map((rain, i) => <div key={i}><WeatherIcon rain={rain}/><span>{i ? "21시 : 14°C" : "18시 : 15°C"}</span></div>)}</div></div>; }
export default function FootballWeatherPreview() {
  return <Stage theme="football-preview"><Phone className="football-screen"><div className="football-condition">맑음</div><WeatherIcon/><FootballTemperature/><FootballForecast/></Phone><div className="utility-detail football-screen football-detail"><FootballTemperature/><FootballForecast/></div></Stage>;
}

