let random = Math.random();
console.log("Random:", random);

let a = Number(prompt("Enter first number"));
let op = prompt("Enter operation (+, -, *, /)");
let b = Number(prompt("Enter second number"));

let wrongOps = {
  "+": "-",
  "-": "/",
  "*": "+",
  "/": "**"
};

let realOp = op;

// 10% chance to do the wrong calculation
if (random <= 0.1) {
  realOp = wrongOps[op] || op;
  alert("😈 Trick result!");
} else {
  alert("✅ Correct result!");
}

let result;

// calculate safely
if (realOp === "+") result = a + b;
else if (realOp === "-") result = a - b;
else if (realOp === "*") result = a * b;
else if (realOp === "/") result = b !== 0 ? a / b : "Cannot divide by 0";
else if (realOp === "**") result = a ** b;
else result = "Invalid operation";

alert(`Result of ${a} ${realOp} ${b} = ${result}`);
