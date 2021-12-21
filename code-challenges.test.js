// ASSESSMENT 3: Coding Practical Questions with Jest








// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//Pseudo Code:
/*Input a number greater than 2 - will require a conditional statment.
Declare two variables a initial and previous for fibonacci sequence, Xn = Xn-1 + Xn-2.
Decleare an empty array to store the sums.
Declare a variable that tracks the number of times a sequence of two numbers have been added.
Iterate the sums using fibonacci sequence and stop when the tracker matches the input value - 1.
Output an array showing the sums at every iteration.

In addition, need to do a red-green-refactor methodolgy, run cases input = 6 and 10.
*/


//First Step: Perform Red

// describe("fibonacciSequence", () => {

//     it("Takes an input value greater than 2 and output an array that shows the fibonacciSequence", () => {

//         expect(fibonacciSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
//     })
// })
// Received an error =>  ReferenceError: fibonacciSequence is not defined

//Second Step: Make the test pass for inputs 6 and 10.

// describe("fibonacciSequence", () => {

//     it("Takes an input value greater than 2 and output an array that shows the fibonacciSequence", () => {

//         expect(fibonacciSequence(6)).toEqual([1, 1, 2, 3, 5, 8]);
//         expect(fibonacciSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
//     })
// })

// b) Create the function that makes the test pass.
/*
Input a number greater than 2 - will require a conditional statment to verify.
Declare two variables a initial and previous for fibonacci sequence, Xn = Xn-1 + Xn-2.
Decleare an array to store the sums, assign with initial and  previous variables.
Declare a variable that tracks the number of times a sequence of two numbers have been added.
Iterate the sums using fibonacci sequence and stop when iteration i < number of steps.
Output an array showing the sums at every iteration.
*/
// const fibonacciSequence = (fibonacciNumber) => {
//     if (fibonacciNumber < 2) {
//         return "please input a number greater than 2"
//     }
//     else if (fibonacciNumber > 2) {
//         let numberInitial = 1;
//         let numberPrevious = 1;
//         let array = [numberPrevious, numberInitial];
//         let numberSteps = fibonacciNumber - 2;

//         for (i = 0; i < numberSteps; i++) {
//             let sum = numberInitial + numberPrevious;
//             array.push(sum);
//             numberInitial = array[i + 1]
//             numberPrevious = array[i + 2]

//         }


//         return array
//     }
// }

//Third Step: Refactor
/*
Revise the array variable to have [1,1] as initial, since Fibonacci number must be greater than 2.
Remove numberSteps variable and directly placed the conditional statement in the for loop.
Start i at 1 since the sequence of grabbing values from array changed.

*/
describe("fibonacciSequence", () => {

    // Example input: 6
    // Expected output: [1, 1, 2, 3, 5, 8]

    // Example input: 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    it("Takes an input value greater than 2 and output an array that shows the fibonacciSequence", () => {

        expect(fibonacciSequence(6)).toEqual([1, 1, 2, 3, 5, 8]);
        expect(fibonacciSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    })
})

const fibonacciSequence = (fibonacciNumber) => {
    if (fibonacciNumber < 2) {
        return "please input a number greater than 2"
    }
    else if (fibonacciNumber > 2) {
        let array = [1, 1];
        let numberInitial = array[1];
        let numberPrevious = array[0];

        for (i = 1; i < fibonacciNumber - 1; i++) {
            let sum = numberInitial + numberPrevious;
            array.push(sum);
            numberInitial = array[i + 1];
            numberPrevious = array[i];
        }
        return array
    }
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 7, 9, 199]

// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // Expected output: [-823, 7, 23]


//Pseudo Code:
/*
Input an array of anytype of data that outputs an array only showing odd numbers from least to greatest.
Method will need to do a filter, conditions: to only pass integers and module of 2 !== 0 to only have odd numbers
A sort function will be implemented to have the numbers from least to greatest.

In addition, need to do a red-green-refactor methodolgy, run cases fullArr1 and fullArr2.
*/

//First Step: Perform Red

// describe("oddNumbers", () => {

//     it("Takes an input array of any type and output an array that shows odd numbers from least to greatest", () => {

//         expect(oddNumbers(fullArr1)).toEqual([-9, 7, 9, 199])
//     })
// })
// Received an error =>  ReferenceError: oddNumbers is not defined



