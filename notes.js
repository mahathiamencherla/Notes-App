const fs = require('fs')

const getNotes = function () {
    return "Your notes"
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title == title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        }) 
        saveNotes(notes)
        return 1
    }
    else {
        return 0
    }  
}
 const removeNote = function (title) {
    const notes = loadNotes()
    
    const keepingNotes = notes.filter(function (note) {
        return note.title !== title        
    })
    if (notes.length - keepingNotes.length === 1) {
        return 1
        saveNotes(keepingNotes)
    }
    else {
        return 0
    }
 }

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
    
}


module.exports = {
    getNotes: getNotes, 
    addNote: addNote,
    removeNote: removeNote,
}