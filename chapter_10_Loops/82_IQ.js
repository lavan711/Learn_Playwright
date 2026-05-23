// loop not execute even once if the condition is false. Because the condition is checked before the code is executed.

let count = 10;
while (count < 5) {
    console.log(count); // This will not execute because the condition is false. The loop will not execute even once.
    count++;
}

// Do while loop will execute the code at least once, even if the condition is false. Because the condition is checked after the code is executed.
let n = 1;
do {
    console.log(n); // There is no condition to stop the loop, so it will execute indefinitely. This will print 1 indefinitely.
}  while (n < 3);