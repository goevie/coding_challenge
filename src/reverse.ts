export const reverseSentence = (
  sentence: string,
  reverseWords: boolean,
  reverseLetters: boolean
): string => {
  // Edge case: check if the sentence is empty or contains only whitespace and type of sentence
  if (!sentence || !sentence.trim()) {
    throw new Error("Invalid input-Sentence must be a non-empty string.");
  }

  let words = sentence.trim().split(" "); // Split by one space

  if (reverseWords) {
    words = words.reverse();
  }

  if (reverseLetters) {
    words = words.map(word => word.split("").reverse().join(""));
  }

  return words.join(" ");
};
