/// <reference path="../lib/jasmine-1.3.1/jasmine.js" />

// TDD

describe("Accounting", function () {

    var subject;
    var calc_spy;
    beforeEach(function () {
        calc_spy = jasmine.createSpyObj("Calc", ["add"]);
        subject = new Accounting(calc_spy);
    });


    it("should use the calc if there is tax", function () {
        subject.calcTax(100, 5);
        expect(calc_spy.add).toHaveBeenCalled();
    });
    it("should not use the calc if there is zero tax", function () {
        subject.calcTax(100, 0);
        expect(calc_spy.add).not.toHaveBeenCalled();
    });


});
