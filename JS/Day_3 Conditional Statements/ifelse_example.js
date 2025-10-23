// Example variable
let score = 75;

//  Simple if statement
if (score > 50) {
    console.log("You passed the test!");
}

//  if...else statement
if (score >= 80) {
    console.log("Excellent performance!");
} else {
    console.log("Good effort, but you can improve.");
}

//  if...else if...else chain
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//  Nested if statements
let attendance = 90;

if (score >= 60) {
    if (attendance >= 75) {
        console.log("You passed both on score and attendance!");
    } else {
        console.log("You passed the score, but failed due to low attendance.");
    }
} else {
    console.log("You failed the exam.");
}

//  Using logical operators with if
let hasProject = true;

if (score >= 70 && hasProject) {
    console.log("You qualify for honors!");
} else if (score >= 70 && !hasProject) {
    console.log("You need to submit your project for honors.");
} else {
    console.log("Not eligible for honors.");
}
