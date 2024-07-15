const diceResult = document.getElementById('dice-result');
function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = 'Dice Result: ' + roll;
   // movePlayer(roll);
  }