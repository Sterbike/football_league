import React from 'react'

const Dashboard = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-primary-dark dark:bg-background-dark dark:text-primary transition-colors">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-base md:text-lg lg:text-xl">Csak admin felhasználók láthatják ezt az oldalt.</p>
    </main>
  );
}

export default Dashboard