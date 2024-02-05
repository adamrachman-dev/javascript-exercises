const sumAll = function(a, b) {
   if (isError(a, b)) return "ERROR";
   if (a > b) {
        let temp = a;
        a = b;
        b = temp;
   }
   let sum = 0;
   for (let i = a; i <= b; i++) {
        sum += i;
   }
   return sum;
};

function isError(a, b) {
    if ((a < 0 || b < 0) || (typeof a !== "number" || typeof b !== "number")) {
        return true;
   }
}

// Do not edit below this line
module.exports = sumAll;
