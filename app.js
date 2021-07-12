let arr = ["a", "e", "i", "o", "u"];
let num1 = "10";
let letter = "e";

console.log(arr.includes(num1));
console.log(arr.includes(letter));

function countVowels(word) {
    // your code here...
    let arr = ["a", "e", "i", "o", "u"];
    let counter = 0;
    let i = 0;
    while (i < word.length) {
        let letter = word[i];
        if (arr.includes(letter)){

         counter++; }

        i++;


    }

return counter;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2


// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    // your code here...
    //Use slice() method
    //Find words that begin with vowl
    //add -yay to those words
    //don't forget string.includes method

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let str1 = 0;



  }

  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"

  let index = 0;
  let count = 0;
  while (index < word.length) {
    let char = word[index];
    if (char === "e" || char === "E") {
      count += 1;
    }
    index++;
    return count;



function eCounter(word) {
        let count = 0;

        for (let index = 0; index < word.length; index++) {
          let char = word[index];
          if (char === "e" || char === "E") {
            count += 1;
          }
        }

        return count;
      };

      console.log(eCounter("apple")); // => 1
      console.log(eCounter("appleapple")); // => 2
      console.log(eCounter("Appleee")); // => 3
