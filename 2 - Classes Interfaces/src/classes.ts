class Department {
  static fiscalYear = 2020;
  name: string;
  id: string;
  // private employees: string[] = [];
  protected employees: string[] = [];
  constructor(n: string, id: string) {
    this.name = n;
    this.id = id;
  }
  static createEmployee(name: string) {
    return { name: name };
  }
  discribe(this: Department) {
    console.log(`Department: ${this.name}`);
  }
  addEmploee(emploee: string) {
    //validation etc
    this.employees.push(emploee);
  }
  emploeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
//! [1] Accessing.
const accounting = new Department("Accounting", "D1");
console.log(accounting); //Obj
accounting.discribe(); //Department Accounting
// const accountingCopy = {name: "a", discribe: accounting.discribe };
// accountingCopy.discribe();  //Department undefined => a
//
//
//! [2] Private & Public Accessing.
// accounting.employees[2] = "noBody" //! Error
//* Property 'employees' is private and only accessible within class 'Department'.
accounting.addEmploee("One");
accounting.addEmploee("Two");
accounting.emploeeInfo();
//
//
//! [3] Shorthand Initialization & Readonly Property.
//
//
class Shorthand {
  // private readonly id:string;
  // private name: string;
  constructor(private readonly id: string, public name: string) {}
  shorthandMethod(this: Shorthand) {
    console.log(`Id: ${this.id}`);
    console.log(`Name: ${this.name}`);
  }
  changeProperties(newProp: string) {
    // this.id = newProp; //! Error
    //* Cannot assign to 'id' because it is a read-only property.
  }
}
const short = new Shorthand("D1", "I'm Short");
short.shorthandMethod();
//
//
//! [4] Inheritance & Overriding Properties & Getters & Setters.
//
//
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super("IT", id); //super() call must be first.
    this.admins = admins;
  }
}
//?
class AccountingDep extends Department {
  public set mostRecentReport(text: string) {
    if (!text) {
      throw new Error("Please pass in a valid value!.");
    }
    this.addReport(text);
  }
  constructor(
    id: string,
    public reports: string[],
    private lastReports: string
  ) {
    super("Accounting", id); //super() call must be first.
  }
  public get mostRecentReport() {
    if (this.lastReports) {
      return this.lastReports;
    }
    throw new Error("No report found.");
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReports = text;
  }
  printReprts() {
    console.log(this.reports);
  }
  addEmploee(emploee: string): void {
    if (emploee === "Max") {
      return;
    }
    this.employees.push(emploee);
    //Property 'employees' is private and only accessible within class 'Department'
    // We can access to the property within based class if it was "Protected" not "Private".
  }
}
const account = new AccountingDep("D3", [], "");
account.addReport("report_1");
account.addReport("report_2");
account.printReprts();
console.log(account.mostRecentReport);
account.mostRecentReport = "lastReport";
console.log(account.mostRecentReport);
//
//
//! [5]Class Static Members.
//
//
class User {
  private static created: number = 0;
  static getCount(): void {
    console.log(`${this.created} Objects Created`);
  }
  constructor(public username: string) {
    User.created++;
  }
}

let u1 = new User("Elzero");
let u2 = new User("Web");
let u3 = new User("School");
// console.log(User.created);
User.getCount();
//
//
//! [6]
//
//

//
//
//! [7]
