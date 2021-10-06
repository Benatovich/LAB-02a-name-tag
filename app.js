const updateButton = document.getElementById('update-button');
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');


updateButton.addEventListener('click', () => {
    // this code runs when button is clicked
    const newName = nameInput.value;
    nameDisplay.textContent = newName;
});