const removeFromArray = function(...args) {
    let arr = args[0];
    for (let i = 1; i < args.length; i++) {
        let index = arr.indexOf(args[i]);
        if (index < 0) continue;
        arr.splice(index, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
