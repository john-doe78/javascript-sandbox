/*
JavaScript types
    * number
    * string
    * boolean
    * null
    * undefined
    * object
TypeScript extends
    * any
    * unknown
    * never
    * enum
    * tuple
*/

let sales: number = 123_456_789;
let course: string = "TypeScript";
let isPublished: boolean = true;

let level; // any
level = 1;
level = "hello";

function render(document: string) {
    console.log(document);
}

// array
let numbers: number[] = [1, 2, 3];
let listOfNumbers = []; // any

// tuple [fixed length array]
let user: [number, string] = [1, "Imran"];

// Tuple types in TypeScript enforce the structure at assignment time and on direct index access, 
// but methods like .push() and .pop() are inherited from arrays 
// and aren’t restricted at compile time — even for tuples.
user.push(11);
console.log(user);

// solution
const userInfo: readonly[number, string] = [100, "Imran Potter"];

// enum
enum Size {Small = 's', Medium = 'm', Large = 'l', ExtraLarge = "xl"};
let mySize: Size = Size.ExtraLarge;
console.log(mySize);

// generate optimized code
const enum dressSize {Small = 's', Medium = 'm', Large = 'l', ExtraLarge = "xl"};
let tshirtSize: dressSize = dressSize.Large;
console.log(tshirtSize);

// functions
function calculateTax(income: number, taxYear: number = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(10_000, 2025);

// objects
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "John",
    retire: function(date: Date) {
        console.log(date);
    }
};

console.log(employee);

// type alias
type Employee = {
    readonly id: number,
    name: string,
    greet: (message: string) => void
};

// union types
function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return (parseInt(weight) * 2.3);
    }
}

kgToLbs(10);
kgToLbs("10");

// intersection
let weight: number & string;

type Dragable = {
    drag: () => void,
};

type Resizeable = {
    resize: () => void,
};

type UIWidget = Dragable & Resizeable;
let textBox: UIWidget = {
    resize: () => {},
    drag: () => {}
}; 

// literal types
let quantity: 50 | 100 = 50; // value can only be 50 or 100 
type quantity = 50 | 100;
let Quantity: quantity = 100;

// nullable values
function greet(name: string | null) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log("Hola");
    }
}

greet(null); // error
greet("john");

// optional chaining
type Customer = {
    birthdate: Date,
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null: {birthdate: new Date()}
};

let customer = getCustomer(0);
// optional property access operator
console.log(customer?.birthdate); // only execute if customer is not null or undefined
console.log(customer?.birthdate?.getFullYear());

// optional element access operator
// customer?.[0];

// optional call operator
let log: any = null;
log?.("a"); // only execute if log is an actual function

// nullish coalescing
// https://blog.logrocket.com/optional-chaining-nullish-coalescing-typescript/
let speed: number | null = null;
let ride = {
    speed: speed ?? 30,
};

// type assertion
let phone = document.getElementById("phone") as HTMLInputElement;
phone.value;

// unknown type
// function reRender(document: unknown) {
//     document.move();
//     document.fly();
//     document.eat();
// };

// never 
function processEvents(): never {
    while (true) {}
}

function reject(message: string): never {
    throw new Error(message);
}

reject("hello");
// console.log("Hello, World");



