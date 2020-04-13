const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')
const notes = require("./notes.js")


//customize yargs version
yargs.version('1.1.0')

// Notes --> add, remove, read, list

//create add command

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true, // Won't run without providing -> --title="Note Title"
            type: 'string'
        
        },
        body: {
            describe: "Body of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log("Adding a new note with title: "+ argv.title)
        //console.log(argv.body)
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: function () {
        console.log("Removing a note!")
    }
})

//create list command

yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function () {
        console.log("Listing all notes!")
    }
})

//create read command

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function () {
        console.log("Reading a note!")
    }
})

yargs.parse()
//console.log(yargs.argv)