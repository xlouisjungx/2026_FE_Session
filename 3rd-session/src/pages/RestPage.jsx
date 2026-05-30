import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';

const REST_SECONDS = 5 * 60;

export default function RestPage() {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/focus');
  };

  return (
    <div className="page rest-page">
      <div className="page-bg rest-bg" />
      <div className="page-header">
        <h2 className="page-title">휴식 세션</h2>
        <p className="page-sub">완료되면 자동으로 집중으로 전환됩니다</p>
      </div>
      <Timer
        totalSeconds={REST_SECONDS}
        onComplete={handleComplete}
        mode="rest"
      />
    </div>
  );
}
