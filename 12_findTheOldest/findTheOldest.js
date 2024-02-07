const findTheOldest = function(arr) {
   let age = [];
   for (const i of arr) {
    if (i.yearOfDeath === undefined) i.yearOfDeath = new Date().getFullYear();
    age.push(i.yearOfDeath - i.yearOfBirth);
   }
   const oldest = Math.max(...age);
   return arr[age.indexOf(oldest)]; 
};

// Do not edit below this line
module.exports = findTheOldest;
