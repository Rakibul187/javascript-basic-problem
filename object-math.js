// ============object simple math=============

// 1. write a program to find the total price of those product object.
const a = {
    name: 'laptop',
    price: 12000,
    color: 'gray'
}
const b = {
    name: 'mobile',
    price: 12000,
    color: 'black'
}
const c = {
    name: 'watch',
    price: 2000,
    color: 'blue'
}

const totalPrice = a.price + b.price + c.price;
console.log(totalPrice)




// const cars = {
//     brand: 'tesla',
//     price: '20m',
//     color: 'yellow',
//     seating: '5 adult',
//     start() {
//         return 'car is starting';
//     }
// }

// console.log(cars.price)
// console.log(cars.brand)
// console.log(cars.start())
// console.log(cars['color'])