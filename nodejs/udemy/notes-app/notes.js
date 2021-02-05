const fs = require('fs');
const log = require('./logger');

const getNotes = () => loadNotes();


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) =>
        note.title === title
    )

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        log.success('New note added!')
    }
    else {
        log.error('Note Title taken')
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }
}
const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) =>
        note.title !== title
    )

    if (notes.length > notesToKeep.length) {
        log.success('Removed note!');
        saveNotes(notesToKeep);
    }
    else
        log.error('Note not found')
}
module.exports = {
    getNotes,
    addNote,
    removeNote
}