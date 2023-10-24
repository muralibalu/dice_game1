function rollDie() {
    // Generate a random number between 1 and 6
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    // Display the result
    //document.querySelector('.dice').setAttribute('src', 'dice-1.png')
    return randomNumber;
 
}

var scores = [0, 0];
let player = 0;

function rollAndUpdate() {
    // Get the current score element
    const scoreElement = document.querySelector(`.current-score${player+1}`);

    // Roll the die
    const randomNumber = rollDie();

    // Display the result
    document.querySelector(`.dice`).setAttribute('src', `dice-${randomNumber}.png`);

    // Update the score for the current player
    scores[player] += randomNumber;

    // Display the current score
    scoreElement.textContent = scores[player];
   // if (scores[player] >= 20) {
     //   alert(`Player ${player + 1} wins!`);
       // resetGame();
    //}
    if(scores[0]>=20 ){
        alert(`Player 2 wins!`);

    }
    if(scores[1]>=20 ){
        alert(`Player 1 wins!`);

    }

}

function hold() {
    // Switch to the other player
    player = player === 0 ? 1 : 0;
}


function resetGame() {
    // Reset scores and player
    scores = [0, 0];
    player = 0;

    // Reset display
    document.querySelector('.dice').setAttribute('src', 'dice-1.png');
   // document.querySelectorAll('.current-score').forEach(element => element.textContent = '0');
  // document.querySelector('.dice').setAttribute('src', 'dice-1.png');
   document.querySelector('.current-score1').textContent=0
   document.querySelector('.current-score2').textContent=0


}

function winner(){
    if(scores[0]>scores[1]){
        alert(`Player 1 wins!`);

    }
    else         alert(`Player 2 wins!`);

}
document.querySelector('.btn.btn--roll').addEventListener('click', rollAndUpdate);
document.querySelector('.btn.btn--hold').addEventListener('click', hold);
document.querySelector('.btn.btn--new').addEventListener('click', resetGame);

let click=0;


