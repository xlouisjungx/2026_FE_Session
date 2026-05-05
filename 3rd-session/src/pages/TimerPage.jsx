import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';

export default function TimerPage() {
  const { mode } = useParams();
  const navigate = useNavigate();
  const { incrementSession } = useContext(SessionContext);

  const isFocusMode = mode === 'focus';
  const initialTime = isFocusMode ? 25 * 60 : 5 * 60; // 25 mins or 5 mins
  
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Reset timer when mode changes
    setTimeLeft(isFocusMode ? 25 * 60 : 5 * 60);
    setIsActive(true);
  }, [mode, isFocusMode]);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (isFocusMode) {
        incrementSession();
        navigate('/timer/rest');
      } else {
        navigate('/timer/focus');
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, timeLeft, isFocusMode, navigate, incrementSession]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const accentColor = isFocusMode ? 'text-accent-focus' : 'text-accent-rest';
  const shadowColor = isFocusMode ? 'shadow-accent-focus/20' : 'shadow-accent-rest/20';
  const ringColor = isFocusMode ? 'ring-accent-focus' : 'ring-accent-rest';
  const bgAccent = isFocusMode ? 'bg-accent-focus' : 'bg-accent-rest';
  const progressPercent = ((initialTime - timeLeft) / initialTime) * 100;

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-3xl mx-auto">
      
      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-slate-300 uppercase tracking-widest">
          {isFocusMode ? 'Deep Focus' : 'Take a Break'}
        </h2>
        <p className="mt-2 text-slate-500">
          {isFocusMode 
            ? 'Stay concentrated and eliminate distractions.' 
            : 'Relax your mind and prepare for the next session.'}
        </p>
      </div>

      <div className={`relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 rounded-full bg-navy-800 shadow-2xl ${shadowColor} border border-navy-700 transition-all duration-700`}>
        {/* Decorative Ring */}
        <div 
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            background: `conic-gradient(currentColor ${progressPercent}%, transparent ${progressPercent}%)`
          }}
        ></div>
        
        <div className={`absolute inset-2 rounded-full bg-navy-900 flex items-center justify-center z-10 shadow-inner`}>
          <div className={`text-6xl md:text-8xl font-mono font-bold tracking-tighter ${accentColor} transition-colors duration-500`}>
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      <div className="mt-16 flex gap-6">
        <button
          onClick={toggleTimer}
          className={`px-8 py-3 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-900 ${bgAccent} hover:opacity-90 ${isFocusMode ? 'focus:ring-accent-focus' : 'focus:ring-accent-rest'} shadow-lg`}
        >
          {isActive ? 'Pause' : 'Resume'}
        </button>
      </div>

    </div>
  );
}
