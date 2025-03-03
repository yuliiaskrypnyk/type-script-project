let age: number = 30;

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

function printChristmasTree(n: number): void {
    for (let i = 0; i < n; i++) {
        let spaces = ' '.repeat(n - i);
        let stars = '*'.repeat(2 * i + 1);
        console.log(spaces + stars);
    }

    for (let i = 0; i < 5; i++) {
        console.log(' '.repeat(n) + '*');
    }
}

printChristmasTree(10);
