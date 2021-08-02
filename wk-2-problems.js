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
// console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 14
// console.log(restSum(0)); // => 0
