function addNum(n1: number, n2: number): number {
  return n1 + n2; //:number
}
function addStr(n1: number, n2: number): string {
  return n1.toString() + n2.toString(); //:string
}

//! * Void

function showResult(num: number): void {
  // does not have return statement
  console.log("Result: " + num);
}
console.log(showResult(addNum(5, 12))); // undefined
showResult(addNum(5, 12));

//! * Undefined

let someValue: undefined;

function dosomthing(str: string): undefined {
  // or :void
  return;
  //? TypeScript would expect that you have
  //? a return statement where you just don't return a value.
  //? That's the technical difference.
}

//! * Function

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;
combineValues = addNum;
console.log(combineValues(8, 8)); // 16
// combineValues = showResult; // !!! ERROR !!!
console.log(combineValues(8, 8)); // undefined
// combineValues = 5; // !!! ERROR !!!


const v: (x: number, y: number) => number = (x, y) => {
  return x + y;
};
const w = (x: any, y: any) => {
  return ["hello", true];
};
//! * callback

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result; // typescript will ignore due to void type;
});

//! * never

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {} ...(infinty loop)
}

const result = generateError("An error occurred!", 500);
console.log(result); // don't return anything = never
