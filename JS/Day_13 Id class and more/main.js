//  Select element by ID
const title = document.getElementById('main-title');
console.log(title); 
title.style.color = 'blue';

// Select elements by class name
const paragraphs = document.getElementsByClassName('text');
console.log(paragraphs); 
paragraphs[0].style.fontWeight = 'bold';

//  Select elements by tag name
const buttons = document.getElementsByTagName('button');
console.log(buttons); 
buttons[0].style.backgroundColor = 'lightgreen';

//  Select using querySelector (first match)
const firstParagraph = document.querySelector('.text');
firstParagraph.style.fontSize = '20px';

//  Select using querySelectorAll (all matches)
const allParagraphs = document.querySelectorAll('.text');
allParagraphs.forEach(p => p.style.color = 'purple');

//  Add event listener to an element
const button = document.querySelector('#myButton');
button.addEventListener('click', () => {
  alert('Button clicked!');
});
