// create class
class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number, nickname?: string) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
        this.nickname = nickname;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }

        this._balance += amount;
    }

    getBalance(): string {
        return `Your current balance is ${this._balance}`;
    }
}

// create object
let account = new Account(1, "John Doe", 2500);
account.deposit(500);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.getBalance());


class Accountv2 {
    // parameter properties (shorter way)
    constructor(
        public readonly id: number, 
        public owner: string,
        private _balance: number
    ) {}

    get balance(): string {
        return `Your current balance is ${this._balance}`;
    }

    set balance(value: number) {
        if (value <= 0) {
            throw new Error("Invalid Amount");
        }
        this._balance = value;
    }
}

let account_v2 = new Accountv2(2, "John Snow", 500);
account_v2.balance = 1000;
console.log(account_v2.balance);

// typescript doesn't allow to add properties in object dynamically.
// to solve this problem in typescript use `index signature`
// which tells you can use any no of properties

// index signature 
let seatAssignment: {[key: string]: string} = {};
seatAssignment.A1 = "John";
seatAssignment.A2 = "Mosh";
seatAssignment["A3"] = "Snowden";
console.log(seatAssignment);

class Ride {
    // static property
    private static _activeRides: number = 0;

    start() {
        Ride._activeRides += 1;
    }

    stop() {
        Ride._activeRides -= 1;
    }

    static get activeRides(): number {
        return Ride._activeRides;
    }
}

let ride1 = new Ride();
let ride2 = new Ride();
ride1.start();
ride2.start();

console.log(Ride.activeRides);

// inheritance
class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    walking(): void {
        console.log("Walking");
    }
}

class Student extends Person {
    constructor(public id: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeRest(): void {
        console.log("taking a rest");
    }
}

let student = new Student(1, "John", "Doe");
console.log(student.fullName);
student.takeRest();

class Teacher extends Person {
    override get fullName(): string {
        return `Professor ${super.fullName}`;
    }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);

let people: Person[] = [
    new Student(2, "Imran", "Potter"),
    new Teacher("Sudhakar", "Sharma")
];

for (let person of people) {
    console.log(person.fullName);
}

// abstract class and methods
abstract class Shape {
    constructor(public color: string){}

    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    override render(): void {
        console.log("Rendering a circle");
    }
}

let circle = new Circle(10, "Red");
circle.render();

// interfaces
interface Calendar {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

// abstract
abstract class Calendar2 {
    constructor(public name: string){}

    abstract addEvent(): void;
    abstract removeEvent(): void;

    getEvents() {}
}

interface CloudCalendar extends Calendar {
    sync(): void;
}

class GoogleCalendar implements CloudCalendar {
    constructor (public name: string){}

    sync(): void {
        throw new Error("Method not implemented.");
    }
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}