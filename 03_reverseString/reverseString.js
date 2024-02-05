const reverseString = function(string) {
   const arr = string.split("");
   const reverseArr = [];

   for (const i of arr) {
    reverseArr.unshift(i);
   }
   return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
