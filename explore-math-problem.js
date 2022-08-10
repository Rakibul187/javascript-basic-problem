// ===============exploring some problem & math===================
// node explore-math-problem.js



// ====================================01=============================
/*
1) Harry’s mom gave him tk 1000 and asked him to buy some oranges and
apples. Write a program to help Harry calculate how much money the
shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
apples is tk 700.
 */
/*
 const applePrice = 400;
const orangePrice = 300;
const money = 1000;

const totalCost = applePrice + orangePrice;
const remaining = money - totalCost;
console.log(remaining)
*/

// ====================================02==================================
// 2) Write a program to calculate the average marks of Mathematics,
// Biology, Chemistry, Physics, and Bangla of a student.

/*
 const mathMarks = 81;
const biologyMarks = 75;
const chemistryMarks = 78;
const physicsMarks = 83;
const banglaMarks = 74;
const totalSubjects = 5;

const totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
const averageMarks = totalMarks / totalSubjects;
console.log(averageMarks)
*/

// =====================03==========================
/*
3) John’s teacher gave him two variables. Each variable contains a string.
John’s teacher asked him to combine these two strings(‘I am going to
be’ and ‘an awesome web developer’) and print them in one line. Help
John write the program.
*/
/*
 const phrase1 = 'I am going to be';
const phrase2 = 'an awesome web developer.';
const sentence = phrase1 + ' ' + phrase2;
console.log(sentence)
 */

// ===============================04==============================
/*
4) Sarah’s mother is teaching her mathematics. She gave Sarah the number
119 and asked her what the remainder would be if she divided the number
by 5. Help Sarah write the program.
*/

/*
const number1 = 119;
const number2 = 5;
const remainder = number1 % number2;
console.log(remainder)
*/
// =====================================05==============================
/*
 5) You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
*/

/*
 var fruits = ['Apple', 'Banana', 'Orange'];
var position = fruits.indexOf('Banana')

fruits[position] = 'Mango';
fruits.pop()
fruits.push('Watermelon')
console.log(fruits)
*/

// ===========================06===========================
/*
6) You are given three numbers 13, 79, and 45. Write a program that will
print the largest number using if-else.
*/
/*
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log(num1, ' is the largest number')
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2, ' is the largest number')
}
else {
    console.log(num3, ' is the largest number')
}
 */
// =======================================07==============================
/*
 07) You are given a triangle with the sides 9, 8, 9. Write a program to check
whether a triangle is Isosceles or not using if-else.
Isosceles => two sides are equal
 */

/*
 var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('This is isosceles')
}
else {
    console.log('This is not a isosceles')
}
*/

// =============================08===========================

/*
8) You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using
if-else.
 */

// use if else

/*
 let marks = 80;
if (marks >= 80 && marks < 100) {
    console.log('You got A')
}
else if (marks >= 60 && marks < 80) {
    console.log('You got B')
}
else if (marks >= 50 && marks < 60) {
    console.log('You got C')
}
else if (marks >= 40 && marks < 50) {
    console.log('You got d')
}
else if (marks <= 39 && marks >= 0) {
    console.log('You are fail')
}
else {
    console.log('Give a valid number')
}
 */

// =====method 2 ----use switch =======

/*
 let marks = 67;
switch (true) {
    case marks >= 80 && marks <= 100:
        console.log('You got A')
        return;
    case marks >= 60 && marks < 80:
        console.log('You got B')
        return;
    case marks >= 50 && marks < 60:
        console.log('You got C')
        return;
    case marks >= 40 && marks < 50:
        console.log('You got D')
        return;
    case marks <= 39 && marks >= 0:
        console.log('You are Fail')
        return;
    default: console.log('Enter a valid number')
}
*/
// =====================09======================
/*
 you reguler works :
1. Module unlock at 8pm.
2. watch Video.
3. notes
4.practice by self
5. join support
Now  run a for loop 10 times and get all the outputs above.
*/

// var works = ['Module unlock at 8pm', 'watch Video', 'notes', 'practice by self', 'join support']

