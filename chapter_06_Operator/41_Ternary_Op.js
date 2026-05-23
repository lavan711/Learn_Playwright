// ============================================================
// 41 — Ternary Operator in JS
// ============================================================

// Ternary Operator: A concise way to perform conditional expressions. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. 
//   The syntax is: condition ? exprIfTrue : exprIfFalse


let age = 20;
let canVote = age >= 18 ? "Yes, you can vote!" : "No, you are too young to vote.";
console.log(canVote);

let result = 5 > 3 ? "Yes" : "No";
console.log(result);



let a = 10;
a += 10;
a =-10; // a = -10;  // a is assigned the value of -10, not a = a - 10
console.log(a);

// Example: Using Ternary Operator for Testing
let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = (actualStatusCode === expectedStatusCode) ? "✅ PASS" : "❌ FAIL";
console.log(testResult);  // ✅ PASS


// Example: Nested Ternary Operator
let environment = "staging";
let baseUrl = (environment === "prod")
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);

let isCI = true;
let browserMode = (isCI) ? "Headless" : "Headed";
console.log("Launching browser in:", browserMode, "mode");



let responseTime = 850;  // ms
let sla = 1000;          // ms 
let slaStatus = (responseTime <= sla) ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);


//Simple Ternary Operator

let age = 26;
let is_lavan_goa = age > 26 ? "Yes, she will go" : "else she will not go";
console.log(is_lavan_goa);


// Nested Ternary Operator

let age_prem = 30;
let is_prem_d = age_prem > 18 ? (age_prem > 26 ? "Drink" : "No Drink") : "NO GOA";
console.log(is_prem_d);


// Real World Example: HTTP Status Code Classification

let statusCode = 404;
let category =
    (statusCode < 300) ? "Success" :
        (statusCode < 400) ? "Redirect" :
            (statusCode < 500) ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);


// Real World Example: Temperature Classification


let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);


// Grade Classification
let score = 75;
let grade = (score >= 90) ? "A" :
    (score >= 80) ? "B" :
        (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";
console.log(`Score: ${score} | Grade: ${grade}`);