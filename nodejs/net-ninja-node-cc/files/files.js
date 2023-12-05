const fs = require("fs");

// reading files ---------------------------------------------------------------

fs.readFile("./files/test.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data.toString());
});

// writing files ---------------------------------------------------------------

fs.writeFile("./files/test2.txt", "Hello, world!", () => {
  console.log("File was written.");
});

// directories -----------------------------------------------------------------

if (fs.existsSync("./files/assets")) {
  fs.rmdir("./files/assets", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Directory removed.");
  });
} else {
  fs.mkdir("./files/assets", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Directory created.");
  });
}
