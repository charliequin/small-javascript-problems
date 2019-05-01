const readlineSync = require('readline-sync');



// Takes user input and prints output.
function framed() {

    let answer = readlineSync.question('Enter words separated by space: ');
    let sortArray = answer.split(' ');

    let number = longestItem(sortArray);

    let maxCharPadding = number + 4;
    let maxChar = number + 1;

    let boxPad = '*';
    console.log('\n' + boxPad.repeat(maxCharPadding));

    for (i = 0; i < sortArray.length; i++) {
        console.log('* ' + (sortArray[i].padEnd(maxChar, ' ') + '*'));
    };

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
    for (i = 0; i < wordArray.length; i++) {
        lengthArray.push(wordArray[i].length);
    };

    let maxChar = max(lengthArray);
    return maxChar;
};



framed();