import React, { createContext, useContext, useState } from 'react';

// AdminContext létrehozása
export const AdminContext = createContext();

// Provider komponens
export const AdminProvider = ({ children }) => {
  // isAdmin állapot, egyelőre csak változóként
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

// Hook a context egyszerű használatához
export const useAdmin = () => useContext(AdminContext);
