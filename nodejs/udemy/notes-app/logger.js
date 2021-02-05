const chalk = require('chalk');

const error = (message) =>
    console.log(chalk.red.inverse(message))


const success = (message) =>
    console.log(chalk.green.inverse(message))


module.exports = {
    error,
    success,
}