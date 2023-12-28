//! [1].
//
//
// type Person = {
//   readonly name: string;
//   age: number;
//   greet(phrase: string): void;
// };
interface Info {
  readonly name?: string;
  outputName?: string;
  age: number;
  // sayHello() : string;
  // sayWelcome: () => string;
  // getDouble(num: number) : number;
}
interface Greetable {
  greet(phrase: string): void;
}
let user: Info & Greetable = {
  name: "Name",
  age: 20,
  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  },
};
user.greet("welcome");
// user.name = "new name" //! Error
//
//
//! [2] implements.
class Person implements Info, Greetable {
  name?: string;
  constructor(public age: number, public approval: boolean, n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}
let userOne: Info & Greetable;
userOne = new Person(25,true ,"One");
console.log(userOne);
userOne.greet("Hello");
//
//
//! [2] Extends.
//
//
interface interfaceOne {
  ptopertyOne: string;
}
interface interfaceTwo {
  propertyTwo: string;
}
interface Combine extends interfaceOne, interfaceTwo {
  propertyThree: string;
}
let Obj: Combine = {
  ptopertyOne: "One",
  propertyTwo: "Two",
  propertyThree: "Three",
};
//
//
//! [3]Interfaces as Function Types.
//
//
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
//
//
//! [3]ReOpen The Interface.
//
//
// Homepage
interface Settings {
  readonly theme: boolean;
  font: string;
}
// Articles Page
interface Settings {
  sidebar: boolean;
}
// Contact Page
interface Settings {
  external: boolean;
}
let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true,
};
