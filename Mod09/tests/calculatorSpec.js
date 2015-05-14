/**
 * Created by Maurice on 5/14/2015.
 */

describe('The calculator', function () {
var calc;

    beforeEach(function(){
         calc = new Calculator(1);

    });


    describe('can add', function () {
        it('1 + 1', function () {
            calc.add(1)

            expect(calc.sum).toBe(2);
        })
        it('1 + 1', function () {
            calc.add(1)

            if (calc.sum !== 2){
                throw new Error('Should be 2')
            }
        })

        it('1 + 1 as string', function () {
            calc.add('1')

            expect(calc.sum).toBe(2);
        })
        it('0.1 + 0.2', function () {
            var calc = new Calculator(0.1);
            calc.add(0.2)

            expect(calc.sum).toBeCloseTo(0.3);
        })
    });

    describe('can subtract', function () {
        it('1 = 1', function () {
            calc.subtract(1)

            expect(calc.sum).toBe(0);
        });

        it('1 - 1 as string', function () {
            calc.subtract('1')

            expect(calc.sum).toBe(0);
        });

        it('2 - 1 as string', function () {
            var calc = new Calculator(2);

            calc.subtract('1')

            expect(calc.sum).toBe(1);
        })
    });

});