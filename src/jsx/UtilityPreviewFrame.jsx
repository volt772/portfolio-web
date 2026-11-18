import "../css/UtilityMobilePreviews.css";

// 카드 안에서만 사용하는 정적인 앱 화면입니다. 실제 입력·알림 동작은 없습니다.
export function Stage({ theme, children }) {
  return <div className={`preview utility-preview ${theme}`} aria-hidden="true"><div className="utility-stage">{children}</div></div>;
}
export function Phone({ children, className = "" }) {
  return <div className={`utility-phone ${className}`}><div className="utility-camera"><i /></div>{children}</div>;
}

