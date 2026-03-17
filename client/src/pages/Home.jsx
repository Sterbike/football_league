import React from "react";
import { teams, players, matches, playerStatistics, teamStatistics } from "../data/mockdata";
import Table from "../components/Table";
import MatchGridList from "../components/MatchGridList";

const Home = () => {
  return (
    <main className="px-[4vw] flex-1 transition-colors flex flex-col items-center bg-background dark:bg-background-dark dark:text-primary text-primary-dark">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-8">
        Premier League
      </h1>
      <p className="text-base md:text-lg lg:text-xl mb-4">
        Üdvözlünk a bajnokság főoldalán!
      </p>
      <section className="w-full max-w-6xl mx-auto flex flex-col gap-8 mt-8 md:grid md:grid-cols-2">
        <div className="w-full flex flex-col col-span-2 md:flex-row gap-8 mt-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Legutóbbi mérkőzések</h2>
            <MatchGridList matches={matches} teams={teams} previous limit={3} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Következő mérkőzések</h2>
            <MatchGridList matches={matches} teams={teams} upcoming limit={3} />
          </div>
        </div>

        <Table
          data={teams
            .map(team => {
              const stats = teamStatistics.find(ts => ts.teamId === team.id);
              return {
                ...team,
                points: stats ? stats.points : 0
              };
            })
            .sort((a, b) => b.points - a.points)
          }
          limit={5}
          title="Tabella"
          columns={[
            {
              key: "name",
              label: "Csapat",
              render: (row) => <span className="font-bold">{row.name}</span>,
            },
            {
              key: "points",
              label: "Pont",
            },
          ]}
        />

        {/* Góllövőlista */}
        <Table
          data={playerStatistics
            .map((stat) => {
              const player = players.find((p) => p.id === stat.playerId);
              const team = teams.find((t) => t.id === player?.teamId);
              return {
                ...stat,
                name: player?.name || "Ismeretlen",
                team: team?.name || "Ismeretlen",
              };
            })
            .sort((a, b) => b.goals - a.goals)}
          limit={5}
          title="Góllövőlista"
          columns={[
            {
              key: "name",
              label: "Név",
              render: (row) => <span className="font-bold">{row.name}</span>,
            },
            {
              key: "team",
              label: "Csapat",
            },
            {
              key: "goals",
              label: "Gól",
            },
          ]}
        />

        {/* Tabella */}
      </section>
    </main>
  );
};

export default Home;
