const repeatString = function (str, n) {
    if (n < 0) {
        return 'ERROR'
    }
    let r = ""
    for (let i = 0; i < n; i++) {
        r += str
    }
    return r
};

// Do not edit below this line
module.exports = repeatString;
