const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

console.log(chalk.bold.green('I am a green text'));
console.log(chalk.red.bold.italic('This is a warning!!'));
console.log(getNotes());