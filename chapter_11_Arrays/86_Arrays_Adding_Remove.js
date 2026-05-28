let arr = [1, 2, 3];
console.log(arr);

// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

arr.push(5, 6);
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 5, 6]


// Remove from BEGINNING 
arr.shift();
console.log(arr); // [1, 2, 3, 5, 6]


console.log(arr);
arr.unshift(100); // [100, 1, 2, 3, 5, 6]
console.log(arr); // [100, 1, 2, 3, 5, 6]
arr.shift(); 
console.log(arr); // [1, 2, 3, 5, 6]