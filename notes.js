console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
    return[] ;
  }
};

var saveNotes = () => {
  fs.writeFileSync('notes-data.json' , JSON.stringify(notes));
};

var addNote = (title , body) => {
  var notes = fetchNotes;
  var note = {
    title,
    body
  };


  notes.push(note);
  saveNotes;
}
var listing = () => {
  console.log('Listing notes');
};

var removeNote = (title) => {
  console.log('Removing Note' , title);
};

module.exports = {
  addNote,
  listing,
  removeNote
};
