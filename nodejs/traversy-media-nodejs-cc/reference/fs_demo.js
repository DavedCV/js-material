const fs = require("fs");
const path = require("path");

// Create folder asynchronously
/* fs.mkdir(path.join(__dirname, "/test"), (err) => {
  if (err) throw err;
  console.log("Folder created...");
}); */

// Create and write to file asynchronously
/* fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("File written to...");
  }
);
*/

// Append to file asynchronously
/* fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  " I love Node.js",
  (err) => {
    if (err) throw err;
    console.log("File written to...");
  }
); */

// Read file asynchronously
/* fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log("Reading file data:");
  console.log(data);
}); */

// Rename file asynchronously
fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
