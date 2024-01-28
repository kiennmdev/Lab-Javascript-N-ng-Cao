//Functions Accepting Callback Functions
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function() {
    console.log('hi');
}
document.body.addEventListener('click', high5);

['Kien', 'Minh', 'Nghiem'].forEach(high5);


//////////////////////////////////////////////////////////////////////
// Functions Returning Functions

const greet =  function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey')
greeterHey('Kien');
greeterHey('Kein');

greet('Hello')('Neik');

// Challenge
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hi')('Kien');

//////////////////////////////////////////////////////////////////////
//Immediately Invoked Function Expressions (IIFE)
const runOnce = function() {
    console.log('This will never run again');
}
runOnce();

// IIFE
(function() {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46
}
// console.log(isPrivate);
console.log(notPrivate);