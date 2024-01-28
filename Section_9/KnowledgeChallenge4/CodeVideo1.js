'use strict';

const openingHours = {
    thu: {
        open: 12,
        close: 22
    },
    fri: {
        open: 11,
        close: 23
    },
    sat: {
        open: 0,
        close: 24
    }
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function(mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
    }
};
//Working With Strings - Part 1
// const airline = 'tap air portugal';
// const plane = 'a320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('b391'[0]);
// console.log('b39 1'.length);
// console.log(airline.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal1'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat) {
//     const s = seat .slice(-1);
//     if (s === 'B' || s === 'E') {
//         console.log('you got the middle seat');
//     }else {
//         console.log('you got luck');
//     }
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));


//////////////////////////////////////////////////////////////////////
//Working With Strings - Part 2
// const airline = 'tap air portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jOnaS';

// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing email
// const email = 'hello@kien.io';
// const loginEmail = '  Hello@Kien.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing
// const priceGB = '288,97đ';
// const priceUS = priceGB.replace('đ', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = 'all passengers come to barding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// //booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
//     console.log('part of the new aribus family');
// }

// //practice exercise
// const checkBaggage = function (items) {
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('you are not allowed on board');
//     } else {
//         console.log('welcome aboard!');
//     }
// };

// checkBaggage('i have a laptop, some foof and a pocked Knife');
// checkBaggage('socks and camera');
// checkBaggage('got some snacks and a gun for protection');

//////////////////////////////////////////////////////////////////////
//Working With Strings - Part 3

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('nghiem minh kien'.split(' '));

const [firstname, lastname] = 'nghiem kien'.split(' ');

const newName = ['Mr.', firstname, lastname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(' ');
    const nameUpper = [];

    for (const n of names) {
        // nameUpper.push(n[0].toUpperCase() + n.slice(1));
        nameUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(nameUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Kien'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*')
}

console.log(maskCreditCard(42324325425325));
console.log(maskCreditCard('434141544'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planeInLine = function(n) {
    console.log(`there are ${n} planes in line ${'-|>'.repeat(n)}`);
}

planeInLine(5);
planeInLine(3);
planeInLine(12);