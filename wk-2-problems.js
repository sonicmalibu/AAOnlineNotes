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
