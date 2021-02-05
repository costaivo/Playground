const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Application version
yargs.version("1.0.0");
// Add command
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            descripe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            descripe: 'Note contents',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
});


// Remove command
yargs.command({
    command: 'remove',
    description: 'removes a note',
    handler: function () {
        console.log("removes a note");
    }
});

// list command
yargs.command({
    command: 'list',
    description: 'list all notes',
    handler: function () {
        const note = notes.getNotes();
        console.log(note);
    }
});

// read command
yargs.command({
    command: 'read',
    description: 'read a notes',
    handler: function () {
        console.log("reading  note");
    }
});


yargs.parse();