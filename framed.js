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
    };

    // Bottom Box border.
    console.log(boxPad.repeat(maxCharPadding));
};



// Alternative function to use instead of Math.max function.
function max(wordArray) {

    let longest = 0;

    for (i = 0; i < wordArray.length; i++) {

        if (longest < wordArray[i]) {
            longest = wordArray[i];
        };
    };
    return longest;
};



// Finds the highest value in the argument array. Using Max instead of Math.max.
function longestItem(wordArray) {

    let lengthArray = [];

    // Gets the length of each array item.
    for (i = 0; i < wordArray.length; i++) {
        lengthArray.push(wordArray[i].length);
    };

    // Determines the highest value in the length array.
    let maxChar = max(lengthArray);

    return maxChar;
};




// Executes the main function.
framed();