// using for
/*
 for (let i = 1; i <= 10; i++) {
    console.log(i)
    for (let i = 0; i < works.length; i++) {
        let work = works[i]
        console.log(work)
    }
}
*/

// using while
/* let j = 1;
while (j <= 10) {
    console.log(j)
    j++
    let i = 0;
    while (i < works.length) {
        console.log(works[i])
        i++
    }
}
 */

// =========================10=======================

// You are in a hurry to go to your school on time. But when you are crossing
// the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on
// the variable. So, hurry up.

/* const signal = 'red';

if (signal === 'green') {
    console.log('You can cross the road')
}
else if (signal === 'red') {
    console.log('wait ! when signal will green then cross the road')
}
else if (signal === 'yellow') {
    console.log('situation danger ! wait a bit')
} */

// ===========================11===============================
//  'aske amar mon valo nei' show it 39 Times .

/* for (let i = 0; i < 40; i++) {
    console.log(i, 'aske amar mon valo nei')
} */

// ================================12==============================

// write a code that will show numbers 58 to 98.

/* for (let i = 58; i <= 98; i++) {
    console.log(i)
} */

// ===============================13=============================

// write a code that will show every even numbers of 412 to 456
/*
for (let i = 412; i <= 456; i += 2) {
    console.log(i)
}
*/

// ==============================14=================================

// write a cade what will show every odd numbers from 581 to 623

/*
 for (let i = 581; i <= 623; i += 2) {
    console.log(i)
}
*/

// ========================================15==============================
/*
let learnedThings = ['HTML', 'CSS', 'HTML5', 'CSS3', 'BOOTSTRAP', 'TAIWIND', 'JAVASCRIPT']
 */

/*
 for (let i = 0; i < learnedThings.length; i++) {
    console.log(i, learnedThings[i])
}
*/
// ==============================================16=======================
/*
let usedPhones = ['vivo', 'shymphony', 'walton', 'iphone', 'xaomi']
let i = 0;
while (i < usedPhones.length) {
    console.log(usedPhones[i])
    i++
}
*/
// =======================================17==============================
// run a for loop for 30 to 86. when loop reach 44 loop will stop.

/*
 for (let i = 30; i <= 86; i++) {
    console.log(i)
    if (i === 44) {
        break
    }
}
 */

// ====================================18====================================
//  write array using your books prices . which books are more than 200 those will skip and other book will Show .

/*
 var booksPrices = [100, 199, 130, 180, 200, 145, 267, 111];
for (let i = 0; i < booksPrices.length; i++) {
    let bookPrice = booksPrices[i];
    if (bookPrice === 200) {
        continue
    }
    console.log(bookPrice)
}
*/

// =======================================19===========================

/*
 Write a function called foo() which prints “foo” and a function called bar()
which prints “bar”. Call function bar() in the foo() function after printing. What
will be the output? Now call the foo() to see the output.
 */

/*
 function foo() {
    console.log('foo')
}
function bar() {
    console.log('bar')
}
bar()
foo()
*/

// =============================20====================================

// Write a function called make_avg() which will take an three integers and
// return the average of those values.

/*
function average(num1, num2, num3) {
    let average = (num1 + num2 + num3) / 3;
    return average;
}
console.log(average(10, 20, 30))

*/

// =================================21=================================

// Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

/*
 function mak_avg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        sum = sum + element
    }
    let average = sum / array.length;
    return average;
}

let array = [4, 5, 8, 9, 23];
let result = mak_avg(array);
console.log(result)
*/

// ==================================22================================
/*
Write a function called odd_even() which takes an integer value and tells
whether this value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter
*/
// -------------has return has parameter---------------
/*
function oddEven(number) {
    if (number % 2 === 0) {
        return 'number is even'
    }
    else {
        return 'number is odd'
    }
}
console.log(oddEven(5))
 */

// -------------has parameter no return--------------

/*
function oddEven(number) {
    if (number % 2 === 0) {
        console.log('number is even')
    }
    else {
        console.log('number is odd')
    }
}
oddEven(10)
 */

