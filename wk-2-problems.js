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


// Hipsterfy Remove Last Vowel Helper Function******************************************************************************************
// let removeLastVowel = function(word) {
//     let vowels = 'aeiouAEIOU';

//     for (let i = word.length - 1; i >= 0; i--) {
//         let letter = word[i];
//         if (vowels.includes(letter)) {
//             return word.slice(0, i) + word.slice(i + 1);
//         }
//     }
//     return word;
// }

// let hipsterfy = function(sentence) {
//     let arr = [];
//     let sent = sentence.split(' ');
//     sent.forEach(function(letter) {
//         arr.push(removeLastVowel(letter));
//     })
//     return arr.join(' ');
// }



// console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'



//Repeating Translate*******************************************************************************
// let translatedWord = function(word) {
//     let vowels = 'aeiouAEIOU';
//     let lastLetter = word[word.length - 1];
//     if (vowels.includes(lastLetter)) {
//         return word + word;
//     }
//     for (let i = word.length - 1; i >= 0; i--) {
//         if (vowels.includes(word[i])) {
//             return word + word.slice(i);
//         }
//     }
// }
// let repeatingTranslate = function(sentence) {
//     let words = sentence.split(' ');
//     let newWords = words.map(function(word) {
//         if (word.length < 3) {
//             return word;
//         } else {
//             return translatedWord(word);
//         }
//     })
//     return newWords.join(' ');
// }

// console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"



// Two Dimensional Product For Each***********************************************************************************************************************
// function twoDimensionalProduct(arr) {
//     let product = 1;
//     arr.forEach(function(subArr) {
//         subArr.forEach(function(num) {
//             product *= num;
//         })
//     })
//     return product;
// }

// let arr1 = [
//     [6, 4],
//     [5],
//     [3, 1]
//   ];
//   console.log(twoDimensionalProduct(arr1)); // 360

//   let arr2 = [
//     [11, 4],
//     [2]
//   ];
//   console.log(twoDimensionalProduct(arr2)); // 88



// Cat Builder***************************************************************************************
// function catBuilder(name, color, toys) {
//     let cat = {
//         name: name,
//         color: color,
//         toys: toys,
//     };
//     return cat;
// }

// console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
// // prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

// console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
// // prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }


// Iterate Through Obj***********************************************************************************
// function printObject(obj) {
//     for (const [key, value] of Object.entries(obj)) {
//         console.log(`${key} - ${value}`);
//     }
// }

// let bootcamp = {
//     name: "App Academy",
//     color: "Red",
//     population: 120
//   };

//   printObject(bootcamp); // prints
//   // name - App Academy
//   // color - Red
//   // population - 120



// Keys In Objects*********************************************************************************************
// function keysInObject(obj) {
//     return Object.keys(obj);
// }

// let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
// let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
// console.log(keysInObject(animals)); // => ["dog", "cat", "bison"]
// console.log(keysInObject(foods)); // => ["apple", "lemon", "mango"]


// Values In Objects******************************************************************************************
// function valuesInObject(obj) {
//     return Object.values(obj);
// }

// let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
// let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
// console.log(valuesInObject(animals)); // => ["Wolfie", "Jet", "Bilbo"]
// console.log(valuesInObject(foods)); // => ["tart", "sour", "sweet"]



// Set Key In Objects***************************************************************************************
// function setKeyInObject(obj, str, value) {
//     let key = str;
//     obj[key] = value;
//     return obj;
// }

// let obj = {}
// console.log(setKeyInObject(obj, "apple", "yum")); // => {apple: "yum"}

// let obj1 = {str: "hello"}
// console.log(setKeyInObject(obj1, "num", 3)); // => {str: "hello", num: 3}



// Get Full Name*********************************************************************************************
// function getFullName(person) {
//     let name = person.firstName.concat(' ').concat(person.lastName);
//     return name;
// }

// let p1 = {firstName: 'John', lastName: 'Doe'};
// console.log(getFullName(p1)); // => 'John Doe'
// let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
// console.log(getFullName(p2)); // => 'Charlie Brown'


// Does Key Exist**********************************************************************************************
// function doesKeyExist(obj, key) {
//     if (obj[key]) {
//         return true;
//     }
//     return false;
// }

// let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
// console.log(doesKeyExist(obj1, 'course')); // => true
// console.log(doesKeyExist(obj1, 'name')); // => false



