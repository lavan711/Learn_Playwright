// Adding & Removing Elements in Arrays

let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr); // [1, 2, 3, 4, 5, 6] , index=0,1,2,3,4,5


//splice() method can be used to add or remove elements from any position in the array. 
// It takes three parameters: the starting index, the number of elements to remove, and the elements to add (if any).
// splice(start, deleteCount, ...itemsToAdd)
// arr.splice(2, 1);
// console.log(arr);

let arr = [1, 2, 3];
arr.splice(2, 0, 99); // add
console.log(arr);
arr.splice(2, 1, 90); // repace
console.log(arr);


// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

arr.splice(1, 2, 10, 20); // start at index 1, remove 2 elements (2 and 3), and add 10 and 20 at that position
console.log(arr); // [1, 10, 20, 4, 5, 6]