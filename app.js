const chalk = require('chalk')
const notes = require("./notes.js")

const command = process.argv[2]

if(command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log("Removing Note!")
}

console.log(process.argv)