const updateButton = document.getElementById('update-button');
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
console.log(updateButton, nameInput, nameDisplay);

updateButton.addEventListener('click', () => {
    // this code runs when update button is clicked
    const newName = nameInput.value;
    
    nameDisplay.textContent = newName;
})

const redButton = document.getElementById('red-button');
const blueButton = document.getElementById('blue-button');
const greenButton = document.getElementById('green-button');
console.log(redButton, blueButton, greenButton);

redButton.addEventListener('click', () => {
    // this code runs when red button is clicked
    

})


;