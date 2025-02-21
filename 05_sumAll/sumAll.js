const sumAll = function (a, b) {
    if (typeof a != "number" || typeof b != "number" || a < 0 || b < 0) return "ERROR"

    let r = 0
    if (a > b) [a, b] = [b, a]

    for (; a <= b; a++) {
        r += a
    }
    return r
};

// Do not edit below this line
module.exports = sumAll;
