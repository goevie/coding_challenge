# coding_challenge

This is a simple coding challenge to be written in Typescript - Node JS

## The challenge

Write the logic for the reverseSentence function in src/reverse.ts. Create a command line app that uses the function.

    npm start -- "please reverse this sentence" --word --letter

    where

    "--" - separates npm args from your node args
    "--word" - reverse the order of the words
    "--letter" - reverse the order of the letters within each word

### Specification

The reverseSentence function takes a string representing a sentence, and reverses either the word order, the letter order within each word, or both.

There is a suite of unit tests written using the Mocha unit testing framework that describe the requirments in code, this is location in the /tests directory.

You can use the unit test to confirm that your solution is correct - feel free to add any extra test cases that you feel are needed.

Ultimately, this will be run as a node application, so add code in src/index.ts that will take parameters from the cmd line and pass them to reverseSentence, returning the result to the console.

### Node scripts

you need to install the dependencies first

    npm install

you can run the tests using - you do not need to build before running the tests

    npm test

before running the application, make sure to build

    npm run build

to run the application

    npm start -- "please reverse this sentence"
