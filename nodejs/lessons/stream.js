const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {

  // It's inneficient to load all that big file to memory 
  /*
  fs.readFile("./big_file.txt", (err, data) => {
    if (err) throw err;

    res.end(data);
  });
  */

  const src = fs.createReadStream("./big_file.txt");
  src.pipe(res);
});
server.listen(8000);
