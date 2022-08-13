//  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

// find factorial of 10. n!=n*(n-1)!.  10!=10*9*8*(8-7)!


// by for loop
/*
 let sum = 1;
for (let i = 1; i <= 10; i++) {
    sum *= i;
    console.log(i, sum)
}
*/

// by funtion


/* function factorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial
}
console.log(factorial(10)) */


// in reverse way

/*
 function factorial(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial *= i
    }
    return factorial
}
console.log(factorial(10))

console.log('amar sonar bangla')

*/


function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result *= i;
    }
    return result
}
console.log(factorial(7))


let a = 10;
let b = 20;
let add = a + b;
console.log(add)
