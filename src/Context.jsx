import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const greeting = 'Hello';
  const [searchTerm, setSearchTerm] = useState('NW9 4GD');

  return (
    <AppContext.Provider value={{ greeting, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
