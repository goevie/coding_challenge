import { reverseSentence } from "./reverse";

try {
    // Extract command-line arguments
    const args = process.argv.slice(2);

    //simple args number check
    if (args.length > 3) {
        throw new Error("Pls provide valid args in command line");

    }

    // Find the index of the first non-flag argument (the sentence)
    const sentenceIndex = args.findIndex(arg => !arg.startsWith("--"));
    const sentence = args[sentenceIndex];


    //Flags for whether reverse word/letters
    const isReverseWords = args.includes("--word");
    const isReverseLetters = args.includes("--letter");


    //Call reverseSentence and print the result
    const result = reverseSentence(sentence, isReverseWords, isReverseLetters);
    console.log(result);

} catch (error) {
    console.log(error)
    // Handle any errors that occur during input processing or function execution
    if (error instanceof Error) {
        console.error("An error occurred:", error.message);

    } else {
        console.error("Internal error occurred")
    }
}