// Key In Object Array*******************************************************************************************
// function keyInObjectArray(objArray, keyString) {
//     let res = false;
//     objArray.forEach(function(key) {
//         if (key[keyString]) {
//             res = true;
//         }
//     })
//     return res;
// }


// let objArray = [
//     { name: "Rupert" },
//     { age: 42 },
//     { planet: "Earth", system: "Milky Way" }
//   ];

//   console.log(keyInObjectArray(objArray, 'planet')); // => true
//   console.log(keyInObjectArray(objArray, 'age')); // => true
//   console.log(keyInObjectArray(objArray, 'food')); // => false
//   console.log(keyInObjectArray(objArray, 'animal')); // => false


// Break Down Objects********************************************************************************************
// function breakDownObj(obj) {
//     let key = Object.keys(obj);
//     let value = Object.values(obj);
//     return [...key, ... value];
// }

// let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
// console.log(breakDownObj(object1)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

// let object2 = {location: 'NY', borough: 'Brooklyn'};
// console.log(breakDownObj(object2)); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]



// Value Pair***********************************************************************************************
// function valuePair(obj1, obj2, key) {
//     let arr = [obj1[key], obj2[key]];
//     return arr;
// }

// let object1 = {name: 'One', location: 'NY', age: 3};
// let object2 = {name: 'Two', location: 'SF'};
// console.log(valuePair(object1, object2, 'location')); // => [ 'NY', 'SF' ]
// console.log(valuePair(object1, object2, 'name')); // => [ 'One', 'Two' ]



// Apple Counter****************************************************************************************
// function appleCounter(appleObj) {
//     let counter = 0;
//     for (let key in appleObj) {
//         key = key.toLowerCase();
//         if (key.indexOf('apple') > -1) {
//             counter += 1;
//         }
//     }
//     return counter;
// }

// let obj = { banana: "yay!" };
// console.log(appleCounter(obj)); // => 0

// let obj1 = { crabapple: "yum!" };
// console.log(appleCounter(obj1)); // => 1

// let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
// console.log(appleCounter(obj2)); // => 2


// let obj3 = {
//   crabApple: "yum!",
//   honeyApple: "super yum",
//   banana: "yay",
//   bigapple: "NYC"
// };
// console.log(appleCounter(obj3)); // => 3



// Rest Sum****************************************************************************************************
// function restSum(...num) {
//     let sum = 0;
//     num.forEach(function(ele) {
//         sum += ele;
//     })
//     return sum;
// }

// console.log(restSum(3,5,6)); // => 14
// console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
// console.log(restSum(0)); // => 0


// Spread It Out**************************************************************************************************************
// function spreadItOut(arr1, arr2) {
//     let newArr = [...arr1, ...arr2];
//     return newArr;

// }

// console.log(spreadItOut([3,5,6], [1,2,3])); // => [3,5,6,1,2,3];
// console.log(spreadItOut([], [1,2,3])); // => [1,2,3];
// console.log(spreadItOut(["apple", "banana"], [1,2,3])); // => ["apple", "banana", 1, 2, 3];


// Array Converter***************************************************************************************************************
// function arrayConverter(array) {
//     let obj = {};
//     array.forEach(function(key) {
//         if (obj[key] === undefined) {
//             obj[key] = 1;
//         } else {
//             obj[key] += 1;
//         }
//     })
//     return obj;
// }

// console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
// console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
// console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}


// String Converter****************************************************************************************************************
// function stringConverter(string) {
//     let obj = {};
//     for (let i = 0; i < string.length; i++) {
//         let char = string[i];
//         if (obj[char] === undefined) {
//             obj[char] = 1;
//         } else {
//             obj[char] += 1;
//         }
//     }
//     return obj;
// }

// console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
// console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
// console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}



// Count Scores*************************************************************************************************************************
// function countScores(people) {
//     let obj = {};
//     people.forEach(function(person) {
//         if (obj[person.name]) {
//             obj[person.name] += person.score;
//         } else {
//             obj[person.name] = person.score;
//         }
//     })
//     return obj;
// }

// let ppl = [{name: "Anthony", score: 10},
//             {name: "Fred", score : 10},
//             {name: "Anthony", score: -8},
//             {name: "Winnie", score: 12}];

// console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

// // Example 2:
// let peeps = [
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2}
// ];
// console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }



// My For Each************************************************************************************************************
// function myForEach(array, cb) {
//     array.forEach(function(ele, i, array) {
//         cb(ele, i, array);
//     });
// }

