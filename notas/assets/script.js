const noteInput = document.getElementById('noteInput');
const categoryInput = document.getElementById('categoryInput');
const addNoteButton = document.getElementById('addNote');
const notesList = document.getElementById('notesList');
const filterText = document.getElementById('filterText');
const filterCategory = document.getElementById('filterCategory');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Função para renderizar as notas
function renderNotes() {
    notesList.innerHTML = '';
    const filterValue = filterText.value.toLowerCase();
    const selectedCategory = filterCategory.value;

    const filteredNotes = notes.filter(note => {
        const matchesText = note.text.toLowerCase().includes(filterValue);
        const matchesCategory = selectedCategory ? note.category === selectedCategory : true;
        return matchesText && matchesCategory;
    });

    filteredNotes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.innerHTML = `
            <p><strong>Categoria:</strong> ${note.category}</p>
            <p>${note.text}</p>
            <div class="note-actions">
                <button class="btn btn-warning btn-sm" onclick="editNote(${index})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="deleteNote(${index})">Excluir</button>
            </div>
        `;
        notesList.appendChild(noteDiv);
    });
}

// Função para adicionar nota
function addNote() {
    const noteText = noteInput.value.trim();
    const noteCategory = categoryInput.value;

    if (noteText && noteCategory) {
        const newNote = { text: noteText, category: noteCategory };
        notes.push(newNote);
        localStorage.setItem('notes', JSON.stringify(notes));
        noteInput.value = '';
        categoryInput.value = '';
        renderNotes();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para editar nota
function editNote(index) {
    const newNoteText = prompt('Edite sua nota:', notes[index].text);
    const newCategory = prompt('Edite a categoria:', notes[index].category);
    if (newNoteText !== null && newCategory !== null) {
        notes[index] = { text: newNoteText, category: newCategory };
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
    }
}

// Função para excluir nota
function deleteNote(index) {
    if (confirm('Tem certeza que deseja excluir esta nota?')) {
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
    }
}

// Adicionando eventos
addNoteButton.addEventListener('click', addNote);
filterText.addEventListener('input', renderNotes);
filterCategory.addEventListener('change', renderNotes);

// Renderiza as notas ao carregar
renderNotes();
