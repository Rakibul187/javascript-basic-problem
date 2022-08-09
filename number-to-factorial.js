// ================number to factorial================

// write a function that will take integer nas a input and will return the factorial number for this input.(using for and while loop).

// factorial:  5!=5*4*3*2*1    4!=4*3*(3-1)

function numberToFactorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return (number + ' to factorial ' + result)
}
const factorialResult = numberToFactorial(9);
console.log(factorialResult)
