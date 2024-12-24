import { addNote, renderNotes, deleteNote } from './notes.js';

const noteInput = document.querySelector('.note-input');
const addNoteButton = document.querySelector('.add-note');

// ! add new Notes
addNoteButton.addEventListener('click', () => {
    const noteText = noteInput.value;
    if (noteText) {
        addNote(noteText); 
        noteInput.value = ''; 
    }
});

// ! Delete notes
document.querySelector('.notes-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-note')) {
        const noteIndex = parseInt(e.target.getAttribute('data-index'), 10);
        deleteNote(noteIndex); 
    }
});

renderNotes(); 