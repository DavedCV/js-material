const express = require("express");

const app = express();

// sample middlware function
const myLogger = (req, res, next) => {
  console.log("Request IP: " + req.ip);
  console.log("Request method: " + req.method);
  console.log("Request date: " + new Date());

  next();
}

app.use(myLogger);
app.get("/", (req, res) => {
  console.log("Helloo!");
});

app.listen(8080);
