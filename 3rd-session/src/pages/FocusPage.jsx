import { useNavigate } from 'react-router-dom';
import Timer from './TimerPage';
import { useSession } from '../context/SessionContext';

const FOCUS_SECONDS = 25 * 60;

export default function FocusPage() {
  const navigate = useNavigate();
  const { incrementSession } = useSession();

  const handleComplete = () => {
    incrementSession();
    navigate('/rest');
  };

  return (
    <div className="page focus-page">
      <div className="page-bg focus-bg" />
      <div className="page-header">
        <h2 className="page-title">집중 세션</h2>
        <p className="page-sub">완료되면 자동으로 휴식으로 전환됩니다</p>
      </div>
      <Timer
        totalSeconds={FOCUS_SECONDS}
        onComplete={handleComplete}
        mode="focus"
      />
    </div>
  );
}
