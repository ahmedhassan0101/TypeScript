"use strict";
function addNum(n1, n2) {
    return n1 + n2; //:number
}
function addStr(n1, n2) {
    return n1.toString() + n2.toString(); //:string
}
//! * Void
function showResult(num) {
    // does not have return statement
    console.log("Result: " + num);
}
console.log(showResult(addNum(5, 12))); // undefined
showResult(addNum(5, 12));
//! * Undefined
let someValue;
function dosomthing(str) {
    // or :void
    return;
    //? TypeScript would expect that you have
    //? a return statement where you just don't return a value.
    //? That's the technical difference.
}
// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//   const result = n1 + n2;
//   cb(result);
// }
let combineValues;
combineValues = addNum;
combineValues = showResult;
// let combineValues: (a: number, b: number) => number;
console.log(combineValues(8, 8));
// combineValues = 5; // !!! ERROR !!!
// // let someValue: undefined;
// addAndHandle(10, 20, (result) => {
//   console.log(result);
// });
