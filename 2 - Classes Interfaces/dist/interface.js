"use strict";
let user = {
    name: "Name",
    age: 20,
    greet(phrase) {
        console.log(phrase + "" + this.name);
    },
};
user.greet("welcome");
class Person {
    constructor(age, approval, n) {
        this.age = age;
        this.approval = approval;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi!");
        }
    }
}
let userOne;
userOne = new Person(25, true, "One");
console.log(userOne);
userOne.greet("Hello");
let Obj = {
    ptopertyOne: "One",
    propertyTwo: "Two",
    propertyThree: "Three",
};
let add;
add = (n1, n2) => {
    return n1 + n2;
};
let userSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true,
};
