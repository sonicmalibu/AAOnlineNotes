
// function stringChanger(word, operation) {
//     // Your code here

//     for (let i = 0; i < word.length; i++) {
//         if (operation === "capitalize") {
//             return word[0].toUpperCase() + word[1] + word[2];
//         } else if (operation === "uppercase") {
//             return word.toUpperCase();
//         } else if (operation === "double") {
//             return word + word;
//         }
//         }

// }

// //TESTS
// //DO NOT MODIFY ANYTHING BELOW THIS LINE

// let score = 0;

// if (stringChanger("foo", "capitalize") === "Foo") score++;
// if (stringChanger("foo", "uppercase") === "FOO") score++;
// if (stringChanger("foo", "double") === "foofoo") score++;
// if (stringChanger("foo", "reverse") === "oof") score++;

// if (stringChanger("foo", "unknown") === "foo") score++;

// console.log("You have scored " + score + "/5 points.");


// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5


// function costOfGroceries(groceries) {
//     // Your code here
//      // create a sum
//     let sum = 0;
//     // create a 'for' loop
//     for (let i = 0; i < groceries.length; i += 1) {
//         let item = groceries[i];
//         if (item === "cheese") {
//             sum += 5;
//         } else if (item === "bread") {
//             sum += 4;
//         } else if (item === "butter") {
//             sum += 1;
//         }
//          else if ( item === "eggs") {
//              sum += 2;
//          }
//          else if (item === "milk") {
//              sum += 3
//          }


//     }
//     console.log(sum);
//         return sum;
// }


// function mostExpensiveGroceries(groceriesList) {
//     // Your code here
// }


// // // TESTS
// // // DO NOT MODIFY ANYTHING BELOW THIS LINE

// const groceriesA = ['cheese', 'butter', 'eggs'];
// const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
// const groceriesC = ['cheese', 'bread'];
// const groceriesD = ['eggs', 'butter'];

// costOfGroceries(groceriesA);  // 8
// costOfGroceries(groceriesB);  // 13
// costOfGroceries(groceriesC);  // 9
// costOfGroceries(groceriesD);  // 3

// mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

// let score = 0;

// if (costOfGroceries(groceriesA) === 8) score++;
// if (costOfGroceries(groceriesB) === 13) score++;
// if (costOfGroceries(groceriesC) === 9) score++;
// if (costOfGroceries(groceriesD) === 3) score++;

// if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
// if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
// if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

// console.log("You have scored " + score + "/7 points.");



// function calculator(num1, operator, num2) {
//     // Your code here
//     if (operator === "+") {
//         return num1 + num2;
//     } else if (operator === "-") {
//         return num1 - num2;
//     } else if (operator === "*") {
//         return num1 * num2;
//     } else if (operator === "/") {
//         return num1 / num2;
//     } else {
//         return "Invalid Operator";
//     }
// }

// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// let score = 0;

// if (calculator(123, "+", 456) === 579) score++;
// if (calculator(987, "-", 654) === 333) score++;
// if (calculator( 99, "*",   3) === 297) score++;
// if (calculator(111, "/",   3) ===  37) score++;

// if (calculator( 42, "?", 42) === "Invalid Operator") score++;

// console.log("You have scored " + score + "/5 points.");

// function getAverage(nums) {
//     // Your code here
//     let sum = 0;
//     for (let i = 0; i < nums.length; i += 1) {
//         let num = nums[i];
//         sum += num;
//     }
//     let average = sum / nums.length;
//     if (nums.length === 0) {
//         return null;
//     }
//     return average;
// }



// function highestAverage(numsList) {
//     // Your code here
//     let currentHighAvg = getAverage(numsList[0]);
//     let res = 0;
//     for (let i = 0; i < numsList.length; i++) {
//         let subArr = numsList[i];
//         // [1, 2, 3, 4, 5]
//         let eachAvg = getAverage(subArr);
//         if (eachAvg > currentHighAvg) {
//             currentHighAvg = eachAvg;
//             res = i;

//         }
//     }
//         return res;
// }



// // TESTS
// // DO NOT MODIFY ANYTHING BELOW THIS LINE

// const arrayA = [1, 2, 3, 4, 5];
// const arrayB = [10000, -9998];
// const arrayC = [2, 100, 55, 19];
// const arrayD = [4, 8, 12];

