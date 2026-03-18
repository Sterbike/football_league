import React, { useState } from "react";
import Table from "./Table";


// Person icon SVG
const PersonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" fill="#e2e2e2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="5" y="14" width="14" height="6" rx="3" fill="#f3f3f3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
// Ball icon SVG
const BallIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#f3f3f3" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="#e2e2e2" />
    <path d="M12 2v5M12 17v5M2 12h5M17 12h5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
// Card icon SVG (rectangle)
const CardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="14" height="18" rx="2" fill="#ffe066" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const columnSets = [
  // 0: Basic info
  [
    { key: "name", label: "Név" },
    { key: "position", label: "Pozíció" },
    { key: "age", label: "Kor" },
  ],
  // 1: Goals/Assists
  [
    { key: "name", label: "Név" },
    { key: "goals", label: "Gólok", render: (row) => row.goals ?? '-' },
    { key: "assists", label: "Gólpassz", render: (row) => row.assists ?? '-' },
  ],
  // 2: Cards
  [
    { key: "name", label: "Név" },
    { key: "yellowCards", label: "Sárga", render: (row) => row.yellowCards ?? '-' },
    { key: "redCards", label: "Piros", render: (row) => row.redCards ?? '-' },
  ],
];

export default function PlayerTableResponsive({ data }) {
  const [view, setView] = useState(0);
  // On desktop, always show all columns
  // On mobile, show selected columns
  return (
    <div>
      <div className="flex justify-end mb-2 md:hidden">
        <button
          className="bg-accent text-background rounded-full p-2 shadow hover:bg-accent-dark transition"
          onClick={() => setView((v) => (v + 1) % 3)}
          title="Váltás nézetek között"
        >
          {view === 2 && <PersonIcon />}
          {view === 0 && <BallIcon />}
          {view === 1 && <CardIcon />}
        </button>
      </div>
      <div className="block lg:hidden">
        <Table
          data={data}
          showRanking={false}
          columns={columnSets[view]}
          title={null}
          showTitle={false}
        />
      </div>
      <div className="hidden lg:block">
        <Table
          data={data}
          showRanking={false}
          columns={[
            { key: "name", label: "Név" },
            { key: "position", label: "Pozíció" },
            { key: "age", label: "Kor" },
            { key: "goals", label: "Gólok", render: (row) => row.goals ?? '-' },
            { key: "assists", label: "Gólpassz", render: (row) => row.assists ?? '-' },
            { key: "yellowCards", label: "Sárga", render: (row) => row.yellowCards ?? '-' },
            { key: "redCards", label: "Piros", render: (row) => row.redCards ?? '-' },
          ]}
          title={null}
          showTitle={false}
        />
      </div>
    </div>
  );
}
