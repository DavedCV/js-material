"use strict";

const numArgs = process.argv.slice(2)
console.log(numArgs.reduce((sum, num) => sum + Number(num), 0));
