const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0) return "ERROR";
    let finalSum = 0;
    if (num2 < num1)
        for (i = num2; i <= num1; i++) {
            finalSum += i;
        }
    else (num2 > num1)   
        for (i = num1; i <= num2; i++) {
            finalSum += i;
        }
    return(finalSum);
};

// Do not edit below this line
module.exports = sumAll;
