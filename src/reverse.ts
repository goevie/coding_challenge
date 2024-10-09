export const reverseSentence = (
  sentence: string,
  reverseWords: boolean,
  reverseLetters: boolean
): string => {
  try {
    // Split the provided sentence into an array as soon as space found.
    let words = sentence.split(' ');

    // This reverse the order of the words  
    if (reverseWords) {
      words.reverse();
    }

    // This reverse the letters in each words
    if (reverseLetters) {
      words = words.map(word => word.split('').reverse().join(''));
    }

   // Join all the words back together and return the result.
    return words.join(' ');
  } catch (error) {
    //Narrow down to handle errors as typescript error
    if (error instanceof Error) {
      console.error('An error occurred:', error.message);
      throw new Error(error.message || 'Failed to reverse sentence.');
    } else {
      console.error('An unexpected error occurred:', error);
      throw new Error('Failed to reverse sentence due to an unknown error.');
    }
  }
};

