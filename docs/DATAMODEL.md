# DATAMODEL.md

## Entitások


### 1. User

| Mező | Típus |
|-------|--------|
| id | string |
| username | string |
| password | string |
| role | string |


### 2. Team

| Mező | Típus |
|-------|--------|
| id | string |
| name | string |
| city | string |
| stadium | string |
| points | number |


### 3. Player

| Mező | Típus |
|-------|--------|
| id | string |
| name | string |
| age | number |
| position | string |
| teamId | string |
| goals | number |


### 4. Match

| Mező | Típus |
|-------|--------|
| id | string |
| homeTeamId | string |
| awayTeamId | string |
| homeGoals | number |
| awayGoals | number |
| date | date |


### 5. Statistic

| Mező | Típus |
|-------|--------|
| id | string |
| playerId | string |
| goals | number |
| assists | number |
| yellowCards | number |
| redCards | number |



## Kapcsolatok

Team 1:N Player  
Egy csapatnak több játékosa lehet

Team 1:N Match  
Egy csapat több mérkőzésen szerepelhet

Player 1:1 Statistic  
Egy játékoshoz egy statisztika tartozik

Match N:1 Team  
Egy mérkőzésen két csapat vesz részt

User 1:N Match  
Admin több mérkőzést is rögzíthet