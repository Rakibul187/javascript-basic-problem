// ========================even & odd sum from array=============================

//  write a function that will take array and will return odd sum and even sum. ( hints: if number%2===0 that number will be even  otherwise odd)

function oddEvenSum(array) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (number % 2 === 0) {
            evenSum = evenSum + number
        }
        else if (number % 2 != 0) {
            oddSum = oddSum + number
        }
    }
    return { evenSum, oddSum }
}
const numbers = [1, 3, 5, 7, 8, 4, 88, 33];
const result = oddEvenSum(numbers);
console.log(result)