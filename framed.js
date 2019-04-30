const readlineSync = require('readline-sync');

// Takes user input and prints output.
function framed() {

    let answer = readlineSync.question('Enter words separated by space: ');
    let sortArray = answer.split(' ');

    // Top box border.
    let number = longestItem(sortArray);

    // Sets top padding number to equal length of array item lines.
    let maxCharPadding = number + 4;
    let maxChar = number + 1;

    // Multiplies the asterisk's by the highest value.
    let boxPad = '*';
    console.log('\n' + boxPad.repeat(maxCharPadding));

    for (i = 0; i < sortArray.length; i++) {
        console.log('* ' + (sortArray[i].padEnd(maxChar, ' ') + '*'));
        // console.log('* ' + sortArray[i] + ' *');
    };

    // Bottom Box border.
    console.log(boxPad.repeat(maxCharPadding));
};

framed();


// Finds the highest value in the 
function longestItem(wordArray) {

    let lengthArray = [];

    // Gets the length of each array item.
    wordArray.forEach(element => {
        lengthArray.push(element.length);
    });

    // Determines the highest value in the length array.
    let maxChar = Math.max(...lengthArray);

    return maxChar;
};