describe('myService', function() {
    beforeEach(module('myApp'));

    describe('getData', function() {
        it('returns data', inject(function(myService, $httpBackend) {
            $httpBackend.when('GET', '/api/data').respond([ { name: 'Jason' } ]);

            myService.getData().then(function(data) {
                expect(data).toEqual([
                    { name: 'Jason' }
                ]);
            });

            $httpBackend.flush();
        }));

        it('returns a rejected promise on server errors', inject(function(myService, $httpBackend) {
            $httpBackend.when('GET', '/api/data').respond({ error: 'Ouch!' });

            myService.getData()
                .then(function() {
                    throw new Error('should not happen!');
                })
                .catch(function(err) {
                    expect(err.message).toEqual('Ouch!');
                })
            ;

            $httpBackend.flush();
        }));
    });
});

describe('myController', function() {
    beforeEach(module('myApp'));

    it('should set name on $scope', inject(function($controller, $rootScope) {
        var scope = $rootScope.$new();

        $controller('myController', {
            $scope: scope
        });

        expect(scope.name).toEqual('Jason');
    }));

    it('should set activate the person when clicked', inject(function($controller, $rootScope) {
        var scope = $rootScope.$new();

        $controller('myController', {
            $scope: scope
        });

        scope.personClicked();

        expect(scope.personActivated).toEqual(true);
    }));
});
