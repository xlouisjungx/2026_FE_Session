import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useSession } from '../context/SessionContext';

export default function Layout() {
  const { completedSessions } = useSession();
  const navigate = useNavigate();
  const location = useLocation();

  const pageLabel =
    {
      '/': '모드 선택',
      '/focus': '집중 모드',
      '/rest': '휴식 모드',
    }[location.pathname] || '';

  return (
    <div className="app-wrapper">
      <header className="top-bar">
        <button className="logo-btn" onClick={() => navigate('/')}>
          <span className="logo-icon">🔥</span>
          <span className="logo-text">열공타이머</span>
        </button>

        <div className="header-center">
          <span className="page-label">{pageLabel}</span>
        </div>

        <div className="session-badge">
          <div className="session-flame">🔥</div>
          <div className="session-info">
            <span className="session-count">{completedSessions}</span>
            <span className="session-label">세션</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
