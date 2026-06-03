// Triangle Classifier is a program that classifies a triangle based on the lengths of its sides. The program takes three inputs, which represent the lengths of the sides of the triangle, and determines whether the triangle is equilateral, isosceles, or scalene.

let a=20;
let b=10;
let c=30;

if (a===b && b===c){
    console.log("Equilateral Triangle");
}else if (a===b || b===c || a===c){
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}