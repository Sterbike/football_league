import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

const ThemeToggle = () => {
      // Ellenőrizzük, hogy jelenleg sötét mód van-e
      const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
      const [dark, setDark] = React.useState(isDark);

      // Téma váltása gombnyomásra
      const handleToggle = () => {
        if (typeof window !== 'undefined') {
          if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            setDark(false);
          } else {
            document.documentElement.classList.add('dark');
            setDark(true);
          }
        }
      };

      return (
        <button
          onClick={handleToggle}
          className="px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 bg-secondary text-primary dark:bg-secondary-dark dark:text-primary-dark transition-colors"
          aria-label={dark ? 'Világos mód' : 'Sötét mód'}
          title={dark ? 'Világos mód' : 'Sötét mód'}
        >
          {dark ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
          )}
        </button>
      );
    };


  return (
    <header className="w-full bg-primary text-background shadow-md dark:bg-primary-dark dark:text-background-dark transition-colors">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4" aria-label="Fő navigáció">
        {/* Középre igazított menük */}
        <ul className="flex-1 flex justify-center gap-6 md:gap-10 lg:gap-14">
          <li>
            <Link to="/" className="text-base md:text-lg lg:text-xl font-medium hover:text-accent focus:outline-none focus:text-accent transition-colors" aria-label="Főoldal">Főoldal</Link>
          </li>
          <li>
            <Link to="/csapatok" className="text-base md:text-lg lg:text-xl font-medium hover:text-accent focus:outline-none focus:text-accent transition-colors" aria-label="Csapatok">Csapatok</Link>
          </li>
          <li>
            <Link to="/tabella" className="text-base md:text-lg lg:text-xl font-medium hover:text-accent focus:outline-none focus:text-accent transition-colors" aria-label="Tabella">Tabella</Link>
          </li>
          <li>
            <Link to="/merkozesek" className="text-base md:text-lg lg:text-xl font-medium hover:text-accent focus:outline-none focus:text-accent transition-colors" aria-label="Mérkőzések">Mérkőzések</Link>
          </li>
        </ul>
        {/* Jobbra igazított login gomb */}
        <div className="flex items-center justify-end flex-0">
          <button className="ml-4 px-4 py-2 rounded bg-accent text-background font-semibold text-base md:text-lg hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors" aria-label="Bejelentkezés">Login</button>
        <ThemeToggle />
        </div>
      </nav>
    </header>
      );
    };


export default Navbar;