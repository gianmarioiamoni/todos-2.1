import { createContext, useContext, useMemo, useState } from 'react';

const AllTodosListIdAppContext = createContext({
  allTodosListId: null,
});
export function AllTodosListIdAppState({ children }) {
  const [allTodosListId, setAllTodosListId] = useState(null);

  const value = useMemo(
    () => ({
      allTodosListId,
      setAllTodosListId,
    }),
    [allTodosListId]
  );

  return (
    <AllTodosListIdAppContext.Provider value={value}>
      {children}
    </AllTodosListIdAppContext.Provider>
  );
}

export function useAllTodosListIdAppState() {
  const context = useContext(AllTodosListIdAppContext);

  if (context === undefined) {
    throw new Error('useAllTodosListIdAppState must be used within a AllTodosListIdAppStateProvider');
  }

  return context;
}
