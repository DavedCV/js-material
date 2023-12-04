/* 
A URL string is a structured string containing multiple meaningful components. When parsed, a URL object is returned containing properties for each of these components.
*/

let myUrl = new URL("https://example.org");
console.log(myUrl);

myUrl = new URL("/foo", "https://example.org/");
console.log(myUrl);

myUrl = new URL("https://example.org/foo#bar");
console.log(myUrl.hash);

myUrl = new URL("https://example.org:81/foo");
console.log(myUrl.host);
console.log(myUrl.hostname);

myUrl = new URL("https://example.org/foo/bar?baz");
console.log(myUrl.origin);

myUrl = new URL("https://example.org/abc/xyz?123");
console.log(myUrl.pathname);

myUrl = new URL("https://example.org/?abc=123");
console.log(myUrl.searchParams.get("abc"));

myUrl.searchParams.append("abc", "xyz");
console.log(myUrl.href);
