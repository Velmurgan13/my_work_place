// Map Function

// add number 5 to the list

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let newNumber = numbers.map(function (n) {
//   n = n + 5;
//   return n;
// });

// console.log(newNumber);
// ---------------------------------------------------
// let numbers = [1, 2, 3, 4, 5, 6];

// let newNumber = numbers.map(function (n) {
//   n = n - 1;
//   return n;
// });
// console.log(newNumber);

// ---------------------------------------------------

// let allNumbers = [34, 7, 3, 2, 799, 1, 345];

// let mappedNumbers = allNumbers.map(function (n) {
//   n = n - 100;
//   return n;
// });
// console.log(mappedNumbers);

// ---------------------------------------------------

// let names = ["apple", "mango", "orange"];

// let fruits = names.map(function (n) {
//   n = n + " is a Fruit";
//   return n;
// });

// console.log(fruits);

// ---------------------------------------------------

// let names = ["apple", "mango", "orange"];

// let fruits = names.map(function (n) {
//   if (n == "apple" || n == "mango") {
//     return n + " this is healthy fruit";
//   } else {
//     return n + " not healthy";
//   }
// });

// console.log(fruits);
// ---------------------------------------------------

// filter function

// let numbers = [1, 2, 3, 4, 5, 6, 7, 9];

// let newNumber = numbers.filter(function (n) {
//   return n > 5;
// });
// console.log(newNumber);

// ---------------------------------------------------

// let arr = [1, 2, 3, "john", 5, 6, null, false];

// let result = arr.filter(function (n) {
//   if (n == null) {
//     return false;
//   } else {
//     return true;
//   }
// });

// console.log(result);

// ---------------------------------------------------

// let allNumbers = [34, 7, 3, 2, 799, 1, 345];

// let filterNumber = allNumbers.filter(function (n) {
//   if (n == 799) {
//     return false;
//   } else {
//     return true;
//   }
// });

// console.log(filterNumber);

// ---------------------------------------------------

// let vegetables = ["grapes", "patato", "onion", "orange"];

// let removeFruit = vegetables.map(function (n) {
//   if (n == "orange" || n == "grapes") {
//     return n + " is not a vegetables";
//   } else {
//     return n + " is vegetables";
//   }
// });
// console.log(removeFruit);

// ---------------------------------------------------

// Reduce Function

// let allNumbers = [34, 7, 3, 2, 799, 1, 345];

// let sum = allNumbers.reduce(function (acc, cv) {
//   acc = acc + cv;
//   return acc;
// }, 0);

// console.log(sum);

// ---------------------------------------------------

// let alphabets = ["a", "b", "c", "d", "e"];

// let sum = alphabets.reduce(function (acc, cv) {
//   acc = acc + cv;
//   return acc;
// }, " ");
// console.log(sum);

// ---------------------------------------------------

// let firstName = "VelMurGaN ";
// let lastName = "PillAI ";

// let fullName = firstName + " " + lastName;
// console.log(fullName);
// console.log(fullName.toLocaleUpperCase());
// console.log(fullName.toLocaleLowerCase());

// console.log(fullName.charAt(4));
