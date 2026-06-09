let a = [1, 2, 3, 3]; // This is example of array

// 2D Array - An array of arrays, where each element is itself an array.
let Lav_grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// 1 -> 0,0 => 1
// 2 -> 0,1 => 2
// 3 -> 0,2 => 3

// Print all the elements
for (let i = 0; i < 3; i++) { //  i = 0,1,2
    for (let j = 0; j < 3; j++) {
        console.log(Lav_grid[i][j]);
    }
    console.log("\n");
}

// Debug the values