// ================================23============================
// write a function which will show namta of 13

/*
function multification13() {
    for (let i = 1; i <= 10; i++) {
        let multification = 13;
        multification = multification * i;
        console.log(13, '*', i, '=', multification)
    }
}
console.log(multification13())
*/

// =====================================24==========================

// write a function which will take uppercase  And return lowercase

/*
function uperToLowercase(something) {
    let convert = something.toLowerCase();
    return convert
}
let something = 'Mohiuddin';
let result = uperToLowercase(something);
console.log(result)
*/

// ========================================25==============================
// write a function fullname that will take your first name and last name as parameter and wil return fullname

/*
function fullname(firstname, lastname) {
    let fullname = firstname + ' ' + lastname;
    return fullname;
}

const firstname = 'Riyad';
const lastname = 'Ullah';
const result = fullname(firstname, lastname);
console.log(result)
*/

// ========================================26==========================

// write a functin that will take number and return square number
/*
 function square(number) {
    return number * number
}
console.log(square(5))
 */
// =====================================27================================
/*
 Write a function that will take hour as the input parameter and will convert it
into minutes and will return the result in minutes.
*/
/*
function hourToMunite(hour) {
    return hour * 60
}
console.log(hourToMunite(5))
*/

// =======================================28======================================
/*
 Write a function findLeapYear() that will take the array [2023, 2024, 2025,
    2028, 2030] as the input parameter and will check if each year is a leap year. If
    a year is a leap year insert that year in a new array, return the new array and
    print the result.
 */
/*
const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032]
function checkLeapYear(years) {
    let leapYear = []
    for (let i = 0; i < years.length; i++) {
        let year = years[i]
        if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
            leapYear.push(year)
        }
    }
    return leapYear
}
console.log(checkLeapYear(years))
*/
// =============================================29==============================
/*
 Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ]
as the input parameter and will return the sum of the odd numbers.
 */
/*
function oddEvenSum(numbers) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i]
        if (number % 2 === 0) {
            evenSum = evenSum + number
        }
        else {
            oddSum = oddSum + number
        }
    }
    return { oddSum, evenSum }
}
const numbers = [1, 3, 6, 8, 9, 55, 44, 22, 66, 77]
console.log(oddEvenSum(numbers))
*/
// =====================================30=========================
/*
 write a function what will take your age as a paraeter and return true if your age is even number  And return false if your age is odd number
 */
/*
function oddEven(age) {
    if (age % 2 === 0) {
        return true
    }
    else {
        return false
    }
}
console.log(oddEven(25))
*/

// ====================================31============================
// write a loop what will run 1 to 100

/*
for (let i = 1; i <= 100; i++) {
    console.log(i)
}
*/
// ===================================32================================
// show 30 to 80 all odd number
/*
 function oddNumber() {
    for (let i = 50; i <= 80; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
console.log(oddNumber())
*/
// =====================================33===============================
// write a function what will take 3 parameter and return sum
/*
function sum(n1, n2, n3) {
    return result = n1 + n2 + n3;
}
console.log(sum(1, 2, 3))
*/

// ======================================34=================================
// write a program to convert celcius to farenheight to farenheit

// celcius to farenheit
/*
 function celToFaren(celcius) {
    let farenheit = (celcius * 9 / 5) + 32;
    console.log(farenheit)
}
celToFaren(100)
*/

// farenheit to celcius
/*
function farenToCel(farenheit) {
    let celcius = (farenheit - 32) * 5 / 9;
    console.log(celcius)
}
farenToCel(100)
 */

// =================================35================================
// ---------function grading---------------

/*
 function grading(marks) {
    switch (true) {
        case marks >= 80 && marks <= 100:
            console.log('A+')
            return;
        case marks >= 70 && marks <= 79:
            console.log('A')
            return;
        case marks >= 60 && marks <= 69:
            console.log('A-')
            return;
        case marks >= 50 && marks <= 59:
            console.log('B')
            return;
        case marks >= 40 && marks <= 49:
            console.log('C')
            return;
        case marks >= 33 && marks <= 39:
            console.log('D')
            return;
        case marks >= 0 && marks <= 32:
            console.log('F')
            return;
        default: console.log('enter a valid number');
    }
}
grading(-10)
 */

