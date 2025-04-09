function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}

function dynamicEuler(n) {
    var result = 1;
    var product = 1;
    for(var i = 1; i<=n;i++) {
        result += product *= 1/i;
    }
    return result;
}