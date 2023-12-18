function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges); //*56

const combinedNames = combine("Max", "Anna");
console.log(combinedNames); //*MaxAnna

//==================================================//
//==================================================//
//==================================================//

//! * Literal Types

//! *Aliase
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combineLiteral(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combAges = combineLiteral(30, 26, "as-number");
console.log(combAges);

const combStringAges = combineLiteral("30", "26", "as-number");
console.log(combStringAges);

const combNames = combineLiteral("Max", "Anna", "as-text");
console.log(combNames);
