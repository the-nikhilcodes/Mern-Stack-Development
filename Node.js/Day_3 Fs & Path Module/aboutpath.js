import path from "path"

let myPath =
  "e:\VS CODE\MERN\Node.js\Day_3 Fs & Path Module\aboutpath.js";
console.log(path.extname(myPath));

console.log(path.dirname(myPath));
console.log(path.basename(myPath));

console.log(path.join("e:/", "programs\\Nikhil.txt"));