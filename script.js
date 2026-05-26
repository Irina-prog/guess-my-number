'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🏅Correct Number!';
document.querySelector('.score').textContent = '15/20';
document.querySelector('.number').textContent = 3;
document.querySelector('.guess').value = 3;*/

let secretNumber = Math.round(Math.random() * 20);
let score = 20;
let highScore = document.querySelector('.highscore').textContent;
console.log(highScore);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/* document.querySelector('.number').textContent = secretNumber;*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('😎 type the number in!');
  } else if (guess === secretNumber) {
    //player wins
    displayMessage('🏅Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score >= highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 ⬆️ Too high!' : '📉 ⬇️ Too low!',
      );
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //  else if (guess > secretNumber) {
  //   //guess is too high
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 ⬆️ Too high!';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   //guess is too low
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 ⬇️ Too low!';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
const again = document.querySelector('.again');
again.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  secretNumber = Math.round(Math.random() * 20);
});
