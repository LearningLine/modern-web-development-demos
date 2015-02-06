describe('myApp', function() {
    beforeEach(module('myApp'));

    describe('myController', function() {
        it('should be able to add 2 numbers', inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();

            scope.a = 1;
            scope.b = 2;

            var myController = $controller('myController', {
                $scope: scope
            });

            scope.add();

            expect(scope.sum).toBe(3);
        }));

        it('should be able to add 2 numbers better', inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();

            var myController = $controller('myController', {
                $scope: scope
            });

            expect(scope.add2(1, 2)).toBe(3);
        }));
    });

    describe('myCalculator', function() {
        it('should also be able to add 2 numbers', inject(function(myCalculator) {
            expect(myCalculator.add(1, 2)).toBe(3);
        }));
    });

    describe('myData', function() {
        it('should make an Ajax request to get data', inject(function(myData, $httpBackend) {
            $httpBackend.when('GET', '/api/data').respond([
                'foo', 'bar', 'baz'
            ]);

            myData.getAll().then(function(data) {
                expect(data).toEqual([
                    'FOO', 'BAR', 'BAZ'
                ]);
            });

            $httpBackend.flush();
        }));
    });
});










//
