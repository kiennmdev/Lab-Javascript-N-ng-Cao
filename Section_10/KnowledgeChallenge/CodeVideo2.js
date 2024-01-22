//How Passing Arguments Works: Value vs. Reference
const flight = 'LH234';
const kien = {
    name: 'minh kien',
    passport: 2131424124
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 2131424124) {
        alert('Check in')
    } else {
        alert('Wrong passport')
    }
}

checkIn(flight, kien);
console.log(flight);
console.log(kien);

//Is the same as doing...
const flightNum = flight
const passenger = kien;
// lý do kien.name bị thay đổi là do cách passenger.name giống như kien.name đều trỏ đến cùng 1 đối tượng trong bộ nhớ, khi ta thao tác với passenger hoàn toàn giống như thao tác với đối tượng kien, chỉ truyền đối tượng mới bị như thế này.

const  newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000); 
}

newPassport(kien);
checkIn(flight, kien);