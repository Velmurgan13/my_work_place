//data types

//strings
// var name1 = "ramesh";
// var name2 = "suresh";       strings can either written in single quote ' ' or in double quote " "

// numbers
// var num1 = 35;
// var num2 = 23572;

// objects
// var student1 = {
//   name: "john",             obejects are always in a key - value pair
//   age: 34,
//   gender: "male",
//   working: false,
// };

// Booleans

// var georgeResult = false;          Boolean always tells either true or false
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

// student1 = avg(65, 88);                          // function called
// console.log("average marks of student1 ", student1);

// student2 = avg(49, 74);                          // function called
// console.log("average marks of student1 ", student2);

// -------------------------------------------------------

// Conditionals in Javascript

// var age = 100;

// 1. if condition

// if (age > 18) {
//   console.log("you can go for Clubbing");
// }

// -------------------------------------------------------
// 2. if else condition

// if (age > 10) {
//   console.log("go to party");
// } else {
//   console.log("go and study");
// }
// -------------------------------------------------------
// 3. if alse ladder condition

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
// -------------------------------------------------------
// let myDate = new Date();
// console.log(myDate);
// -------------------------------------------------------

// --------- DOM - Documnet Object Model------

// let element = document.getElementById("click");
// console.log(element);

// document.getElementsByClassName();
// document.getElementsByTagName();
// document.getElementById();

// // this are the most commonly used in javascript

// let tagName = document.getElementsByTagName("div");

// let createdElement = document.createElement("p");
// createdElement.innerText = "This is a created Paragraph";
// tagName[0].append(createdElement);

// let createdElement2 = document.createElement("b");
// createdElement2.innerText = "This is Bold Paragraph";
// tagName[0].replaceChild(createdElement2, createdElement);

// Extra Stuff  - we can see in console following things which is mostly used

// document.title()
// document.URL()
// document.location()
// document.links()
//document.forms()

// above all things you can check in console

// -------------------------------------------------------

// Events in Javascripts

// function clicked() {
//   console.log("the button was clicked "); // clicked function will call function when user clicked the button
// }

// window.onload = function () {
//   console.log("The document was loaded"); // onload will call the function once the page is completely loaded
// };

// click.addEventListener("click", function () {
//   console.log("its clicked");
// }); // clicked function will call function when user clicked the button

// click.addEventListener("mouseover", function () {
//   console.log("mouseover is doing"); // when user mouseover the button or container the function is invoked
// });

// similary there are mouseout , mouseup, mousedown based on requirement we can use it ..

// -------------------------------------------------------

// Arrow Functions

// function total(a, b) {
//   return a + b;
// }
// same function we can also write as shown in below

// total = (a, b) => {
//   return a + b;
// };

// -------------------------------------------------------

// setTimeOut and setInterval in Javascript

// 1. setTimeOut
// loggedTime = () => {
//   console.log("logged is been done");
// };
// let setTime = setTimeout(loggedTime, 3000);   // in setTimeout first arguments takes
// an function and second arguments takes a time in milliseconds

// important -> to stop setTimeout we have to use clearTimeout.  --> give that var which is assigned to setTimeout

//  2. setInterval

// loggedTime = () => {
//   console.log("logged is been done in set interval");
// };
// let interval = setInterval(loggedTime, 2000); // in setInterval it invokes the same function again and again in given
// set on time interval.

// important -> to stop setInterval we have to use clearInterval --> give that var which is assigned to setInterval

// -------------------------------------------------------