// myForEach(['a', 'b', 'c'], function (el, i) {
//     console.log(el + ' is at index ' + i);
// }); // prints
// // a is at index 0
// // b is at index 1
// // c is at index 2

// let test = [];
// myForEach(['laika', 'belka'], function (el) {
//     test.push(el.toUpperCase());
// });
// console.log(test); // ['LAIKA', 'BELKA']



// My Map************************************************************************************************************************
// function myMap(array, cb) {
//     let arr = [];
//     array.forEach(function(ele) {
//         arr.push(cb(ele));
//     })
//     return arr;
// }

// let result1 = myMap([100, 25, 81, 64], Math.sqrt);
// console.log(result1);   // [ 10, 5, 9, 8 ]

// let result2 = myMap(['run', 'Forrest'], function (el) {
//     return el.toUpperCase() + '!';
// });
// console.log(result2);   // [ 'RUN!', 'FORREST!' ]



// Multi-Map***************************************************************************************************************
// function multiMap(val, n, cb) {
//     for (let i = 0; i < n; i++) {
//         val = cb(val);
//     }
//     return val;
// }

// let result1 = multiMap(7, 2, function(n) {
//     return n * 10;
//   });
//   console.log(result1); // 700

//   let result2 = multiMap(7, 3, function(n) {
//       return n * 10;
//   });
//   console.log(result2); // 7000

//   let result3 = multiMap("hi", 5, function(s) {
//     return s + "!";
//   });
//   console.log(result3); // hi!!!!!



// My Filter*************************************************************************************************************************
// function myFilter(array, cb) {
//     let arr = [];
//     array.forEach(function(ele) {
//         if (cb(ele)) {
//             arr.push(ele);
//         }
//     })
//     return arr;
// }

// let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
//     return n % 2 === 0;
// });
// console.log(result1);       // [ 4, 8 ]

// let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
//     return s.length > 3;
// });
// console.log(result2);      // ['choose', 'words', 'only']



// Selective Map*********************************************************************************************************************
// function selectiveMap(array, cb1, cb2) {
//     let arr = [];
//     array.forEach(function(ele) {
//         if (cb1(ele)) {
//             arr.push(cb2(ele));
//         } else {
//             arr.push(ele);
//         }
//     })
//     return arr;
// }

// function isEven(n) {
//     return n % 2 === 0;
// }

// function isPositive(n) {
//     return n > 0;
// }

// function square(n) {
//     return n * n;
// }

// function flipSign(n) {
//     return n * -1;
// }

// console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// // [ 64, 5, 100, 16 ]

// console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// // [ 10, -4, 7, -6, 2, -9 ]

// console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// // [-10, 16, 49, 36, -2, -9]



// Reject**************************************************************************************************************************
// function reject(array, cb) {
//     let arr = [];
//     array.forEach(function(ele) {
//         if (cb(ele) === false) {
//             arr.push(ele);
//         }
//     })
//     return arr;
// }

// let isEven = function(n) {
//     return n % 2 === 0;
// };
// console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

// let hasA = function(s) {
//     return s.toLowerCase().includes('a');
// };
// console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]



// My Some*************************************************************************************************************************
// function mySome(array, cb) {
//     for (let i = 0; i < array.length; i++) {
//         let ele = array[i];


//         if (cb(ele, i)) {
//             return true;
//         }
//     }
//     return false;

// }


// let result1 = mySome([5, 1, 7, 9], function (ele, i) {
//     return ele === i;
// });
// console.log(result1);   // true

// let result2 = mySome([5, 3, 7, 9], function (ele, i) {
//     return ele === i;
// });
// console.log(result2);   // false

// let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function (ele) {
//     return ele.length === 4;
// });
// console.log(result3);   // true



// Count**********************************************************************************************************************
// function count(array, cb) {
//     let counter = 0;
//     array.forEach(function(num) {
//         if (cb(num)) {
//             counter++;
//         }
//     })
//     return counter;
// }

// let result1 = count([18, 5, 32, 7, 100], function (n) {
//     return n % 2 === 0;
// });
// console.log(result1); // 3

// let result2 = count([17, 5, 31, 7, 100], function (n) {
//     return n % 2 === 0;
// });
// console.log(result2); // 1

// let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
//     return str.includes('o');
// });
// console.log(result3); // 3

// let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
//     return str.includes('x');
// });
// console.log(result4); // 0



// Chain Map***************************************************************************************************************
// function chainMap(val, ...cb) {
//     cb.forEach(function(cb) {
//         val = cb(val);
//     })
//     return val;
// }

