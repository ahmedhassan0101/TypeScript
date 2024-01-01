//! [1] Builtin Generics.
//*
//*
const names: Array<string> = [""]; // string[]
names[0].split(" ");

const promise: Promise<number> = new Promise((resolve, reject) => {
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
const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
//?
interface Lengthy {
  length: number;
}
const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
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
const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return `Value: ${obj[key]}`;
};
const ex = extractAndConvert({ name: "Max" }, "name");
console.log(ex);
//*
//*
//! [4] Generic Classes.
//*
//*
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
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
const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
//?
const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(220);
numberStorage.addItem(220);
numberStorage.addItem(210);
numberStorage.removeItem(30);
console.log(numberStorage.getItems());
//?
const objStorage = new DataStorage<object>();
const maxObj = { name: "Max" };
objStorage.addItem(maxObj);
objStorage.addItem({ name: "Manu" });
objStorage.removeItem({ name: "Max" });
console.log(objStorage.getItems());
//*
//*
//! [4] Generic Utility Types.
//*
//*
//?
//? [1] Partial.
//?
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
//?
//? [2] Omit.
//?
interface Person {
  name: string;
  age: number;
  email: string;
}
interface Skills {
  f_End: string;
  b_End: number;
}
interface PersonName extends Omit<Person, "age" | "email"> {}
const username: PersonName = {
  name: "X",
  // age: 10 //! Error
};
//?
//? [3] Pick.
//?
interface PersonAge extends Pick<Person, "age"> {}
const userage: PersonAge = {
  age: 10,
  // name: "X"//! Error
};
interface OptionalPerson extends Partial<Person> {}
//?
//? [4] Required.
//?
interface RequiredPerson extends Required<Person> {}
//?
//? [5] Merge Utilities.
//?
interface Skills {
  frontend: string;
  backend: number;
}
interface Employee extends Partial<Person>, Required<Skills> {}
//?
//? [.] Readonly.
//?
const numbers: Readonly<number[]> = [10, 20];
// numbers.push('Manu'); //! Error
// numbers.pop(); //! Error

//todo=> we can use (Utilities) with (Type) Too
type oneTwo = {
  one: number;
  two: number;
};
type one = Omit<oneTwo, "two">;
