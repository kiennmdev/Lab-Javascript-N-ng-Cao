//Lab3.2
const checkDogs = function (dogJulia, dogsKate) {
    const dogsJuliaCorrected = dogJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`dog number ${i + 1} is an adult, and is ${dog} years old`);

        } else {
            console.log(`dog number ${i + 1} is still a puppy`);
        }
    });
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//Lab3.3
const calAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    const adults = humanAges.filter(age => age >= 18);
    console.log(humanAges);
    console.log(adults);

    const average = adults.reduce(
        (acc, age, i, arr) => acc + age / arr.length, 0
    );

    return average;
}
const avg1 = calAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

//Lab3.4
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];
//1
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);
//2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`sarah's dog is eating too ${
    dogSarah.curFood >dogSarah.recFood ? 'much' : 'little'
}`);
//3
const ownerEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
console.log(ownerEatTooMuch);

const ownerEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownerEatTooLittle);

//4
console.log(`${ownerEatTooMuch.join('and')}'s dogs eat too much!`);
console.log(`${ownerEatTooLittle.join('and')}'s dogs eat too little!`);

//5
console.log(dogs.some(dog => dog.curFood == dog.recFood));

//6
const checkEatingOkay = dog => dog.curFood >dog.recFood * 0.9 && dog.curFood < dog.recFood *1.1;
console.log(dogs.some(checkEatingOkay));

//7
console.log(dogs.filter(checkEatingOkay));

//8
const dogSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSorted);



//lab3.1
const account1 = {
    ower: 'jonas schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111
};

const account2 = {
    ower: 'jessica davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222
};

const account3 = {
    ower: 'steven thomas williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333
};
const account4 = {
    ower: 'sarad smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444
};

const account = [account1, account2, account3, account4];

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelDateBalance = document.querySelector('b.alance_value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.ummary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.ovements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login--user');
const inputLoginPin = document.querySelector('.login--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan--amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');