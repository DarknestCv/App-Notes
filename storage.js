export const loadNotes = () => {
    const storedNotes = localStorage.getItem('notes'); // Отримуємо дані з LocalStorage
    return storedNotes ? storedNotes.split(',') : []; // Розділяємо рядок на масив або повертаємо порожній масив
};

export const saveNotes = (notes) => {
    localStorage.setItem('notes', notes.join(',')); // Зберігаємо масив як рядок, розділений комами
};

export const deleteNoteFromStorage = (index) => {
    const notes = loadNotes(); // Завантажуємо нотатки
    const updatedNotes = notes.filter((_, i) => i !== index); // Фільтруємо нотатки за індексом
    saveNotes(updatedNotes); // Зберігаємо оновлений масив
};