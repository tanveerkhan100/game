'use strict';

// console.log(document.querySelector('.guessing').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.user-guess').value);
    console.log(guess, typeof guess);
    
    // No value entered
    if(!guess){
        document.querySelector('.guessing').textContent = '⛔ No number';
    }

    // Correct value
    else if(guess === secretNumber){
        document.querySelector('.guessing').textContent = '🎉 Correct Number';
        document.querySelector('#high-score').textContent = score;
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = 'rgb(58, 146, 58)';
        document.querySelector('.guessing').style.color = 'rgb(255, 255, 167)';
        document.querySelector('.number').style.fontSize = '4rem';
    }

    // high Value
    else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.guessing').textContent = '📉 Too high';
        score--;
        document.querySelector('#score-value').textContent = score;
        }
        else{
            document.querySelector('.guessing').textContent = '💣 You lose';
            document.querySelector('#score-value').textContent = '0';
        }
    }

    // Low Value
    else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.guessing').textContent = '📉 Too low';
        score--;
        document.querySelector('#score-value').textContent = score;
        }
        else{
            document.querySelector('.guessing').textContent = '💣 You lose';
            document.querySelector('#score-value').textContent = '0';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.guessing').textContent = 'Start guessing...';
    document.querySelector('#score-value').textContent = score;
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = 'rgb(31, 29, 29)';
    document.querySelector('.number').style.fontSize = '4rem';
    document.querySelector('#high-score').textContent = score;
});
