import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto w-full">
      <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-3xl mb-8 shadow-2xl shadow-indigo-500/20 flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-500">
        <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
        Master Your Time
      </h2>
      
      <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
        Enhance your productivity with our modern Pomodoro timer. 
        Deep focus sessions interspersed with mindful breaks.
      </p>

      <button
        onClick={() => navigate('/timer/focus')}
        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-indigo-600 font-pj rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:ring-offset-navy-900"
      >
        <span className="mr-2">Start Focus Session</span>
        <svg 
          className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
}
