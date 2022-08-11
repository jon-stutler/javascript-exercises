const palindromes = function (a) {
    let noSpaces = a.replace(/\s+/g, '');
    let noPunct = noSpaces.replace(/[^\w\s\']|_/g, '');
    let lowerCase = noPunct.toLowerCase();
    let reversed = lowerCase.split('').reverse().join('');

    if (reversed == lowerCase) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
