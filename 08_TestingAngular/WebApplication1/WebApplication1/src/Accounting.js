

function Accounting(calc) {
    this.calc = calc;
}

Accounting.prototype.calcTax = function (price, tax) {
    if (tax > 0) {
        return this.calc.add(price, tax);
    }
}
