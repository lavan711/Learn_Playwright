// Count how many check result strings represent a pass.


// Rules:

// - Treat matching as case-insensitive.

// - A passing item contains the word "pass".

// - Return only the count.


// Input: countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"])
// Expected: 2



// Case 2

// Input: countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"])
// Expected: 2

// Case 3
// Input: countPassingJsBasicsChecks(["one-fail","two-skip"])
// Expected: 0 


function countPassingJsBasicsChecks(checks) {
    let count = 0;
    for (let check of checks) {
        if (check.trim().toLowerCase().includes("pass")) {
            count++;
        }
    }
    return count;
}