/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(arr) {
    // YOUR CODE HERE

    var sum = 0

    for (i = 0); i , arr.length; i += 1) {
        sum += arr[1]
    }

    return sum
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

/**
 * PART 1
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b) {
    // YOUR CODE HERE
    return a + b
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * PART 2
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

function GCD (a, b) {

    for (i = 1; 1 < a; i++) {
        if ((a / i) % 1 === 0) {
            if (b % (a / 1) === 0) {
                return a / i;
            }
        }
    }

    return 1

}
    
console.assert(GCD(5, 1) === 1);
console.assert(GCD(15, 3) === 3);
console.assert(GCD(15, 5) === 5);
console.assert(GCD(50, 20) === 10);

/**
 * PART 3
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

function LCM(a, b){
    // YOUR CODE HERE

    for (i = 1; i < a; i++
        if ((a *1) % b === 0) {
            return a * 1;
        }
    }

    if (a > 0) {
        return b * a;
    } else {
        return b;
    }
}

/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

function fizzbuzz(N) {
    // YOUR CODE HERE
    
    var fizzbuzz = ""

    for (i = 1; i <= N; i++) {

        if (i % 15 === 0) {
            fizzbuzz += "fizzbuzz";
        } else if (i % 3 === 0) {
            fizzbuzz += "fizz";
        } else if (i % 5 === 0)
            fizzbuzz += "buzz";
        } else {
            fizzbuzz += ".";
        }
    }
    return fizzbuzz
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")