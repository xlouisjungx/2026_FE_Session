import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import Header from './components/Header';
import Home from './pages/Home';
import TimerPage from './pages/TimerPage';

function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-navy-900 text-slate-200 font-sans selection:bg-navy-700 selection:text-white">
          <Header />
          <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timer/:mode" element={<TimerPage />} />
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </SessionProvider>
  );
}

export default App;