// let score = 0;

// if (getAverage(arrayA) === 3) score++;
// if (getAverage(arrayB) === 1) score++;
// if (getAverage(arrayC) === 44) score++;
// if (getAverage(arrayD) === 8) score++;
// // [[1, 2, 3, 4, 5], [10k, etc..]]
// if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
// if (highestAverage([arrayA, arrayB]) === 0) score++;
// if (highestAverage([arrayA, arrayD]) === 1) score++;

// console.log("You have scored " + score + "/7 points.");


// let dog = {
//     name: "Fido"
//   };

//   // defining a new key-value pair where the *function name* is the key
//   // the function itself is the value!
//   dog.bark = function() {
//     console.log("bark bark!");
//   };

//   // this is the same thing as above just using Bracket Notation
//   dog["speak"] = function(string) {
//     console.log("WOOF " + string + " WOOF!!!");
//   };

//   dog.bark(); // prints `bark bark!`
//   dog.speak("pizza"); // prints `WOOF pizza WOOF!!!`


// let arr = ['1', '2', '3']

// let obj = {
//     game: 'ESO',
//     char: 'healer',
// };
// let obj2 = {
//     name: 'Shawn',
//     age: 28,
//     location: 'Dallas',
// };
// let obj3 = {...arr, ...obj, ...obj2};
// console.log(obj3);


// let array1 = [1, 2, 3];

// let array2 = array1;

// array2.push(4);

// console.log(array1);


// let obj = { color: "Red", fruit: "tomato" };
// let { fruit } = obj;

// console.log(fruit);



// function countScores(people) {
//     let restObj = {};

//     people.forEach(function(record) {
//         if (restObj[record.name] === undefined) {
//             restObj[record.name] = record.score;
//         } else {
//             restObj[record.name] += record.score;
//         }
//     });
//     console.log(restObj);
//     return restObj;
//   }

//   let ppl = [{name: "Anthony", score: 10},
//             {name: "Fred", score : 10},
//             {name: "Anthony", score: -8},
//             {name: "Winnie", score: 12}];

// console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

// let peeps = [
//     {name: "Anthony", score: 2},
//     {name: "Winnie", score: 2},
//     {name: "Fred", score: 2},
//     {name: "Winnie", score: 2},
//     {name: "Fred", score: 2},
//     {name: "Anthony", score: 2},
//     {name: "Winnie", score: 2}
//   ];
//   console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }


// let arr = [1, 2, 3];

// let myForEach= function (arr, cb) {
// for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i, arr);
// }
// }

// myForEach(arr, function(num, i, array) {
// console.log(num, i, array);
// });

// arr.forEach(function (num, i, array) {
//     console.log(num, i, array);
// })



// Write a function `atMost` that accepts an array, a max number, and a callback as
// arguments. The function should return a boolean indicating whether or not there are
// no more than `max` elements of the array that result in true when passed into the callback.


// function atMost(array, max, cb) {
//     let lol = 0;
//     array.forEach(function (el) {
//         if (cb(el)) {
//             lol += 1;
//         }
//     });
//     return lol <= max;
// }




//






// Currying is the process of decomposing a function that takes multiple arguments
// into one that takes single arguments successively until it has the sufficient
// number of arguments to run.This technique is named after the
// logician Haskell Curry(the functional programming language Haskell is, too).

// Write a `curriedSum` function that takes an integer(how many numbers to sum)
// and returns a function that can be successively called with single arguments
// until it finally returns a sum.

// function curriedSum(numArgs) {
//   const mum = [];

//   function _curriedSum(lol) {
//     mum.push(lol);

//     if (mum.length === numArgs) {
//       let total = 0;

//       mum.forEach(n => {
//         total += n;
//       });

//       return total;
//     } else {
//       return _curriedSum;
//     }
//   }

//   return _curriedSum;
// }



// 1
// const sum = curriedSum(4); // returns a function
// console.log(sum(5)); // returns a function
// console.log(sum(20)); // returns a function
// console.log(sum(30)); // returns a function
// console.log(sum(20)); // => returns 75

// 2
// this function can also be invoked like this:
//const sum = curriedSum(3)(2)(1)(7); // => returns 10



// Counter Object**********
// function Counter() {
//     let count = 0;

