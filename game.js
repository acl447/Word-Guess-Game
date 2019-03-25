

//Global Variables


var words = ["beatles", "supremes", "monkees", "temptations", "donovan", "kinks", "byrds", "hollies"];

//word user will be guessing is stored here
var chosenWord = "";

//this will break the word the user is guessing into individual letters to be stored in an array
var lettersInChosenWord = [];

//holds a mix of blanks and letters that the user has guessed correctly
var blanksAndSuccesses = [];

//holds all of the wrong guesses
var wrongGuesses = [];

//Game counters
var wins = 0;
var losses = 0;
var numGuesses = 10;


//Functions

//function to start and restart the game
function startGame() {

    //reset the guesses back to 10
    numGuesses = 10;

    //reset the blanks and successes array at each round
    blanksAndSuccesses = [];

    //reset the wrong guesses at each round
    wrongGuesses = [];

    //word for user to guess is chosen randomly from list
    chosenWord = words[Math.floor(Math.random() * words.length)];

    //word broken into individual letters
    lettersInChosenWord = chosenWord.split("");

    //fill up the blanks and successes list with as many blanks as there are letters in the chosen word
    for (var i = 0; i < lettersInChosenWord.length; i++) {

        blanksAndSuccesses.push("_");

    }

    //shows 10 guesses left on page
    document.getElementById("numberRemaining").innerHTML = numGuesses;

    // Prints the blanks at the beginning of each round in the HTML
    document.getElementById("blanks").innerHTML = blanksAndSuccesses.join(" ");

    // Clears the wrong guesses from the previous round
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");


};


//this function will check whether user guesses letter correctly or not
function checkLetters(letter) {


    //this boolean will be toggled based on whether or not a user letter is found anywhere in the chosen word
    var letterInWord = false;

    //check if a user letter matches any in the array of letters in chosen word
    for (var i = 0; i < lettersInChosenWord.length; i++) {

        if (chosenWord[i] === letter) {

            letterInWord = true;
        }
    }

    //if the letter exists somewhere in the word, then figure out exactly where (which indices)

    if (letterInWord) {


        for (var j = 0; j < lettersInChosenWord.length; j++) {

            if (chosenWord[j] === letter) {

                //set the specific space in blanksAndSuccesses equal to the letter if there is a match
                blanksAndSuccesses[j] = letter;
            }

        }

    }
    //if user letter does not match any letters in chosenWord
    else {

        //then add the letter to the list of wrong guesses, and decrement numGuesses
        wrongGuesses.push(letter);
        numGuesses--;



    }

};

function roundComplete() {


    //update number of guesses remaining on page
    document.getElementById("numberRemaining").innerHTML = numGuesses;

    //update blanks and correct guesses on page
    document.getElementById("blanks").innerHTML = blanksAndSuccesses.join(" ");

    //update wrong guesses on page
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    //if all letters user chooses match letters in chosenWord
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

        //increment win counter and alert user
        wins++;
        alert("You win!");

        //update wins on page and restart game
        document.getElementById("wins").innerHTML = wins;
        startGame();
    }
    //if user has run out of guesses
    else if (numGuesses === 0) {

        //increment losses and alert user
        losses++;
        alert("You lose!");


        //update losses on page and restart game

        document.getElementById("losses").innerHTML = losses;
        startGame();

    }

};

//Main Process - Code that is actually run


//starts the game
startGame();


//initiates function for capturing when user presses key
document.onkeyup = function (event) {

    //checks if the key pressed is a letter
    if (event.keyCode >= 65 && event.keyCode <= 90) {

        //converts any key pressed to lowercase 
        var letterGuessed = event.key.toLowerCase();

        //runs the code to check if user key pressed matches letters in chosenWord
        checkLetters(letterGuessed);

        //runs code after each round is done
        roundComplete();
    }

};





















