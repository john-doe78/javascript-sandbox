"use strict";
class Account {
    constructor(id, owner, balance, nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this._balance += amount;
    }
    getBalance() {
        return `Your current balance is ${this._balance}`;
    }
}
let account = new Account(1, "John Doe", 2500);
account.deposit(500);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.getBalance());
class Accountv2 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return `Your current balance is ${this._balance}`;
    }
    set balance(value) {
        if (value <= 0) {
            throw new Error("Invalid Amount");
        }
        this._balance = value;
    }
}
let account_v2 = new Accountv2(2, "John Snow", 500);
account_v2.balance = 1000;
console.log(account_v2.balance);
let seatAssignment = {};
seatAssignment.A1 = "John";
seatAssignment.A2 = "Mosh";
seatAssignment["A3"] = "Snowden";
console.log(seatAssignment);
class Ride {
    start() {
        Ride._activeRides += 1;
    }
    stop() {
        Ride._activeRides -= 1;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
let ride2 = new Ride();
ride1.start();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walking() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
    takeRest() {
        console.log("taking a rest");
    }
}
let student = new Student(1, "John", "Doe");
console.log(student.fullName);
student.takeRest();
class Teacher extends Person {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
let people = [
    new Student(2, "Imran", "Potter"),
    new Teacher("Sudhakar", "Sharma")
];
for (let person of people) {
    console.log(person.fullName);
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
let circle = new Circle(10, "Red");
circle.render();
class Calendar2 {
    constructor(name) {
        this.name = name;
    }
    getEvents() { }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    sync() {
        throw new Error("Method not implemented.");
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=oop.js.map