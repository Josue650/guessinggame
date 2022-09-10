const submit = document.getElementById('submit-num-guess')


//Generates a random value
const randomVal = Math.floor(Math.random() * 10 + 1)


//Number of guesses
let guess = 1;

submit.addEventListener('click', (evt)=>{

    let guessedVal = document.getElementById('guess-input').value;

    if(guessedVal == randomVal){
        alert("You guessed the numner right! Only took " + guess + " guesses" )
    } else if (guessedVal > randomVal) {
        guess++;
        alert("No no no try again number is too big")
    } else {
        guess++;
        alert("No no no try again number is too small")
    }

})
