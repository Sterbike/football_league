
// Premier League 2025/26 Teams (all 20)
export const teams = [
  { id: "t1", name: "Arsenal", city: "London", stadium: "Emirates Stadium" },
  { id: "t2", name: "Aston Villa", city: "Birmingham", stadium: "Villa Park" },
  { id: "t3", name: "Bournemouth", city: "Bournemouth", stadium: "Vitality Stadium" },
  { id: "t4", name: "Brentford", city: "London", stadium: "Gtech Community Stadium" },
  { id: "t5", name: "Brighton & Hove Albion", city: "Brighton", stadium: "Amex Stadium" },
  { id: "t6", name: "Burnley", city: "Burnley", stadium: "Turf Moor" },
  { id: "t7", name: "Chelsea", city: "London", stadium: "Stamford Bridge" },
  { id: "t8", name: "Crystal Palace", city: "London", stadium: "Selhurst Park" },
  { id: "t9", name: "Everton", city: "Liverpool", stadium: "Goodison Park" },
  { id: "t10", name: "Fulham", city: "London", stadium: "Craven Cottage" },
  { id: "t11", name: "Liverpool", city: "Liverpool", stadium: "Anfield" },
  { id: "t12", name: "Luton Town", city: "Luton", stadium: "Kenilworth Road" },
  { id: "t13", name: "Manchester City", city: "Manchester", stadium: "Etihad Stadium" },
  { id: "t14", name: "Manchester United", city: "Manchester", stadium: "Old Trafford" },
  { id: "t15", name: "Newcastle United", city: "Newcastle", stadium: "St. James' Park" },
  { id: "t16", name: "Nottingham Forest", city: "Nottingham", stadium: "City Ground" },
  { id: "t17", name: "Sheffield United", city: "Sheffield", stadium: "Bramall Lane" },
  { id: "t18", name: "Tottenham Hotspur", city: "London", stadium: "Tottenham Hotspur Stadium" },
  { id: "t19", name: "West Ham United", city: "London", stadium: "London Stadium" },
  { id: "t20", name: "Wolverhampton Wanderers", city: "Wolverhampton", stadium: "Molineux Stadium" },
];

// Premier League Players (sample)
export const players = [
  // Manchester City
  { id: "p1", name: "Erling Haaland", age: 25, position: "csatár", teamId: "t13" },
  { id: "p2", name: "Phil Foden", age: 24, position: "középpályás", teamId: "t13" },
  // Liverpool
  { id: "p3", name: "Mohamed Salah", age: 33, position: "csatár", teamId: "t11" },
  // Arsenal
  { id: "p4", name: "Bukayo Saka", age: 24, position: "csatár", teamId: "t1" },
  // Aston Villa
  { id: "p5", name: "Ollie Watkins", age: 30, position: "csatár", teamId: "t2" },
  // Tottenham Hotspur
  { id: "p6", name: "Son Heung-min", age: 33, position: "csatár", teamId: "t18" },
  // Manchester United
  { id: "p7", name: "Bruno Fernandes", age: 31, position: "középpályás", teamId: "t14" },
  // Chelsea
  { id: "p8", name: "Cole Palmer", age: 24, position: "középpályás", teamId: "t7" },
  // Newcastle United
  { id: "p9", name: "Alexander Isak", age: 26, position: "csatár", teamId: "t15" },
  // West Ham United
  { id: "p10", name: "Jarrod Bowen", age: 29, position: "csatár", teamId: "t19" },
  // Brighton & Hove Albion
  { id: "p11", name: "João Pedro", age: 24, position: "csatár", teamId: "t5" },
];

