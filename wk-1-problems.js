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

//**********   ************   **********

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


// Log Between Stepper Recall***************************************
// function logBetweenStepper(min, max, step) {
//     for (let i = min; i <= max; i += step) {
//         console.log(i);
//     }

// }


// logBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9


// logBetweenStepper(-10, 15, 5)  // prints out:
// -10
// -5
// 0
// 5
// 10
// 15



// My Includes********************************************************
// function myIncludes(arr, target) {
//     // return arr.includes(target);
//     for (let i = 0; i < arr.length; i++) {
//         let index = arr[i];
//         if (index === target) {
//             return true;
//         }

//     }
//     return false;
// }


// console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
// console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
// console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
// console.log(myIncludes([43, -7, 11, 13], 11)); // true
// console.log(myIncludes([43, -7, 11, 13], 1)); // false



// Sum Array Recall*********************************************************
// function sumArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         let num = array[i];
//         sum += num;
//     }
//     return sum;
// }

// console.log(sumArray([5, 6, 4])); // => 15
// console.log(sumArray([7, 3, 9, 11])); // => 30


// // Factors Of******************************************************************
// let factorsOf = function(num) {
//     let array = [];
//     for (let i = 0; i <= num; i++) {
//         if (num % i === 0) {
//             array.push(i);
//         }

//     }
//     return array;
// }



// console.log(factorsOf(5)); // [ 1, 5 ]
// console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
// console.log(factorsOf(9)); // [ 1, 3, 9 ]
// console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
// console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
// console.log(factorsOf(2017)); // [ 1, 2017 ]



// My Index Of***************************************************
// function myIndexOf(arr, target) {
// for (let i = 0; i < arr.length; i++) {
//     let searcher = arr[i];
//     if (target === searcher) {
//         return i;
//     }

// }
// return -1;
// }




// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
// console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
// console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
// console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

// Vowel Counter Recall*******************************************
// function countVowels(word) {
//     let vowels = 'aeiou';
//     let counter = 0;
//     for (let i = 0; i < word.length; i++) {
//         let letter = word[i];
//         if (vowels.includes(letter)) {
//             counter++;
//         }
//         // if (
//         //     letter === 'a' ||
//         //     letter === 'e' ||
//         //     letter === 'i' ||
//         //     letter === 'o' ||
//         //     letter === 'u') {
//         //     counter++;
//         // }
//     }
//     return counter;
// }

//   console.log(countVowels("bootcamp")); // => 3
//   console.log(countVowels("apple")); // => 2
//   console.log(countVowels("pizza")); // => 2


// Has Vowel***********************************************
// function hasVowel(str) {
//     let vowels = 'aeiou';
//     for (let i = 0; i < str.length; i++) {
//         let letter = str[i];
//         if (vowels.includes(letter)) {
//             return true;
//         }
//     }
// return false;
// }

// console.log(hasVowel('dog')); // true
// console.log(hasVowel('conventional')); // true
// console.log(hasVowel('rhythm')); // false


// Fizz Buzz Array*****************************************
// function fizzBuzz(max) {
//     let arr = [];
//     for (let i = 1; i < max; i++) {

//          if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
//              arr.push(i);

//          }

//     }
//     return arr;
// }

// console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
// console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]



// First Vowel**********************************************
// function firstVowel(str) {
//     let vowels = 'aeiou';
//     for (let i = 0; i < str.length; i++) {
//         let letter = str[i];
//         if (vowels.includes(letter)) {
//             return letter;
//         }
//     }
//     return null;
// }

// console.log(firstVowel('battery')); // 'a'
// console.log(firstVowel('tunnel')); // 'u'
// console.log(firstVowel('dog')); // 'o'
// console.log(firstVowel('conventional')); // 'o'
// console.log(firstVowel('rhythm')); // null


// Even Numbers******************************************
// let evenNumbers = function(max) {
//     let arr = [];
//     for (let i = 1; i < max; i++) {
//         if (i % 2 === 0) {
//             arr.push(i);
//         }

