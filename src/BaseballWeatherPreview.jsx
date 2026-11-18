import "./BaseballWeatherPreview.css";

// 태양 아이콘도 외부 이미지 없이 SVG로 그립니다.
function Sun() {
  return (
    <svg className="bw-sun" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
      <circle cx="50" cy="50" r="23" />
      {Array.from({ length: 8 }, (_, index) => (
        <path key={index} d="M50 6v10" transform={`rotate(${index * 45} 50 50)`} />
      ))}
    </svg>
  );
}

function Temperature() {
  return <div className="bw-temperature">14<small>°C</small></div>;
}

// 기존 커버의 배치를 재현한 장식용 샘플이며 실시간 날씨 데이터는 아닙니다.
export default function BaseballWeatherPreview() {
  return (
    <div className="preview bw-preview" aria-hidden="true">
      <div className="bw-stage">
        <div className="bw-phone">
          <div className="bw-phone-top"><i /><span>i</span></div>
          <div className="bw-condition">맑음</div>
          <Sun />
          <Temperature />
          <div className="bw-stadium">서울종합운동장 야구장</div>
        </div>
        <div className="bw-detail">
          <Temperature />
          <div className="bw-stadium">서울종합운동장 야구장</div>
          <div className="bw-leagues"><span>KBO리그</span><span>KBO퓨처스리그</span></div>
          <div className="bw-forecast">
            {[["12시", 14], ["15시", 15], ["18시", 14]].map(([hour, temperature]) => (
              <div key={hour}><span>{hour}</span><Sun /><span>{temperature}°C</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