// Premier League Matches (sample, recent rounds)
export const matches = [
  { id: "m1", homeTeamId: "t1", awayTeamId: "t3", homeGoals: 2, awayGoals: 0, date: "2026-03-15", time: "18:30" },
  { id: "m2", homeTeamId: "t2", awayTeamId: "t4", homeGoals: 1, awayGoals: 1, date: "2026-03-15", time: "21:00" },
  { id: "m3", homeTeamId: "t5", awayTeamId: "t6", homeGoals: 2, awayGoals: 2, date: "2026-03-14", time: "20:00" },
  { id: "m4", homeTeamId: "t7", awayTeamId: "t8", homeGoals: 0, awayGoals: 1, date: "2026-03-13", time: "19:00" },
  { id: "m5", homeTeamId: "t9", awayTeamId: "t10", homeGoals: 1, awayGoals: 3, date: "2026-03-12", time: "18:00" },
  { id: "m6", homeTeamId: "t3", awayTeamId: "t2", homeGoals: 1, awayGoals: 2, date: "2026-03-10", time: "21:00" },
  { id: "m7", homeTeamId: "t4", awayTeamId: "t1", homeGoals: 0, awayGoals: 2, date: "2026-03-09", time: "20:30" },
  { id: "m8", homeTeamId: "t8", awayTeamId: "t5", homeGoals: 2, awayGoals: 2, date: "2026-03-08", time: "17:00" },
];

// Premier League Player Statistics (sample)
export const playerStatistics = [
  { id: "s1", playerId: "p1", goals: 25, assists: 6, yellowCards: 2, redCards: 0 },
  { id: "s2", playerId: "p2", goals: 14, assists: 10, yellowCards: 3, redCards: 0 },
  { id: "s3", playerId: "p3", goals: 19, assists: 8, yellowCards: 1, redCards: 0 },
  { id: "s4", playerId: "p4", goals: 15, assists: 9, yellowCards: 2, redCards: 0 },
  { id: "s5", playerId: "p5", goals: 17, assists: 7, yellowCards: 2, redCards: 0 },
  { id: "s6", playerId: "p6", goals: 16, assists: 5, yellowCards: 1, redCards: 0 },
  { id: "s7", playerId: "p7", goals: 8, assists: 12, yellowCards: 5, redCards: 1 },
  { id: "s8", playerId: "p8", goals: 11, assists: 8, yellowCards: 2, redCards: 0 },
  { id: "s9", playerId: "p9", goals: 13, assists: 4, yellowCards: 2, redCards: 0 },
  { id: "s10", playerId: "p10", goals: 12, assists: 6, yellowCards: 3, redCards: 0 },
  { id: "s11", playerId: "p11", goals: 10, assists: 5, yellowCards: 1, redCards: 0 },
];

// Premier League Team Statistics (all 20, sample data)
export const teamStatistics = [
  { teamId: "t1", played: 28, won: 21, drawn: 4, lost: 3, points: 67 },
  { teamId: "t2", played: 28, won: 19, drawn: 6, lost: 3, points: 63 },
  { teamId: "t3", played: 28, won: 10, drawn: 8, lost: 10, points: 38 },
  { teamId: "t4", played: 28, won: 8, drawn: 9, lost: 11, points: 33 },
  { teamId: "t5", played: 28, won: 12, drawn: 8, lost: 8, points: 44 },
  { teamId: "t6", played: 28, won: 5, drawn: 6, lost: 17, points: 21 },
  { teamId: "t7", played: 28, won: 13, drawn: 8, lost: 7, points: 47 },
  { teamId: "t8", played: 28, won: 7, drawn: 9, lost: 12, points: 30 },
  { teamId: "t9", played: 28, won: 8, drawn: 8, lost: 12, points: 32 },
  { teamId: "t10", played: 28, won: 10, drawn: 6, lost: 12, points: 36 },
  { teamId: "t11", played: 28, won: 19, drawn: 6, lost: 3, points: 63 },
  { teamId: "t12", played: 28, won: 5, drawn: 7, lost: 16, points: 22 },
  { teamId: "t13", played: 28, won: 18, drawn: 7, lost: 3, points: 61 },
  { teamId: "t14", played: 28, won: 14, drawn: 7, lost: 7, points: 49 },
  { teamId: "t15", played: 28, won: 12, drawn: 7, lost: 9, points: 43 },
  { teamId: "t16", played: 28, won: 6, drawn: 8, lost: 14, points: 26 },
  { teamId: "t17", played: 28, won: 3, drawn: 7, lost: 18, points: 16 },
  { teamId: "t18", played: 28, won: 16, drawn: 5, lost: 7, points: 53 },
  { teamId: "t19", played: 28, won: 11, drawn: 8, lost: 9, points: 41 },
  { teamId: "t20", played: 28, won: 10, drawn: 7, lost: 11, points: 37 },
];
