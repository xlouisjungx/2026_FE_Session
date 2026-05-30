import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Timer({ totalSeconds, onComplete, mode }) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const pct = (secondsLeft / totalSeconds) * 100;
  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference * (1 - pct / 100);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const toggle = () => setIsRunning((r) => !r);

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setSecondsLeft(totalSeconds);
  };

  const isFocus = mode === 'focus';
  const accent = isFocus ? 'var(--focus-accent)' : 'var(--rest-accent)';

  return (
    <div className={`timer-container ${mode}`}>
      <div className="ring-wrapper">
        <svg
          className="ring-svg"
          viewBox="0 0 260 260"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="130"
            cy="130"
            r={radius}
            fill="none"
            stroke="var(--ring-bg)"
            strokeWidth="12"
          />
          <circle
            cx="130"
            cy="130"
            r={radius}
            fill="none"
            stroke={accent}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
            transform="rotate(-90 130 130)"
            className="ring-progress"
            style={{ transition: 'stroke-dashoffset 0.8s ease' }}
          />
        </svg>

        <div className="timer-center">
          <div className="timer-emoji">{isFocus ? '🎯' : '☕'}</div>
          <div className="timer-display">
            <span className="time-text">
              {minutes}:{seconds}
            </span>
          </div>
          <div className="timer-mode-label">
            {isFocus ? '집중 중' : '휴식 중'}
          </div>
        </div>
      </div>

      <div className="timer-controls">
        <button
          className="ctrl-btn secondary"
          onClick={() => {
            reset();
            navigate('/');
          }}
        >
          ✕ 그만하기
        </button>
        <button
          className="ctrl-btn primary"
          onClick={toggle}
          style={{ background: accent }}
        >
          {isRunning
            ? '⏸ 일시정지'
            : secondsLeft === totalSeconds
              ? '▶ 시작'
              : '▶ 계속'}
        </button>
        <button className="ctrl-btn secondary" onClick={reset}>
          ↺ 초기화
        </button>
      </div>
    </div>
  );
}
