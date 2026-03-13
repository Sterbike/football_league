import React from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

const Navbar = () => {
const { isAdmin } = useAdmin();

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
          className="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 bg-secondary text-text dark:bg-secondary-dark dark:text-primary-dark transition-colors"
          aria-label={dark ? 'Világos mód' : 'Sötét mód'}
          title={dark ? 'Világos mód' : 'Sötét mód'}
        >
          {dark ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
          )}
        </button>
      );
    };


  return (
    <header className="w-screen bg-primary text-text shadow-md dark:bg-primary-dark dark:text-text-dark transition-colors absolute top-0 z-50">
      <nav className="w-full flex items-center py-3 px-4 relative" aria-label="Fő navigáció">
        {/* Középre igazított menük */}
        <div className="flex-1" />
        <ul className="flex gap-6 md:gap-10 lg:gap-14 justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}} role="menubar">
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
          <li>
          
            {isAdmin && (
              <Link to="/dashboard" className="text-base md:text-lg lg:text-xl font-medium hover:text-accent focus:outline-none focus:text-accent transition-colors" aria-label="Dashboard">Dashboard</Link>
            )}
          </li>
        </ul>
        {/* Jobbra igazított login gomb */}
        <div className="flex justify-end gap-3 flex-1 min-w-0" style={{maxWidth:'300px'}}>
          <Link to="/login" className="ml-4 px-4 py-2 rounded bg-accent text-background font-semibold text-base md:text-lg hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors" aria-label="Bejelentkezés">Bejelentkezés</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
      );
    };


export default Navbar;