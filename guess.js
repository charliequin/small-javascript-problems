const readlineSync = require('readline-sync');

console.log('Range is from 0 to your number.')

let valid = false;
while (!valid) {
    let maxNum = readlineSync.question('\nEnter maximum number: ');
    
    if (isNaN(maxNum)) {
        console.log("Invalid type, try again.")
    } else {
        valid = true;
        randomInt(maxNum);
    }
};


function randomInt(maxNum) {

    let result = Math.floor(Math.random() * Math.floor(maxNum));

    let success = false;
    while (!success) {

        let guess = readlineSync.question('\nGuess my number: ');

        if (guess > result) {
            console.log('Too high!');
        }

        else if (guess < result) {
            console.log('Too low!');
        }

        else {
            console.log('Well done! You got it.')
            success = true;
        }
    };
};