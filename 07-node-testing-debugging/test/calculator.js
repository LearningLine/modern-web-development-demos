var Calculator = require('../lib/calculator');

describe('Calculator', function() {

    // beforeEach();

    it('should be able to add 2 numbers together', function() {
        // Arrange
        var c = new Calculator();

        // Act
        var sum = c.add(1, 2);

        // Assert
        expect(sum).to.equal(3);
    });

    it('should be able to add 2 other numbers together', function() {
        // Arrange
        var c = new Calculator();

        // Act
        var sum = c.add(2, 3);

        // Assert
        expect(sum).to.equal(5);
    });

    it('should callback with the sum', function(done) {
        var c = new Calculator();

        c.addCallback(1, 2, function(err, sum) {
            expect(sum).to.equal(3);

            done();
        });
    });

    it('should return a promise for the sum', function() {
        var c = new Calculator();

        // return c.addAsync(1, 2).then(function(sum) {
        //     expect(sum).to.equal(3);
        // });

        return expect(c.addAsync(1, 2)).to.eventually.equal(3);
    });

});
