/**
 * Created by Maurice on 5/14/2015.
 */


describe('The simpleController', function () {
    var scope;

    beforeEach(module('demoApp'));

    beforeEach(inject(function ($controller, $rootScope, movieValidation) {

        spyOn(movieValidation, 'validate');

        scope = $rootScope.$new();
        var ctrl = $controller('simpleController', {
            $scope: scope,
            movieValidation: movieValidation
        })
    }));


    it('has a movies collection on the scope', function () {
        expect(scope.movies).toEqual([{id: 42, title: 'The AngularJS movie'}]);

    });


})

