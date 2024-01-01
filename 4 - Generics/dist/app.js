"use strict";
//! [1] Builtin Generics.
//*
//*
const names = [""]; // string[]
names[0].split(" ");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(200);
    }, 2000);
});
promise.then((data) => {
    // data.split(' '); //!Error
});
//*
//*
//! [2] Generic Function & Constraint.
//*
//*
const merge = (objA, objB) => {
    return Object.assign(objA, objB);
};
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
const countAndDescribe = (element) => {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
};
console.log(countAndDescribe(["Sports", "Cooking"]));
console.log(countAndDescribe("Cooking"));
//*
//*
//! [3] The keyof Constraint.
//*
//*
const extractAndConvert = (obj, key) => {
    return `Value: ${obj[key]}`;
};
const ex = extractAndConvert({ name: "Max" }, "name");
console.log(ex);
//*
//*
//! [4] Generic Classes.
//*
//*
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }
    getItems() {
        return [...this.data];
    }
}
//?
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
//?
const numberStorage = new DataStorage();
numberStorage.addItem(10);
numberStorage.addItem(220);
numberStorage.addItem(220);
numberStorage.addItem(210);
numberStorage.removeItem(30);
console.log(numberStorage.getItems());
//?
const objStorage = new DataStorage();
const maxObj = { name: "Max" };
objStorage.addItem(maxObj);
objStorage.addItem({ name: "Manu" });
objStorage.removeItem({ name: "Max" });
console.log(objStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const username = {
    name: "X",
    // age: 10 //! Error
};
const userage = {
    age: 10,
    // name: "X"//! Error
};
//?
//? [.] Readonly.
//?
const numbers = [10, 20];
