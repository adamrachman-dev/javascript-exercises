const palindromes = function (string) {
   let arr = string.toLowerCase().split("");
   let cleanArr = [];
   let regex = /[a-z0-9]/;
   for (const i of arr) {
    if (regex.test(i)) {
        cleanArr.push(i);
    }
   }
   return cleanArr.join("") === cleanArr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
