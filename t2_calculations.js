"use strict";
function sum(num1, num2) {
  return num1 + num2;
}

function mult(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function diff(num1, num2) {
  return num1 - num2;
}

function calc(x, y, callback) {
  return callback(x, y);
}

// console.log(calc(3, 4, sum));
// console.log(calc(5, 6, mult));

console.log(
  calc(3, 4, function (x, y) {
    return x + y + y;
  })
);
