import React from "react";
import { useParams } from "react-router-dom";
import { teams } from '../data/mockdata';
import TeamFormCard from '../components/TeamFormCard';
import NextMatchCard from '../components/NextMatchCard';

const TeamPage = () => {
  const { teamId } = useParams();
  const team = teams.find(t => t.id === teamId);

  return (
    <main className="px-[4vw] flex-1 transition-colors flex flex-col items-center bg-background dark:bg-background-dark dark:text-primary text-primary-dark">
      {team ? (
        <>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-8">{team.name}</h1>
          <div className="flex flex-row-reverse gap-6 ">
             {/* Következő mérkőzés */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Következő mérkőzés</h2>
                <NextMatchCard teamId={team.id} />
            </div>
            {/* Team form card: last 5 matches */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Utolsó 5 mérkőzés</h2>
                <TeamFormCard teamId={team.id} />
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
