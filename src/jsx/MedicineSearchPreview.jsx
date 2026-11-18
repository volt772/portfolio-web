import "../css/MedicineSearchPreview.css";

// 약 모양은 사진 대신 CSS로 단순화한 장식입니다.
function PillPicture({ round = false, yellow = false }) {
  return (
    <div className={`ms-picture ${round ? "ms-round" : ""} ${yellow ? "ms-yellow" : ""}`}>
      <span className="ms-pill">{round ? "＋" : "TYLENOL"}</span>
      <span className="ms-pill ms-pill-back">{round ? "ME" : yellow ? "COLD" : ""}</span>
      <div className="ms-measure">{round ? "8.0" : yellow ? "16.8" : "17.6"} mm</div>
    </div>
  );
}

function Phone({ children, detail = false }) {
  return <div className={`ms-phone ${detail ? "ms-detail-phone" : ""}`}><div className="ms-camera"><i /></div><div className="ms-content">{children}</div></div>;
}

// 원본의 검색 목록과 상세정보 구조를 재현한 샘플 화면입니다. 실제 검색 기능은 없습니다.
export default function MedicineSearchPreview() {
  return (
    <div className="preview ms-preview" aria-hidden="true">
      <div className="ms-stage">
        <Phone>
          <div className="ms-heading">검색</div>
          <div className="ms-search"><span>타이레놀</span><b>⌕</b></div>
          {["타이레놀정500밀리그램", "타이레놀콜드-에스정"].map((name, index) => (
            <div className="ms-result" key={name}><PillPicture yellow={index === 1} /><b>{name}</b><small>한국존슨앤드존슨판매(유)</small></div>
          ))}
        </Phone>
        <Phone detail>
          <div className="ms-heading">←　의약상세정보</div>
          <PillPicture round />
          <div className="ms-field"><small>약이름</small><b>메리틴정(트리메부틴말레산염)</b></div>
          <div className="ms-field"><small>제조사</small><b>대화제약(주)</b></div>
          {/* 긴 의약 설명은 임의로 작성하지 않고 텍스트 줄 형태로 표현합니다. */}
          <div className="ms-field"><small>효능</small><div className="ms-text-lines"><i /><i /><i /><i /></div></div>
          <div className="ms-field"><small>용법</small><div className="ms-text-lines"><i /><i /></div></div>
        </Phone>
      </div>
    </div>
  );
}
