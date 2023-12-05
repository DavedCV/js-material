const fs = require("fs");

const readStream = fs.createReadStream("./streams&buffers/test.txt", "utf-8");
const writeStream = fs.createWriteStream("./streams&buffers/test2.txt");

readStream.on("data", (chunk) => {
  console.log(`------ NEW CHUNK - LENGTH ${chunk.length} ------`);
  // console.log(chunk, "\n");

  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});
