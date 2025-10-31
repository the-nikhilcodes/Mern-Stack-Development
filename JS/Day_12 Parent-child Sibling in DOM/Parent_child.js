// Get the elements
const parentDiv = document.getElementById("parent");
const firstChild = document.getElementById("child1");
const secondChild = document.getElementById("child2");

// ----- Parent -----
console.log(firstChild.parentNode);  
// Output: <div id="parent">...</div>

// ----- Children -----
console.log(parentDiv.children);  
// Output: HTMLCollection [ <p id="child1">...</p>, <p id="child2">...</p> ]

// ----- Siblings -----
console.log(firstChild.nextElementSibling);  
// Output: <p id="child2">This is the second child.</p>

console.log(secondChild.previousElementSibling);  
// Output: <p id="child1">This is the first child.</p>
