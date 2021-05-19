let button = document.getElementById('submitBtn')
let guess = document.getElementById('guess')

let attempts = 3
let randomNumber = Math.floor(Math.random() * 10)
console.log(randomNumber);

function checkGuess() {
    if (isNaN(guess.value) || guess.value > 10 || guess.value < 1) {
        alert("Hint: The number is between 1 and 10!")
    } else {
        if (guess.value === randomNumber) {
        alert("It's your lucky day! You win!")
    } else if (guess.value > randomNumber) {
        alert("Too High!");
    } else if (guess.value < randomNumber) {
        alert("Too Low!");
    } else {
        attempts --;
        if(attemps === 0) {
            alert("You lose, try again!");   
        }
    }
}
}

button.addEventListener('click', checkGuess)