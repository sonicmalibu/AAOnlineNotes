/*let calculateAverage = function(a, b) {
    return (a + b) / 2; //average - sum / 2
};

console.log(calculateAverage(10, 20)); // 15
*/

// console.log('Hello World!');
/*let x = 1;
let y = 2;
console.log(x * 3 / y + 7 % 4);

// Just checking..
console.log(7 % 4);*/

/*function sayHello() {
    console.log('hello');
    console.log('goobye');
}
sayHello();
sayHello();*/

/*function getAvg(num1, num2) {
    return (num1, num2) / 2;
}*/

/*let getAvg = function(num1, num2) {
    return (num1, num2) / 2;
};
let name = "Shawn";
let age = 28;

console.log(getAvg);
console.log(name);
console.log(age);*/

//console.log(getAvg(6, 4));
//console.log(getAvg(10, 20));

// *********************************************************************************
//Array push
// Array pop
// Array shift
// Array unshift
//unshift - push
//shift - pop

/*let people =  [ 'Rosemary', 'Alex', 'Josh', 'Polina', 'David', 'Anna' ];
let res = people.push('kwazi', 'JJ', 'Sara');
console.log(res);
console.log(people);*/


/*let people =  [ 'Rosemary', 'Alex', 'Josh', 'Polina', 'David', 'Anna' ];
console.log(people.shift());
console.log(people);*/


// Nested loops! *****************************************************************
/*for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log( i, j);
    }
}*/


//How can we generate all pairs of elements of an array?
/*let dogs = ['belka', 'strelka', 'laika', 'dezik'];
for (let i = 0; i < dogs.length; i++) {
    let dog1 = dogs[i];
    for (let j = 0; j < dogs.length; j++) {
     let dog2 = dogs[j];
     console.log( dog1, dog2)
 }};*/

// Unique loops! ***********************************************************************
/*let dogs = ['belka', 'strelka', 'laika', 'dezik'];
for (let i = 0; i < dogs.length; i++) {
    let dog1 = dogs[i];
    for (let j = i + 1; j < dogs.length; j++) {
        let dog2 = dogs[j];
        console.log(dog1, dog2)
    }
}*/

/*function addToArray(location, element, arr) {
    if (location == 'FRONT') {
        arr.unshift(element)
    } else if (location == "BACK") {
    } else {
        console.log('ERROR');
    }
}*/


/* Write a function that intakes two numbers and returns the sum*/
/*function sum(num1, num2) {
    return num1 + num2
}
//function declaration syntax
console.log(sum(5, 12));*/
/*let name = 'Shawn';

let sum = function (num1, num2){
    return num1 + num2;
};

console.log(sum(5, 12));*/


//Mutability **************************************************************************
/*let arr = [1, 2, 12, 4];

console.log(arr);

arr[2] = 3;

console.log(arr);

//Immutable Types *********************************************************************
let str = "bark";

console.log(str);

str[0] = 'p';

console.log(str);*/

//Nested Array *************************************************************
/*let nestedArr = [  [1, 2, 3], [4], [5, 6]  ]
for (let i = 0; i < nestedArr.length; i++) {
    let subArr = nestedArr[i];

    for (let j = 0; j < subArr.length; j++) {
        let num = subArr[j];
        console.log(subArr[j])
    }
    }*/


//2D Arrays ****************************************************************
// let array = [['a', 'b', 'c'], ['d', 'e'], ['f', 'g', 'h']];

// for (let i = 0; i < array.length; i++) {
//     let subArray = array[i];
//     console.log(subArray);

//     for (let j = 0; j < subArray.length; j++) {
//         console.log(subArray[j]);
//     }
// }

//Helper Functions **************************************************************
// yellStrings(strings)
//Write a function that takes in an array of strings as an argument.
//It should return array where every string is "yelled", see the example below:

// let yelled = yellStrings(['hello', 'how', 'are', 'you']);
// yelled; //=> ['HELLO!', 'HOW!', 'ARE!', 'YOU?'];

