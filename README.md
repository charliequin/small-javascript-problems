# Java mini-problems

Here is a collection of mini-problems to give you a chance to flex your Java muscles and get comfortable with the core language.

To save yourself from having to create a new project for each problem (that would be a lot of projects!) keep all of the problems together in one project but create a new class (with its own `main` method) for each mini-problem. Ask for some help if you're not sure what this means.

Try to solve each problem without the hint if you can, but don't worry if you get stuck and need to look at it for a few pointers.

## Greetings!

Write a program that asks the user for their name and then greets them with their name.

Modify your program so that it only greets the user if their name is Alice or Bob, and otherwise says that it doesn't know them.

<details>
    <summary>Small hint</summary>

    Take a look at a cheatsheet if you can't remember how to do input or output.

    You'll need to use conditional statements for the second part.
</details>

## Summing up

Write a program that asks the user for a number `n` and prints the sum of the numbers `1` to `n`.

Modify your program so that it only adds up the numbers which are divisible by either 3 or 5.

What happens to your program if the user enters an invalid number (for example `"frog"` or `-7`)? Can you make sure your program behaves sensibly?

<details>
    <summary>Small hint</summary>

    You can use a for-loop for the first part.

    To check if a number is divisible by 3 (or 5) the modulo operator will come in handy.

    For the last part, you can combine some conditional statements with the `hasNextInt` method on `Scanner`.
</details>

## Leaping for joy

Write a program that asks the user for a number `n` and prints out the next `n` leap years. 

Remember that a year is a leap year if it is a multiple of 4, except years that end in '00' which are only leap years if they are also a multiple of 400.

<details>
    <summary>Small hint</summary>

    Be careful when checking if a year is a leap year - it's a little bit fiddly!

    You should keep track of how many leap years you've found so far so that your program knows when to stop.

</details>

## Primetime

Write a program that asks the user for a number `n` and checks if `n` is a prime number.

Write a program that asks the user for a number `n` and prints out all the prime numbers up to `n`.

<details>
    <summary>Small hint</summary>

    Remember that a number is prime if it isn't divisible by anything except itself and 1. Use a for loop to check if the number if divisible by any other numbers.

    For the second part, start by restructuring your code so that you have another function (not the main function) whose job it is to check if a particular number is prime. Use that function within a loop to check all the numbers up to `n`.
</details>

## Right back at you

Write a program that lets the user input a list of numbers one at a time. When they enter the word "done", stop asking them for numbers and print out all of the numbers they entered.

Modify your program so that it prints the numbers in reverse order.

<details>
    <summary>Small hint</summary>

    You'll need some sort of loop to get the input from the user.

    For the second part, either use a "backwards" for-loop (one that decrements instead of increments) or reverse the list and use a normal for-loop.
</details>

## Seeing double?

Write a program that asks the user for a string and checks to see if it is a palindrome.

<details>
    <summary>Small hint</summary>

    One approach is to reverse the string, and check if the result is equal to the original string.
</details>

## How many rabbits?

Write a program that asks the user for a number `n` and computes the first `n` Fibonacci numbers in a list.

Then make your program print out all of those Fibonacci numbers on the same line (with a space between each one).

(The Fibonacci numbers start with 0, 1 and each of the following numbers comes from adding up the previous two numbers in the sequence. It begins 0, 1, 1, 2, 3, 5, 8...)

<details>
    <summary>Small hint</summary>

    Calculating the numbers is just a case of careful implementation.

    To print them on one line look at the difference between `System.out.println` and `System.out.print`.
</details>

## You've Been Framed!

Write a program that lets the user enter a list of words on one line (with spaces between). Your program should then print out their words formatted in a rectangular frame. For example, the list of words "Hello World in a frame" gets displayed as:

```
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
```

<details>
    <summary>Small hint</summary>

    You'll need to work out how wide the frame should be before you start writing it out!
</details>

## Your guess is as good as mine!

Write a program that creates a secret random number between 1 and 100 and asks the user to guess it. After each guess, it should tell the user if their guess was too big, too small, or exactly right.

Write another program that asks the user to think of a secret number (but they shouldn't tell the program what it is!) and then the program tries to guess it. After each guess the program makes, the user needs to tell the program if the guess was too big, too small, or exactly right.

Can you make your program always succeed in 8 guesses? Can you make your program detect when the user has lied to it?

<details>
    <summary>Small hint</summary>

    There's a lot going on here. The first part is definitely simpler so start there. You'll need to ask your user for input within a loop and break out of the loop when they guess correctly.

    For the second part, start by thinking about how you would play the game if you took the place of your program. What information do you keep track of as the game goes on? Make sure your program keeps track of the same information.
</details>

## Igpay Atinlay

Write a program that reads some text from a file and translates it to Pig Latin.

Pig Latin is where you take the first letter of each word, move it to the end of the word, and add 'ay' to it. For example, "Pig Latin" becomes "Igpay Atinlay".

This is only a simplified form of Pig Latin. There are some more complicated rules [here](https://en.wikipedia.org/wiki/Pig_Latin#Rules). How many of them can you include in your program?

<details>
    <summary>Small hint</summary>

    There are lots of parts to this so it might be worth having several different functions.

    Start by having a function which reads the entire text of a file.

    Then have a function which gets all the words from a piece of text.

    Finally have a function which translates a single word into Pig Latin. Remember to deal with capital letters appropriately.
</details>