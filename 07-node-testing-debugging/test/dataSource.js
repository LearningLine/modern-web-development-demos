var Promise = require('bluebird');
var sinon = require('sinon');

var DataSource = require('../lib/dataSource');

// test doubles:
// spies
// stubs
// fakes
// mocks

// AAA - arrange, act, assert
// SUVT - setup, use, verify, tear down

describe('DataSource', function() {
    beforeEach(function() {
        console.log('setting up');
    });

    afterEach(function() {
        console.log('tearing down');
    });

    it('should not require a real network during a test', function() {
        // Arrange
        var ds = new DataSource();

        // ds._getData = function() {
        //     return Promise.resolve([ null, 'data' ]);
        // };

        // var updatedData;
        //
        // ds._updateData = function(result) {
        //     updatedData = result;
        //
        //     return Promise.resolve();
        // };

        ds._getData = sinon.stub().returns(Promise.resolve([ null, 'data' ]));
        ds._updateData = sinon.stub().returns(Promise.resolve());

        // Act
        return ds.doWork().then(function() {
            // Assert
            expect(ds._updateData.firstCall.args[0]).to.equal('DATA');
        });
    });
});
