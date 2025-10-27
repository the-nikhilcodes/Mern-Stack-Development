let text = "  Hello, JavaScript World!  ";

console.log(text.trim());             // "Hello, JavaScript World!"
console.log(text.toUpperCase());      // "  HELLO, JAVASCRIPT WORLD!  "
console.log(text.includes("Java"));   // true
console.log(text.slice(2, 7));        // "Hello"
console.log(text.replace("World", "Universe")); // "  Hello, JavaScript Universe!  "
console.log(text.split(" "));         // ["", "", "Hello,", "JavaScript", "World!", "", ""]
console.log(text.indexOf("Java"));    // 9
console.log(text.charAt(7));         // "J"
console.log(text.startsWith("  He")); // true
console.log(text.endsWith("!  "));   // true
console.log(text.repeat(2));         // "  Hello, JavaScript World!    Hello, JavaScript World!  "