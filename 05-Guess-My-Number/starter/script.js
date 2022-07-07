'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 13;


// document.querySelector('.guess').value = 13;

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;


document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);

        if (!guess) {
            document.querySelector('.message').textContent = 'No number! ⛔';
        } else if (guess === number) {
            document.querySelector('.message').textContent = 'Good number! 👍';
            document.querySelector('.number').textContent = number;
            document.body.style.backgroundColor = "#60b347";
        } else if (guess > number) {
            if (score > 0) {
                document.querySelector('.message').textContent = 'Number too high!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game!';
                document.body.style.backgroundColor = "#F0706A";
            }
        } else if (guess < number) {
            if (score > 0) {
                document.querySelector('.message').textContent = 'Number too low!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game!';
                document.body.style.backgroundColor = "#F0706A";
            }
        }

        console.log(guess);
    });