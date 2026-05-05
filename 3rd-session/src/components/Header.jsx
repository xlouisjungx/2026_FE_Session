import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';

export default function Header() {
  const { totalSessions } = useContext(SessionContext);

  const navLinkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
      isActive
        ? 'bg-navy-700 text-white shadow-lg'
        : 'text-slate-400 hover:text-slate-200 hover:bg-navy-800'
    }`;

  return (
    <header className="w-full border-b border-navy-700 bg-navy-900/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            PomoFlow
          </h1>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/timer/focus" className={navLinkClasses}>
              Focus
            </NavLink>
            <NavLink to="/timer/rest" className={navLinkClasses}>
              Rest
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-3 bg-navy-800 px-5 py-2.5 rounded-2xl border border-navy-700 shadow-inner">
          <span className="text-slate-400 text-sm font-medium">Sessions Today</span>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <span className="text-white font-bold text-sm">{totalSessions}</span>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden flex px-4 pb-4 overflow-x-auto gap-2">
        <NavLink to="/" className={navLinkClasses}>
          Home
        </NavLink>
        <NavLink to="/timer/focus" className={navLinkClasses}>
          Focus
        </NavLink>
        <NavLink to="/timer/rest" className={navLinkClasses}>
          Rest
        </NavLink>
      </div>
    </header>
  );
}
