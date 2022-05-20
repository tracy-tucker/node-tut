// CommonJS --> every file in Node is a module (by default). Node uses the CommonJS Library
// Modules --> encaspulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");

// console.log(names);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

const data = require("./6-alternative-flavor");
console.log(data);
