/**
 * Created by Maurice on 6/4/2015.
 */


describe('The calculator', function(){
    var calc;

    beforeEach(function(){
         calc = new Calculator();
    });

    describe('can add', function(){

        it('1 ', function(){
             calc.add(1)

            expect(calc.result).toBe(1);

        })

        it('2 ', function(){
            calc.add(1)
            calc.add(1)

            expect(calc.result).toBe(2);

        })

        it('0.3 ', function(){
            calc.add(0.1)
            calc.add(0.2)

            expect(calc.result).toBeCloseTo(0.3,10);

        })
    })

});