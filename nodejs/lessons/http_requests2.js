const https = require("https");

https.get("https://jsonplaceholder.typicode.com/users", (res) => {
  let data = [];
  const headerDate =
    res.headers && res.headers.date ? res.headers.date : "no response date";
  console.log("Status code:", res.statusCode);
  console.log("Date in response header:", headerDate);

  res.on("data", (chunk) => {
    data.push(chunk);
  });

  res
    .on("end", () => {
      console.log("Response ended: ");
      const users = JSON.parse(Buffer.concat(data).toString());

      for (const user of users) {
        console.log(`Got user with id: ${user.id}, name: ${user.name}`);
      }
    })
    .on("error", (err) => {
      console.log("Error: ", err.message);
    });
});
