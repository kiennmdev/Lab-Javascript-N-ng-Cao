//Destructuring array

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring array: cách này giúp việc gán 1 biến cho 1 phần tử trong mảng nhanh hơn
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);
//chỉ cần thêm 1 dấu phẩy ở giữa ta có thể gán biến second = 4 và bỏ qua giá trị 3 trong mảng
let [first, , second] = arr;
console.log(first,second);


//hoán đổi giá trị 2 biến cách cơ bản
// let temp = first;
// first = second;
// second = temp;
// console.log(first,second);
//hoán đổi giá trị 2 biến cách bằng Destructuring array
[first,second] = [second,first];
console.log(first,second);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy', 
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i,j,k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);