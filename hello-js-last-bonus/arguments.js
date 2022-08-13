function add(num1, num2) {
    console.group(num1, num2)
    console.log(arguments)
    console.log(arguments[3])
    console.log(arguments[4])
}

add(12, 34, 56, 23, 50, 1000)
