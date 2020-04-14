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
    handler(argv) {
        //console.log("Adding a new note with title: "+ argv.title)
        //console.log(argv.body)
        const addValue = notes.addNote(argv.title,argv.body)
        if (addValue === 1) {
            console.log(chalk.black.bgGreen("New note added!"))
        } else {
            console.log(chalk.black.bgRed("Note title taken!"))
        }
    }
})

//create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: "Note whose Title needs to be Removed",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const removeValue = notes.removeNote(argv.title)
        if (removeValue === 1) {
            console.log(chalk.black.bgGreen("Removed Note!"))
        } else {
            console.log(chalk.black.bgRed("Cant find Note!"))
        }
    }
})

//create list command

yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler() {
        console.log(chalk.black.bgBlue("Listing all notes!"))
        notes.listNotes()
    }
})

//create read command

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler(){
        console.log("Reading a note!")
    }
})

yargs.parse()
//console.log(yargs.argv)