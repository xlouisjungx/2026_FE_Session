import { createContext, useState, useCallback, useMemo } from 'react';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [totalSessions, setTotalSessions] = useState(0);

  const incrementSession = useCallback(() => {
    setTotalSessions((prev) => prev + 1);
  }, []);

  const value = useMemo(() => ({ totalSessions, incrementSession }), [totalSessions, incrementSession]);

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};
