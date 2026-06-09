
//Anagrams are words that have the same characters but in a different order. For example, "rail safety" is an anagram of "fairy tales". Write a function that checks if two provided strings are anagrams of each other. Ignore spaces and capitalization.


function isAnagram(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const format = str => str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    const sorted1 = format(str1).split('').sort().join('');
    const sorted2 = format(str2).split('').sort().join('');

    return sorted1 === sorted2;
}

// Example usage
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false