// let add5 = function(n) {
//     return n + 5;
// };

// let half = function(n) {
//     return n / 2;
// };

// let square = function(n) {
//     return n * n;
// };

// console.log(chainMap(25, add5));                // 30
// console.log(chainMap(25, add5, half));          // 15
// console.log(chainMap(25, add5, half, square));  // 225
// console.log(chainMap(4, square, half));         // 8
// console.log(chainMap(4, half, square));         // 4



// My Every**************************************************************************************************************************
// function myEvery(array, cb) {
//     for (let i = 0; i < array.length; i++) {
//         let ele = array[i];
//         if (cb(ele) === false) {
//             return false;
//         }
//     }
//     return true;
// }

// let isEven = function (num) {
//     return num % 2 === 0;
// };

// let hasO = function(string) {
//     return string.includes('o');
// };

// console.log(myEvery([4, 8, 6, 10], isEven));            // true
// console.log(myEvery([4, 7, 6, 10], isEven));            // false
// console.log(myEvery(['book', 'door'], hasO));           // true
// console.log(myEvery(['book', 'door', 'pen'], hasO));    // false



// And Select****************************************************************************************************************************
// function andSelect(array, cb1, cb2) {
//     let arr = [];
//     array.forEach(function(ele) {
//         if (cb1(ele) && cb2(ele)) {
//             arr.push(ele);
//         }
//     })
//     return arr;
// }

// let isEven = function (n) {
//     return n % 2 === 0;
// };

// let isPositive = function (n) {
//     return n > 0;
// };

// console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// // [ 8, 6, 12 ]

// let isUpperCase = function (s) {
//     return s === s.toUpperCase();
// };

// let startsWithA = function (s) {
//     return s[0].toUpperCase() === 'A';
// }
// console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]



// Exactly******************************************************************************************************************
// function exactly(array, num, cb) {
//     let counter = 0;
//     array.forEach(function(ele) {
//         if (cb(ele)) {
//             counter++;
//         }
//     })
//     return counter === num;
// }

// let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
//     return n % 2 === 0;
// });
// console.log(result1); // true

// let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
//     return n % 2 === 0;
// });
// console.log(result2); // false

// let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
//     return str.includes('x');
// });
// console.log(result3); // false

// let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
//     return str.includes('x');
// });
// console.log(result4); // true



// Min-Value Callback***************************************************************************************************************
// function minValueCallback(arr, cb) {
//     let min = null;
//     arr.forEach(function(num) {
//         if (num <= min || min === null) {
//             min = num;
//         }
//     })
//     if (cb === undefined) {
//         return min;
//     } else {
//         return cb(min);
//     }

// }

// console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
// console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3



// Map Mutator********************************************************************************************************************
// function mapMutator(array, cb) {
//     for (let i = 0; i < array.length; i++) {
//       array[i] = cb(array[i], i, array);
//     }
//   }


// let arr1 = [4, 2, 6, 5];
// mapMutator(arr1, function (el) {
//     return el * 2;
// });
// console.log(arr1);  // [ 8, 4, 12, 10 ]

// let arr2 = [8, 9, 10];
// mapMutator(arr2, function (el, i) {
//     return el * i;
// });
// console.log(arr2); // [ 0, 9, 20 ]



// Sentence Mapper******************************************************************************************************************
// function sentenceMapper(sentence, cb) {
//     // let wrds = sentence.split(' ');
//     // return wrds.map(cb).join(' ');
//     return sentence.split(' ').map(cb).join(' ');
// }

// let result1 = sentenceMapper("what is the answer?", function(word) {
//     return word.toUpperCase() + "!";
// });
// console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

// let removeVowels = function(word) {
//     let newWord = "";
//     for (let i = 0; i < word.length; i++) {
//         let char = word[i];
//         if (!"aeiou".includes(char)) {
//             newWord += char;
//         }
//     }
//     return newWord;
// };

// let result2 = sentenceMapper("this is pretty cool right", removeVowels);
// console.log(result2); // 'ths s prtty cl rght'



// Suffix Cipher************************************************************************************************************************
// function suffixCipher(sentence, cipher) {
//     let split = sentence.split(' ');
//     let newWords = split.map(function(word) {
//         for (let suffix in cipher) {
//             if (word.endsWith(suffix)) {
//                 let cb = cipher[suffix];
//                 return cb(word);
//             }
//         }
//         return word;
//     })
//     return newWords.join(' ');
// }

