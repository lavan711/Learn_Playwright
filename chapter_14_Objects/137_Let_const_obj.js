let config1 = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

config1 = { browser: "Safari" }; // Reassigning the variable is allowed with let, so config1 now references a new object with the browser property set to "Safari".
console.log(config1);

// print
console.log("---- ")

const config = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config.browser = "Firefox"; 
config.timeout = 5000;//
config.retries = 2; 
console.log(config);

//config = { browser: "Safari" };
console.log(config);