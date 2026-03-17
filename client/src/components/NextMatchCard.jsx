import React from 'react';
import { matches, teams, stadiums } from '../data/mockdata';

// Props: teamId
const NextMatchCard = ({ teamId }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Find next match for this team (date >= today)
  const nextMatch = matches
    .filter(m => (m.homeTeamId === teamId || m.awayTeamId === teamId))
    .map(m => ({ ...m, matchDate: new Date(m.date + 'T00:00:00') }))
    .filter(m => m.matchDate >= today)
    .sort((a, b) => a.matchDate - b.matchDate)
    [0];

  if (!nextMatch) {
    return (
      <div className="bg-secondary dark:bg-secondary-dark rounded-lg shadow p-4 text-center">
        <span className="text-lg font-semibold">Nincs közelgő mérkőzés</span>
      </div>
    );
  }


  // Always show home team first
  const homeTeam = teams.find(t => t.id === nextMatch.homeTeamId);
  const awayTeam = teams.find(t => t.id === nextMatch.awayTeamId);
  const homeName = homeTeam ? homeTeam.name : 'Ismeretlen';
  const awayName = awayTeam ? awayTeam.name : 'Ismeretlen';

  // Stadium info
  let stadiumLabel = '';
  if (homeTeam && homeTeam.stadiumId) {
    const stadium = stadiums.find(s => s.id === homeTeam.stadiumId);
    if (stadium) {
      stadiumLabel = stadium.name;
    } else {
      stadiumLabel = homeTeam.stadiumId;
    }
  }

  // Date formatting
  let dateLabel = '';
  if (nextMatch.matchDate.getTime() === today.getTime()) {
    dateLabel = 'Ma';
  } else if (nextMatch.matchDate.getTime() === tomorrow.getTime()) {
    dateLabel = 'Holnap';
  } else {
    const month = nextMatch.matchDate.toLocaleString('hu-HU', { month: 'long' });
    const day = nextMatch.matchDate.getDate();
    dateLabel = `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}.`;
  }

  return (
    <div className="bg-secondary dark:bg-secondary-dark rounded-lg shadow p-4 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 text-lg font-semibold mb-2">
        <span>{homeName}</span>
        <span className="text-accent">vs</span>
        <span>{awayName}</span>
      </div>
      <div className="flex w-full justify-between text-base mb-1">
        <div className="flex items-start">
          <span>{dateLabel} {nextMatch.time} </span>
        </div>
        <span className="text-right">{stadiumLabel}</span>
      </div>
      
    </div>
  );
};

export default NextMatchCard;