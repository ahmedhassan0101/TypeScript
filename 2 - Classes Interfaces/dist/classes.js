"use strict";
class Department {
    constructor(n, id) {
        this.employees = [];
        this.name = n;
        this.id = id;
    }
    static createEmployee(name) {
        return { name: name };
    }
    discribe() {
        console.log(`Department: ${this.name}`);
    }
    addEmploee(emploee) {
        this.employees.push(emploee);
    }
    emploeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
const accounting = new Department("Accounting", "D1");
console.log(accounting);
accounting.discribe();
accounting.addEmploee("One");
accounting.addEmploee("Two");
accounting.emploeeInfo();
class Shorthand {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    shorthandMethod() {
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
    }
    changeProperties(newProp) {
    }
}
const short = new Shorthand("D1", "I'm Short");
short.shorthandMethod();
class ITDepartment extends Department {
    constructor(id, admins) {
        super("IT", id);
        this.admins = admins;
    }
}
class AccountingDep extends Department {
    set mostRecentReport(text) {
        if (!text) {
            throw new Error("Please pass in a valid value!.");
        }
        this.addReport(text);
    }
    constructor(id, reports, lastReports) {
        super("Accounting", id);
        this.reports = reports;
        this.lastReports = lastReports;
    }
    get mostRecentReport() {
        if (this.lastReports) {
            return this.lastReports;
        }
        throw new Error("No report found.");
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReports = text;
    }
    printReprts() {
        console.log(this.reports);
    }
    addEmploee(emploee) {
        if (emploee === "Max") {
            return;
        }
        this.employees.push(emploee);
    }
}
const account = new AccountingDep("D3", [], "");
account.addReport("report_1");
account.addReport("report_2");
account.printReprts();
console.log(account.mostRecentReport);
account.mostRecentReport = "lastReport";
console.log(account.mostRecentReport);
class User {
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
    constructor(username) {
        this.username = username;
        User.created++;
    }
}
User.created = 0;
let u1 = new User("Elzero");
let u2 = new User("Web");
let u3 = new User("School");
User.getCount();
