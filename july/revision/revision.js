let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(numbers.length);

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
  numbers[i] = numbers[i] * 2;
}

console.log(numbers);

// let arr = [1, 2, 3, 4, 5, 6];

// let newArray = arr.filter(function (n) {
//   return n > 4;
// });
// console.log(newArray);

// let arr = [1, 2, 3, 4, 5, 6];

// let newArray = arr.map(function (n) {
//   n = n - 1;
//   return n;
// });
// console.log(newArray);

// let arr = [1, 2, 3, 4, 5, 6];

// let newArray = arr.map(function (n) {
//   n = n * 20;
//   return n;
// });
// console.log(newArray);

// let arr = [1, 2, 3, 4, 5, 6];

// let newArray = arr.map(function (n) {
//   n = n + 0.03;
//   return n;
// });
// console.log(newArray);

// let arr = [1, 2, "murgan", null, false];

// arr = arr.filter(function (n) {
//   if (n == "murgan") {
//     return false;
//   } else {
//     return true;
//   }
// });
// console.log(arr);

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce(function (acc, cv) {
  acc = acc + cv;
  return acc;
}, 100);
console.log(sum);

let firstName = "George";
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());
console.log(firstName.charAt(8));

let str = "abc ";
console.log(str.trim());

let arr = [1, 2, 3];

console.log(arr.join(""));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(numbers.length);

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
  numbers[i] = numbers[i] * 2;
}

console.log(numbers);

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
  numbers[i] = numbers[i] + 2;
}
console.log(numbers);

// let newNumbers = numbers.filter(function (n) {
//   if (n >= 3) {
//     return false;
//   } else return true;
// });
// console.log(newNumbers);
