// ===============exploring some problem===================

/* 
1) Harry’s mom gave him tk 1000 and asked him to buy some oranges and
apples. Write a program to help Harry calculate how much money the
shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
apples is tk 700.
 */
const applePrice = 400;
const orangePrice = 300;
const money = 1000;

const totalCost = applePrice + orangePrice;
const remaining = money - totalCost;
console.log(remaining)
