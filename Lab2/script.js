const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);



// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
gameEvents.delete(64);


// 3.
console.log(`1 sự kiện xảy ra, trung bình mỗi ${90 / gameEvents.size} phút`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`1 sự kiện xảy ra, trung bình mỗi ${time / gameEvents.size} phút`);

// 4.
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}

//Lab2.2 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    // console.log(text);
    // console.log(rows);

    for (const [i, row] of rows.entries()) {
        const [first, second] =
            row.toLowerCase().trim().split('_');
        // console.log(row, first, second);
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});

// Lab2.3
// String Methods Practice 
const flights = 
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'; 
// 
//              
// 
//          
// �
// � Delayed Departure from FAO to TXL (11h25) 
// Arrival from BRU to FAO (11h45) 
// �
// � Delayed Arrival from HEL to FAO (12h05) 
//   Departure from FAO to LIS (12h30) 
const getCode = str => str.slice(0, 3).toUpperCase(); 
for (const flight of flights.split('+')) { 
const [type, from, to, time] = flight.split(';'); 
const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll( 
'_', 
' ' 
)} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36); 
console.log(output); 
}

// Lab 2.4
(function (){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();