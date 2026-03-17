import React from "react";
import { matches, teams } from '../data/mockdata';
import MatchGridList from '../components/MatchGridList';

const MatchList = () => {
  // Dátum szerinti csoportosítás
  const grouped = matches.reduce((acc, match) => {
    acc[match.date] = acc[match.date] || [];
    acc[match.date].push(match);
    return acc;
  }, {});

  // Dátumok szétválogatása és rendezése
  const today = new Date().toISOString().slice(0, 10);
  const dates = Object.keys(grouped);
  const futureDates = dates.filter(d => d >= today).sort((a, b) => a.localeCompare(b));
  const pastDates = dates.filter(d => d < today).sort((a, b) => b.localeCompare(a));
  const sortedDates = [...futureDates, ...pastDates];

  // Dátum formázó függvény
  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    const month = dateObj.toLocaleString('hu-HU', { month: 'long' });
    const day = dateObj.getDate();
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}.`;
  };

  return (
    <main className="px-[4vw] flex-1 transition-colors flex flex-col items-center bg-background dark:bg-background-dark dark:text-primary text-primary-dark">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-8">Mérkőzések</h1>
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-8 mt-8">
        {sortedDates.map(date => (
          <div key={date} className="bg-secondary dark:bg-secondary-dark rounded shadow p-4">
            <h2 className="text-xl font-bold mb-3">{
              date === today
                ? 'Ma'
                : date === new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
                  ? 'Holnap'
                  : formatDate(date)
            }</h2>
            <MatchGridList
              matches={grouped[date]}
              teams={teams}
              previous={false}
              upcoming={false}
              limit={grouped[date].length}
              hideDate={true}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default MatchList;
