// ============object simple math=============

// 1. write a program to find the total price of those product object.
// const a = {
//     name: 'laptop',
//     price: 12000,
//     color: 'gray'
// }
// const b = {
//     name: 'mobile',
//     price: 12000,
//     color: 'black'
// }
// const c = {
//     name: 'watch',
//     price: 2000,
//     color: 'blue'
// }
// c.price = 100000000000;
// console.log(c)
// const totalPrice = a.price + b.price + c.price;
// console.log('a, b,c total price is:', totalPrice)



const cars = {
    brand: ['tesla', 'lambergini', 'toyota', 'bmw'],
    price: '20m',
    color: 'yellow',
    seating: '5 adult',
    start() {
        return 'car is starting';
    }
}

// cars.brand = 'hundi',
console.log(cars.price)
console.log(cars.brand)
console.log(cars.start())
console.log(cars['color'])
console.log(cars)