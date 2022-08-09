// ## write a function that will take a radius of circle and wil return the area of circle. [hint: area = pai*r^2]

function area(r) {
    const pai = 3.1416;
    const area = pai * r;
    return area.toFixed(2);
}
let radius = 4;
let result = area(radius)
console.log(result)