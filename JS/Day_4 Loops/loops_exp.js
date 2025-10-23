//  for loop
console.log(" For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

//  while loop
console.log("\n While Loop:");
let n = 1;
while (n <= 5) {
    console.log("Number:", n);
    n++;
}

//  do...while loop
console.log("\n Do...While Loop:");
let x = 1;
do {
    console.log("Value:", x);
    x++;
} while (x <= 5);

//  for...of loop (used for arrays)
console.log("\n For...of Loop:");
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

//  for...in loop (used for objects)
console.log("\n For...in Loop:");
let person = { name: "Alice", age: 25, city: "Paris" };
for (let key in person) {
    console.log(key + ":", person[key]);
}

//  Nested loop example
console.log("\n Nested Loops:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

//  Using break and continue
console.log("\n Break and Continue:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping number 5");
        continue; // skip this iteration
    }
    if (i === 8) {
        console.log("Breaking at 8");
        break; // exit loop
    }
    console.log("Number:", i);
}
