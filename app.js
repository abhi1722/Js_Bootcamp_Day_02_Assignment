
// Assignment 1:
// Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

function checkNumber(number) {
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Test cases
checkNumber(5);     // Output: The number is positive.
checkNumber(-2);    // Output: The number is negative.
checkNumber(0);     // Output: The number is zero.

// Assignment 2
// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.


function calculateFactorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

// Test cases
console.log(calculateFactorial(5));   // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
console.log(calculateFactorial(0));   // Output: 1 (0! is defined as 1)
console.log(calculateFactorial(1));   // Output: 1 (1! is defined as 1)
console.log(calculateFactorial(10));  // Output: 3628800 (10! = 10 * 9 * 8 * ... * 1 = 3628800)

// Assignment 3:
// Write a JavaScript function that takes two numbers as parameters and returns the larger one.

function findLargerNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Test cases
console.log(findLargerNumber(5, 10));   // Output: 10
console.log(findLargerNumber(15, 8));   // Output: 15
console.log(findLargerNumber(-2, 0));   // Output: 0


// Assignment 4:
// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

function isPalindrome(str) {
    // Remove spaces and convert to lowercase for comparison
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Compare the reversed string with the original string
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

// Test cases
console.log(isPalindrome("racecar"));              // Output: true
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello"));                // Output: false
console.log(isPalindrome("Was it a car or a cat I saw?")); // Output: true

// Assignment 5:
// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrimesUpToN(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// Test cases
printPrimesUpToN(20);   // Output: 2, 3, 5, 7, 11, 13, 17, 19
printPrimesUpToN(50);   // Output: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47

// Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.

function simpleCalculator(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Cannot divide by zero";
        }
    } else {
        return "Invalid operator";
    }
}

// Test cases
console.log(simpleCalculator(5, 3, "+"));   // Output: 8
console.log(simpleCalculator(10, 4, "-"));  // Output: 6
console.log(simpleCalculator(6, 2, "*"));   // Output: 12
console.log(simpleCalculator(8, 2, "/"));   // Output: 4
console.log(simpleCalculator(5, 0, "/"));   // Output: Cannot divide by zero
console.log(simpleCalculator(7, 3, "%"));   // Output: Invalid operator

// Assignment 7:
// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.

function countVowels(str) {
    const vowels = "aeiouAEIOU"; // Both lowercase and uppercase vowels

    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Test cases
console.log(countVowels("Hello, how are you?")); // Output: 7 (e: 1, o: 2, o: 1, a: 1, e: 1, o: 1)
console.log(countVowels("JavaScript"));         // Output: 3 (a: 2, i: 1)
console.log(countVowels("OpenAI"));             // Output: 3 (e: 1, A: 1, i: 1)
console.log(countVowels(""));                   // Output: 0


// Assignment 8:
// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

function isPerfectNumber(number) {
    if (number <= 0) {
        return false;
    }

    let sumOfDivisors = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }

    return sumOfDivisors === number;
}

// Test cases
console.log(isPerfectNumber(28));  // Output: true (28 = 1 + 2 + 4 + 7 + 14)
console.log(isPerfectNumber(6));   // Output: true (6 = 1 + 2 + 3)
console.log(isPerfectNumber(12));  // Output: false (12 != 1 + 2 + 3 + 4 + 6)
console.log(isPerfectNumber(496)); // Output: true (496 = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248)

// Assignment 9:
// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.

function fibonacciSeriesUpToNumber(numberLimitFor) {
    let num1 = 0, num2 = 1, nextTerm;
    
    console.log("Fibonacci Series:");
    console.log(num1); // Print the first term
    console.log(num2); // Print the second term
    
    nextTerm = num1 + num2;

    while (nextTerm <= numberLimitFor) {
        console.log(nextTerm);
        num1 = num2;
        num2 = nextTerm;
        nextTerm = num1 + num2;
    }
}

// Test case
fibonacciSeriesUpToNumber(50);


// Assignment 10:
// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.

function printMultiplicationTable(number) {
    if (number <= 0) {
        console.log("Please provide a positive integer.");
        return;
    }

    console.log("Multiplication Table for " + number + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

// Test cases
printMultiplicationTable(5);
printMultiplicationTable(7);
