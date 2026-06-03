// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// incudes retuns true if the substring is found in the string, otherwise it returns false.
console.log(url.includes("staging")); 
console.log(url.includes("production"));

// startsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true


// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));

//search - similar to indexOf but it can also take a regular expression as an argument. It returns the index of the first match or -1 if not found.
let url = "https://staging.vwo.com/api/login?retry=true";
console.log(url.search(/login/));
console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 