// let cipher1 = {
//     ly: function(word) {
//         return word.slice(0, -1) + 'ee';
//     },
//     ize: function(word) {
//         return word + 'r';
//     }
// };
// console.log(suffixCipher('quietly and gently visualize', cipher1));
// // quietlee and gentlee visualizer

// let cipher2 = {
//     tal: function(word) {
//         return word.toUpperCase();
//     },
//     s: function(word) {
//         return word + 'th';
//     }
// };
// console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// // INCREMENTAL progressth isth very INSTRUMENTAL



// XOR Select*****************************************************************************************************************
// let xorSelect = function(array, cb1, cb2) {
//     let selected = array.filter(function(el) {
//       return (cb1(el) || cb2(el)) && !(cb1(el) && cb2(el));
//     });
//     return selected;
//   };

//   let isEven = function(n) {
//     return n % 2 === 0;
//   };

//   let isPositive = function(n) {
//     return n > 0;
//   };

//   console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
//   // [ -2, 1, 3 ]


//   let longString = function(s) {
//     return s.length > 4;
//   };

//   let startsA = function(s) {
//     return s[0] === "a";
//   };

//   console.log(
//     xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
//   );
//   // [ 'art', 'app', 'buttery' ]



// One*****************************************************************************************************************************

// function one(array, cb) {
//     let count = 0;
//     array.forEach(function(el, i) {
//       if (cb(el, i, array) === true) {
//         count++;
//       }
//     });
//     return count === 1;
//   }

//   let result1 = one(['x', 'y', 'z'], function(el) {
//     return el === 'a';
// });
// console.log(result1);   // false

// let result2 = one(['x', 'a', 'y', 'z'], function(el) {
//     return el === 'a';
// });
// console.log(result2);   // true

// let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
//     return el === 'a';
// });
// console.log(result3);   // false

// let result4 = one(['apple', 'dog'], function(el) {
//     return el.length > 3;
// });
// console.log(result4);   // true

// let result5 = one(['apple', 'dog', 'pear'], function(el) {
//     return el.length > 3;
// });
// console.log(result5);   // false

// let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
//     return el.length === idx;
// });
// console.log(result6);   // true



// Greater Callback Value********************************************************************************************************
// function greaterCallbackValue(val, cb1, cb2) {
//     let res1 = cb1(val);
//     let res2 = cb2(val);

//     if (res1 > res2) {
//         return res1;
//     } else {
//         return res2;
//     }
// }


// let doubler = function (n) {
//     return 2 * n;
// }

// let squarer = function (n) {
//     return n * n;
// }

// console.log(greaterCallbackValue(5, doubler, squarer));     // 25
// console.log(greaterCallbackValue(1, doubler, squarer));     // 2
// console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18



// None*************************************************************************************************************************
// function none(array, cb) {
//     let res = true;
//     array.forEach(function(ele) {
//         if (cb(ele) === true) {
//                 res = false;
//         }
//     })
//     return res;
// }

// let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
//     return w.includes('e');
// });
// console.log(result1);   // true

// let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
//     return w.includes('e');
// });
// console.log(result2);   // false

// let result3 = none([4, 5, 7, 1], function(n) {
//     return n < 0;
// });
// console.log(result3);   // true

// let result4 = none([4, -5, 7, -1], function(n) {
//     return n < 0;
// });
// console.log(result4);   // false


// At Most***************************************************************************************************************************
// function atMost(array, max, cb) {
//     let counter = 0;
//     array.forEach(function(ele) {
//         if (cb(ele)) {
//             counter++
//         }
//     })
//     return counter <= max;
// }

// let isPositive = function (n) {
//     return n > 0;
// };
// let startsWithA = function (s) {
//     return s[0].toUpperCase() === 'A';
// };

// console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
// console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
// console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
// console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
// console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
// console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false



// First Index*****************************************************************************************************************
// function firstIndex(array, cb) {
//     for (let i = 0; i < array.length; i++) {
//         let ele = array[i];
//         if (cb(ele)) {
//             return i;
//         }
//     }
//     return -1;
// }

// let result1 = firstIndex([3, 7, 8, 10], function (n) {
//     return n % 2 === 0;
// });
// console.log(result1); // 2

// let result2 = firstIndex(['dog', 'cat', 'tree'], function (s) {
//     return s.length === 3;
// });
// console.log(result2); // 0

// let result3 = firstIndex(['canine', 'feline', 'tree'], function (s) {
//     return s.length === 3;
// });
// console.log(result3); // -1



