// =============discount math===============

//  write a function that takes input the total price of the products you bought and returns the net price calculated according to the discount------ 1. >=1000tk discount 100%  2. >=3000 discount 15%  3. >500 discount 20%.

function netPriceAfterDis(totalPrice) {
    if (totalPrice > 500) {
        var discount = totalPrice * (1 / 5);
        var netPrice = totalPrice - discount;
        return ('After 20% discount your total price is ', netPrice);
    }
    else if (totalPrice > 3000) {
        var discount = totalPrice * (1 / 5);
        var netPrice = totalPrice - discount;
        return ('After 15% discount your total price is ', netPrice);
    }
    else if (totalPrice > 1000) {
        var discount = totalPrice * (1 / 5);
        var netPrice = totalPrice - discount;
        return ('After 10% discount your total price is ', netPrice);
    }
    else {
        return 'you will not get discount';
    }
}
const discountPrice = netPriceAfterDis(10000);
console.log(discountPrice)