//array of dice images
let diceImages = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];

let winner = $('#winner');

//function to roll the dice
function rollDice() {
    //generate a random number between 1 and 6 for each dice
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    //Update the dice image
    let dice1Element = document.querySelector('.img1');
    dice1Element.setAttribute('src', diceImages[dice1 -1]);
    let dice2Element = document.querySelector('.img2')
    dice2Element.setAttribute('src', diceImages[dice2 -1]);


    //Declare the winner

    if (dice1 > dice2) {
        winner.html('Player 1 wins!');
    } else if (dice2 > dice1) {
        winner.html('Player 2 wins!');
    } else {
        winner.html('draw');
    }
}

window.onload = rollDice;