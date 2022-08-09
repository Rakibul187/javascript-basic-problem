// ================feet to inch =================
// write a function that will take feet and return inch

function feetToInch(feet) {
    const inch = 12;
    let inches = feet * inch;
    return inches;
}

const size = 20;
const result = feetToInch(size);
console.log(result)