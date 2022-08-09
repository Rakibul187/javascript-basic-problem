// =================leap year checking=============

//   write a function that will take year and return  that year leap year or not 

function checkLeapYear(year) {
    if ((year % 4 === 0) && (year % 100 != 0) || year % 400 === 0) {
        return (year + ' is a leap year')
    }
    else {
        return (year + ' is not a leap year')
    }
}
const result = checkLeapYear(2304);
console.log(result)
const result1 = checkLeapYear(2305);
console.log(result)
const result2 = checkLeapYear(2306);
console.log(result)
const result3 = checkLeapYear(2307);
console.log(result)