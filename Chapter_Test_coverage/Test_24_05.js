
// Rules:
// - 90 and above => EXCELLENT.
// - 75 to 89 => GOOD.
// - 50 to 74 => NEEDS_PRACTICE.
// - Below 50 => REVISIT.

function classifyJsBasicsScore(score) {
  score = 95;
  if (score >= 90) {
    return "Excellent.";
    console.log("Score: " + score + " - Excellent.");

  } else if (score >= 75 && score <= 89) {
    return "Good";
    console.log("Score: " + score + " - Good.");
  }
  else if (score >= 50 && score <= 74) {
    return "NEEDS_PRACTICE";
    console.log("Score: " + score + " - Needs Practice.");
  }
  else {
    return "REVISIT";
    console.log("Score: " + score + " - Revisit.");
  } 
  
}

// Create a reusable label normalizer for JavaScript QA utilities.

// Rules:
// - Trim leading and trailing spaces.
// - Convert text to lowercase.
// - Replace non-alphanumeric groups with a single hyphen.
// - Prefix the result with "js-basic-".


function normalizeJsBasicsLabel(label) {
    label = label.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      if (!label) {
    return "js-basic-default"; 
  } //
return ("js-basic-" + label);
}




// Create a standard label for a test run dashboard.

// Rules:
// - Trim the suite name.
// - Lowercase the environment.
// - Append build number as build-N.
// - Join the three parts with " | ".


function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    suiteName = suiteName.trim();
    environment = environment.toLowerCase();
    buildNumber = "build-" + buildNumber;
    return suiteName + " | " + environment + " | " + buildNumber;
}