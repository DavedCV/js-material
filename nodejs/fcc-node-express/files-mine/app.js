const http = require("http");
const fs = require("fs");
const path = require("path");

// get all files
const homePage = fs.readFileSync("./navbar-app/index.html");
const homeStyles = fs.readFileSync("./navbar-app/styles.css");
const homeLogic = fs.readFileSync("./navbar-app/browser-app.js");
const homeLogo = fs.readFileSync("./navbar-app/logo.svg");

const server = http.createServer((req, res) => {
  // handle specific paths
  switch (req.url) {
    case "/styles.css":
      res.writeHead(200, { "content-type": "text/css" });
      res.end(homeStyles);
      break;
    case "/logo.svg":
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.end(homeLogo);
      break;
    case "/browser-app.js":
      res.writeHead(200, { "content-type": "text/javascript" });
      res.end(homeLogic);
      break;
    // home page
    case "/":
      res.writeHead(200, { "content-type": "text/html" });
      res.end(homePage);
      break;
    // about page
    case "/about":
      res.writeHead(200, { "content-type": "text/html" });
      res.end("<h1>About Page!</h1>");
      break;
    // error page
    default:
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>Not found!</h1>");
      break;
  }
});

server.listen(5000);
