const submit = document.getElementById('submit-num-guess')
const guessed = document.querySelector('.guessed');
const scoreCount = document.querySelector('.score')
// const tooMany = document.querySelector('.too-many')
const arr = [10, 20, 30]
//Generates a random value
let i = 0;
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
        document.getElementById('round').addEventListener('click', (evt) => {
            i++
            document.getElementById('max-value').innerHTML = arr[i]
            guessed.innerHTML = ''
            score++
            scoreCount.innerHTML = "You're score is " + score
            randomVal = Math.floor(Math.random() * arr[i])

        guess = 0;
        if(i == arr.length){
            alert("You have won the game")
            document.location.reload()

    }
        })
    } else if (guessedVal > randomVal) { // Check if the number is greater than target value
        guess++; // Increment count after every guess
        guessed.innerHTML = "No no no try again number is too big"
        if(guess > 3){
            alert('You took too many guesses. You have lost!')
            document.location.reload()
        }
    } else {
        guess++; // Increment count after every guess
        guessed.innerHTML = "No no no try again number is too small"
        if(guess > 3){
            alert('You took too many guesses. You have lost!')
            document.location.reload()
        }
    }


})