//     }
//     return arr;
// }


// console.log(evenNumbers(7)); // [ 2, 4, 6 ]
// console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
// console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]


// Is Prime Recall*******************************************
// function isPrime(number) {

//     if (number < 2) {
//         return false;
//     }
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }

//     }
//     return true;
// }

// console.log(isPrime(2)); // => true
// console.log(isPrime(10)); // => false
// console.log(isPrime(11)); // => true
// console.log(isPrime(9)); // => false
// console.log(isPrime(2017)); // => true



// Last Vowel********************************************
// function lastVowel(str) {
//     let vowels = 'aeiouAEIOU';
//     for (let i = str.length - 1; i >= 0; i--) {
//         let letter = str[i];
//         if (vowels.includes(letter)) {
//             return letter;
//         }
//     }
//     return null;
// }

// console.log(lastVowel('battery')); // 'e'
// console.log(lastVowel('TUNNEL')); // 'E'
// console.log(lastVowel('dog')); // 'o'
// console.log(lastVowel('conventional')); // 'a'
// console.log(lastVowel('rhythm')); // null


// Pit Pat****************************************************
// function pitPat(max) {
//     let arr = [];
//     for (let i = 0; i <= max; i++) {
//         if ((i %  4 === 0 || i % 6 === 0) && !(i %  4 === 0 && i % 6 === 0)) {
//             arr.push(i);
//         }

//     }
//     return arr;
// }

// console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
// console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]


// Remove Last Vowel*******************************
// function removeLastVowel(word) {
//     let vowels = 'aeiouAEIOU';
//     for (let i = word.length -1; i >= 0; i--) {
//         let letter = word[i];
//         if (vowels.includes(letter)) {
//             return word.slice(0, i) + word.slice(i + 1);
//         }
//     }
//     return word;
// }


// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'

// Pairs Maker**************************************************
// function pairsMaker(arr) {
//     let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     let ele1 = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//         let ele2 = arr[j];
//         let combine = [ ele1, ele2];
//         newArr.push(combine);
//     }
// }
// return newArr;
// }

// console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// // [ [ 'a', 'b' ],
// //   [ 'a', 'c' ],
// //   [ 'a', 'd' ],
// //   [ 'b', 'c' ],
// //   [ 'b', 'd' ],
// //   [ 'c', 'd' ] ]

// console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// // [ [ 'Rosemary', 'Alex' ],
// //   [ 'Rosemary', 'Connor' ],
// //   [ 'Alex', 'Connor' ] ]


