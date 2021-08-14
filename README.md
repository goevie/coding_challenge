# coding_challenge
This is a simple coding challenge to be written in Node JS

## The challenge

Write the logic for the reverseSentence function in reverse.js.  Create a command line app that uses the function.

    npm start "please reverse this sentence" --word --letter

    where 
    
    --word - reverse the order of the words
    --letter - reverse the order of the letters within each word

### Specification

The reverseSentence function takes a string representing a sentence, and reverses either the word order, the letter order within each word, or both.

There is a suite of unit tests written using Jest unit testing framework that describe the requirments in code.

You can use the unit test to confirm that your solution is correct - feel free to add any extra test cases that you feel are needed.

Ultimately, this is a node application, so add code in src/index.js that will take parameters from the cmd line and pass them to reverseSentence, returning the result to the console.

### Node scripts
you can run the tests using

    npm test

to run the application     

    npm start "please reverse this sentence"
