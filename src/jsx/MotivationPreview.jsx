import { Stage, Phone } from "./UtilityPreviewFrame";

function Quote() { return <><div className="motivation-quote"><p>“성공은 도전하는 자의 것이다.”</p><small>- 익명 -</small></div><div className="motivation-actions"><span>공유하기</span><span>다른 명언 보기</span></div></>; }
export default function MotivationPreview() {
  return <Stage theme="motivation-preview"><Phone><Quote /><div className="motivation-version">v1.0.0</div></Phone><div className="utility-detail motivation-detail"><Quote /></div></Stage>;
}

