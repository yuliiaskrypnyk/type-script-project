let age: number = 10;

for (let i = 1; i <= age; i++) {
    console.log(i);
}

if (age > 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

let score: number = 0;

if (score !== 0) {
    console.log("Score is available.");
}

if (score) {
    console.log("Score is evaluated as truthy.");
} else {
    console.log("Score is evaluated as falsy.");
}

let username: string = "";

if (username !== "") {
    console.log("Username is available.");
}

if (username) {
    console.log("Username is evaluated as truthy.");
} else {
    console.log("Username is evaluated as falsy.");
}

let isAdmin: boolean = false;

if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.");
} else {
    console.log("isAdmin is evaluated as falsy.");
}

if (!isAdmin) {
    console.log("isAdmin is false.");
}

console.log("----------------------");
function printChristmasTree(n: number): void {
    for (let i = 0; i < n; i++) {
        let spaces = ' ' . repeat(n - i);
        let stars = '*' . repeat(2 * i + 1);
        console.log(spaces + stars);
    }

    for (let i = 0; i < n; i++) {
        console.log(' ' . repeat(n) + '*');
    }
}

printChristmasTree(5);

console.log("----------------------");
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const words = ["kiwi", "apple", "banana"];
const longwWords = words.filter(word=> word.length > 5);
console.log(longwWords);

const nums = [12, 13, 14];
const sum = nums.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum);

const values = [5, 20, -1];
const hasLargeNumber = values.some(num => num > 10);
console.log(hasLargeNumber);

console.log("----------------------");
const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

const sortedList = list.sort((a, b): number => b - a);
console.log(sortedList);

const squaredList  = sortedList.map(num => num ** 2); // num * num
console.log(squaredList);

const trimmedList = squaredList.slice(4, -2);
console.log(trimmedList);

const filteredList = trimmedList.filter(num => num % 4 !== 0);
console.log(filteredList);

const sumList = filteredList.reduce((acc, num) => acc + num, 0);
console.log(sumList);

console.log("----------------------");
const list1 = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194];

const sumList1 = list1
    .sort((a, b): number => b - a)
    .map(num => num ** 2)
    .slice(4, -2)
    .filter(num => num % 4 !== 0)
    .reduce((acc, num) => acc + num, 0);

console.log(sumList1);

