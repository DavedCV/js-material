const path = require("path");

console.log("filename var:", __filename);

// Base file name
console.log("basename:", path.basename(__filename));

// Directory name
console.log("dirname:", path.dirname(__filename));

// File extension
console.log("file extension:", path.extname(__filename));

// Create path object
console.log("path object:", path.parse(__filename));

// Concatenate paths
console.log("Concatenate paths:", path.join(__dirname, "test", "hello.html"));
