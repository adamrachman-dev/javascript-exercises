const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    const phi = 1.618034;
    return Math.round((phi ** number - (1 - phi) ** number) / Math.sqrt(5));
};

// Do not edit below this line
module.exports = fibonacci;
