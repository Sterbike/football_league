import React from 'react'

const Login = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-text dark:bg-background-dark dark:text-text-dark transition-colors">
      <form className="bg-secondary dark:bg-secondary-dark shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm" aria-label="Bejelentkezés">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Bejelentkezés</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-text dark:text-text-dark text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-text dark:text-text-dark bg-background dark:bg-background-dark leading-tight focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-text dark:text-text-dark text-sm font-semibold mb-2">Jelszó</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-text dark:text-text-dark bg-background dark:bg-background-dark leading-tight focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-background font-semibold py-2 px-4 rounded hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors"
        >
          Bejelentkezés
        </button>
      </form>
    </main>
  );
}

export default Login