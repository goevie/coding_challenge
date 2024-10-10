import { reverseSentence } from "./reverse";

// Extract command-line arguments
const args = process.argv.slice(2);


if (args.length === 0 || args.length > 3) {
    console.error("Pls provide valid args in command line");
    process.exit(1);
}

// Find the index of the first non-flag argument (the sentence)
const sentenceIndex = args.findIndex(arg => !arg.startsWith("--"));
const sentence = args[sentenceIndex];


//Flags for whether reverse word/letters
const isReverseWords = args.includes("--word");
const isReverseLetters = args.includes("--letter");

// Check if sentence was provided
if (!sentence) {
    console.error("Pls provide a sentence to reverse.");
    process.exit(1);
}


//Call reverseSentence and print the result
const result = reverseSentence(sentence, isReverseWords, isReverseLetters);
console.log(result);