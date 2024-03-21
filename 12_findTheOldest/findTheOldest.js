const findTheOldest = function(arr) {
   const age = arr.map(key => {
      if (key.yearOfDeath === undefined) key.yearOfDeath = new Date().getFullYear();
      return key.yearOfDeath - key.yearOfBirth
   });
   
   const oldest = age.slice().sort((a, b) => b - a);
   const index = age.indexOf(oldest[0]);
   return arr[index];
}

// Do not edit below this line
module.exports = findTheOldest;
