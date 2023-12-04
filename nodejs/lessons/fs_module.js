//const fs = require("fs");
const fs = require("fs/promises");

// rename async function ------------------------------------------------------

/*
fs.rename("before.json", "after.json", (err) => {
  if (err) return console.log("Error: " + err);
});
*/

// rename sync function --------------------------------------------------------
// blocking operation

/*
try {
  fs.renameSync("before.json", "after.json");
} catch (err) {
  console.err(err);
}
*/

// promise base API ------------------------------------------------------------


(async function () {
  const filename = "test.txt";

  try {
    const data = await fs.readFile(filename, "utf-8");
    console.log(data);

    const content = "Some content!\n";
    await fs.appendFile(filename, content);
    console.log("Wrote some content!");

    const newData = await fs.readFile(filename, "utf-8");
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
})();
