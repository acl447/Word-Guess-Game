# Word-Guess-Game

This game is a fun way to test your knowledge of 1960s artists. Just press any key to start:

<img width="740" alt="Screen Shot 2019-05-06 at 4 36 56 PM" src="https://user-images.githubusercontent.com/44036798/57261601-3f4ec480-701d-11e9-8900-e53096fe8bce.png">

Keep guessing what the missing letters in the word are:

<img width="648" alt="Screen Shot 2019-05-06 at 4 40 54 PM" src="https://user-images.githubusercontent.com/44036798/57262216-0d8b2d00-7020-11e9-9dfe-9f4ae8337435.png">

Once you've filled in all the letters in the word, you win!

<img width="1118" alt="Screen Shot 2019-05-06 at 4 41 59 PM" src="https://user-images.githubusercontent.com/44036798/57261731-e4699d00-701d-11e9-93bf-59f985eea378.png">

Technologies used to make this app are HTML5, Bootstrap and JavaScript.

Link to deployed project on GitHub Pages: https://acl447.github.io/Word-Guess-Game/

To make this app, I first designed it so there were areas where blanks in the word and letters guessed correctly, wrong guesses, the number of guesses remaining, and the numbers of wins and losses, would be displayed. I populated these areas dynamically using JavaScript functions. 

I used a function to randomly choose a word from an array of 1960s artist names. The user will guess the randomly chosen word. I used another function to check whether or not the letter the user has guessed matches any letter in the chosen word. I used the JavaScript "document.onkeyup" to capture when the user presses a key. 

I also created functions to start and restart the game and a function to update the number of wins and losses displayed on the web page. You can see the comments in my code here on GitHub for more information.  
