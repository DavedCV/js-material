const fs = require("fs");
const fsPromises = fs.promises;

fs.readFile("test2.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Async callbacks:", data);
});

try {
  const data = fs.readFileSync("test2.txt", "utf8");
  console.log("Sync:", data);
} catch (err) {
  console.error(err);
}

(async () => {
  try {
    const data = await fsPromises.readFile("test2.txt", "utf8");
    console.log("Async/await:", data);
  } catch (err) {
    console.error(err);
  }
})();
