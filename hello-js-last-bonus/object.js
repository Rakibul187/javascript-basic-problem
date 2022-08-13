const nayok = {
    name: 'sakib khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['mahi', 'bubli', 'sahara', 'purnima'],
    movies: [{ name: 'king khan', realese: '2018', nayika: 'mahi' }, { name: '1 takar kabin', release: 2012, nayika: 'purnima' }],
    act: function () {
        return 'acting like sakib khan'
    },
    car: {
        brand: 'tesla',
        price: 9000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'élon musk',
        }
    }
}
console.log(nayok)
console.group(nayok.name)
console.log(nayok.act())