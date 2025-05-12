// generic class
class KeyValuePair<Key, Value> {
    constructor(public key: Key, public value: Value) {}
}

let pair = new KeyValuePair(1, "Apple");
let pair_2 = new KeyValuePair<string, string>("fruit", "apple");

// generic function
function wrapInArray<t>(value: t): t[] {
    return [value];
}

wrapInArray(1);

// generic interface
interface Result<t> {
    data: t | null;
    error: string | null;
}

function fetch<t>(url: string = ""): Result<t> {
    console.log(url);
    return {
        data: null,
        error: null
    };
}

interface User {
    username: string;
}

interface Product {
    title: string
}

let result = fetch<User>("www.google.com");
result.data?.username;

// generic constraints
function echo<t extends number | string>(value: t): t {
    return value;
}

echo("1");
// echo(true);

class Customer2 {
    constructor(public name: string) {}
}

function echo2<t extends {name: string}>(value: t): t {
    return value;
}
echo2({name: "John Doe"});

function echo3<t extends Customer2>(value: t): t {
    return value;
}

echo3(new Customer2("John Doe"));

// extending generic class
interface Product2 {
    name: string;
    price: number;
}

class Store<t> {
    private _objects: t[] = [];

    add(obj: t): void {
        this._objects.push(obj);
    }

    find(key: keyof t, value: unknown): t | undefined {
        return this._objects.find((obj) => obj[key] === value);
    }
}

let store = new Store<Product2>();
store.add({name: "a", price: 1});
store.find("name", "a");
store.find("price", 1);

class CompressibleStore<t> extends Store<t> {
    compress() {}
}

let store2 = new CompressibleStore<Product>();
store2.compress();

// type mapping
interface Product3 {
    name: string;
    price: number;
}

type ReadOnly<t> = {
    readonly [key in keyof t]: t[key];
}

type Optional<t> = {
    [key in keyof t]?: t[key];
}

type Nullable<t> = {
    [key in keyof t]: t[key] | null;
}

let product3: ReadOnly<Product3> = {
    name: "a",
    price: 1
} 

