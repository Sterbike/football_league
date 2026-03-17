import React from "react";
import { teams, teamStatistics } from '../data/mockdata';
import Table from '../components/Table';

const TabellaPage = () => {
  return (
    <main className="px-[4vw] flex-1 transition-colors flex flex-col items-center bg-background dark:bg-background-dark dark:text-primary text-primary-dark">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-8">Tabella</h1>
      <div className="w-full max-w-4xl mx-auto mt-8">
        <Table
        title={"tabella"}
        showTitle={false}
          data={teams
            .map(team => {
              const stats = teamStatistics.find(ts => ts.teamId === team.id);
              return {
                ...team,
                played: stats ? stats.played : 0,
                won: stats ? stats.won : 0,
                drawn: stats ? stats.drawn : 0,
                lost: stats ? stats.lost : 0,
                points: stats ? stats.points : 0
              };
            })
            .sort((a, b) => b.points - a.points)
          }
          limit={teams.length}
          columns={[
              {
                key: "name",
                label: <span className="inline">Csapat</span>,
                render: (row) => <span className="font-bold">{row.name}</span>,
              },
              { key: "played", label: <span><span className="flex md:hidden justify-center">M</span><span className="hidden md:flex justify-center">Mérkőzések</span></span>, render: (row) => <span className="block text-center w-full">{row.played}</span> },
              { key: "won", label: <span><span className="flex md:hidden justify-center">Gy</span><span className="hidden md:flex justify-center">Győzelem</span></span>, render: (row) => <span className="block text-center w-full">{row.won}</span> },
              { key: "drawn", label: <span><span className="flex md:hidden justify-center">D</span><span className="hidden md:flex justify-center">Döntetlen</span></span>, render: (row) => <span className="block text-center w-full">{row.drawn}</span> },
              { key: "lost", label: <span><span className="flex md:hidden justify-center">V</span><span className="hidden md:flex justify-center">Vereség</span></span>, render: (row) => <span className="block text-center w-full">{row.lost}</span> },
              { key: "points", label: <span><span className="flex md:hidden justify-center">P</span><span className="hidden md:flex justify-center">Pont</span></span>, render: (row) => <span className="block text-center w-full">{row.points}</span> },
          ]}
        />
      </div>
      {/* Legend below table */}
      <div className="w-full max-w-4xl mx-auto mt-6 flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center">
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded-full bg-green-500 border-2 border-green-600"></span>
          <span className="text-sm">Bajnokok Ligája</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-600"></span>
          <span className="text-sm">Európa Liga</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded-full bg-red-500 border-2 border-red-600"></span>
          <span className="text-sm">Kieső</span>
        </div>
      </div>
    </main>
  );
};

export default TabellaPage;
