## Initialize & Configure TypeScript Project

* `npm init / npm int -y`  
* `npm install typescript --save-dev` / `npm install -D typescript`
    * install as `devDependency` (preferred method)
* `npm install typescript`
    * install as `dependency`
* `npm install -g typescript`
    * install as globally
* `npm install typescript@5.4.5`
    * install specific version
* Configuration for typescript files
    * `npx tsc --init`
    * this creates `tsconfig.json` file
* Compile single file
    * `npx tsc src/script.ts`
* Compile project (all files)
    * `npx tsc`

## Fix Module Issus

Since typescript doesn't add `.js` extension after the compilation.

to add it dynamically install `npm install --save-dev tsc-esm-fix`

* inside `package.json`
    ```json
    "scripts": {
    "build": "tsc && tsc-esm-fix dist"
  },
  ```
* Compile `npm run build`

Since many popular js libraries are written purely in JavaScript

to make compatible with them in typescript a [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) repo is introduced.

Just install new packages `npm install @types/lodash -D`

after clone, run this program `npm install`
