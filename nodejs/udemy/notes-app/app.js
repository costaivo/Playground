const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Application version
yargs.version("1.0.0");
// Add command
yargs.command({
    command:'add',
    description:'Add a new note',
    builder:{
        title:{
            descripe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
descripe:'Note contents',
demandOption:true,
type:'string'
        }
    },
    handler:function(argv){
        console.log('Adding a new note:',argv);
    }
});


// Remove command
yargs.command({
    command:'remove',
    description:'removes a note',
    handler:function(){
        console.log("removes a note");
    }
});

// list command
yargs.command({
    command:'list',
    description:'list all notes',
    handler:function(){
        console.log("listing all note");
    }
});

// read command
yargs.command({
    command:'read',
    description:'read a notes',
    handler:function(){
        console.log("reading  note");
    }
});


yargs.parse();