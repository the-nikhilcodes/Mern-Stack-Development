const fs = require("fs");

console.log("Starting");
// fs.writeFileSync("example.txt", "Hello, World!")
fs.writeFile("Nikhil.txt", "Hello, World!", () => {
  console.log("Done");
  fs.readFile("Nikhil.txt", (error, data) => {
    console.log(error,data.toString());
    });
})

fs.appendFile("Nikhil.txt", "Nikhilbhai" , (e,d) => {
    console.log(d);
})
console.log("Ending");
