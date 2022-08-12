const fibonacci = function(a) {
    parseInt(a);
    if (a < 0) {
        return "OOPS";
    };
    let f = new Array(a+2);
    let i;
    f[0] = 0;
    f[1] = 1;
    for (i = 2; i <= a; i++) {
        f[i] = f[i-1] + f[i-2];
    };
    return f[a];
};

// Do not edit below this line
module.exports = fibonacci;
