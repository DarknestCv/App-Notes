export const loadNotes = () => {
    const storedNotes = localStorage.getItem('notes'); 
    return storedNotes ? storedNotes.split(',') : []; 
};

export const saveNotes = (notes) => {
    localStorage.setItem('notes', notes.join(',')); 
};

export const deleteNoteFromStorage = (index) => {
    const notes = loadNotes(); 
    const updatedNotes = notes.filter((_, i) => i !== index);
    saveNotes(updatedNotes); 
};