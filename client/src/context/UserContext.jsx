import React, { createContext, useContext, useState } from 'react';

// UserContext létrehozása
export const UserContext = createContext();

// Provider komponens
export const UserProvider = ({ children }) => {
  // user állapot, benne isAdmin tulajdonsággal
  const [user, setUser] = useState({ isAdmin: true });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook a context egyszerű használatához
export const useUser = () => useContext(UserContext);
