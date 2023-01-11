// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// numbers.map(double);

// const newNumbers = numbers.map(double);

// var newNumbers = [];

// function double(x) {
//   newNumbers.push(x * 2);
// }

// numbers.forEach(double);

// *************************
// const newNumbers = numbers.map(function double(x) {
//   return x * 2;
// });

// console.log(newNumbers);
// ***********************

// var numbers = [3, 56, 2, 48, 5];
//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num){
// return num > 10

// })

// var newNumbers = [];
// numbers.forEach(function(num){
// if (num < 10){
//   newNumbers.push(num);
// }

// })

// console.log(newNumbers);

// var numbers = [3, 56, 2, 48, 5];
// //Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   return (accumulator + currentNumber);
// });

// // var newNumber = 0;
// // numbers.forEach(function (currentNumber) {
// //   newNumber += currentNumber;
// // });

// console.log(newNumber);

// **************************************
// //Find - find the first item that matches from an array.

// var numbers = [3, 56, 2, 48, 5];
// const newNumber =  numbers.find(function (num){
// return num > 10;
// })

// console.log(newNumber);
// **************************************

//FindIndex - find the index of the first item that matches.
// **************************************

// var numbers = [3, 56, 2, 48, 5];
// const newNumber =  numbers.findIndex(function (num){
// return num > 10;
// })

// console.log(newNumber);
// **************************************

// import React from "react";
import emojipedia from "./emojipedia";

const mewEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(mewEmojipedia);
