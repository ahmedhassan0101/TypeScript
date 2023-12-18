function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Ahmed",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
//==================================================//
//! *Obj
console.log(person.age); // auto complete

//!
interface Person {
  name: string;
  age?: number; //(optional) Person.age?: number | undefined
}

let p: Person;
p = {
  name: "a",
  age: 1,
};

//==================================================//
//! * Arr
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  // Access to string properties
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
let arr_num: number[] = [1, 2, 3];
let arr_str: string[] = ["A", "B", "C"];
let arr: (string | number | boolean)[] = [1, "A", true];
//==================================================//
//! *Tuple
//* ordered sequence of values

person.role.push("admin"); //? Exception

// person.role[1] = 10; // !!! ERROR !!!
// person.role = [0, 'admin', 'user']; // !!! ERROR !!!
//==================================================//
//! * Enums

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
// enum Role {
//   ADMIN = "ADMIN",
//   READ_ONLY = 100,
//   AUTHOR = "AUTHOR",
// };

const User = {
  // const User: {
  //   name: string;
  //   age: number;
  //   role: any;
  // } = {
  name: "Ahmed",
  age: 27,
  role: Role.ADMIN, //(enum member) Role.ADMIN = 0
};

if (User.role === Role.AUTHOR) {
  console.log("is author");
}

enum BookingStatus {
  initial = "initial",
  paid = "paid",
  cancelled = "cancelled",
}

let bookingStatus: BookingStatus = BookingStatus.paid;
bookingStatus = BookingStatus.initial;

if (bookingStatus == BookingStatus.initial) {
  // Do something
}
//! * any
let any: any = "A";
any = false;
any = [1, "A", true];
any.push(10);
console.log(any); //*=> [1, 'A', true, 10]

//! * unknown
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput; //! Type 'unknown' is not assignable to type 'string'.

if (typeof userInput === "string") {
  userName = userInput;
}
