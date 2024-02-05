const leapYears = function(year) {
    if (isCentury(year)) {
        if (year % 400 === 0) return true;
        return false;
    }
    return isLeap(year);
};

function isCentury(year) {
    if (year % 100 === 0) return true;
    return false;
}

function isLeap(year) {
    if (year % 4 === 0) return true;
    return false;
}

// Do not edit below this line
module.exports = leapYears;
