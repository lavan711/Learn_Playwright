//speard operator
//
function add(a, b, c) {
return a + b + c;

}
let num = [1, 2, 3];
add(...num);
console.log(add(...num)); // 6


//some operations with spread operator
let responseCodes = [200, 201, 404]; 
function hasError(...codes) {
    return codes.some(c => c >= 400);
}
hasError(...responseCodes);
console.log(hasError(...responseCodes));  // true, because 404 is an error code