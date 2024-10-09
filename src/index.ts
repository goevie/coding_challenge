// The CLI entry point should live here!
import { reverseSentence } from './reverse';

// This line is used to receive the arguments from the command line + skipping 'node' and the script path
const args = process.argv.slice(2);

// The first argument is the sentence and any other arguments are options.
const sentence = args[0] || '';

// Check if the user wants to reverse words or letters
const reverseWords = args.includes('--word');
const reverseLetters = args.includes('--letter');

// Try to reverse sentence based on the options and catch if theres any error
try {
    const result = reverseSentence(sentence, reverseWords, reverseLetters);
    console.log(result);
} catch (error) {
     //Narrow down to handle errors as typescript error
    if (error instanceof Error) {
        console.error(error.message); 
    } else {
        console.error("An unknown error occurred.");
    }
}


