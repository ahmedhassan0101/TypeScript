"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
const person = {
    name: "Ahmed",
    age: 27,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
//==================================================//
//*Obj
console.log(person.age); // auto complete
//==================================================//
//* Arr
let favoriteActivities;
favoriteActivities = ["Sports"];
for (const hobby of person.hobbies) {
    // Access to string properties
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
//==================================================//
//*Tuple
person.role.push("admin"); //? Exception
// person.role[1] = 10; // !!! ERROR !!!
// person.role = [0, 'admin', 'user']; // !!! ERROR !!!
//==================================================//
//* Enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
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
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["initial"] = "initial";
    BookingStatus["paid"] = "paid";
    BookingStatus["cancelled"] = "cancelled";
})(BookingStatus || (BookingStatus = {}));
let bookingStatus = BookingStatus.paid;
bookingStatus = BookingStatus.initial;
if (bookingStatus == BookingStatus.initial) {
    // Do something
}
