const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  /*   switch (req.url) {
    case "/":
      fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
    case "/about":
      fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
    case "/api/users":
      const users = [
        { name: "Bob", age: 40 },
        { name: "John", age: 30 },
      ];

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify404(users));
      break;
    default:
      res.end("<h1>404</h1>");
      break;
  } */

  // Build file path
  const filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension of file
  const extname = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    default:
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err && err.code === "ENOENT") {
      // Page not found
      fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data, "utf8");
      });
    } else if (err) {
      res.writeHead(500);
      res.end(`Server Error: ${err.code}`);
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
