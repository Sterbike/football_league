// Premier League 2025/26 Teams (all 20)
export const teams = [
  { id: "t1", name: "Arsenal", stadiumId: "emirates" },
  { id: "t2", name: "Aston Villa", stadiumId: "villa_park" },
  { id: "t3", name: "Bournemouth", stadiumId: "vitality" },
  { id: "t4", name: "Brentford", stadiumId: "gtech" },
  { id: "t5", name: "Brighton", stadiumId: "amex" },
  { id: "t6", name: "Burnley", stadiumId: "turf_moor" },
  { id: "t7", name: "Chelsea", stadiumId: "stamford_bridge" },
  { id: "t8", name: "Crystal Palace", stadiumId: "selhurst_park" },
  { id: "t9", name: "Everton", stadiumId: "goodison_park" },
  { id: "t10", name: "Fulham", stadiumId: "craven_cottage" },
  { id: "t11", name: "Liverpool", stadiumId: "anfield" },
  { id: "t12", name: "Luton Town", stadiumId: "kenilworth_road" },
  { id: "t13", name: "Manchester City", stadiumId: "etihad_stadium" },
  { id: "t14", name: "Manchester United", stadiumId: "old_trafford" },
  { id: "t15", name: "Newcastle United", stadiumId: "st_james_park" },
  { id: "t16", name: "Nottingham Forest", stadiumId: "city_ground" },
  { id: "t17", name: "Sheffield United", stadiumId: "bramall_lane" },
  { id: "t18", name: "Tottenham Hotspur", stadiumId: "tottenham_hotspur_stadium" },
  { id: "t19", name: "West Ham United", stadiumId: "london_stadium" },
  { id: "t20", name: "Wolverhampton Wanderers", stadiumId: "molineux" },
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
  // Arsenal (t1)
  { id: "m1", homeTeamId: "t1", awayTeamId: "t3", homeGoals: 2, awayGoals: 0, date: "2026-03-15", time: "18:30" },
  { id: "m2", homeTeamId: "t1", awayTeamId: "t2", homeGoals: 3, awayGoals: 1, date: "2026-03-10", time: "20:00" },
  { id: "m3", homeTeamId: "t4", awayTeamId: "t1", homeGoals: 0, awayGoals: 2, date: "2026-03-09", time: "20:30" },
  { id: "m4", homeTeamId: "t1", awayTeamId: "t5", homeGoals: 2, awayGoals: 1, date: "2026-03-05", time: "19:00" },
  { id: "m5", homeTeamId: "t6", awayTeamId: "t1", homeGoals: 1, awayGoals: 4, date: "2026-03-01", time: "18:00" },

  // Aston Villa (t2)
  { id: "m6", homeTeamId: "t2", awayTeamId: "t4", homeGoals: 2, awayGoals: 1, date: "2026-03-15", time: "21:00" },
  { id: "m7", homeTeamId: "t2", awayTeamId: "t3", homeGoals: 1, awayGoals: 0, date: "2026-03-12", time: "20:00" },
  { id: "m8", homeTeamId: "t5", awayTeamId: "t2", homeGoals: 1, awayGoals: 2, date: "2026-03-08", time: "17:00" },
  { id: "m9", homeTeamId: "t2", awayTeamId: "t6", homeGoals: 3, awayGoals: 0, date: "2026-03-04", time: "18:00" },
  { id: "m10", homeTeamId: "t7", awayTeamId: "t2", homeGoals: 1, awayGoals: 2, date: "2026-03-02", time: "19:00" },

  // Bournemouth (t3)
  { id: "m11", homeTeamId: "t3", awayTeamId: "t4", homeGoals: 1, awayGoals: 1, date: "2026-03-14", time: "20:00" },
  { id: "m12", homeTeamId: "t3", awayTeamId: "t5", homeGoals: 2, awayGoals: 2, date: "2026-03-11", time: "21:00" },
  { id: "m13", homeTeamId: "t3", awayTeamId: "t6", homeGoals: 1, awayGoals: 0, date: "2026-03-07", time: "20:00" },
  { id: "m14", homeTeamId: "t7", awayTeamId: "t3", homeGoals: 0, awayGoals: 1, date: "2026-03-03", time: "18:00" },
  { id: "m15", homeTeamId: "t3", awayTeamId: "t8", homeGoals: 2, awayGoals: 1, date: "2026-03-01", time: "17:00" },

  // Brentford (t4)
  { id: "m16", homeTeamId: "t4", awayTeamId: "t5", homeGoals: 1, awayGoals: 2, date: "2026-03-13", time: "19:00" },
  { id: "m17", homeTeamId: "t4", awayTeamId: "t6", homeGoals: 2, awayGoals: 2, date: "2026-03-10", time: "21:00" },
  { id: "m18", homeTeamId: "t4", awayTeamId: "t7", homeGoals: 0, awayGoals: 1, date: "2026-03-06", time: "20:00" },
  { id: "m19", homeTeamId: "t8", awayTeamId: "t4", homeGoals: 1, awayGoals: 1, date: "2026-03-02", time: "18:00" },
  { id: "m20", homeTeamId: "t4", awayTeamId: "t9", homeGoals: 2, awayGoals: 0, date: "2026-03-01", time: "17:00" },

  // Brighton (t5)
  { id: "m21", homeTeamId: "t5", awayTeamId: "t6", homeGoals: 2, awayGoals: 2, date: "2026-03-14", time: "20:00" },
  { id: "m22", homeTeamId: "t5", awayTeamId: "t7", homeGoals: 1, awayGoals: 1, date: "2026-03-12", time: "21:00" },
  { id: "m23", homeTeamId: "t8", awayTeamId: "t5", homeGoals: 2, awayGoals: 2, date: "2026-03-08", time: "17:00" },
  { id: "m24", homeTeamId: "t5", awayTeamId: "t9", homeGoals: 2, awayGoals: 1, date: "2026-03-04", time: "18:00" },
  { id: "m25", homeTeamId: "t10", awayTeamId: "t5", homeGoals: 1, awayGoals: 2, date: "2026-03-02", time: "19:00" },

  // Burnley (t6)
  { id: "m26", homeTeamId: "t6", awayTeamId: "t7", homeGoals: 0, awayGoals: 2, date: "2026-03-13", time: "19:00" },
  { id: "m27", homeTeamId: "t6", awayTeamId: "t8", homeGoals: 1, awayGoals: 1, date: "2026-03-11", time: "21:00" },
  { id: "m28", homeTeamId: "t9", awayTeamId: "t6", homeGoals: 2, awayGoals: 0, date: "2026-03-07", time: "20:00" },
  { id: "m29", homeTeamId: "t6", awayTeamId: "t10", homeGoals: 1, awayGoals: 3, date: "2026-03-03", time: "18:00" },
  { id: "m30", homeTeamId: "t6", awayTeamId: "t11", homeGoals: 0, awayGoals: 2, date: "2026-03-01", time: "17:00" },

  // Chelsea (t7)
  { id: "m31", homeTeamId: "t7", awayTeamId: "t8", homeGoals: 2, awayGoals: 1, date: "2026-03-15", time: "18:00" },
  { id: "m32", homeTeamId: "t7", awayTeamId: "t9", homeGoals: 1, awayGoals: 1, date: "2026-03-12", time: "20:00" },
  { id: "m33", homeTeamId: "t10", awayTeamId: "t7", homeGoals: 0, awayGoals: 2, date: "2026-03-10", time: "19:00" },
  { id: "m34", homeTeamId: "t7", awayTeamId: "t11", homeGoals: 2, awayGoals: 2, date: "2026-03-07", time: "21:00" },
  { id: "m35", homeTeamId: "t12", awayTeamId: "t7", homeGoals: 1, awayGoals: 3, date: "2026-03-05", time: "18:00" },

  // Crystal Palace (t8)
  { id: "m36", homeTeamId: "t8", awayTeamId: "t9", homeGoals: 1, awayGoals: 1, date: "2026-03-15", time: "17:00" },
  { id: "m37", homeTeamId: "t8", awayTeamId: "t10", homeGoals: 2, awayGoals: 2, date: "2026-03-13", time: "20:00" },
  { id: "m38", homeTeamId: "t13", awayTeamId: "t8", homeGoals: 3, awayGoals: 0, date: "2026-03-11", time: "18:00" },
  { id: "m39", homeTeamId: "t8", awayTeamId: "t14", homeGoals: 0, awayGoals: 1, date: "2026-03-08", time: "19:00" },
  { id: "m40", homeTeamId: "t15", awayTeamId: "t8", homeGoals: 2, awayGoals: 1, date: "2026-03-06", time: "20:00" },

  // Everton (t9)
  { id: "m41", homeTeamId: "t9", awayTeamId: "t10", homeGoals: 1, awayGoals: 0, date: "2026-03-15", time: "16:00" },
  { id: "m42", homeTeamId: "t9", awayTeamId: "t11", homeGoals: 2, awayGoals: 2, date: "2026-03-13", time: "21:00" },
  { id: "m43", homeTeamId: "t12", awayTeamId: "t9", homeGoals: 0, awayGoals: 1, date: "2026-03-10", time: "18:00" },
  { id: "m44", homeTeamId: "t9", awayTeamId: "t13", homeGoals: 1, awayGoals: 3, date: "2026-03-07", time: "20:00" },
  { id: "m45", homeTeamId: "t14", awayTeamId: "t9", homeGoals: 2, awayGoals: 2, date: "2026-03-05", time: "19:00" },

  // Fulham (t10)
  { id: "m46", homeTeamId: "t10", awayTeamId: "t11", homeGoals: 1, awayGoals: 1, date: "2026-03-15", time: "15:00" },
  { id: "m47", homeTeamId: "t10", awayTeamId: "t12", homeGoals: 2, awayGoals: 0, date: "2026-03-13", time: "18:00" },
  { id: "m48", homeTeamId: "t13", awayTeamId: "t10", homeGoals: 2, awayGoals: 2, date: "2026-03-11", time: "20:00" },
  { id: "m49", homeTeamId: "t10", awayTeamId: "t14", homeGoals: 1, awayGoals: 3, date: "2026-03-08", time: "21:00" },
  { id: "m50", homeTeamId: "t15", awayTeamId: "t10", homeGoals: 0, awayGoals: 1, date: "2026-03-06", time: "18:00" },

  // Liverpool (t11)
  { id: "m51", homeTeamId: "t11", awayTeamId: "t12", homeGoals: 3, awayGoals: 0, date: "2026-03-15", time: "14:00" },
  { id: "m52", homeTeamId: "t11", awayTeamId: "t13", homeGoals: 2, awayGoals: 2, date: "2026-03-13", time: "19:00" },
  { id: "m53", homeTeamId: "t14", awayTeamId: "t11", homeGoals: 1, awayGoals: 2, date: "2026-03-11", time: "21:00" },
  { id: "m54", homeTeamId: "t11", awayTeamId: "t15", homeGoals: 2, awayGoals: 1, date: "2026-03-08", time: "20:00" },
  { id: "m55", homeTeamId: "t16", awayTeamId: "t11", homeGoals: 0, awayGoals: 3, date: "2026-03-06", time: "19:00" },

  // Luton Town (t12)
  { id: "m56", homeTeamId: "t12", awayTeamId: "t13", homeGoals: 0, awayGoals: 2, date: "2026-03-15", time: "13:00" },
  { id: "m57", homeTeamId: "t12", awayTeamId: "t14", homeGoals: 1, awayGoals: 1, date: "2026-03-13", time: "17:00" },
  { id: "m58", homeTeamId: "t15", awayTeamId: "t12", homeGoals: 2, awayGoals: 0, date: "2026-03-11", time: "19:00" },
  { id: "m59", homeTeamId: "t12", awayTeamId: "t16", homeGoals: 1, awayGoals: 2, date: "2026-03-08", time: "18:00" },
  { id: "m60", homeTeamId: "t17", awayTeamId: "t12", homeGoals: 1, awayGoals: 1, date: "2026-03-06", time: "17:00" },

  // Manchester City (t13)
  { id: "m61", homeTeamId: "t13", awayTeamId: "t14", homeGoals: 2, awayGoals: 1, date: "2026-03-15", time: "12:00" },
  { id: "m62", homeTeamId: "t13", awayTeamId: "t15", homeGoals: 3, awayGoals: 0, date: "2026-03-13", time: "16:00" },
  { id: "m63", homeTeamId: "t16", awayTeamId: "t13", homeGoals: 0, awayGoals: 2, date: "2026-03-11", time: "17:00" },
  { id: "m64", homeTeamId: "t13", awayTeamId: "t17", homeGoals: 2, awayGoals: 1, date: "2026-03-08", time: "16:00" },
  { id: "m65", homeTeamId: "t18", awayTeamId: "t13", homeGoals: 1, awayGoals: 3, date: "2026-03-06", time: "16:00" },

  // Manchester United (t14)
  { id: "m66", homeTeamId: "t14", awayTeamId: "t15", homeGoals: 2, awayGoals: 2, date: "2026-03-15", time: "11:00" },
  { id: "m67", homeTeamId: "t14", awayTeamId: "t16", homeGoals: 1, awayGoals: 0, date: "2026-03-13", time: "15:00" },
  { id: "m68", homeTeamId: "t17", awayTeamId: "t14", homeGoals: 0, awayGoals: 2, date: "2026-03-11", time: "16:00" },
  { id: "m69", homeTeamId: "t14", awayTeamId: "t18", homeGoals: 2, awayGoals: 1, date: "2026-03-08", time: "15:00" },
  { id: "m70", homeTeamId: "t19", awayTeamId: "t14", homeGoals: 1, awayGoals: 3, date: "2026-03-06", time: "15:00" },

  // Newcastle United (t15)
  { id: "m71", homeTeamId: "t15", awayTeamId: "t16", homeGoals: 1, awayGoals: 1, date: "2026-03-15", time: "10:00" },
  { id: "m72", homeTeamId: "t15", awayTeamId: "t17", homeGoals: 2, awayGoals: 0, date: "2026-03-13", time: "14:00" },
  { id: "m73", homeTeamId: "t18", awayTeamId: "t15", homeGoals: 0, awayGoals: 2, date: "2026-03-11", time: "15:00" },
  { id: "m74", homeTeamId: "t15", awayTeamId: "t19", homeGoals: 2, awayGoals: 2, date: "2026-03-08", time: "14:00" },
  { id: "m75", homeTeamId: "t20", awayTeamId: "t15", homeGoals: 1, awayGoals: 3, date: "2026-03-06", time: "14:00" },

  // Nottingham Forest (t16)
  { id: "m76", homeTeamId: "t16", awayTeamId: "t17", homeGoals: 2, awayGoals: 1, date: "2026-03-15", time: "13:00" },
  { id: "m77", homeTeamId: "t16", awayTeamId: "t18", homeGoals: 1, awayGoals: 3, date: "2026-03-13", time: "17:00" },
  { id: "m78", homeTeamId: "t19", awayTeamId: "t16", homeGoals: 2, awayGoals: 2, date: "2026-03-11", time: "19:00" },
  { id: "m79", homeTeamId: "t16", awayTeamId: "t20", homeGoals: 1, awayGoals: 1, date: "2026-03-08", time: "18:00" },
  { id: "m80", homeTeamId: "t16", awayTeamId: "t1", homeGoals: 0, awayGoals: 2, date: "2026-03-06", time: "17:00" },

  // Sheffield United (t17)
  { id: "m81", homeTeamId: "t17", awayTeamId: "t18", homeGoals: 0, awayGoals: 2, date: "2026-03-15", time: "12:00" },
  { id: "m82", homeTeamId: "t17", awayTeamId: "t19", homeGoals: 1, awayGoals: 3, date: "2026-03-13", time: "16:00" },
  { id: "m83", homeTeamId: "t20", awayTeamId: "t17", homeGoals: 2, awayGoals: 1, date: "2026-03-11", time: "17:00" },
  { id: "m84", homeTeamId: "t17", awayTeamId: "t1", homeGoals: 0, awayGoals: 3, date: "2026-03-08", time: "16:00" },
  { id: "m85", homeTeamId: "t17", awayTeamId: "t2", homeGoals: 1, awayGoals: 1, date: "2026-03-06", time: "16:00" },

  // Tottenham Hotspur (t18)
  { id: "m86", homeTeamId: "t18", awayTeamId: "t19", homeGoals: 2, awayGoals: 1, date: "2026-03-15", time: "11:00" },
  { id: "m87", homeTeamId: "t18", awayTeamId: "t20", homeGoals: 3, awayGoals: 0, date: "2026-03-13", time: "15:00" },
  { id: "m88", homeTeamId: "t1", awayTeamId: "t18", homeGoals: 1, awayGoals: 2, date: "2026-03-11", time: "16:00" },
  { id: "m89", homeTeamId: "t18", awayTeamId: "t2", homeGoals: 2, awayGoals: 2, date: "2026-03-08", time: "15:00" },
  { id: "m90", homeTeamId: "t18", awayTeamId: "t3", homeGoals: 1, awayGoals: 1, date: "2026-03-06", time: "15:00" },

  // West Ham United (t19)
  { id: "m91", homeTeamId: "t19", awayTeamId: "t20", homeGoals: 2, awayGoals: 2, date: "2026-03-15", time: "10:00" },
  { id: "m92", homeTeamId: "t19", awayTeamId: "t1", homeGoals: 1, awayGoals: 3, date: "2026-03-13", time: "14:00" },
  { id: "m93", homeTeamId: "t2", awayTeamId: "t19", homeGoals: 2, awayGoals: 1, date: "2026-03-11", time: "15:00" },
  { id: "m94", homeTeamId: "t19", awayTeamId: "t3", homeGoals: 2, awayGoals: 2, date: "2026-03-08", time: "14:00" },
  { id: "m95", homeTeamId: "t19", awayTeamId: "t4", homeGoals: 1, awayGoals: 1, date: "2026-03-06", time: "14:00" },

  // Wolverhampton Wanderers (t20)
  { id: "m96", homeTeamId: "t20", awayTeamId: "t1", homeGoals: 0, awayGoals: 2, date: "2026-03-15", time: "09:00" },
  { id: "m97", homeTeamId: "t20", awayTeamId: "t2", homeGoals: 1, awayGoals: 1, date: "2026-03-13", time: "13:00" },
  { id: "m98", homeTeamId: "t3", awayTeamId: "t20", homeGoals: 2, awayGoals: 0, date: "2026-03-11", time: "12:00" },
  { id: "m99", homeTeamId: "t20", awayTeamId: "t4", homeGoals: 1, awayGoals: 2, date: "2026-03-08", time: "11:00" },
  { id: "m100", homeTeamId: "t20", awayTeamId: "t5", homeGoals: 2, awayGoals: 2, date: "2026-03-06", time: "10:00" },

  // Future matches for all teams
  { id: "m101", homeTeamId: "t1", awayTeamId: "t2", homeGoals: null, awayGoals: null, date: "2026-04-01", time: "18:00" },
  { id: "m102", homeTeamId: "t3", awayTeamId: "t4", homeGoals: null, awayGoals: null, date: "2026-04-01", time: "20:00" },
  { id: "m103", homeTeamId: "t5", awayTeamId: "t6", homeGoals: null, awayGoals: null, date: "2026-04-02", time: "18:00" },
  { id: "m104", homeTeamId: "t7", awayTeamId: "t8", homeGoals: null, awayGoals: null, date: "2026-04-02", time: "20:00" },
  { id: "m105", homeTeamId: "t9", awayTeamId: "t10", homeGoals: null, awayGoals: null, date: "2026-04-03", time: "18:00" },
  { id: "m106", homeTeamId: "t11", awayTeamId: "t12", homeGoals: null, awayGoals: null, date: "2026-04-03", time: "20:00" },
  { id: "m107", homeTeamId: "t13", awayTeamId: "t14", homeGoals: null, awayGoals: null, date: "2026-04-04", time: "18:00" },
  { id: "m108", homeTeamId: "t15", awayTeamId: "t16", homeGoals: null, awayGoals: null, date: "2026-04-04", time: "20:00" },
  { id: "m109", homeTeamId: "t17", awayTeamId: "t18", homeGoals: null, awayGoals: null, date: "2026-04-05", time: "18:00" },
  { id: "m110", homeTeamId: "t19", awayTeamId: "t20", homeGoals: null, awayGoals: null, date: "2026-04-05", time: "20:00" },
  // Reverse fixtures for the other 10 teams
  { id: "m111", homeTeamId: "t2", awayTeamId: "t3", homeGoals: null, awayGoals: null, date: "2026-04-06", time: "18:00" },
  { id: "m112", homeTeamId: "t4", awayTeamId: "t5", homeGoals: null, awayGoals: null, date: "2026-04-06", time: "20:00" },
  { id: "m113", homeTeamId: "t6", awayTeamId: "t7", homeGoals: null, awayGoals: null, date: "2026-04-07", time: "18:00" },
  { id: "m114", homeTeamId: "t8", awayTeamId: "t9", homeGoals: null, awayGoals: null, date: "2026-04-07", time: "20:00" },
  { id: "m115", homeTeamId: "t10", awayTeamId: "t11", homeGoals: null, awayGoals: null, date: "2026-04-08", time: "18:00" },
  { id: "m116", homeTeamId: "t12", awayTeamId: "t13", homeGoals: null, awayGoals: null, date: "2026-04-08", time: "20:00" },
  { id: "m117", homeTeamId: "t14", awayTeamId: "t15", homeGoals: null, awayGoals: null, date: "2026-04-09", time: "18:00" },
  { id: "m118", homeTeamId: "t16", awayTeamId: "t17", homeGoals: null, awayGoals: null, date: "2026-04-09", time: "20:00" },
  { id: "m119", homeTeamId: "t18", awayTeamId: "t19", homeGoals: null, awayGoals: null, date: "2026-04-10", time: "18:00" },
  { id: "m120", homeTeamId: "t20", awayTeamId: "t1", homeGoals: null, awayGoals: null, date: "2026-04-10", time: "20:00" },
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

// Premier League Stadiums (mock)
export const stadiums = [
  { id: "emirates", city: "London", capacity: 60260, opened: 2006, name: "Emirates Stadium" },
  { id: "villa_park", city: "Birmingham", capacity: 42685, opened: 1897, name: "Villa Park" },
  { id: "vitality", city: "Bournemouth", capacity: 11729, opened: 1910, name: "Vitality Stadium" },
  { id: "gtech", city: "London", capacity: 17250, opened: 2020, name: "Gtech Stadium" },
  { id: "amex", city: "Brighton", capacity: 31800, opened: 2011, name: "Amex Stadium" },
  { id: "turf_moor", city: "Burnley", capacity: 21944, opened: 1883, name: "Turf Moor" },
  { id: "stamford_bridge", city: "London", capacity: 40341, opened: 1877, name: "Stamford Bridge" },
  { id: "selhurst", city: "London", capacity: 25486, opened: 1924, name: "Selhurst Park" },
  { id: "goodison", city: "Liverpool", capacity: 39414, opened: 1892, name: "Goodison Park" },
  { id: "craven_cottage", city: "London", capacity: 25700, opened: 1896, name: "Craven Cottage" },
  { id: "anfield", city: "Liverpool", capacity: 53400, opened: 1884, name: "Anfield" },
  { id: "kenilworth", city: "Luton", capacity: 10556, opened: 1905, name: "Kenilworth Road" },
  { id: "etihad", city: "Manchester", capacity: 53400, opened: 2002, name: "Etihad Stadium" },
  { id: "old_trafford", city: "Manchester", capacity: 74879, opened: 1910, name: "Old Trafford" },
  { id: "st_james", city: "Newcastle", capacity: 52305, opened: 1892, name: "St. James' Park" },
  { id: "city_ground", city: "Nottingham", capacity: 30000, opened: 1898, name: "City Ground" },
  { id: "bramall_lane", city: "Sheffield", capacity: 32050, opened: 1855, name: "Bramall Lane" },
  { id: "tottenham_hotspur", city: "London", capacity: 62850, opened: 2019, name: "Tottenham Hotspur Stadium" },
  { id: "london_stadium", city: "London", capacity: 62500, opened: 2012, name: "London Stadium" },
  { id: "molineux", city: "Wolverhampton", capacity: 31700, opened: 1889, name: "Molineux Stadium" }
];
