function palindromes(str) {
    const normal = str.toLowerCase()
    .split("")
    .filter(char => /[a-z0-9]/.test(char))
    .join("");

    const reversed = normal.split("")
    .reverse()
    .join("");

    return normal === reversed;
}

// Do not edit below this line
module.exports = palindromes;