// Min Value (*)***************************************************************
// function minValue(nums) {
//     let min = null;
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         if (min === null || num < min) {
//             min = num;
//         }
//     }
//     return min;
// }

// console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
// console.log(minValue([-2, -3, -7, 3 ])); // -7
// console.log(minValue([])); // null


// Max Value (*)**********************************************************************
// function maxValue(nums) {
//     let max = null;
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         if (max === null || num > max) {
//             max = num;
//         }
//     }
//     return max;
// }


// console.log(maxValue([4, 6, 3, 5, 2, 4])); // 6
// console.log(maxValue([-2, -3, -7, 3 ])); // 3
// console.log(maxValue([])); // null


// Two Sum**********************************************************************
// let twoSum = function(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//          let ele1 = arr[i];

//       for (let j = i + 1; j < arr.length; j++) {
//        let ele2 = arr[j];


//         if(ele1 + ele2 === target) {
//         return true;
//         }
//       }
//     }
//      return false;
//    }


// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8)); // true
// console.log(twoSum([4, 6, 2, 3], 11)); // false


// Rotate Right*******************************************************************
// let rotateRight = function(array, num) {
//     let copy = array.slice();

//     for (let i = 0; i < num; i++) {
//         let el = copy.pop();
//         copy.unshift(el);
//     }

//     return copy;

// };




// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]



// Two Dimensional Sum*************************************************************
// function twoDimensionalSum(arr) {
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let num1 = arr[i];
//     for (let j = 0; j < num1.length; j++) {
//         sum += num1[j];
//     }
// }
// return sum;
// }


// let arr1 = [
//     [1, 3],
//     [-4, 7, 10],
//     [2]
// ];
// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [
//     [],
//     [3, 1, 2],
// ];
// console.log(twoDimensionalSum(arr2)); // 6



// Pig Latin Recall********************************************************
// function pigLatinWord(word) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     let vowelIndex = 0;
//     if (vowels.includes(word[0])) {
//         return word + "yay";
//     } else {
//         for (let char of word) {
//             if (vowels.includes(char)) {
//                 vowelIndex = word.indexOf(char);
//                 break;
//             }
//         }
//         return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
//     }
//   };

//   console.log(pigLatinWord("apple")); //=> "appleyay"
//   console.log(pigLatinWord("eat")); //=> "eatyay"
//   console.log(pigLatinWord("banana")); //=> "ananabay"
//   console.log(pigLatinWord("trash")); //=> "ashtray"


// Least Common Multiple***********************************************************
// function leastCommonMultiple(num1, num2) {
//     for (let i = 1; i <= (num1 * num2); i++) {
//         if (i % num1 === 0 && i % num2 === 0) {
//             return i;
//         }

//     }
// }

// console.log(leastCommonMultiple(4, 6)); // 12
// console.log(leastCommonMultiple(3, 5)); // 15
// console.log(leastCommonMultiple(2, 10)); // 10


// Array Sum*****************************************************************
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         sum += num;

//     }
//     return sum;
// }

// console.log(sumArray([4, 3, -1, 10])); // 16
// console.log(sumArray([6, 7, 2])); // 15
// console.log(sumArray([])); // 0


// Avg Val***************************************************************
// function avgVal(arr) {
//     let sum = 0;
//     for (let i = 0;i < arr.length; i += 1) {
//       let num = arr[i];
//       sum += num;

//     }
//     let average = sum / arr.length;
//       if (arr.length === 0) {
//        return null;
//       }
//     return average;
//   }

//   console.log(avgVal([5, 10])); // 7.5
//   console.log(avgVal([3, 7, 2, 1, 2])); // 3
//   console.log(avgVal([])); // null

// My Index Of Recall**********************************************************
// function myIndexOf(arr, target) {
//     for (let i = 0; i <= arr.length; i++) {
//      if (target === arr[i]) {
//       return i;
//      }
//     }
//     return -1;
//   }

//   console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
//   console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
//   console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
//   console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
//   console.log(myIndexOf([43, -7, 11, 13], 1)); // -1



// Tripler*****************************************************
// function tripler(num) {
//     let newArr = [];
//     for (let i = 0; i < num.length; i++) {
//       newArr.push(num[i] * 3);

//     }
//     return newArr;
//   }

//   console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
//   console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]


// Long Words********************************************************
// let longWords = function(words) {
//     let filteredWords = [];
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         if (word.length > 5) {
//             filteredWords.push(word);
//         }
//     }
//     return filteredWords;
// }


// console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
// console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]


// Remove Words**********************************************************
// function removeEWords(sentence) {
//     let words = sentence.split(' ');
//     let arr = [];
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         if (!word.toLowerCase().includes('e')) {
//             arr.push(word);
//         }
//     }
//     return arr.join(' ');
// }


// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// console.log(removeEWords('Enter the building')); // 'building'


// Max Value**********************************************************************
// let maxValue = function(nums) {
//     let max = null;

//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         if (max === null || num > max) {
//             max = num;
//         }
//     }

//     return max;
// };




// console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
// console.log(maxValue([-2, -3, -7, 3 ])); // 3
// console.log(maxValue([])); // null


// Two Sum Recall*****************************************************************
// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         let num1 = arr[i];

//             for (let j = i + 1; j < arr.length; j++) {
//                 let num2 = arr[j];

//                 if (num1 + num2 === target) {
//                     return true;
//                 }

//             }

//     }
//     return false;
// }

// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8)); // true
// console.log(twoSum([4, 6, 2, 3], 11)); // false


// Reverse Sentence**************************************************************
// function reverseSentence(sentence) {
//     let split = sentence.split(' ');
//     let arr = [];
//     let pushed1 = arr.push(split);
//     let reversed = arr.reverse();
//     console.log(pushed1);
// }


// console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
// console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'



// Reverse Sentence*****************************************************************
// function reverseSentence(sentence) {
//     let words = sentence.split(' ');
//     let newWords = [];
//     for (let i = words.length - 1; i >= 0; i--) {
//         newWords.push(words[i]);
//     }
//     let newSentence = newWords.join(' ');
//     return newSentence;
// };

// console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
// console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'



// Initials***********************************************************************
// function initials(name) {
//     let split = name.split(' ');
//     let arr = [];
//     for (let i = 0; i < split.length; i++) {
//         let letter = split[i];
//         arr.push(letter[0]);

//     }
//     let init = arr.join('');
//     return init.toUpperCase();
// }


// console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'
// console.log(initials('brian crawford scott')); // 'BCS'
// console.log(initials('Benicio Monserrate Rafael del Toro S??nchez')); // 'BMRDTS'



// Two Dimensional Priduct**********************************************************
// function twoDimensionalProduct(array) {
//     let sum = 1;
//     for (let i = 0; i < array.length; i++) {
//         let ele1 = array[i];
//             for (let j = 0; j < ele1.length; j++) {
//                 let ele2 = ele1[j];
//                 sum *= ele2;
//             }
//     }
//     return sum;
// };

// let arr1 = [
//     [6, 4],
//     [5],
//     [3, 1]
// ];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [
//     [11, 4],
//     [2]
// ];
// console.log(twoDimensionalProduct(arr2)); // 88



// Popper************************************************************************
// let popper = function(array, num) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         let ele = array.pop();
//         arr.push(ele);

//     }
//     return arr;
// }

// let arr1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(popper(arr1, 2)); // [ 'e', 'd' ]
// console.log(arr1); // [ 'a', 'b', 'c' ]

// let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
// console.log(popper(arr2, 1)); // [ 'cabbage' ]
// console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]



// Choose Primes*******************************************************************
// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     } for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function choosePrimes(nums) {
//     let arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         let ele = nums[i];
//         if (isPrime(ele)) {
//             arr.push(ele);
//         }
//     }
//     return arr;
// }



// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]



// Fizz Buzz Recall***************************************************************
// function fizzBuzz(max) {
//     let arr = [];
//     for (let i = 0; i < max; i++) {

//         if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
//             arr.push(i);
//         }

//     }
//     return arr;
// }

// console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
// console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]



// Longest Word***********************************************************************
// function longestWord(sentence) {
//     let split = sentence.split(' ');
//     let longWord = '';
//     for (let i = 0; i < split.length; i++) {
//         let word = split[i];
//         if (word.length > longWord.length) {
//             longWord = word;
//         }
//     }
//     return longWord;
// };


// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''



// Abbreviate**********************************************************************
// function abbreviate(word) {
//     let vowels = 'aeiouAEIOU';
//     let newWord = '';
//     for (let i = 0; i < word.length; i++) {
//         let letter = word[i];
//         if (!vowels.includes(letter)) {
//             newWord += letter;
//         }
//     }
//     return newWord;
// }

// console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'



// Product Array****************************************************************
// function productWithReduce(nums) {
//     let product = 1;
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         product *= num;
//     }
//     return product;
// }

// console.log(productWithReduce([10, 3, 5, 2])); // 300
// console.log(productWithReduce([4, 3])); // 12



// Remove Last Vowel***************************************************************
// function removeLastVowel(word) {
//     let vowels = 'aeiouAEIOU';

//     for (let i = word.length - 1; i >= 0; i--) {
//         let letter = word[i];
//         if (vowels.includes(letter)) {
//             return word.slice(0, i) + word.slice(i + 1);
//         }
//     }
//     return word;
// }

// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'



// Abbreviate Words***************************************************************
// function abbreviate(word) {
//     let vowels = 'aeiouAEIOU';
//     let newWord = '';
//     for (let i = 0; i < word.length; i++) {
//         let letter = word[i];
//         if (!vowels.includes(letter)) {
//             newWord += letter;
//         }
//     }
//     return newWord;
// };

// function abbreviateWords(sentence) {
//     let split = sentence.split(' ');
//     let arr = [];
//     for (let i = 0; i < split.length; i++) {
//         let char = split[i];
//         if (char.length > 4) {
//             arr.push(abbreviate(char));
//         } else {
//             arr.push(char);
//         }
//     }
//     return arr.join(' ');
// };

// console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
// console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg



// Contains Word*****************************************************************
// function containsWord(sentence, target) {
//     let split = sentence.split(' ');
//     for (let i = 0; i < split.length; i++) {
//         let word = split[i];
//         if (word.toLowerCase() === target.toLowerCase()) {
//             return true;
//         }
//     }
//     return false;
// }


// console.log(containsWord('sounds like a plan', 'like')); // true
// console.log(containsWord('They are great', 'they')); // true
// console.log(containsWord('caterpillars are great animals', 'cat')); // false
// console.log(containsWord('Cast the net', 'internet')); // false



// Uncompress*********************************************************************
// function uncompress(str) {
//     let word = '';
//     for (let i = 0; i < str.length; i+=2) {
//         let letter = str[i];
//         let num = Number(str[i + 1]);
//         for (let j = 0; j < num; j+=1) {
//             word += letter;
//         }
//     }
//     return word;
// }

// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'



//  Spiral Matrix******************************************************************
// function spiralOrder(matrix) {
//     const result = [];
//     const rowCount = matrix.length;
//     const columnCount = matrix[0].length;
//     let startRow = 0;
//     let endRow = rowCount - 1;
//     let startColumn = 0;
//     let endColumn = columnCount - 1;

//     while (endRow >= startRow && endColumn >= startColumn) {
//       for (let i = startColumn; i <= endColumn; i++) {
//         result.push(matrix[startRow][i]);
//       }
//       startRow++;

//       for (let i = startRow; i <= endRow; i++) {
//         result.push(matrix[i][endColumn]);
//       }
//       endColumn--;
//       if (endRow >= startRow) {
//         for (let i = endColumn; i >= startColumn; i--) {
//           result.push(matrix[endRow][i]);
//         }
//       }
//       endRow--;
//       if (endColumn >= startColumn) {
//         for (let i = endRow; i >= startRow; i--) {
//           result.push(matrix[i][startColumn]);
//         }
//       }
//       startColumn++;
//     }

//     return result;
//     };


// matrix = [[ 1, 2, 3],
//           [ 4, 5, 6],
//           [ 7, 8, 9]]

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

// matrix = [[1, 2, 3, 4],
//           [5, 6, 7, 8],
//           [9,10,11,12]]


// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]



// Yeller For Each********************************************************************************************************************
// function yeller(words) {
//     let arr = [];
//     words.forEach(function(word) {
//         arr.push(word.toUpperCase().concat('!'));
//     })
//     return arr;
// }

// console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
// console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]



// Choosey Endings********************************************************************************************************************
// let chooseyEndings = function(words, suffix) {
//     if (!Array.isArray(words)) {
//       return [];
//     }

//     let filteredWords = [];

//     for (let i = 0; i < words.length; i++) {
//       let word = words[i];
//       if (word.endsWith(suffix)) {
//         filteredWords.push(word);
//       }
//     }

//     return filteredWords;
//   };


// console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// // [ 'family', 'fly', 'timidly' ]

// console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// // [ 'hound', 'bond' ]

// console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// // [ 'simplicity', 'felicity' ]

// console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// // [ ]

// console.log(chooseyEndings(17, 'ily'));
// // [ ]
