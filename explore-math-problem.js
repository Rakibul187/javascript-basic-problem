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
 9) You are given a triangle with the sides 9, 8, 9. Write a program to check
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
