import { expect } from "chai";
import { describe } from "mocha";
import { reverseSentence } from "../src/reverse";

describe("reverseSentence", () => {
  it("should do nothing when passed false false", () => {
    const sentence = "this is a sentence";
    const reverseWords = false;
    const reverseLetters = false;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "this is a sentence"
    );
  });

  it("should reverse a single letter to itself", () => {
    const sentence = "a";
    const reverseWords = true;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "a"
    );
  });

  it("should reverse sentences by words", () => {
    const sentence = "this is a sentence";
    const reverseWords = true;
    const reverseLetters = false;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "sentence a is this"
    );
  });

  it("should reverse sentences by letters", () => {
    const sentence = "the letters";
    const reverseWords = false;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "eht srettel"
    );
  });

  it("should reverse both", () => {
    const sentence = "this is a sentence";
    const reverseWords = true;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "ecnetnes a si siht"
    );
  });

  it("should handle an empty string", () => {
    const sentence = "";
    const reverseWords = true;
    const reverseLetters = true;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "Input sentence is empty."
    );
  });

  it("should keep the single word when passed true false", () => {
    const sentence = "word";
    const reverseWords = true;
    const reverseLetters = false;

    expect(reverseSentence(sentence, reverseWords, reverseLetters)).to.equal(
      "word"
    );
  });
});
