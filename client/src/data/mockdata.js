
// Mock Teams
export const teams = [
  { id: "t1", name: "Ferencváros", city: "Budapest", stadium: "Groupama Aréna"},
  { id: "t2", name: "MOL Fehérvár", city: "Székesfehérvár", stadium: "MOL Aréna Sóstó"},
  { id: "t3", name: "Paks", city: "Paks", stadium: "Paksi Stadion"},
  { id: "t4", name: "Újpest", city: "Budapest", stadium: "Szusza Ferenc Stadion"},
  { id: "t5", name: "Diósgyőr", city: "Miskolc", stadium: "DVTK Stadion"},
  { id: "t6", name: "Kecskemét", city: "Kecskemét", stadium: "Széktói Stadion"},
  { id: "t7", name: "Zalaegerszeg", city: "Zalaegerszeg", stadium: "ZTE Aréna"},
  { id: "t8", name: "MTK Budapest", city: "Budapest", stadium: "Hidegkuti Nándor Stadion"},
  { id: "t9", name: "Kisvárda", city: "Kisvárda", stadium: "Kisvárda Master Good Stadion"},
  { id: "t10", name: "Mezőkövesd", city: "Mezőkövesd", stadium: "Mezőkövesd Városi Stadion"},
  { id: "t11", name: "Debrecen", city: "Debrecen", stadium: "Nagyerdei Stadion"},
  { id: "t12", name: "Puskás Akadémia", city: "Felcsút", stadium: "Pancho Aréna"},
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
  { id: "m1", homeTeamId: "t1", awayTeamId: "t4", homeGoals: 0, awayGoals: 0, date: "2026-03-18", time: "18:00" },
  { id: "m2", homeTeamId: "t2", awayTeamId: "t5", homeGoals: 1, awayGoals: 2, date: "2026-03-18", time: "20:00" },
  { id: "m3", homeTeamId: "t3", awayTeamId: "t1", homeGoals: 2, awayGoals: 2, date: "2026-03-18", time: "21:30" },
  { id: "m4", homeTeamId: "t4", awayTeamId: "t5", homeGoals: 0, awayGoals: 0, date: "2026-03-10", time: "20:00" },
  { id: "m5", homeTeamId: "t2", awayTeamId: "t1", homeGoals: 0, awayGoals: 0, date: "2026-03-07", time: "17:30" },
  { id: "m6", homeTeamId: "t3", awayTeamId: "t5", homeGoals: 1, awayGoals: 3, date: "2026-03-05", time: "19:00" },
  { id: "m7", homeTeamId: "t1", awayTeamId: "t2", homeGoals: 3, awayGoals: 2, date: "2026-03-17", time: "19:00" },
  { id: "m8", homeTeamId: "t5", awayTeamId: "t3", homeGoals: 1, awayGoals: 1, date: "2026-03-11", time: "18:30" },
];

// Mock Player Statistics
export const playerStatistics = [
  { id: "s1", playerId: "p1", goals: 12, assists: 3, yellowCards: 1, redCards: 0 },
  { id: "s2", playerId: "p2", goals: 10, assists: 5, yellowCards: 2, redCards: 0 },
  { id: "s3", playerId: "p3", goals: 9, assists: 2, yellowCards: 0, redCards: 0 },
  { id: "s4", playerId: "p4", goals: 8, assists: 4, yellowCards: 1, redCards: 0 },
  { id: "s5", playerId: "p5", goals: 7, assists: 1, yellowCards: 3, redCards: 1 },
];

// Mock Team Statistics
export const teamStatistics = [
  { teamId: "t1", played: 22, won: 14, drawn: 3, lost: 5, points: 45 },
  { teamId: "t2", played: 22, won: 13, drawn: 3, lost: 6, points: 42 },
  { teamId: "t3", played: 22, won: 11, drawn: 6, lost: 5, points: 39 },
  { teamId: "t4", played: 22, won: 10, drawn: 6, lost: 6, points: 36 },
  { teamId: "t5", played: 22, won: 9, drawn: 6, lost: 7, points: 33 },
  { teamId: "t6", played: 22, won: 8, drawn: 7, lost: 7, points: 31 },
  { teamId: "t7", played: 22, won: 8, drawn: 5, lost: 9, points: 29 },
  { teamId: "t8", played: 22, won: 7, drawn: 7, lost: 8, points: 28 },
  { teamId: "t9", played: 22, won: 7, drawn: 6, lost: 9, points: 27 },
  { teamId: "t10", played: 22, won: 6, drawn: 7, lost: 9, points: 25 },
  { teamId: "t11", played: 22, won: 6, drawn: 6, lost: 10, points: 24 },
  { teamId: "t12", played: 22, won: 6, drawn: 5, lost: 11, points: 23 },
];
