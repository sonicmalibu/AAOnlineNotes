// addLib Problem************************************************************************************************
// function makeAddLib(verb, adj, noun) {
//     return `I shall ${verb} to the ${adj} ${noun}?`;
//   }

//   console.log(makeAddLib("swim", "sparkly", "rainbow")); // => "I shall swim to the sparkly rainbow?"
//   console.log(makeAddLib("RUN", "FANCY", "ParK")); // => "I shall RUN to the FANCY ParK?"



// Sum To N*******************************************************************************************************
// function sumToN(n) {
// if (n < 0) return null;
// if (n <= 1) return n;
// return n + sumToN(n - 1);
// }

// console.log(sumToN(5)) // returns 15
// console.log(sumToN(1))  // returns 1
// console.log(sumToN(9))  // returns 45
// console.log(sumToN(-8))  // returns null



// Sum Array******************************************************************************************************
// function sumArray(array) {
//     let arrL = array.length;
//     if (arrL === 0) {
//         return 0;
//     }
//     return array[0] + sumArray(array.slice(1))
// }

// console.log(sumArray([1, 2, 3])); //  6
// console.log(sumArray([0, 1, -3])); //  -2
// console.log(sumArray([1, 2, 3, 4, 5])); // 15



// Ice Cream Shop************************************************************************************************
// function iceCreamShop(flavors, favorite) {
//     if (!flavors.length) return false;
//     if (flavors.pop() === favorite) return true;
//     return iceCreamShop(flavors, favorite);
// }


// console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
// console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // true
// console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')); // false
// console.log(iceCreamShop(['moose tracks'], 'moose tracks')); // true
// console.log(iceCreamShop([], 'honey lavender')); // false



// Range*********************************************************************************************************
// function range(start, end) {
//     let emptyArr = [];
//     let star = [start];

//     if (end <= start) {
//         return emptyArr;
//     }
//     return star.concat(range(++start , end));
// }

// console.log(range(1, 5)); // [1, 2, 3, 4]
// console.log(range(3, 4)); // [3]
// console.log(range(7, 6)); // []
