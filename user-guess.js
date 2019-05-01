const readlineSync = require('readline-sync');


let highestNum = 100;
let lowestNum = 0;

const tooHigh = 'TOO HIGH';
const tooLow = 'TOO LOW';
const correct = 'CORRECT';


for (let i = 0; i <= 10; i++) {

    let range = highestNum + lowestNum;
    let middle = Math.round(range / 2);

    let guess = readlineSync.question('Is your number ' + middle + '? ').toUpperCase();

    if (guess === tooLow) {
        lowestNum = middle;
    }

    if (guess  === tooHigh) {
        highestNum = middle;
    } 

    if (guess  === correct) {
        console.log('\nI win!');
        console.log('I took '+ i + ' attempts.')
        break;
    }
}