// Alternating Map***********************************************************************************************************
// function alternatingMap(array, cb1, cb2) {
//     let arr = [];
//     array.forEach(function(ele, i, _array) {
//         if (i % 2 === 0) {
//                 arr.push(cb1(ele));
//         } else {
//             arr.push(cb2(ele));
//         }
//     })
//     return arr;
// }


// let triple = function (n) {
//     return 3 * n;
// };

// let half = function (n) {
//     return n / 2;
// };
// console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// // [ 21, 1.5, 6, 4.5, 24 ]


// let yell = function (s) {
//     return s.toUpperCase() + '!';
// };

// let whisper = function (s) {
//     return '..' + s.toLowerCase() + '..';
// };
// console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// // [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]



// My Simple Reduce*****************************************************************************************************************
// function mySimpleReduce(array, cb) {
//     accum = array[0];
//     let sliced = array.slice(1);
//     sliced.forEach(function(ele) {
//         accum = cb(accum, ele);
//     })
//     return accum;
// }

// let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
//     return sum + el;
// });
// console.log(result1); // 14

// let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
//     return product * el;
// });
// console.log(result2); // 48

// let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
//     if (el > max) {
//         return el;
//     } else {
//         return max;
//     }
// });
// console.log(result3); // 8

//*******************

// function mySimpleReduce(array, cb, initial) {
//     let sliced;

//     if (initial === undefined) {
//         accum = array[0];
//         sliced = array.slice(1);
//     } else {
//         accum = initial;
//         sliced = array;
//     }


//     sliced.forEach(function (ele) {
//         accum = cb(accum, ele);
//     })
//     return accum;
// }

// let result1 = mySimpleReduce([5, 3, 2, 4], function (sum, el, ) {
//     return sum + el;
// });
// console.log(result1); // 14

// let result2 = mySimpleReduce([4, 6, 2], function (product, el) {
//     return product * el;
// });
// console.log(result2); // 48

// let result3 = mySimpleReduce([4, 6, 2, 8, 3], function (max, el) {
//     if (el > max) {
//         return el;
//     } else {
//         return max;
//     }
// });
// console.log(result3); // 8



// Arrow Additive***********************************************************************************

// let addFive = num => num + 5;

// let result1 = addFive(0); // returns 5
// let result2 = addFive(10); // returns 15
// let result3 = addFive(37); // returns 42
// console.log(result1);
// console.log(result2);
// console.log(result3);



// Arrow Full Name******************************************************************************

// let arrowGetFullName = person => person.firstName + " " + person.lastName;

// let p1 = {firstName: 'John', lastName: 'Doe'};
// console.log(arrowGetFullName(p1)); // => 'John Doe'
// let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
// console.log(arrowGetFullName(p2)); // => 'Charlie Brown'



// Arrow My Map*****************************************************************************

// let arrowMyMap = (array, cb) => {
//     let mapped = [];

//     array.forEach(el => mapped.push(cb(el)));
//     return mapped;
//   };

//   let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
// console.log(result1);   // [ 10, 5, 9, 8 ]

// const yell = el => el.toUpperCase() + '!'

// let result2 = arrowMyMap(['run', 'Forrest'], yell);
// console.log(result2);   // [ 'RUN!', 'FORREST!' ]



// Arrow Rest Sum******************************************************************************************

// let arrowRestSum = (...otherNums) => {
//     let sum = otherNums.reduce((acc, el) => (acc += el));
//     return sum;
//   };


// console.log(arrowRestSum(3,5,6)); // => 14
// console.log(arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
// console.log(arrowRestSum(0)); // => 0



// Arrow Average Value*******************************************************************************
// let arrowAvgValue = array => {
//     let sum = array.reduce((el, sum = 0) => (sum += el));

//     let avg = sum / array.length;
//     return avg;
//   };

// console.log(arrowAvgValue([10, 20])); // => 15
// console.log(arrowAvgValue([2, 3, 7])); // => 4
// console.log(arrowAvgValue([100, 60, 64])); // => 74.66666666666667



// Arrow Mirror Array*****************************************************************************
// const mirrorArray = (array) => {
//     let arr = [];

//     for (let i = 0; i < array.length; i += 1) {
//       let el = array[i];
//       arr.push(el);
//     }

//     for (let i = array.length - 1; i >= 0; i -= 1) {
//       let el = array[i];
//       arr.push(el);
//     }

//     return arr;
//   };

// console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]



