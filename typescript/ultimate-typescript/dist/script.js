"use strict";
let sales = 123456789;
let course = "TypeScript";
let isPublished = true;
let level;
level = 1;
level = "hello";
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let listOfNumbers = [];
let user = [1, "Imran"];
user.push(11);
console.log(user);
const userInfo = [100, "Imran Potter"];
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
    Size["ExtraLarge"] = "xl";
})(Size || (Size = {}));
;
let mySize = Size.ExtraLarge;
console.log(mySize);
;
let tshirtSize = "l";
console.log(tshirtSize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2025);
let employee = {
    id: 1,
    name: "John",
    retire: function (date) {
        console.log(date);
    }
};
console.log(employee);
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return (parseInt(weight) * 2.3);
    }
}
kgToLbs(10);
kgToLbs("10");
let weight;
let textBox = {
    resize: () => { },
    drag: () => { }
};
let quantity = 50;
let Quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hola");
    }
}
greet(null);
greet("john");
function getCustomer(id) {
    return id === 0 ? null : { birthdate: new Date() };
}
;
let customer = getCustomer(0);
console.log(customer?.birthdate);
console.log(customer?.birthdate?.getFullYear());
let log = null;
log?.("a");
let speed = null;
let ride = {
    speed: speed ?? 30,
};
let phone = document.getElementById("phone");
phone.value;
function processEvents() {
    while (true) { }
}
function reject(message) {
    throw new Error(message);
}
reject("hello");
//# sourceMappingURL=script.js.map