"use strict";
console.log("(========== Week four ==========)");
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
// Start Edit And Fix
class RPG extends Game {
    constructor(title, price, rate) {
        super(title, price);
        this.price = price;
        this.rate = rate;
    }
    getLocation() {
        return "Location";
    }
    getDiscount() {
        return "Discount";
    }
}
class Action extends Game {
    constructor(title, price, rate, company) {
        super(title, price);
        this.price = price;
        this.rate = rate;
        this.company = company;
    }
    getLocation() {
        return "Location";
    }
    getDiscount() {
        return "Discount";
    }
}
// End Edit And Fix
// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"
console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"
//!>= >=============================================================< <= //
//!>= >=============================================================< <= //
//
//*[2]
//
// Write Function Code Here
const showTypes = (st, n, b) => {
    console.log(`${st || "Nothing"} - ${n || "Nothing"} - ${b || "Nothing"}`);
};
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes("String")); // String - Nothing - Nothing
console.log(showTypes("String", 100)); // String - 100 - Nothing
console.log(showTypes("String", 100, true)); // String - 100 - true
//
//*[2]
//
// Write Class Code Here
class GameDetails {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(x) {
        console.log(`The Discount Is ${x}`);
    }
}
// Do Not Edit Here
let game_1 = new GameDetails("Ys", 100);
let game_2 = new GameDetails(2064, 100); // There's A Game Called "2064"
console.log(game_1.title); // "Ys"
console.log(game_1.price); // 100
game_1.getDiscount("50"); // "The Discount Is 50"
console.log(game_2.title); // 2064
console.log(game_2.price); // 100
game_2.getDiscount(80); // "The Discount Is 80"
