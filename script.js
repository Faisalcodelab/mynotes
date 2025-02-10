// Select elements
const noteInput = document.getElementById('note-input');
const saveButton = document.getElementById('save-button');
const notesList = document.getElementById('notes-list');
const downloadTextButton = document.getElementById('download-text-button');

// Event listener for the save button
saveButton.addEventListener('click', function() {
    // Get the value from the input field
    const noteText = noteInput.value.trim();

    // Check if the input is not empty
    if (noteText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = noteText;

        // Append the new list item to the notes list
        notesList.appendChild(listItem);

        // Clear the input field after saving
        noteInput.value = '';
    } else {
        alert('Please enter a note before saving.');
    }
});

// Event listener for the download text button
downloadTextButton.addEventListener('click', function() {
    // Collect all notes text
    const notes = Array.from(notesList.children).map(item => item.textContent).join('\n');

    // Create a blob containing the notes text
    const blob = new Blob([notes], { type: 'text/plain' });

    // Create a link element for downloading
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'my-notes.txt';

    // Append the link to the body and click it
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
