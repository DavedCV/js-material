/* GET REQUESTS ----------------------------------------------------------------
--------------------------------------------------------------------------------
*/

// Perform http requests using axios library -----------------------------------

/*
const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res);
    console.log(`status code: ${res.status}`);
  })
  .catch((error) => {
    console.error(error);
  });
*/

// using node.js standard modules ----------------------------------------------

/*
const { request } = require("http");
const https = require("https");

const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/users",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
*/

/* POST REQUESTS ---------------------------------------------------------------
--------------------------------------------------------------------------------
*/

// using axios -----------------------------------------------------------------

/*
const axios = require("axios");

axios
  .post("https://jsonplaceholder.typicode.com/todos", { todo: "Buy milk" })
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
*/

// using node.js standard modules ----------------------------------------------

/*
const https = require("https");

const data = JSON.stringify({
  todo: "Buy milk",
});

const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/todos",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.write(data);
req.end();
*/
