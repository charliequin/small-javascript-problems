const readlineSync = require('readline-sync');


let highestNum = 100;
let lowestNum = 0;

let tooHigh = 'Too High';
let tooLow = 'Too Low';
let correct = 'Correct';


for (let i = 0; i <= 10; i++) {

    let range = highestNum + lowestNum;
    let middle = Math.round(range / 2);

    let guess = readlineSync.question('Is your number ' + middle + '? ');

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




