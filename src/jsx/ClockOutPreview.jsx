import { Stage, Phone } from "./UtilityPreviewFrame";

export default function ClockOutPreview() {
  return <Stage theme="clockout-preview"><Phone><div className="clockout-time">퇴근시간<b>20시 30분</b></div><div className="clockout-ring"><span>25분 전</span></div><div className="clockout-actions"><span>설정</span><span>새로고침</span></div></Phone><Phone className="utility-second"><h3 className="clockout-header">←　설정</h3><div className="clockout-setting">퇴근시간 <span>20:30</span></div>{[30,15,5].map(minutes => <div className="clockout-setting" key={minutes}>{minutes}분 전 알림<i /></div>)}</Phone></Stage>;
}

