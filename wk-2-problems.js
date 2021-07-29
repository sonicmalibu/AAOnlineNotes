// Sum For Each**********************************************************************************
// function sumForEach(arr) {
//     let sum = 0;
//     arr.forEach(function(num) {
//         sum += num;
//     })
//     return sum;
// }


// console.log(sumForEach([4, 3, -1, 10])); // 16
// console.log(sumForEach([6, 7, 2])); // 15
// console.log(sumForEach([])); // 0



// Average Value For Each*********************************************************************************************
// function avgVal(arr) {
//     let sum = 0;
//     arr.forEach(function(num) {
//         sum += num;
//     });
//     let average = sum / arr.length;
//     if (arr.length === 0) {
//         return null;
//     }
//     return average;
// }

// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null


// Tripler Map*******************************************************************************************
// function tripler(nums) {
//     let multiplied = nums.map(function(num) {
//         return num * 3;
//     });
//     return multiplied;
// }

// console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]



// Long Words Filter*****************************************************************************************
// function longWords(words) {
//     let filtered = words.filter(function(ele) {
//             return ele.length > 5;
//     });
//     return filtered;
// }

// console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
// console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]



// Remove 'e' words filter****************************************************************************************
// function removeEWords(sentence) {
//     let str = sentence.split(' ');
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         let letter = str[i];
//         if (!letter.toLowerCase().includes('e')) {
//             arr.push(letter);
//         }
//     }
//     return arr.join(' ');
// }

// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// console.log(removeEWords('Enter the building')); // 'building'



// Choosey (unique) Ending Filter*********************************************************************************************
// function chooseyEndings(arr, suffix) {
//    if (!Array.isArray(arr)) {
//        return [];
//    }
//         return arr.filter(function(ele) {
//        return ele.endsWith(suffix);
//    })
// }

// console.log(chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'ly'));
// // [ 'family', 'fly', 'timidly' ]

// console.log(chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'nd'));
// // [ 'hound', 'bond' ]

// console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// // [ 'simplicity', 'felicity' ]

// console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// // [ ]

// console.log(chooseyEndings(17, 'ily'));
// // [ ]


// sum reduce***************************************************************************************
// function sumWithReduce(nums) {
//     let sum = nums.reduce(function(accum, ele) {
//         return accum + ele;
//     }, 0);
//     return sum;
// }

// console.log(sumWithReduce([10, 3, 5, 2])); // 20
// console.log(sumWithReduce([])); // 0



// Max Reduce****************************************************************************************
// function maxWithReduce(nums) {
//     let max = nums.reduce(function(accum, ele) {
//             if (ele > accum) {
//                 return ele;
//             } else {
//                 return accum;
//             }
//     });
//     return max;
// }

// console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
// console.log(maxWithReduce([-2, -3, -7, 3])); // 3



// Product Reduce*********************************************************************************
// function productWithReduce(nums) {
//     let total = nums.reduce(function(accum, ele) {
//         return accum * ele;
//     });
//     return total;
// }

// console.log(productWithReduce([10, 3, 5, 2])); // 300
// console.log(productWithReduce([4, 3])); // 12



// Snake To Camel Map******************************************************************************
// function snakeToCamel(str) {
//     let newStr = str.toLowerCase().split('_');
//     let cap = newStr.map(function(letter) {
//         for (let i = 0; i < letter.length; i++) {
//             let index = letter[i].toUpperCase();
//             return index.concat(letter.slice(1));


//         }
//     })
//     return cap.join('');
// }

// console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
// console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
// console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
// console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'



// Yeller Map*****************************************************************************************
// function yeller(words) {
    // let arr = [];
    //     for (let i = 0; i < words.length; i++) {
    //         let lol = words[i].toUpperCase() + '!';
    //         arr.push(lol);

    //     }
    //     return arr;

//     let arr = [];
//     words.map(function(word) {
//             let uppercasedWord = word.toUpperCase() + '!';
//             arr.push(uppercasedWord);
//     });
//     return arr;
// }

// console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
// console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]



// Has Three Vowels*****************************************************************
// function hasThreeVowels(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let string = vowels.reduce(function(accum, letter) {
//         if (str.includes(letter)) {
//             accum++
//         }
//         return accum;
//     }, 0);
//     return string >= 3;
// }

// console.log(hasThreeVowels('delicious'));       //  true
// console.log(hasThreeVowels('bootcamp prep'));   //  true
// console.log(hasThreeVowels('bootcamp'));        //  false
// console.log(hasThreeVowels('dog'));             //  false
// console.log(hasThreeVowels('go home'));         //  false



// Longest Word For Each***************************************************************************
// function longestWord(sentence) {
//     let sent = sentence.split(' ');
//     let longWord = '';
//     let newSent = sent.forEach(function (word) {
//             if (word.length > longWord.length) {
//                 longWord = word;
//             }
//     });
//     return longWord;
// }

// console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// console.log(longestWord('')); // ''


//  Unique For Each******************************************************************************************
// function unique(arr) {
//     let array = [];
//     arr.forEach(function(word) {
//             if (!array.includes(word)) {
//                 array.push(word);
//             }
//     })
//     return array;

// }

// console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
// console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
// console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']


// Shortest Word For Each************************************************************************************
// function shortestWord(sentence) {
//         let newSent = sentence.split(' ');
//         let shortestWord = '   ';
//         //newSent[0];
//         newSent.forEach(function(word) {
//             if (word.length <= shortestWord.length) {
//                 shortestWord = word;
//             }
//         });
//         return shortestWord;
// }

// console.log(shortestWord('what a wonderful life'));     // 'a'
// console.log(shortestWord('the quick brown fox jumps')); // 'fox'
// console.log(shortestWord('do what you enjoy'));         // 'do'



// Choose Prime For Each Helper Function************************************************************************************
//  let isPrime = function(num) {
//      if (num < 2) {
//          return false;
//          }
//          for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//      }
//      return true;
//     }

// let choosePrimes = function(nums) {
//     let arr = [];
//     nums.forEach(function(num) {
//         if (isPrime(num)) {
//             arr.push(num);
//         }
//     })
//     return arr;
// }

// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]


// Hipsterfy******************************************************************************************
// function hipsterfy(sentence) {

// }

// console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
