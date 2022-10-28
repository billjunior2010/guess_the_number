'use strict'
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23

console.log(document.querySelector('.guess').value);
*/


let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(random)


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    //when there is no number
    if (!guess) {
        document.querySelector('.message').textContent = 'No number'
    }

    //when player wins
    else if (guess === random) {
        document.querySelector('.message').textContent = 'correct number🤩'

        document.querySelector('.number').textContent = random;

        document.querySelector('body').style.backgroundColor = '#FBB6B6';

        document.querySelector('.number').style.width = '30rem'


        // highscore = document.querySelector('.highscore').

        if (score > highscore) {

            console.log(highscore)
            // document.querySelector('.highscore').textContent = topscore;
        }


        //when guess is too high
        else if (guess > random) {
            if (score > 0) {
                document.querySelector('.message').textContent = 'too high'
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'you lost the game💥💥'

            }

            //when guess is too low
        }
        else if (guess < random) {
            if (score > 0) {
                document.querySelector('.message').textContent = 'too low'
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'you lost the game💥💥'
            }
        }

    })

const again = document.getElementById("again");

again.addEventListener("click", function () {
    random = Math.trunc(Math.random() * 20) + 1;
    score = 20
    document.querySelector('.message').textContent = 'start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem'

},

);
