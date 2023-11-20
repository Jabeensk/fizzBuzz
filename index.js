//console.log("runing scipt");
// console.log("=============Part 1=============");
// Loop through numbers from 1 to 100
// for (let i = 1; i <= 100; i++) {
  
    // Check if the number is divisible by both 3 and 5
    // if (i % 3 === 0 && i % 5 === 0) {
        
    //     console.log("Fizz Buzz");
    // } 
    // Check if the number is divisible by 3
    // else if (i % 3 === 0) {
        
        // console.log("Fizz");
    // } 
    // Check if the number is divisible by 5
    // else if (i % 5 === 0) {
        
        // console.log("Buzz");
    // } 
    // If the number is not divisible by 3 or 5, print the number itself
    // else {
        // console.log(i);
    // }
// console.log("===============Part 2====================");

// }

//*Prime Time

for (let n = 5; n <= 10; n++) {
    let isPrime = true; 

    for(let i  =2; i < n; i++) {
        2,3,4
        if (n % i == 0) {
            isPrime = false; // not a prime numer
            break;
        }

    }
    if (isPrime) {
        console.log(`${n} is prime number.`);
    }
}







// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem.
//  There are a few different ways to do this - experiment with what you think is the most efficient. 
// Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:


// If a number is divisible by 5, log “Buzz.”

// If a number is not divisible by either 3 or 5, log the number.