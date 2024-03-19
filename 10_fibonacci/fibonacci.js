function fibonacci(num) {
    const number = parseInt(num);

    if (number < 0) return "OOPS";
    if (number === 0) return 0;

    let indexMin2 = 0;
    let indexMin1 = 1;

    for (let i = 2; i <= number; i++) {
        let index = indexMin2 + indexMin1;
        indexMin2 = indexMin1;
        indexMin1 = index;
    }
    return indexMin1;
}

// Do not edit below this line
module.exports = fibonacci;
