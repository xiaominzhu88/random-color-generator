const colors = require('colors');

function random(length) {
  return Math.floor(Math.random() * length);
}

let color = ['yellow', 'magenta', 'red', 'green', 'blue'];
let randomColor = color.forEach(i => {
  return i;
});

console.log('rainbow.js'[randomColor]);
