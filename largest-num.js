// ==============find largest number=========

// write a function which will take 3 integers and return the largest number. you need to do it in 2 ways - has return and no return 

// ----no return-----
// function findLargestNum(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1, ' is the largest number')
//     }
//     else if (num2 > num1 && num2 > num3) {
//         console.log(num2, ' is the largest number')
//     }
//     else {
//         console.log(num3, ' is the largest number')
//     }
// }
// findLargestNum(100, 200, 300)

// -----has return-------
function FindLargestNumber2(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return (num1 + ' is the largest number')
    }
    else if (num2 > num1 && num2 > num3) {
        return (num2 + ' is the largest number')
    }
    else {
        return (num3 + ' is the largest number')
    }
}
const result = FindLargestNumber2(55, 77, 33);
console.log(result)