//     this.up = function() {
//       return ++count;
//     };

//     this.down = function() {
//       return --count;
//     };
//   }

//   let counter = new Counter();

//   alert( counter.up() ); // 1
//   alert( counter.up() ); // 2
//   alert( counter.down() ); // 1


// function roboFactory(voice) {
//     let count = 0;
//     console.log("Bye!!!");
//     return function sayHiRobot() {
//         count++
//         console.log(voice + 'Hi! I\'ve said, \"Hi\" ' + count + " time(s)"
//         );
//     }
// }

// function roboFact() {
//     let count = 1;
//     console.log("HELLO!!!");
//     return function sayHiRobot(name) {
//         count *= 10000;
//         //return count;
//         console.log('Hi! I\'ve said, \"No\" ' + count + " times" + name
//         );
//     }
// }


// let firstRobo = roboFactory("whaaaat ");

// let thirdRobo = roboFactory();
// firstRobo();
// firstRobo();
// firstRobo();
// firstRobo();
// let secondRobo = roboFact();
// secondRobo(" to you!");
// secondRobo(" nah, jk!");
// secondRobo(" or am I?");
// thirdRobo();

// let shawn = {
//     type: "person",
//     city: "Dallas",
//     state: "Texas",
//     age: 24,
// };
// let friend = {...shawn, age: 28}
// console.log(shawn)

/* Writing a function that is going to count how many evens
and how many odds are in my array */

// let nums = [1, 2, 3, 3, 2, 2, 2];

// function countEvens(arr) {
//     let count = {}
//         function
//         for (let i = 0; i <arr.length; i++) {
//         let num = arr[i];
//         if (num % 2 === 0) {
//             if ("evens" in count) {
//                 count.evens++
//             } else {
//                 count.evens = 1;
//             }
//         } else {
//             if ("odds" in count) {
//                 count.odds++;
//             } else {
//                 count.odds = 1;
//             }
//         }
//     }
// }
// return count;
// }

// let num2 = [1, 2, 3, 3, 2, 2, 2];
// console.log(countEvens(nums2));


// const sum = (arr) => arr.reduce((accum, val) => accum + val);
// console.log(sum([1, 2, 3]));



// function miahsCats(obj) {

//     let keys = Object.keys(obj).map((key) => key.toLowerCase());
//     let values = Object.values(obj).map((val) => val.toLowerCase());
//     return keys.concat(values).filter((sel) => sel.includes('cute') || sel.includes('adorable')).length
//     }


// function spiderManWriters(string) {
//     let arr = string.split(', ');
//     let obj = {};

//     for ( let i = 0; i < arr.length; i++) {
//         let writer = arr[i];
//         if (writer.includes('no Spiderman')) {
//             let name = writer.split(':')[0];
//             obj[name] = 'no Spiderman';
//         }
//     }
//     return obj;
// }


// function applyCoupon(discount, wishList) {
//     const lolPrice = wishList.map( dis => dis.price);
//     console.log(lolPrice);
//     let total = 0;
//     lolPrice.forEach(price => {
//         total += (price - (price * (0.01 * discount)));
//     });





//     return total;
// }


// wishList = [
//     {name: "Xbox", price: 80},
//     {name: "Bacon", price: 5},
//     {name: "Gummy Candies", price: 3},
//     {name: "SURGE soda 24 pack", price: 10}
//     ];


// console.log(applyCoupon(10, wishList)); // => 88.2;
// console.log(applyCoupon(20, wishList)); // => 78.4;



// function dynamicDice(sides) {
//     return function(rolls) {
//       return (sides *= rolls);
//     };
//   }

//   const newDice = dynamicDice(20); // returns a function
//   console.log(newDice(5)); // 100

//   const newDice2 = dynamicDice(10); // returns a function
//   console.log(newDice2(5)); // 50

//   const newDice3 = dynamicDice(12); // returns a function
//   console.log(newDice3(2)); // 24


// function manyArgs(...args){
//     let product = 1;
//     for(let i = 0; i < args.length; i++){
//         product *= args[i]
//     }
//     return product;
// }

// console.log(manyArgs(1, 2, 3, 4, 5, 6, 7)); // 5040
// console.log(manyArgs(1, 2, 5, 6, 7)); // 420
// console.log(manyArgs(1, 2, 5, 6)); // 60
