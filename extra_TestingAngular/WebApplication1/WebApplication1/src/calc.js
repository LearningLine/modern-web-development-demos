
function Calc() {
}

Calc.prototype.add = function (a, b) {
    if (typeof a !== 'number') a = 0;
    if (typeof b !== 'number') b = 0;

    if (a < 0) a = 0;
    if (b < 0) b = 0;

    return a + b;
}
