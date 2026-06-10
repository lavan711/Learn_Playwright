    
// Create a reusable label normalizer for JavaScript QA utilities.

// Rules:
// - Trim leading and trailing spaces.
// - Convert text to lowercase.
// - Replace non-alphanumeric groups with a single hyphen.
// - Prefix the result with "js-basic-".

// Case 1
// Input: normalizeJsBasicsLabel(" Login Button ")

// Expected: "js-basic-login-button"

// Case 2
// Input: normalizeJsBasicsLabel("User Profile: Edit!")

// Expected: "js-basic-user-profile-edit"

// Case 3
// Input: normalizeJsBasicsLabel("---Search@@Box---")

// Expected: "js-basic-search-box"

// Case 4
// Input: normalizeJsBasicsLabel(" ")


//include the all 4 cases in the code and print the output for each case.
//Expected: "js-basic"


function normalizeJsBasicsLabel(label) {
  let a = label.trim().toLowerCase().replace(/[^a-z0-9]/g, "-");
  a= "js-basic-" + a;
  a = a.replace(/-+$/, '');
  a=a.replace(/-+/g, '-')
  return a;  
}


console.log(normalizeJsBasicsLabel(" Login Button "));
console.log(normalizeJsBasicsLabel("User Profile: Edit!"));
console.log(normalizeJsBasicsLabel("---Search@@Box---"));
console.log(normalizeJsBasicsLabel(" "));