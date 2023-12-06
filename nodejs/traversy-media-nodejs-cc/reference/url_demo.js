const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized url
console.log("Serialized url:", myUrl.href);
console.log("Serialized url with toString:", myUrl.toString());

// Host (root domain)
console.log("Host:", myUrl.host);

// Hostname (does not get port - host does)
console.log("Hostname:", myUrl.hostname);

// Pathname
console.log("Pathname:", myUrl.pathname);

// Serialized query
console.log("Query:", myUrl.search);

// Params object
console.log("Params object:", myUrl.searchParams);

// Add param
console.log("Add param: abc=123");
myUrl.searchParams.append("abc", "123");
console.log("Params object:", myUrl.searchParams);
