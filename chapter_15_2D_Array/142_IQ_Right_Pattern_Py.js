// Right angle triangle pattern
// n = 3a
// *
// * *
// * * *
let n = 6; // number of rows in the triangle
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}