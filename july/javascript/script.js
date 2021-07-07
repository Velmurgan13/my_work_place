//data types

//strings
// var name1 = "ramesh";
// var name2 = "suresh";

// numbers
// var num1 = 35;
// var num2 = 23572;

// objects
// var student1 = {
//   name: "john",
//   age: 34,
//   gender: "male",
//   working: false,
// };

// Booleans

// var georgeResult = false;
// var gokulResult = true;

// // console.log(gokulResult);

// undefined

// var und;
// console.log(und);
// var empty = null;

// -------------------------------------------------------

// Two types of data types they are

// 1. primitive data types
// -->  number, string , boolean , float , null , undefined

// 2. reference data types
// --->  array and objects

// -------------------------------------------------------

// what are the operators in javascripts
//arethematic operators

// var num1 = 463;
// var num2 = 10;

// console.log("the sum of two numbers num1 and num2 is ", num1 + num2);
// console.log("the sum of two numbers num1 and num2 is ", num1 - num2);
// console.log("the sum of two numbers num1 and num2 is ", num1 / num2);
// console.log("the sum of two numbers num1 and num2 is ", num1 * num2);

// Assignment operatiors

// var num3 = num2;

// // num3 += 10;
// // num3 -= 10;
// // num3 *= 10;
// // num3 /= 10;

// console.log(num3);

// -------------------------------------------------------

// comparison operator

// this will always return in true or false

// var firstNum = 45;
// var secondNum = 30;

// console.log(firstNum == secondNum);
// console.log(firstNum != secondNum);
// console.log(firstNum >= secondNum);
// console.log(firstNum <= secondNum);
// console.log(firstNum < secondNum);
// console.log(firstNum > secondNum);

// -------------------------------------------------------

// Logical Operators
// AND operators

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// if anything is false the whole logic is false , this is called as and AND operators
// -------------------------------------------------------
// OR operators

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// in this if any single statement becomes true the whole statement will get true, this is called as OR operators

// -------------------------------------------------------

// NOT operators

// console.log(!true);
// console.log(!false);

// in this operators it acts totally opposite to what statement is said

// -------------------------------------------------------

// Function in Javascript

//created a function
// function avg(arug1, arug2) {
//   avgResult = (arug1 + arug2) / 2;
//   return avgResult;
// }

// student1 = avg(65, 88); // function called
// console.log("average marks of student1 ", student1);

// student2 = avg(49, 74); // function called
// console.log("average marks of student1 ", student2);

// -------------------------------------------------------

// Conditionals in Javascript

// var age = 100;

// 1. if condition

// if (age > 18) {
//   console.log("you can go for Clubbing");
// }

// -------------------------------------------------------
// if else condition

// if (age > 10) {
//   console.log("go to party");
// } else {
//   console.log("go and study");
// }
// -------------------------------------------------------
//if alse ladder condition

// if (age < 10) {
//   console.log("go to park");
// } else if (age > 100) {
//   console.log("stay at home ");
// } else if (age > 18) {
//   console.log("you can do anything ");
// } else {
//   console.log("invalid age");
// }
// -------------------------------------------------------

// For Loop in JavaScript

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let m = 0; m < numbers.length; m++) {
//   numbers[m] = numbers[m] - 1;
// }
// console.log(updated);

// var students = ["john", "peter", "jay", "laxman"];

// for (let i = 0; i < students.length; i++) {
//   students[i] = students[i] + " passed";
// }
// console.log(students);

//  -------- break from the loop ---------
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < numbers.length; i++) {
//   if (i == 2) {
//     break;
//   }
//   console.log(numbers[i]);
// }

//  -------- continue from the loop ---------

// var number = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let j = 0; j < number.length; j++) {
//   if (j == 5) {
//     continue;
//   }
//   console.log(number[j]);
// }

// -------------------------------------------------------

// forEach loop in Javascript

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// numbers.forEach(function (element) {
//   element = element + 1;
//   console.log(element);
// });

// forEach loop is best to iterate over the array

// -------------------------------------------------------

// While Loop in Javascript

// let rollNo = [23, 56, 87, 54, 99, 78, 92];

// let i = 0;

// while (i < rollNo.length) {
//   rollNo[i] = rollNo[i] + 1;
//   console.log(rollNo[i]);
//   i++;
// }
