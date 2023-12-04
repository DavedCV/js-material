const fs = require("fs");

const content = "Some content!";

fs.writeFile("test2.txt", content, (err) => {
  if (err) {
    console.log("Error:", err);
  }
});
