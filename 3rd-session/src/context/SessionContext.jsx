import { createContext, useContext, useState } from 'react';

const SessionContext = createContext(null);

export function SessionProvider({ children }) {
  const [completedSessions, setCompletedSessions] = useState(0);
  const [totalRestTime, setTotalRestTime] = useState(0);

  const incrementSession = () => setCompletedSessions((prev) => prev + 1);
  const addRestTime = (minutes) => setTotalRestTime((prev) => prev + minutes);

  return (
    <SessionContext.Provider
      value={{
        completedSessions,
        totalRestTime,
        incrementSession,
        addRestTime,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}
