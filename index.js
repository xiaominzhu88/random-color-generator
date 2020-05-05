const randomColor = require('randomcolor');
const color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

const chalk = require('chalk');

let myArgs = process.argv;

if (myArgs[2] === 'ask') {
  console.log('Which name of this color and luminosity?');
}



console.log(
  chalk.hex(color)(
    '#################################\n#################################\n##########              #########\n##########' +
      `   ${color}    ` +
      '#########\n##########              #########\n#################################\n#################################',
  ),
);

//console.log(process.argv[2]);
//
//console.log(
//  randomColor({
//    hue: process.argv[2],
//    luminosity: process.argv[3],
//  }),
//);
//console.log(process.argv[3]);
