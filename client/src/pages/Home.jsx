
import React from "react";
import { teams, players, matches, statistics } from '../data/mockdata';
import Table from '../components/Table';
import MatchFlexList from '../components/MatchFlexList';

const Home = () => {
  return (
    <main className="flex-1 transition-colors flex flex-col items-center bg-background dark:bg-background-dark dark:text-text-dark text-text">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-8">
        Foci Bajnokság Információs Oldal
      </h1>
      <p className="text-base md:text-lg lg:text-xl mb-4">
        Üdvözlünk a bajnokság főoldalán!
      </p>
      <section className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="w-full flex flex-col col-span-2 md:flex-row gap-8 mt-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Legutóbbi 3 mérkőzés</h2>
            <MatchFlexList matches={matches} teams={teams} previous limit={3} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Következő 3 mérkőzés</h2>
            <MatchFlexList matches={matches} teams={teams} upcoming limit={3} />
          </div>
        </div>



      {/* Góllövőlista */}
      <Table
        data={statistics
          .map(stat => {
            const player = players.find(p => p.id === stat.playerId);
            const team = teams.find(t => t.id === player?.teamId);
            return {
              ...stat,
              name: player?.name || 'Ismeretlen',
              team: team?.name || 'Ismeretlen',
            };
          })
          .sort((a, b) => b.goals - a.goals)
        }
        limit={5}
        title="Góllövőlista"
        columns={[
          {
            key: "name",
            label: "Név",
            render: (row) => (
              <span className="font-bold">{row.name}</span>
            )
          },
          {
            key: "team",
            label: "Csapat",
          },
          {
            key: "goals",
            label: "Gól",
          }
        ]}
      />

      {/* Tabella */}
      <Table
        data={teams
          .slice()
          .sort((a, b) => b.points - a.points)
        }
        limit={5}
        title="Tabella"
        columns={[
          {
            key: "name",
            label: "Csapat",
            render: (row) => (
              <span className="font-bold">{row.name}</span>
            )
          },
          {
            key: "points",
            label: "Pont",
          }
        ]}
      />
    </section>
    </main>
  );
};

export default Home;