// function specialWords(words) {
//     let result = [];
//     let vowels = 'aeiouAEIOU';
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         if (word.length < 6 && vowels.includes(word[0]) && word.length % 2 !== 0) {
//             result.push(word);
//         }
//     }
//     return result;
// }

// console.log(specialWords(['elephant', 'ore', 'easy', 'pizza', 'apple', 'egg', 'elf']))

//  function yellStr(str) {

//      let upperString = str.toUpperCase();
//      return upperString + '!';
//  }

//  function yelledStrings(strings) {
//     let yelled = [];

//     for (let i = 0; i < strings.length; i++) {
//       let string = strings[i];
//       let newString = yellStr(string);
//       yelled.push(newString);
//     }

//     return yelled;
//   }


//Pollios ****************************************************************

//1. Understand the problem

//2. Make a plan

//3. Carry out the plan

//4. Look back and improve your solution


// Array.slice() ************************************************************
/*The slice() method returns a shallow copy of a portion of an
 array into a new array object selected from start to end (end not
    included) where start and end represent the index of items in
    that array. The original array will not be modified.*/


// for loops
//start;   stop;    step;
// for (let i = 0; i < arg; i += step)

// start - where we start the loop
//stop where we stop the loop
// step how many times to move 'i' forward


// GOALS: For AA - Master 2D Arrays and Helper Functions by Sunday *************************************************
// Personal - Focus on studying and get sleep!


// forEach method ********************************************************************
//   let names = ['Shawn', 'Montana', 'Wiott', 'Williams', 'Lord', 'Etc'];

// for (let i = 0; i < parks.length; i++) {
//       let park = parks[i];
//       console.log(park);
//   }

// let str = '';
// names.forEach(function(name1, i) {
//     console.log(name1);
// str += name1;
// })
//console.log(str;)

/* Mylo notes - .forEach
function hello(names) {
    for (let i = 0; i > names.length; i++) {
        let name = names[i];
        console.log("Hello ," + name);
    }
}
hello(["Shawn", "Williams"]);*/

// function hello(names) {
//     names.forEach(function print(name, i, array) {
//         console.log("Hello, " + name);
//     });
// }
// hello(["Shawn", "Williams"])


// Callback
// let num = 1;

// function sum(num1, num2) {
//     return num1 + num2;
// }

// function printer(something) {
//     console.log(something(3, 8));
// }


// printer(sum);


// Array#reduce method **********************************************************
// let nums = [3, 7, 5, 9];

// let sum = nums.reduce(function(accum, el) {
//     return accum + el;
// }, 100);
// console.log(sum);

// let nums = [3, 7, 5, 9];
//1st iter - 2nd iter
// let max = nums.reduce(function(accum, el) {
//     if (el > accum) {
//         return el;
//     } else {
//         return accum;
//     }
// });
// console.log(max);

// function list(names) {
//     let res = names.reduce(function(resString, name) {
//         return resString + ' ' + name;
//      }, "Names:" )
//      return res;
// }
// console.log(list(['Rick', 'Morty']))
// console.log(list(['Shawn']));


// Map ****************************************************************
// function timesTwo(nums) {
//     let res = [];
//     for (i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         res.push(num * 2);
//     }
//     return res;
// }

// console.log(timesTwo([1, 2, 3, 4, 5]));

// function timesTwo(nums) {
//     let res = nums.map(function(num, i, array) {
//         return num * 2;
//     })
//     return res;
// }
// console.log(timesTwo([1, 2, 3, 4, 5]));

// .Filter ******************************************************************
//     function evens(nums) {
//         let res = [];
//         for (i = 0; i > nums.length; i++) {
//             let num = nums[i];
//             if (num % 2 === 0) {
//                 res.push(num);
//             }
//         }
//         return res;
//     }
// console.log(evens([1, 2, 3]));
// console.log(evens([42, 44, 45]));

// function evens(nums) {
//     let res = nums.filter(function(num, i, array) {
//         return num % 2 === 0
//     })
//     return res;
// }
// console.log(evens([1, 2, 3]));
// console.log(evens([42, 44, 45]));

// OBJECTS 101 ***************************************************
// An object is a data type and it is a reference data type.

// array - index - element
// object - key value pairs - values


// let car = {};
//undefined

// here is our new empty objects
//car
// {}

// let id = "header";
//let elemenet = document.getElementById(id).value;

//add(number1, number2) + number3;

// return keys with object.keys()
//return values with object.values()
// return both with object.entries()


// Callbacks ***************************************************

// **Examples**
// let func1 = function() {
//     console.log("hello");
// };
// let func2 = function() {
//     console.log("bye");
// };

// func1();
// let arr = [1, 2];
// let funcArr = [func1];

// console.log(arr[0] + arr[1]);
// funcArr[0]();

// let obj = {
// someMethod: func1,
// someMethod: func2,
// };

// obj.someMethod();
// obj.someMethod2();


// Higher Order Function**
// function outerFunc(legitAnyFunction) {
// legitAnyFunction()
// }

// function sayHi() {
//     console.log('hello');
// }

// function sayBye() {
//     console.log('bye');
// }

// outerFunc(sayHi);


// function time2(num) {
//    return  num * 2;
// }

// function plus2(num) {
//     return num + 2;
// }

// function HOF(cb1, cb2, num) {
//     let res1 = cb1(num);
//     let res2 = cb2(num);
//     if (res1 > res2) {
//         return res1;
//     } else {
//         return res2;
//     }
// }



// Closures*********************************************

// function pizzaMan(pizza) {
//     let food = "I love pepperoni! ";
//     function cooking() {
//         return food + pizza;
//     }
//     return cooking();
// }

// console.log(pizzaMan("pepperoni"));

// function shoopingList(list) {
//     let items = list;
//     function addItem() {
//         items.push("get in there");
//     }
//     addItem();
//     return items;
// }

// console.log(shoppingList(["greens", "blues"]));


// const sentenceMaker = (string) => (newWord) => (string += " " + newWord);

// let helloSentence = sentenceMaker("Hello");
// console.log(helloSentence);
// console.log(helloSentence("there"));



// Fat Arrow Function************************************************************

// const sum = (arr) => arr.reduce((accum, val) => accum + val);
// console.log(sum([1, 2, 3]));


// Counter Object***********************************************
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


// Increments
// var++ = post increment
// Example: var a = 0, b = 10;
// var a = b++;
// Result: a = 10 and b = 11

// ++var pre increment
// Example: var a = 0, b = 10;
// var a = ++b;
// Result: a = 11 and b = 11

// var-- = post decrement
// Example: var a = 0, b = 10;
// var a = b--;
// Result: a = 10 and b = 9

// --var = predecrement
// Example: var a = 0, b = 10;
// var a = --b;
// Result: a = 9 and b = 9


//  Spiral Matrix******************************************************************
// function spiralOrder(matrix) {
//     const arr = [];
//     const rowCo = matrix.length;
//     const coCo = matrix[0].length;
//     let startR = 0;
//     let endR = rowCo - 1;
//     let startCol = 0;
//     let endCol = coCo - 1;

//     while (endR >= startR && endCol >= startCol) {
//       for (let i = startCol; i <= endCol; i++) {
//         arr.push(matrix[startR][i]);
//       }
//       startR++;

//       for (let i = startR; i <= endR; i++) {
//         arr.push(matrix[i][endCol]);
//       }
//       endCol--;
//       if (endR >= startR) {
//         for (let i = endCol; i >= startCol; i--) {
//           arr.push(matrix[endR][i]);
//         }
//       }
//       endR--;
//       if (endCol >= startCol) {
//         for (let i = endR; i >= startR; i--) {
//           arr.push(matrix[i][startCol]);
//         }
//       }
//       startCol++;
//     }

//     return arr;
//     };


// matrix = [[ 1, 2, 3],
//           [ 4, 5, 6],
//           [ 7, 8, 9]]

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

// matrix = [[1, 2, 3, 4],
//           [5, 6, 7, 8],
//           [9,10,11,12]]


// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]


// Sprial Matrix Take 2
// function spiralOrder(matrix) {
//     if (!matrix.length) return [];
//     let arr = [];
//     let spiral = [[0, 1], [1, 0], [0, -1], [-1, 0]];
//     let ele = [matrix[0].length, matrix.length - 1];
//     let spi = 0, row = 0, column = -1;
//     while (ele[spi % 2] > 0) {
//         for (let i = 0; i < ele[spi % 2]; i++) {
//             row += spiral[spi][0];
//             column += spiral[spi][1];
//             arr.push(matrix[row][column]);
//         }
//         ele[spi % 2]--;
//         spi = (spi + 1) % 4;
//     }
//     return arr;
// }


// matrix = [[ 1, 2, 3],
//           [ 4, 5, 6],
//           [ 7, 8, 9]]

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

// matrix = [[1, 2, 3, 4],
//           [5, 6, 7, 8],
//           [9,10,11,12]]


// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]



// Template Literals****************************************************************
// function sayHello(name) {
//     return `hello ${name}!`
// }

// console.log(sayHello('Shawn'));

// function tellStory(animal, adj, place) {
//     return `My ${adj} ${animal} went to the ${place} ${3+3} times.`;
// }

// console.log(tellStory('hippo', 'magnificent', 'waterpark'))
