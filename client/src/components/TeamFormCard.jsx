import React from "react";
import { matches, teams } from '../data/mockdata';

// Props: teamId
const TeamFormCard = ({ teamId }) => {
  // Only include matches before today
  const today = new Date();
  const teamMatches = matches
    .filter(m => {
      if (!(m.homeTeamId === teamId || m.awayTeamId === teamId)) return false;
      // Parse date string as local date
      const matchDate = new Date(m.date + 'T00:00:00');
      return matchDate < today;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  // Helper: get opponent and result
  const getMatchInfo = (match) => {
    const isHome = match.homeTeamId === teamId;
    const opponentId = isHome ? match.awayTeamId : match.homeTeamId;
    const opponent = teams.find(t => t.id === opponentId);
    const opponentName = opponent ? opponent.name : 'Ismeretlen';
    let result = '';
    let score = '';
    if (isHome) {
      score = `${match.homeGoals} - ${match.awayGoals}`;
      if (match.homeGoals > match.awayGoals) result = 'win';
      else if (match.homeGoals === match.awayGoals) result = 'draw';
      else result = 'loss';
    } else {
      score = `${match.awayGoals} - ${match.homeGoals}`;
      if (match.awayGoals > match.homeGoals) result = 'win';
      else if (match.awayGoals === match.homeGoals) result = 'draw';
      else result = 'loss';
    }
    return { opponentName, result, score };
  };

  return (
    <div className="bg-secondary dark:bg-secondary-dark rounded-lg shadow p-4">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {teamMatches.map((match, idx) => {
          const { opponentName, result, score } = getMatchInfo(match);
          let bgColor = '';
          if (result === 'win') bgColor = 'bg-green-500 text-white';
          else if (result === 'draw') bgColor = 'bg-gray-400 text-white';
          else if (result === 'loss') bgColor = 'bg-red-500 text-white';
          return (
            <React.Fragment key={match.id}>
              <div className="flex flex-col items-center align-middle justify-center">
                <span className={`font-semibold mb-1 rounded-full px-3 py-1 text-base whitespace-nowrap ${bgColor}`}>{score}</span>
                <span className="text-sm text-center mt-1">{opponentName}</span>
              </div>
              
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TeamFormCard;