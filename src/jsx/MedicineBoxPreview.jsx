import { Stage, Phone } from "./UtilityPreviewFrame";

const medicines = ["부루펜", "듀오덤", "오라메디", "케토톱", "판콜에이", "에소메졸", "타이레놀", "에어잘"];
export default function MedicineBoxPreview() {
  return <Stage theme="medicine-box-preview">
    <Phone><div className="medicine-toolbar">⌕　☰　▦</div><div className="medicine-grid">{medicines.map((name, i) => <div key={name}><b>{name}</b><span>보관 중</span><small>2025-12-{String(20 + i)}</small></div>)}</div><span className="medicine-add">＋</span></Phone>
    <Phone className="utility-second medicine-form"><h3>←　약 등록 <span>＋</span></h3><div className="medicine-category">카테고리 선택</div><div className="medicine-input">약 이름</div><div className="medicine-input">약국 이름 (선택)</div><div className="medicine-input medicine-memo">메모 (선택)</div><div className="medicine-input"><small>유통기한</small>2025-07-04　▦</div></Phone>
  </Stage>;
}