// ================================36===============================
/*
 Suppose, you have an array with 8 elements. Find the smallest element of
that array.
 */
/*
 function findSmallest(numbers) {
    let smallestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < smallestNumber) {
            smallestNumber = number
        }
    }
    return smallestNumber
}
const array = [55, 77, 88, 99, 55, 44, 33, 22];
const result = findSmallest(array);
console.log(result)
 */

// =================================================37=========================================
/*
 Write a function and take an array as a parameter. Find the average of all
the elements of that array and return this average.
*/
/*
 const array = [22, 55, 88, 99, 66, 44, 20, 400]

function makAvg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element >= sum) {
            sum = sum + element;
        }
    }
    return (sum / array.length)
}
console.log(makAvg(array))
 */

// ========================================38====================================
/*
 Write a function which takes the height and width of a rectangle as
parameters. Find out the area of that rectangle and print the result.
rectangle area = height*width;
*/

/*
function rectangleArea(height, width) {
    return height * width;
}
console.log(rectangleArea(5, 7))
 */

// =================================39==============================
// write a code for finding smallest number from 3 number

/*
 const num1 = 100;
const num2 = 200;
const num3 = 30;

if (num1 < num2 && num1 < num3) {
    console.log(num1, ' is the smallest number')
}
else if (num2 < num1 && num2 < num3) {
    console.log(num2, ' is the smallest number')
}
else {
    console.log(num3, ' is the smallest number')
}
*/

// =========================40================================
// find the rectangle area
/*
 function rectArea(h, w) {
    return h * w;
}
console.log(rectArea(3, 7))
 */
// ========================================41=============================
// comparison in two variable
/*
 const a = 3;
const b = 5;
if (a > b) {
    console.log('a is bigger than b')
}
else if (a < b) {
    console.log('b is bigger than a')
}
else if (a != b) {
    console.log('a and b is not equal')
}
else if (a === b) {
    console.log('a equal to b')
}
*/

// ========================================42=============================================
// write a function what will take 3 arms value of triangle and return area .
/*
 function triangleArea(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt((s * (s - a) * (s - b) * (s - c)), 1 / 2)
    return area.toFixed(2)
}
console.log(triangleArea(3, 7, 5))
*/

// =========================================43==========================================
// find largest string element
/*
 const friends = ['papon', 'nishat', 'sajeeb', 'joy korkormokar', 'siddique', 'raju', 'sumon', 'rabbi']
function findLargestName(friends) {
    let largestFriend = friends[0]
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i]
        if (friend.length > largestFriend.length) {
            largestFriend = friend
        }
    }
    return largestFriend
}
console.log(findLargestName(friends))
*/

// find smallest friend
/*
 const friends2 = ['papon', 'nishat', 'sajeeb', 'joy korkormokar', 'siddique', 'raju', 'sumon', 'rabbi']
function findSmallest(friends2) {
    let smallFriend = friends2[0]
    for (let i = 0; i < friends2.length; i++) {
        let friend = friends2[i]
        if (friend.length < smallFriend.length) {
            smallFriend = friend
        }
    }
    return smallFriend
}
console.log(findSmallest(friends2))
*/

// ====================================44======================
// write a program what will sum every positive element of an array till meet negetive number and return positive number sum before meet negetive number and when meet then stop the loop.

/*
 function positiveNumberSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        console.log(i, number)
        if (number >= 0) {
            sum += number
        }
        else {
            break;
        }
    }
    return sum
}
const numbers = [32, 69, 39, 67, 77, 8, -8, 90, 44, 22, 55]
console.log(positiveNumberSum(numbers))
 */



// function primeNumber(n) {
//     // if (n == 1) {
//     //     console.log(n, ' is not a prime number')

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return (n + ' is not a prime number')
//         }
//     }
// }
// console.log(primeNumber(2))
