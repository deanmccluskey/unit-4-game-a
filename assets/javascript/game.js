/*
    Option One: CrystalsCollector Game (Recommended)

IMAGE #1
Watch the demo.
The player will have to guess the answer, just like in Word Guess. This time, though, 
the player will guess with numbers instead of letters.

Here's how the app works:
There will be four crystals displayed as buttons on the page.
The player will be shown a random number at the start of the game.
When the player clicks on a crystal, it will add a specific amount of points to the 
player's total score. 
Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of 
the game.
The player loses if their score goes above the random number.
The game restarts whenever the player wins or loses.
When the game begins again, the player should see a new random number. Also, all the 
crystals will have four new hidden values. Of course, the user's score (and score 
counter) will reset to zero.
The app should show the number of games the player wins and loses. To that end, do 
not refresh the page as a means to restart the game.

Option 1 Game design notes
The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.
*/

var computerTarget = 0;
var buttonNames = ["diamond-button", "emerald-button", "ruby-button", "saphire-button"];
var buttonValues = [0, 0, 0, 0];
var playerTotal = 0;
var wins = 0;
var losses = 0;

// Create variables that hold references to places in HTML to display things
var targetText = document.getElementById("target-text");
var statusText = document.getElementById("status-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var scoreText = document.getElementById("losses-text");


/*
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesSoFarText = document.getElementById("guesses-so-far");
<button class="btn btn-default btn-lg diamond-button" value="0">
<button class="btn btn-default btn-lg emerald-button" value="0">
<button class="btn btn-default btn-lg ruby-button" value="0">
<button class="btn btn-default btn-lg saphire-button" value="0">
*/
// Load all HMTL before executing
$(document).ready(function() {
    
    // Generate random target number
    computerTarget = randomNum(19,120);
console.log(computerTarget);

    // Generate random jewel values
    for (let i=0; i<buttonNames.length; i++) {
        buttonValues[i] = randomNum(1,12);
        $("#" + buttonNames[i]).setValue(buttonValues[i]);
console.log(buttonNames[i] + " " + buttonValues[i]);
    }

    function randomNum(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    };
    
});



/*    // Function captures user keypress
    $(".btn").on("click", function() {

        //document. = function (event) {

        // Determine which key was pressed
        var userGuess = event.key.isNumber();
    }

});

function randomNum(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


function reset() {
    computerTarget = 0;
    diamondValue = 0;
    emeraldValue = 0;
    rubyValue = 0;
    saphireValue = 0;
    playerTotal = 0;
}

