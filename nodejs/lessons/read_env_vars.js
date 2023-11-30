/*
--------------------------------------------------------------------------------
The process core module of Node.js provides the env property which hosts all the environment variables that were set at the moment the process was started. 

running from cli: USER_ID=239482 USER_KEY=foobar node read_env_vars.js
*/

// console.log("user id:", process.env.USER_ID);
// console.log("user key:", process.env.USER_KEY);

/* 
--------------------------------------------------------------------------------
running with dotenv file and dotenv package
*/

const resp = require("dotenv").config();

console.log(process.env.USER_ID); // "239482"
console.log(process.env.USER_KEY); // "foobar"
console.log(process.env.NODE_ENV); // "development"

console.log(resp); // returned object
