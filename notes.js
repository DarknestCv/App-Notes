import { loadNotes, saveNotes, deleteNoteFromStorage } from './storage.js';

const notesList = document.querySelector('.notes-list');

export const renderNotes = () => {
    const notes = loadNotes(); // Завантажуємо нотатки
    notesList.innerHTML = ''; // Очищаємо список нотаток
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
    const notes = loadNotes(); // Завантажуємо нотатки
    notes.push(text); // Додаємо нову нотатку
    saveNotes(notes); // Зберігаємо оновлений масив
    renderNotes(); // Оновлюємо відображення
};

export const deleteNote = (index) => {
    deleteNoteFromStorage(index); // Видаляємо нотатку з LocalStorage
    renderNotes(); // Оновлюємо відображення
};