// const numbers = [10, 20, 30, 11, 22, 33, 44, 55];
// for (const number of numbers) {
//     console.log(number)
// }


// const products = [
//     { id: 1, name: 'xaomi one night phone', price: 1000 },
//     { id: 2, name: 'vivo y11', price: 2000 },
//     { id: 3, name: 'walton ', price: 12000 },
//     { id: 4, name: 'iphone maxpro-13', price: 14000 },
//     { id: 5, name: 'samsung galaxy phone', price: 17000 },
//     { id: 6, name: 'laptop galaxy phone', price: 17000 },
//     { id: 7, name: 'laptop galaxy phone', price: 17000 },
//     { id: 8, name: 'htc phone', price: 13000 }
// ];


// for (const product of products) {
//     console.log(product)
// }

// function matchedProducts(products, search) {
//     let matched = [];
//     for (const product of products) {
//         if (product.name.toLowerCase().includes(search.toLowerCase())) {
//             matched.push(product)
//         }

//     }
//     return matched
// }
// console.log(matchedProducts(products, 'phone'))
// console.log(matchedProducts(products, 'laptop'))
// console.log(matchedProducts(products, '1000'))


/* const laptops = [
    { id: 1, name: 'lenovo is one of the cheapest prices laptop', price: 36000 },
    { id: 2, name: 'mac is one of the highest prices laptop', price: 166000 },
    { id: 3, name: 'hp is one of the second highest prices laptop', price: 67000 },
    { id: 4, name: 'walton is one of the most cheapest prices laptop', price: 36000 },
    { id: 5, name: 'microsoft surface is one of the cheapestpopler laptop', price: 36000 },
    { id: 6, name: 'aihr is one of the cheapest prices laptop', price: 60000 }
]

function matchedLap(products, search) {
    let matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product)
        }
    }
    return matched
} */
// console.log(matchedLap(laptops, 'hp'))

const mobiles = [
    { id: 1, name: 'vivo the average quality phone', price: 16500 },
    { id: 2, name: 'nokia the oldest phone', price: 22000 },
    { id: 3, name: 'samsung is abroad familys phone', price: 21000 },
    { id: 4, name: 'oppo  is the average quality phone', price: 13000 },
    { id: 5, name: 'iphone is the averae quality phone', price: 144000 },
    { id: 6, name: 'xaomi the averae quality phone', price: 19000 },
    { id: 7, name: 'symphony the cheapest prices phone', price: 11000 },
    { id: 8, name: 'winmax is the cheapest prices phone', price: 12000 }
];

function mathcedPhone(phones, search) {
    let matched = [];
    for (const phone of phones) {
        if (phone.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(phone)
        }
    }
    return matched
}

console.log(mathcedPhone(mobiles, 'cheapest'))






