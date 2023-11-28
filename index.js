//console.log("runing scipt");

console.log("=============Part 1=============");
// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        
        console.log("Fizz Buzz");
    } 
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
        
        console.log("Fizz");
    } 
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
        
        console.log("Buzz");
    } 
    // If the number is not divisible by 3 or 5, print the number itself
    else {
        // console.log(i);
    }
// console.log("===============Part 2====================");

}

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



console.log("===============Part 3============================");//Feeling Loopy

// csv stands for "comma-separated values"

// cvs string
let csvString1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26\n"

// csv string for testing
let csvString2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// The parseCSV function is designed to take a CSV string as input and process it to extract and log the individual rows of data.
function parseCVS(csvString) {
    console.log("csv String:\n", csvString);

    //cell variables
    let currentCell = 1;
    let cell1 = '';
    let cell2 = '';
    let cell3 = '';
    let cell4 = '';

 //to loop string
 
 for (let i = 0; i < csvString.length; i++) {
    if (csvString[i] === ",") {
        currentCell++
    } else if (csvString1[i] === "\n") {
        console.log("Row Data:", cell1, cell2, cell3, cell4);
        currentCell = 1;
            cell1 = '';
            cell2 = '';
            cell3 = '';
            cell4 = '';
    } else {
        if (currentCell === 1) {
            cell1 += csvString[i];
        } else if (currentCell === 2) {
            cell2 += csvString[i];
        } else if (currentCell == 3) {
            cell3 += csvString[i];
        } else if (currentCell === 4) {
            cell4 += csvString[i];
        }
    }
 }

}
parseCVS(csvString1);
console.log('\n');
parseCVS(csvString2);