// Closure Sandwiches*****************************************************************************
// function sandwichMaker() {
//     let order = "One sandwich with tomato";

//     return function (food) {
//       order = order + " and " + food;
//       return order;
//     };
//   }

// let sandwich = sandwichMaker(); // => returns a function
// console.log(sandwich("spinach")) // => "One sandwich with tomato and spinach"
// console.log(sandwich("jelly")) // => "One sandwich with tomato and spinach and jelly"
// console.log(sandwich("bread")) // => "One sandwich with tomato and spinach and jelly and bread"

// // Another Sandwich:
// let sandwich2 = sandwichMaker(); // => returns a function
// console.log(sandwich2("pb")) // => "One sandwich with tomato and pb"



// Set Time Out******************************************************************************************
// function funcTimer(time, func) {
//     setTimeout(func, time);
//   }

// function partyFunc () {
//     console.log("Party time!")
//   }

//   funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"


// Hidden Counter*************************************************************************************************

// function hiddenCounter() {
//     let count = 0;
//     return () => (count += 1);
//   }

// let hidden1 = hiddenCounter(); //returns a function
// console.log(hidden1()); // returns 1
// console.log(hidden1()); // returns 2

// let hidden2 = hiddenCounter(); // returns a function
// console.log(hidden2()); // returns 1



// Interupter*******************************************************************************************
// function interrupter(interruptingWord) {
//     return function (sentence) {
//       let words = sentence.split(" ");
//       let newString = "";

//       for (let index = 0; index < words.length; index++) {
//         let word = words[index];
//         if (index === words.length - 1) {
//           newString += word;
//         } else {
//           newString += word + " " + interruptingWord + " ";
//         }
//       }

//       return newString;
//     };
//   }

// let rudePerson = interrupter("what"); // => returns a function
// console.log(rudePerson("how are you")); // prints "how what are what you"
// console.log(rudePerson("I like pie")); // prints "I what like what pie"


// // Invoking the interrupter function again:
// let rudePerson2 = interrupter("yo"); // => returns a function
// console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


// Count Down****************************************************************************************
// function countDownTimer(num) {
//     if (num === 0) return "Happy New Year!";
//     const _count = () => {
//       num -= 1;
//       if (num <= 0) {
//         return "Happy New Year!";
//       } else {
//         return _count;
//       }
//     };
//     return _count;
//   }

// //   Example 1:
//   console.log(countDownTimer(0)); // prints "Happy New Year!"

// // Example 3:
//   let oneDay = countDownTimer(1); // returns a function
//   console.log(oneDay()); // prints "Happy New Year!"

// // Example 3:
//   let twoDays = countDownTimer(2); // returns a function
//   console.log(twoDays()); // returns a function
//   console.log(twoDays()); // prints "Happy New Year!"

// // Example 4:
//   let threeDays = countDownTimer(3); // returns a function
//   console.log(threeDays()); // returns a function
//   console.log(threeDays()); // returns a function
//   console.log(threeDays()); // prints "Happy New Year!"



// Lazy Adder*******************************************************************************************
// function lazyAdder(firstNum) {
//     return function (secondNum) {
//       return function (thirdNum) {
//         return firstNum + secondNum + thirdNum;
//       };
//     };
//   }


// //   Example 1:
// let firstAdd = lazyAdder(1);
// let secondAdd = firstAdd(2);
// let sum = secondAdd(3);
// console.log(sum); // prints 6

// // Example 2:
// let func1 = lazyAdder(10);
// let func2 = func1(20);
// let total = func2(3);
// console.log(total); // prints 33



// Volume**************************************************************************************
// function recVolume(height) {
//     let dimensions = [height];
//     const _measure = (num) => {
//       if (dimensions.length < 3) {
//         dimensions.push(num);
//       }
//       if (dimensions.length === 3) {
//         let sum = dimensions.reduce((acc, el) => (acc *= el));
//         return sum;
//       } else {
//         return _measure;
//       }
//     };
//     return _measure;
//   }

//   let table1 = recVolume(5); // returns a function
//   table1(4); // returns a function
//   console.log(table1(3)); // prints 60
//   console.log(table1(145)); // STILL prints 60

// //   Example 3:
//   let table2 = recVolume(3); // returns a function
//   table2(2); // returns a function
//   console.log(table2(1)); // prints 6
//   console.log(table2(75)); // STILL prints 6




// Dynamic Divide***********************************************************************************
// function dynamicDivide(divisor) {
//     return function (dividend) {
//       return dividend / divisor;
//     };
//   }

