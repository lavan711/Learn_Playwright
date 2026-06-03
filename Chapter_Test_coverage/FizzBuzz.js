// FizzBuzz is a common programming problem that is often used to test a developer's understanding of basic programming concepts. The task is to print the numbers from 1 to 100, but for multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz", and for numbers that are multiples of both 3 and 5, print "FizzBuzz".
for(let number=1;number<101;number++){
    if(number%3===0){
        console.log("Fizz");
    }
    else if(number%5===0){
        console.log("Buzz");
    }
    else if (number%3===0 && number%5===0){
        console.log("FizzBuzz");
    }
    else{
        console.log(number);
    }
}