// // Sum Array*****************************
// function sumArray(array) {
// sum = 0;
// for (let index = 0; index < array.length; index++) {
//     let num = array[index];
//     sum += num;

// }
// return sum;
// }

// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30


// Add Arrays*********************************
// function combineArray(array1, array2) {
// return array1.concat(array2);
// }

// console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
// console.log(combineArray([17, 5], [6, 7])); // => [17, 5, 6, 7]


// Doubler***************************************
// function doubler(numbers) {
//     let newArr = [];
// for (let index = 0; index < numbers.length; index++) {
//         let ele = numbers[index] * 2;
//         newArr = newArr.concat(ele);

//     }
//     return newArr;

// }

// console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
// console.log(doubler([7, 1, 8])); // => [14, 2, 16]


// Vowel Counter (*)*************************************
// function countVowels(word) {

//     let counter = 0;
//     for (let i = 0; i < word.length; i++) {
//         let ele = word[i];
//         if (
//             ele === 'a' ||
//             ele === 'e' ||
//             ele === 'i' ||
//             ele === 'o' ||
//             ele === 'u') {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(countVowels("bootcamp")); // => 3
// console.log(countVowels("apple")); // => 2
// console.log(countVowels("pizza")); // => 2


// Is Subtracting************************************
// function isSubstring(searchString, subString) {
//     let search = searchString.toLowerCase();
//     let sub = subString.toLowerCase();

//     return search.indexOf(sub) !== -1;


// }

// console.log(isSubstring("The cat went to the store", "he cat went")); // => true
// console.log(isSubstring("Time to program", "time")); // => true
// console.log(isSubstring("Jump for joy", "joys")); // => false


// Fizz Buzz***********************************
// function fizzBuzz(max) {

//     for (let i = 0; i < max; i++) {
//        if (i % 3 === 0 && i % 5 !== 0) {
//            console.log(i);
//        } else if (i % 5 === 0 && i % 3 !== 0) {
//            console.log(i);
//        }
//     }

// }



// fizzBuzz(20); // prints out:
// 3
// 5
// 6
// 9
// 10
// 12
// 18

// Array Index of (*)**************************************************
// function wordWithinArray(array, word) {
//     if (array.indexOf(word) >= 0) {
//         return true;
//     } else {
//         return false;
//     }


// };

// console.log(
//   wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
// ); //=> true

// console.log(wordWithinArray(
//   ["dog", "cat", "camel", "bird"], "camel")
// ); //=> true

// console.log(
//   wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
// ); //=> false

// console.log(wordWithinArray(
//   ["dog", "cat", "camel", "bird"], "panther")
// ); //=> false


// Echo Recall****************************************************
// function echo(string) {
//     console.log(string.toUpperCase() + '...' + string + '...' + string.toLowerCase());
//   }

//   echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
//   echo("hey"); // => prints "HEY ... hey ... hey"
//   echo("JUMp"); // => prints "JUMP ... JUMp ... jump"



// String Included (*)******************************************************
// function eitherStringIncluded(sentence, word1, word2) {
//     if (sentence.includes(word1)) {
//         return true;
//     } else if (sentence.includes(word2)) {
//         return true;
//     }
//     return false;
// }

// console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
// console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
// console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
// console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false



// Pig Latin - Slice Research****************************************************

// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

// function pigLatinWord(word) {
//     let vowels = "aeiouAEIOU";;
//     let added = 'yay';

//     for (let i = 0; i < word.length; i++) {
//         let letter = word[i];
//         if (vowels.includes(word[0])) {
//             return word.concat(added);
//        } else if (vowels.includes(letter)) {
//         let first = word.slice(i);
//         let second = word.slice(0, i);
//         let final = first.concat(second);
//         return final.concat(added);

//        }

//     }
//     return word;
// }

//********************************

    // function pigLatinWord(word) {
        // let vowels = "aeiou";
        // if (vowels.includes(word[0])) {
        //     return word + "yay";
        // }
        // for (let i = 0; i < word.length; i++) {
        //     let letter = word[i];
        //     if (vowels.includes(letter)) {
        //         let firstPart = word.slice(i);
        //         let secondPart = word.slice(0, i);
        //         return firstPart + secondPart + "yay";
        //     }

        // }
        // return word;
    // }

//   console.log(pigLatinWord("apple")); //=> "appleyay"
//   console.log(pigLatinWord("eat")); //=> "eatyay"
//   console.log(pigLatinWord("banana")); //=> "ananabay"
//   console.log(pigLatinWord("trash")); //=> "ashtray"



// While Loop Translation (*)*********************************************
// function eCounter(word) {
//     let count = 0;

//     for (let index = 0; index < word.length; index++) {
//       let char = word[index];
//       if (char === "e" || char === "E") {
//         count += 1;
//       }
//     }

//     return count;
//   };
//   function eCounter(word) {
//       let count = 0;

//       let i = 0;
//       while (i < word.length) {
//         let char = word[i];
//         if (char === "e" || char === "E") {
//           count += 1;
//       }
//       i++;
//   }
//   return count;
// }

//   console.log(eCounter("apple")); // => 1
//   console.log(eCounter("appleapple")); // => 2
//   console.log(eCounter("Appleee")); // => 3


// For Loop Translation (*)*******************************************
// function aCounter(word) {
//     let index = 0;
//     let count = 0;
//     while (index < word.length) {
//       let char = word[index];
//       if (char === "a" || char === "A") {
//         count += 1;
//       }
//       index++;
//     }
//     return count;
//   };

// function aCounter(word) {
//     let count = 0;
//       for (let index = 0; index < word.length; index++) {
//         let char = word[index];
//         if (char === "a" || char === "A") {
//           count += 1;
//         }
//       }
//       return count;
//     };

//     console.log(aCounter("apple")); // => 1
//     console.log(aCounter("appleapple")); // => 2
//     console.log(aCounter("aAapple")); // => 3



// Is Prime**************************************************
// function isPrime(number) {
// if (number < 2) {
//     return false;
// }
// for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//         return false;
//     }
// }
// return true;
// }


// console.log(isPrime(2)); // => true
// console.log(isPrime(10)); // => false
// console.log(isPrime(11)); // => true
// console.log(isPrime(9)); // => false
// console.log(isPrime(2017)); // => true


// Reverse String***********************************************
// function reverseString(str) {
//     let reverse = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         let letter = str[i];
//         reverse += letter;
//     }
//     return reverse;
// }


// console.log(reverseString('fish')); // 'hsif'
// console.log(reverseString('marathon')); // 'nohtaram'


// Range**************************************************************
// let range = function(min, max) {
//     let array = [];
//     for (let i = min; i <= max; i++) {
//         array.push(i);
//     }
//     return array;
// }



// console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
// console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
// console.log(range(10, 3)); // []
