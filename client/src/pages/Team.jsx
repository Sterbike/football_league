import React from "react";
import { useParams } from "react-router-dom";
import { teams, players, playerStatistics } from '../data/mockdata';
import TeamFormCard from '../components/TeamFormCard';
import NextMatchCard from '../components/NextMatchCard';
import Table from '../components/Table';
import PlayerTableResponsive from '../components/PlayerTableResponsive';

const TeamPage = () => {
  const { teamId } = useParams();
  const team = teams.find(t => t.id === teamId);
  // Merge player stats
  const teamPlayers = players
    .filter(p => p.teamId === teamId)
    .map(player => {
      const stats = playerStatistics.find(s => s.playerId === player.id) || {};
      return { ...player, ...stats };
    });

  return (
    <main className="px-[4vw]  flex-1 transition-colors flex flex-col items-center bg-background dark:bg-background-dark dark:text-primary text-primary-dark">
      {team ? (
        <>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-8">{team.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 min-w-6xl mx-auto mt-8">
            {/* Team form card: last 5 matches */}
            <div className="mb-6" >
                <h2 className="text-xl font-semibold mb-2 ">Utolsó 5 mérkőzés</h2>
                <TeamFormCard teamId={team.id} />
            </div>
             {/* Következő mérkőzés */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Következő mérkőzés</h2>
                <NextMatchCard teamId={team.id} />
            </div>
            {/* Csapathoz tartozó játékosok */}
            <div className="lg:col-span-2 mt-8">
                <h2 className="text-xl font-semibold mb-2">Játékosok</h2>
                
                {/* Responsive player table with toggle button for mobile */}
                <PlayerTableResponsive data={teamPlayers} />
            </div>

          </div>

          
        
        </>
      ) : (
        <div className="mt-16 text-xl font-bold text-red-500">Nincs ilyen csapat!</div>
      )}
    </main>
  );
};

export default TeamPage;
