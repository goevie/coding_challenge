const reverseSentence = (sentence, reverseWords, reverseLetters) => {
  // This is where the logic goes, current implementation doesn't pass all tests!

  function swapInput(array, startIdx, endIdx) {
    // swaps elements without creating auxilary data structures
    while (startIdx < endIdx) {
      let tmp = array[startIdx];
      array[startIdx] = array[endIdx];
      array[endIdx] = tmp;
      startIdx++;
      endIdx--;
    }
    return array;
  }

  sentence = sentence.trim().split(" ");
  if (reverseWords) {
    // passes in array of words
    sentence = swapInput(sentence, 0, sentence.length - 1);
  }

  if (reverseLetters) {
    // access substrings in sentence
    for (let i = 0; i < sentence.length; i++) {
      // swapInput requires an array - change word into character array
      sentence[i] = swapInput(sentence[i].split(""), 0, sentence[i].length - 1).join("");
    }
  }

  return sentence.join(" ");
};

module.exports = { reverseSentence };
