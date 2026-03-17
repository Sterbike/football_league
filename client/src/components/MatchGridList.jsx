import React from "react";
import { useNavigate } from "react-router-dom";

function formatDate(dateStr) {
  const dateObj = new Date(dateStr);
  const month = dateObj.toLocaleString('hu-HU', { month: 'long' });
  const day = dateObj.getDate();
  return `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}.`;
}

export default function MatchGridList({ matches, teams, previous = false, upcoming = false, limit = 5, hideDate = false }) {
  const navigate = useNavigate();
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
    <ul className="divide-y divide-accent/50">
      {filtered.map(match => {
        const homeTeam = teams.find(t => t.id === match.homeTeamId);
        const awayTeam = teams.find(t => t.id === match.awayTeamId);
        const home = homeTeam?.name || 'Ismeretlen';
        const away = awayTeam?.name || 'Ismeretlen';
        return (
          <li
            key={match.id}
            className="grid grid-cols-5 items-center py-2 gap-2 text-center"
          >
            <span
              className="font-bold text-base transition hover:text-accent cursor-pointer col-span-1"
              onClick={() => homeTeam && navigate(`/team/${homeTeam.id}`)}
            >{home}</span>
            <span className="text-accent font-semibold col-span-1">vs</span>
            <span
              className="font-bold text-base transition hover:text-accent cursor-pointer col-span-1"
              onClick={() => awayTeam && navigate(`/team/${awayTeam.id}`)}
            >{away}</span>
            <span className="font-extrabold text-lg col-span-1">{match.homeGoals} : {match.awayGoals}</span>
            <span className="text-xs col-span-1">{
              hideDate
                ? match.time
                : `${formatDate(match.date)} ${match.time}`
            }</span>
          </li>
        );
      })}
    </ul>
  );
}
