const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}

//Lab1.1:
//1:
const [players1, players2] = game.players;
console.log(players1, players2);

//2:
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1, fieldPlayers1);

//3:
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4:
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5:
// const {team1, x: draw, team2} = game.odds;
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//6:
const printGoals = function (...players) {
    console.log(`${players.length} cầu thủ đã ghi bàn, đó là:`);
    for (let i = 0; i < players.length; i++) {
        console.log(players[i]);
        
    }
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7:
team1 < team2 && console.log('Team 1 win');
team2 < team1 && console.log('Team 2 win');

//Lab1.2:

//1:
for(const [i, player] of game.scored.entries())
    console.log(`Goat ${i+1}: ${player}`);

//2:
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds)
average += odd;
average /= odds.length;
console.log(average);

//3:
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}