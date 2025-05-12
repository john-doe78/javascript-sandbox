"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, "Apple");
let pair_2 = new KeyValuePair("fruit", "apple");
function wrapInArray(value) {
    return [value];
}
wrapInArray(1);
function fetch(url = "") {
    console.log(url);
    return {
        data: null,
        error: null
    };
}
let result = fetch("www.google.com");
result.data?.username;
function echo(value) {
    return value;
}
echo("1");
class Customer2 {
    constructor(name) {
        this.name = name;
    }
}
function echo2(value) {
    return value;
}
echo2({ name: "John Doe" });
function echo3(value) {
    return value;
}
echo3(new Customer2("John Doe"));
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(key, value) {
        return this._objects.find((obj) => obj[key] === value);
    }
}
let store = new Store();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);
class CompressibleStore extends Store {
    compress() { }
}
let store2 = new CompressibleStore();
store2.compress();
let product3 = {
    name: "a",
    price: 1
};
//# sourceMappingURL=generics.js.map