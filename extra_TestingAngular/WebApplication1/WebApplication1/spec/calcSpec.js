/// <reference path="../lib/jasmine-1.3.1/jasmine.js" />

// TDD

describe("Calc", function () {

    var subject;
    beforeEach(function () {
        subject = new Calc();
    });

    describe("add", function () {

        it("should be able to add positive numbers", function () {
            var result = subject.add(2, 5);
            expect(result).toBe(7);
        });

        it("should not be able to add negative numbers", function () {
            var result = subject.add(-2, -5);
            expect(result).toBe(0);
        });

        it("should be able to one postive number and one negative number", function () {
            var result = subject.add(-2, 5);
            expect(result).toBe(5);
        });

        it("should be able two non-whole numbers", function () {
            var result = subject.add(.1, .2);
            expect(result).toBeCloseTo(.3);
        });

        it("should always return a number", function () {
            // DRY -- don't repeat yourself
            var result = subject.add("", false);
            expect(result).toBe(0);
            //expect(result).not.toBe("hello");
        });

    });

});
