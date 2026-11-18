import "../css/SerialboxPreview.css";

// 제품 사진 영역만 기존 커버에서 표시하고 나머지 화면은 JSX로 구성합니다.
// 좌표는 원본 커버(1536×1024) 기준이며 이미지 파일은 수정하지 않습니다.
const products = [
  ["스마트워치", "SN2025-1007", "835 240 245 230"],
  ["도어락", "SN2025-1001", "1165 225 245 245"],
  ["로봇청소기", "SN2025-1013", "185 565 190 170"],
  ["폰", "SN2025-1025", "448 560 195 175"],
  ["공청기", "SN2025-1018", "180 870 195 120"],
  ["노트북", "SN2025-1020", "448 870 165 120"],
];
function ProductCard({ product: [name, serial, crop] }) {
  return <div className="sb-product"><svg className="sb-photo" viewBox={crop} preserveAspectRatio="xMidYMid slice"><image href="/projects/serialbox/cover.webp" width="1536" height="1024" /></svg><b>{name}</b><small>{serial}</small></div>;
}

// 왼쪽 제품 목록과 오른쪽 주요 제품 확대 패널은 장식용 미리보기입니다.
export default function SerialboxPreview() {
  return <div className="preview sb-preview" aria-hidden="true"><div className="sb-stage">
    <div className="sb-phone"><div className="sb-camera"><i /></div><div className="sb-toolbar">⌕</div><div className="sb-grid">{products.map(product => <ProductCard key={product[1]} product={product} />)}<span className="sb-add">＋</span></div></div>
    <div className="sb-detail">{products.slice(0, 2).map(product => <ProductCard key={product[1]} product={product} />)}</div>
  </div></div>;
}