//Second Step: Make the test pass for fullArr1 and fullArr2.
// describe("oddNumbers", () => {

//     it("Takes an input array of any type and output an array that shows odd numbers from least to greatest", () => {

//         expect(oddNumbers(fullArr1)).toEqual([-9, 7, 9, 199]);
//         expect(oddNumbers(fullArr2)).toEqual([-823, 7, 23]);
//     })
// })



// b) Create the function that makes the test pass.
// Input an array of anytype of data that outputs an array only showing odd numbers from least to greatest.
// Method will need to do a filter, checking for value % 2 does't equal zero and datatype of the value is a number.
// A sort function will be implemented to have the numbers from least to greatest.
//Return the filtered array that is sorted from least to greatest.

// const oddNumbers = (array) => {
//     let odd = array.filter(value => {
//         return value % 2 !== 0 && typeof value === "number"
//     }).sort((a, b) => a - b)
//     return odd
// }

//Third Step: Refactor
/*
Used implicit arrow function to reduce the line of code to one line and move the return word one line up.
*/

describe("oddNumbers", () => {

    var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]

    var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // Expected output: [-823, 7, 23]

    it("Takes an input array of any type and output an array that shows odd numbers from least to greatest", () => {

        expect(oddNumbers(fullArr1)).toEqual([-9, 7, 9, 199]);
        expect(oddNumbers(fullArr2)).toEqual([-823, 7, 23]);
    })
})

const oddNumbers = (array) => {
    return array.filter(value => value % 2 !== 0 && typeof value === "number").sort((a, b) => a - b)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]

// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

// var numbersToAdd3 = []
// // Expected output: []


//Pseudo Code:
/*
Input an array of numbers and returns an array showing the sum of the accumulating sum.
Method will need to add previous and current number and sum them.
Once the values are sum then store in an array.

In addition, need to do a red-green-refactor methodolgy, run cases numbersToAdd1, numbersToAdd2, numbersToAdd3.
*/


//First Step: Perform Red

// describe("numbersToAdd", () => {

//     it("Takes an input array of numbers and output an array that shows the accumulating sum", () => {

//         expect(numbersToAdd(numbersToAdd1)).toEqual([2, 4, 45, 9])
//     })
// })
// Received an error =>  ReferenceError: numbersToAdd is not defined


//Second Step: Make the test pass for numbersToAdd1, numbersToAdd2, numbersToAdd3
// describe("numbersToAdd", () => {

//     it("Takes an input array of numbers and output an array that shows the accumulating sum", () => {

//         expect(numbersToAdd(numbersToAdd1)).toEqual([2, 6, 51, 60]);
//         expect(numbersToAdd(numbersToAdd2)).toEqual([0, 7, -1, 11]);
//         expect(numbersToAdd(numbersToAdd3)).toEqual([]);
//     })
// })
// b) Create the function that makes the test pass.
/*
Input an array of numbers and returns an array showing the sum of the accumulating sum.
Method will need to add previous and current number and sum them.
A tracker variable to store the sum of numbers, initial value equal to zero.
An array to store the sum of values through an iteration.
Once the values are sum then return in an array.
*/

// const numbersToAdd = (arrayOfNumbers) => {
//     let arraySum = [];


//     for (i = 0; i < arrayOfNumbers.length; i++) {
//         let currentNumber = arrayOfNumbers[i];
//         let sum = (i === 0) ? 0 : arraySum[i - 1];
//         sum = currentNumber + sum;
//         arraySum.push(sum);

//     }
//     return arraySum;
// }

//Third Step: Refactor
/*
Change the for loop for a .map() function that iterates and sum the results and stores sum values in an array. The .map uses a implicit arrow function.
*/
describe("numbersToAdd", () => {

    var numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]

    var numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]

    var numbersToAdd3 = []
    // Expected output: []
    it("Takes an input array of numbers and output an array that shows the accumulating sum", () => {

        expect(numbersToAdd(numbersToAdd1)).toEqual([2, 6, 51, 60]);
        expect(numbersToAdd(numbersToAdd2)).toEqual([0, 7, -1, 11]);
        expect(numbersToAdd(numbersToAdd3)).toEqual([]);
    })
})

const numbersToAdd = (arrayOfNumbers) => {
    let sum = 0;
    return arrayOfNumbers.map(value => sum = sum + value)
}
