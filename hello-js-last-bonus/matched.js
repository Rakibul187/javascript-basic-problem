// const numbers = [10, 20, 30, 11, 22, 33, 44, 55];
// for (const number of numbers) {
//     console.log(number)
// }

const products = [
    { id: 1, name: 'xaomi one night phone', price: 1000 },
    { id: 2, name: 'vivo y11', price: 2000 },
    { id: 3, name: 'walton ', price: 12000 },
    { id: 4, name: 'iphone maxpro-13', price: 14000 },
    { id: 5, name: 'samsung galaxy phone', price: 17000 },
    { id: 6, name: 'laptop galaxy phone', price: 17000 },
    { id: 7, name: 'laptop galaxy phone', price: 17000 },
    { id: 8, name: 'htc phone', price: 13000 }
];
// for (const product of products) {
//     console.log(product)
// }

function matchedProducts(product, search) {
    let matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product)
        }

    }
    return matched
}
console.log(matchedProducts(products, 'phone'))
console.log(matchedProducts(products, 'laptop'))
console.log(matchedProducts(products, '1000'))