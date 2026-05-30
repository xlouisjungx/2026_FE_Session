import { useNavigate } from 'react-router-dom';
import { useSession } from '../context/SessionContext';

export default function ModeSwitcher() {
  const navigate = useNavigate();
  const { completedSessions } = useSession();

  return (
    <div className="mode-switcher">
      <div className="ms-hero">
        <div className="ms-flame-big">🔥</div>
        <h1 className="ms-title">열공타이머</h1>
        <p className="ms-subtitle">
          집중과 휴식의 리듬으로
          <br />
          최고의 공부를 완성하세요
        </p>
      </div>

      {completedSessions > 0 && (
        <div className="ms-streak">
          <span className="streak-icon">⚡</span>
          <span>
            오늘 <strong>{completedSessions}세션</strong> 완료!
          </span>
        </div>
      )}

      <div className="ms-cards">
        <button
          className="mode-card focus-card"
          onClick={() => navigate('/focus')}
        >
          <div className="card-icon">🎯</div>
          <div className="card-body">
            <h2 className="card-title">집중 모드</h2>
            <p className="card-desc">25분 집중 세션</p>
          </div>
          <div className="card-arrow">→</div>
        </button>

        <button
          className="mode-card rest-card"
          onClick={() => navigate('/rest')}
        >
          <div className="card-icon">☕</div>
          <div className="card-body">
            <h2 className="card-title">휴식 모드</h2>
            <p className="card-desc">5분 휴식 세션</p>
          </div>
          <div className="card-arrow">→</div>
        </button>
      </div>

      <p className="ms-tip">💡 집중 → 휴식을 반복하면 자동으로 전환돼요</p>
    </div>
  );
}
