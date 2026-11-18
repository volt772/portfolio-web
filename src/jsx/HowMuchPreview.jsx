import { Stage, Phone } from "./UtilityPreviewFrame";

export default function HowMuchPreview() {
  return <Stage theme="howmuch-preview"><Phone><div className="howmuch-form"><label>금액 입력</label><div>13000</div><label>인원 수 선택</label><small>인원 수</small><div>2 명 <span>⌄</span></div><label>정산 단위 선택</label><small>단위</small><div>100원 <span>⌄</span></div></div><div className="howmuch-actions"><span>정산 기록</span><span>정산 시작</span></div></Phone><Phone className="utility-second"><h3 className="howmuch-header">←　정산기록</h3>{[19000,17000,12000].map(total => <div className="howmuch-record" key={total}><div>총금액 <span>{total.toLocaleString("ko-KR")}원</span></div><div>인원 <span>2명</span></div><div>정산단위 <span>100원</span></div><b>금액분배</b><p>{(total/2).toLocaleString("ko-KR")}원 / {(total/2).toLocaleString("ko-KR")}원</p></div>)}</Phone></Stage>;
}
