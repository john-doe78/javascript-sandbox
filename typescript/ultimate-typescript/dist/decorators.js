"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(constructor) {
    console.log("Component decorator called");
    constructor.prototype.uniqueTime = Date.now();
    constructor.prototype.insertIntoDOM = () => {
        console.log("Component in the DOM");
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
function Component2(value) {
    return function (constructor) {
        constructor.prototype.options = value;
        console.log("Component decorator is called");
        constructor.prototype.uniqueTime = Date.now();
        constructor.prototype.insertIntoDOM = () => {
            console.log("Component in the DOM");
        };
    };
}
function Pipe(constructor) {
    console.log("Pipe is calling");
    constructor.prototype.pipe = true;
}
let ProfileComponent2 = class ProfileComponent2 {
};
ProfileComponent2 = __decorate([
    Component2(1),
    Pipe
], ProfileComponent2);
function Log(target, methodName, descriptor) {
    let original = descriptor.value;
    descriptor.value = function (...args) {
        console.log('Before');
        original.call(this, ...args);
        console.log('After');
    };
}
class Person2 {
    say(message) {
        console.log(`Person says ${message}`);
    }
}
__decorate([
    Log
], Person2.prototype, "say", null);
let person2 = new Person2();
person2.say("Hello");
function Capitalize(target, methodName, descriptor) {
    let original = descriptor.get;
    descriptor.get = function () {
        let result = original.call(this);
        if (typeof result === "string") {
            return result.toUpperCase();
        }
        return result;
    };
}
class Person3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Person3.prototype, "fullName", null);
let person3 = new Person3("john", "doe");
console.log(person3.fullName);
//# sourceMappingURL=decorators.js.map