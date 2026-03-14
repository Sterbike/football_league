
// Mock Teams
export const teams = [
  { id: "t1", name: "Fradi", city: "Budapest", stadium: "Groupama Aréna", points: 45 },
  { id: "t2", name: "Vidi", city: "Székesfehérvár", stadium: "MOL Aréna Sóstó", points: 42 },
  { id: "t3", name: "Paks", city: "Paks", stadium: "Paksi Stadion", points: 39 },
  { id: "t4", name: "Újpest", city: "Budapest", stadium: "Szusza Ferenc Stadion", points: 36 },
  { id: "t5", name: "DVTK", city: "Miskolc", stadium: "DVTK Stadion", points: 33 },
];

// Mock Players
export const players = [
  { id: "p1", name: "Nagy Ádám", age: 27, position: "csatár", teamId: "t1" },
  { id: "p2", name: "Kovács Péter", age: 29, position: "középpályás", teamId: "t2" },
  { id: "p3", name: "Szabó Gergő", age: 24, position: "védő", teamId: "t3" },
  { id: "p4", name: "Tóth Márk", age: 26, position: "csatár", teamId: "t4" },
  { id: "p5", name: "Simon Tamás", age: 28, position: "középpályás", teamId: "t5" },
];

// Mock Matches
export const matches = [
    { id: "m1", homeTeamId: "t1", awayTeamId: "t4", homeGoals: 2, awayGoals: 1, date: "2026-03-18" },
  { id: "m1", homeTeamId: "t1", awayTeamId: "t4", homeGoals: 2, awayGoals: 1, date: "2026-03-10" },
  { id: "m2", homeTeamId: "t2", awayTeamId: "t5", homeGoals: 0, awayGoals: 0, date: "2026-03-07" },
  { id: "m3", homeTeamId: "t3", awayTeamId: "t1", homeGoals: 1, awayGoals: 3, date: "2026-03-05" },
];

// Mock Statistics
export const statistics = [
  { id: "s1", playerId: "p1", goals: 12, assists: 3, yellowCards: 1, redCards: 0 },
  { id: "s2", playerId: "p2", goals: 10, assists: 5, yellowCards: 2, redCards: 0 },
  { id: "s3", playerId: "p3", goals: 9, assists: 2, yellowCards: 0, redCards: 0 },
  { id: "s4", playerId: "p4", goals: 8, assists: 4, yellowCards: 1, redCards: 0 },
  { id: "s5", playerId: "p5", goals: 7, assists: 1, yellowCards: 3, redCards: 1 },
];
