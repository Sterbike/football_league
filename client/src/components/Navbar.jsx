
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';


const Navbar = () => {
  const { user } = useUser();

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 bg-secondary text-primary dark:bg-secondary-dark dark:text-primary-dark transition-colors"
      aria-label={theme === 'dark' ? 'Világos mód' : 'Sötét mód'}
      title={theme === 'dark' ? 'Világos mód' : 'Sötét mód'}
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
      )}
    </button>
  );
};



  // Hamburger menü állapot
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Menü elemek
  const menuItems = (
    <>
      <li>
        <Link to="/" className="text-base md:text-lg lg:text-xl font-medium hover:text-accent focus:outline-none focus:text-accent transition-colors" aria-label="Főoldal" onClick={() => setMenuOpen(false)}>Főoldal</Link>
      </li>
      <li>
        <Link to="/tabella" className="text-base md:text-lg lg:text-xl font-medium hover:text-accent focus:outline-none focus:text-accent transition-colors" aria-label="Tabella" onClick={() => setMenuOpen(false)}>Tabella</Link>
      </li>
      <li>
        <Link to="/merkozesek" className="text-base md:text-lg lg:text-xl font-medium hover:text-accent focus:outline-none focus:text-accent transition-colors" aria-label="Mérkőzések" onClick={() => setMenuOpen(false)}>Mérkőzések</Link>
      </li>
      {user.isAdmin && (
        <li>
          <Link to="/dashboard" className="text-base md:text-lg lg:text-xl font-medium hover:text-accent focus:outline-none focus:text-accent transition-colors" aria-label="Dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        </li>
      )}
    </>
  );

  return (
    <header className="w-full bg-primary text-primary-dark shadow-md dark:bg-primary-dark dark:text-primary transition-colors fixed top-0 left-0 z-50">
      <nav className="w-full flex items-center py-3 px-4 relative" aria-label="Fő navigáció">
        {/* Balra igazított menü md-től, mobilon hamburger */}
        <div className="flex-1 flex items-center ">
          {/* Hamburger ikon csak mobilon */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Menü megnyitása"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {/* Hamburger ikon */}
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          {/* Menü mobilon lenyíló, md-től balra flex */}
          <ul
            className={
              `flex-col absolute left-0 top-full w-full bg-primary dark:bg-primary-dark shadow-md md:shadow-none md:bg-transparent md:dark:bg-transparent md:static md:flex md:flex-row md:items-center md:gap-8 lg:gap-14 md:w-auto md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 transition-all z-40 ` +
              (menuOpen ? 'flex' : 'hidden') +
              ' md:flex gap-6'
            }
            role="menubar"
            onClick={() => setMenuOpen(false)}
          >
            {menuItems}
          </ul>
        </div>
        {/* Jobbra igazított login gomb */}
        <div className="flex justify-end gap-3 flex-1 min-w-0">
          <Link to="/login" className="ml-4 px-4 py-2 rounded bg-accent text-background font-semibold text-lg hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors" aria-label="Bejelentkezés">Bejelentkezés</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};


export default Navbar;