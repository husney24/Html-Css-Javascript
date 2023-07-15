// Get DOM elements
const newNoteBtn = document.querySelector('.new-note-btn');
const notesList = document.querySelector('.notes-list');
const noteTitleInput = document.querySelector('.note-title-input');
const noteContentInput = document.querySelector('.note-content-input');
const saveNoteBtn = document.querySelector('.save-note-btn');

// Add event listeners
newNoteBtn.addEventListener('click', createNewNote);
notesList.addEventListener('click', loadNote);
saveNoteBtn.addEventListener('click', saveNote);

// Create a new note
function createNewNote() {
  const noteId = Date.now().toString();
  const noteItem = document.createElement('li');
  noteItem.dataset.noteId = noteId;
  noteItem.textContent = 'New Note';
  notesList.appendChild(noteItem);
  clearNoteEditor();
  loadNoteById(noteId);
}

// Load note into the editor
function loadNote(event) {
  if (event.target.tagName === 'LI') {
    const noteId = event.target.dataset.noteId;
    loadNoteById(noteId);
  }
}

// Load note by ID
function loadNoteById(noteId) {
  const noteItem = notesList.querySelector(`[data-note-id="${noteId}"]`);
  if (noteItem) {
    const noteTitle = localStorage.getItem(`noteTitle_${noteId}`);
    const noteContent = localStorage.getItem(`noteContent_${noteId}`);
    noteTitleInput.value = noteTitle ? noteTitle : '';
    noteContentInput.value = noteContent ? noteContent : '';
    notesList.querySelectorAll('li').forEach((item) => {
      item.classList.remove('active');
    });
    noteItem.classList.add('active');
  }
}

// Save note
function saveNote() {
  const activeNoteItem = notesList.querySelector('.active');
  if (activeNoteItem) {
    const noteId = activeNoteItem.dataset.noteId;
    const noteTitle = noteTitleInput.value;
    const noteContent = noteContentInput.value;
    localStorage.setItem(`noteTitle_${noteId}`, noteTitle);
    localStorage.setItem(`noteContent_${noteId}`, noteContent);
    activeNoteItem.textContent = noteTitle ? noteTitle : 'Untitled';
  }
}

// Clear note editor
function clearNoteEditor() {
  noteTitleInput.value = '';
  noteContentInput.value = '';
}

// Load existing notes on page load
window.addEventListener('load', () => {
  const noteIds = Object.keys(localStorage).filter((key) => key.startsWith('noteTitle_'));
  noteIds.forEach((noteId) => {
    const id = noteId.split('_')[1];
    const noteTitle = localStorage.getItem(`noteTitle_${id}`);
    const noteItem = document.createElement('li');
    noteItem.dataset.noteId = id;
    noteItem.textContent = noteTitle ? noteTitle : 'Untitled';
    notesList.appendChild(noteItem);
  });
});
