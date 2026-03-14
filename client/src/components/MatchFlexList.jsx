import React from "react";

export default function MatchFlexList({ matches, teams, previous = false, upcoming = false, limit = 5 }) {
  // Only one filter is active
  let filtered = matches;
  const now = new Date();
  if (previous) {
    filtered = matches.filter(m => new Date(m.date) <= now).sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (upcoming) {
    filtered = matches.filter(m => new Date(m.date) > now).sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  filtered = filtered.slice(0, limit);

  return (
    <ul className="divide-y divide-accent/20">
      {filtered.map(match => {
        const home = teams.find(t => t.id === match.homeTeamId)?.name || 'Ismeretlen';
        const away = teams.find(t => t.id === match.awayTeamId)?.name || 'Ismeretlen';
        return (
          <li key={match.id} className="flex items-center justify-between py-2">
            <span className="font-bold text-base transition hover:text-accent cursor-pointer">{home}</span>
            <span className="mx-2 text-accent font-semibold">vs</span>
            <span className="font-bold text-base transition hover:text-accent cursor-pointer">{away}</span>
            <span className="mx-2 font-extrabold text-lg">{match.homeGoals} : {match.awayGoals}</span>
            <span className="text-xs text-primary/60">{match.date}</span>
          </li>
        );
      })}
    </ul>
  );
}
