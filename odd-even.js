// ==========checking odd or even============

// -----if number % 2 === 0 number wil be even and if number%2 !=0 number will be odd-------------

// write a function to check odd or even number. you need to do it in 2 ways- has return and no return

// ---1. has return---
/* 
function checkOddEven(number) {
    if (number % 2 == 0) {
        return 'your number is even '
    }
    else {
        return 'your number is even'
    }
}
const result = checkOddEven(33);
console.log(result)
 */

// ----2. no return--------
function checkOddEven(number) {
    if (number % 2 == 0) {
        console.log('your number is even ')
    }
    else {
        console.log('your number is even')
    }
}
checkOddEven(50);

