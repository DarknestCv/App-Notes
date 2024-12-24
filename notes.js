import { loadNotes, saveNotes, deleteNoteFromStorage } from './storage.js';

const notesList = document.querySelector('.notes-list');

export const renderNotes = () => {
    const notes = loadNotes(); 
    notesList.innerHTML = ''; 
    notes.forEach((note, index) => {
        const noteItem = document.createElement('div');
        noteItem.classList.add('note-item');
        noteItem.innerHTML = `
            <span>${note}</span>
            <button class="delete-note" data-index="${index}">Delete</button>
        `;
        notesList.appendChild(noteItem);
    });
};

export const addNote = (text) => {
    const notes = loadNotes(); 
    notes.push(text); 
    saveNotes(notes); 
    renderNotes(); 
};

export const deleteNote = (index) => {
    deleteNoteFromStorage(index); 
    renderNotes(); 
};