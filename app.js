const submit = document.getElementById('submit-num-guess')
const guessed = document.querySelector('.guessed');
const scoreCount = document.querySelector('.score')
// const tooMany = document.querySelector('.too-many')
const arr = [10, 20, 30]

let i = 0;

//Generates a random value
let randomVal = Math.floor(Math.random() * arr[i])
// Score counter
let score = 0;
// Number of guesses
let guess = 1;

//Click event listener to check the number
submit.addEventListener('click', (evt)=>{


    let guessedVal = document.getElementById('guess-input').value;

    if(guessedVal == randomVal){ // Check if the number entered is equal to the target value
        guessed.innerHTML = "You guessed the number right! Only took " + guess + " guesses" + "<button id='round'>Next Round</button>" // Adds message to the screen
        // Event Click when you move on to the next round click the button
        document.getElementById('round').addEventListener('click', (evt) => {
            i++
            document.getElementById('max-value').innerHTML = arr[i]
            guessed.innerHTML = ''
        // Keeps track of the score
            score++
            scoreCount.innerHTML = "You're score is " + score
        // Random value generated between the game levels ex.. 0 - 10 /0 - 20/0 - 30
            randomVal = Math.floor(Math.random() * arr[i])

        // Resets guesses after every round
        guess = 0;
        // Condition if the game is won
        if(i == arr.length){
            alert("You have won the game")
            document.location.reload()

    }
        })
        // Check if the number is greater than target value
    } else if (guessedVal > randomVal) {
        // Increment count after every guess
        guess++;

         // Message displayed when the number is too small
        guessed.innerHTML = "No no no try again number is too big"
        // Condition if guess exeeded 5 guesses
        if(guess > 5){
            alert('You took too many guesses. You have lost!')
            document.location.reload()
        }
    } else {
        // Increment count after every guess
        guess++;
        // Message displayed when the number is too small
        guessed.innerHTML = "No no no try again number is too small"
        // Condition if guess exeeded 5 guesses
        if(guess > 5){
            alert('You took too many guesses. You have lost!')
            document.location.reload()
        }
    }


})
