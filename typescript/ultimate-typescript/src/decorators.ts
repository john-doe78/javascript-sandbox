// https://blog.logrocket.com/practical-guide-typescript-decorators/

function Component(constructor: Function) {
    console.log("Component decorator called");
    constructor.prototype.uniqueTime = Date.now();
    constructor.prototype.insertIntoDOM = () => {
        console.log("Component in the DOM");
    }
}

@Component // another way to solve this is inheritance
class ProfileComponent {}

// parameterized decorator
function Component2(value: number) {
    return function (constructor: Function) {
        constructor.prototype.options = value;
        console.log("Component decorator is called");
        constructor.prototype.uniqueTime = Date.now();
        constructor.prototype.insertIntoDOM = () => {
            console.log("Component in the DOM");
        }
    }    
}

function Pipe(constructor: Function) {
    console.log("Pipe is calling");
    constructor.prototype.pipe = true;
}

@Component2(1)
@Pipe
class ProfileComponent2 {}

// method decorator
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    let original = descriptor.value as Function;
    descriptor.value = function(...args: any) {
        console.log('Before');
        original.call(this, ...args);
        console.log('After');
    }
}

class Person2 {
    @Log 
    say(message: string) {
        console.log(`Person says ${message}`);
    }
}

let person2 = new Person2();
person2.say("Hello");

function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    let original = descriptor.get as Function;
    descriptor.get = function() {
        let result = original.call(this);
        if (typeof result === "string") {
            return result.toUpperCase();
        }
        return result;
    }
}

// decorator on accessor
class Person3 {
    constructor(public firstName: string, public lastName: string) {}

    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person3 = new Person3("john", "doe");
console.log(person3.fullName);
