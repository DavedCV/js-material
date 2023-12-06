const http = require("http");

// Create server object
http
  .createServer((req, res) => {
    console.log("Serving request!");
    
    // Write response
    res.write("Hello World");
    res.end();
  })
  .listen(5000, () => console.log("Server running..."));
