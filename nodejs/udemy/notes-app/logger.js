const chalk = require('chalk');

const error = function (message) {
    console.log(chalk.red.inverse(message));
}

const success = function (message) {
    console.log(chalk.green.inverse(message));
}

module.exports = {
    error,
    success,
}