//   const halfer = dynamicDivide(2); // returns a function
// console.log(halfer(20)); // returns 10

// const divideByThree = dynamicDivide(3);
// console.log(divideByThree(30)); // returns 10

// const  divideByFive = dynamicDivide(5);
// console.log(divideByFive(50)); // returns 10



// Smoothie Machine********************************************************************************************
// let smoothieMachine = (...ingredients) => {
//     return function (...moreIngredients) {
//       ingredients = ingredients.concat(moreIngredients);

//       return "I'm having a smoothie with " + ingredients.join(" and ");
//     }
//   };

//   let smoothie1 = smoothieMachine();

// console.log(smoothie1("milk"));
// // prints "I'm having a smoothie with milk"
// console.log(smoothie1("kale", "spinach"));
// // prints "I'm having a smoothie with milk and kale and spinach"
// console.log(smoothie1("honey", "pears", "berries"));
// // prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

// let smoothie2 = smoothieMachine("apples", "bananas", "berries");
// console.log(smoothie2("pineapple"));
// // prints "I'm having a smoothie with apples and bananas and berries and pineapple"



// Closure Dynamic****************************************************************************
// function dynamicMultiply(num) {
//     let multiplier = num;

//     return function(factor) {
//       return multiplier * factor;
//     };
//   }

// const doubler = dynamicMultiply(2); // returns a functions
// console.log(doubler(5)); // returns 10

// const tripler = dynamicMultiply(3);
// console.log(tripler(5)); // returns 15

// const multiplyByFive = dynamicMultiply(5);
// console.log(multiplyByFive(5)); // returns 25




// Coupon******************************************************************************************
// function coupon(discount) {
//     return (prices) => {
//       return prices.map((price) => (price -= price * discount));
//     };
//   }

//   let tenPercent = coupon(0.1);
//   console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]

// //   Example 2:
//   let twentyPercent = coupon(0.2);
//   console.log(twentyPercent([10, 20, 30])); // [ 8, 16, 24 ]




// Arrow Reverse**************************************************************************************

// let reverseStr = (str) => str.split("").reverse().join("");

// let result1 = reverseStr("hello"); // returns "olleh"
// let result2 = reverseStr("garden"); // returns "nedrag"
// let result3 = reverseStr("potato"); // returns "otatop"
// console.log(result1);
// console.log(result2);
// console.log(result3);



// Planned Intersection*********************************************************************************
// function plannedIntersect(firstArr) {
//     return (secondArr) => {
//       let arr = [];
//         firstArr.forEach(function(ele) {
//             if (secondArr.indexOf(ele) > -1) {
//                 arr.push(ele);
//             }
//         })
//       return arr;
//   }
// }

//   let abc = plannedIntersect(["a", "b", "c"]); // returns a function
// console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

// // Example 2:
// let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
// console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]



// Coin Collection*************************************************************************************
// function coinCollector(numCoins) {
//     let coins = [];
//     let collect = (coin) => {
//       coins.push(coin);
//       if (coins.length >= numCoins) {
//         return coins;
//       } else {
//         return collect;
//       }
//     };
//     return collect;
//   }

// //   Example 1:
//   let oneCoin = coinCollector(1); // returns a function
//   console.log(oneCoin(10)); // prints [10]

// // Example 2:
//   let twoCoins = coinCollector(2); // returns a function
//   twoCoins(25); // returns a function
//   console.log(twoCoins(10)); // prints [25, 10]

// // Example 3:
//   let threeCoins = coinCollector(3); // returns a function
//   threeCoins(25); // returns a function
//   threeCoins(5); // returns a function
//   console.log(threeCoins(10)); // prints [ 25, 5, 10 ]



// Curried Sum**********************************************************************************************
// function curriedSum(numArgs) {
//     let numbers = [];

//     function _curriedSum(num) {
//       numbers.push(num);

//       if (numbers.length === numArgs) {
//         let total = 0;
//         numbers.forEach(n => {
//           total += n;
//         });
//         return total;
//       } else {
//         return _curriedSum;
//       }
//     }

//     return _curriedSum;
//   }

//   //Example:
// // 1
// const sum = curriedSum(4); // returns a function
// console.log(sum(5))// returns a function
// console.log(sum(20)) // returns a function
// console.log(sum(30)) // returns a function
// console.log(sum(20)); // => returns 75

// 2
// this function can also be invoked like this:
// const sum = curriedSum(3)(2)(1)(7); // => returns 10
