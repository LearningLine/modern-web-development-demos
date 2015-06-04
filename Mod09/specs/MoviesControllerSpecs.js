/**
 * Created by Maurice on 6/4/2015.
 */

describe('The MoviesController', function () {
    var ctrl, scope, httpBackend;
    beforeEach(module('demoApp'))

    beforeEach(inject(function ($controller, $httpBackend) {
        scope = {};
        httpBackend = $httpBackend;


        ctrl = $controller('MoviesController', {
            $scope: scope
        });


    }))


    it('should be created', function () {
        expect(ctrl).toBeDefined();
    })

    it('should have a movies on scope', function(){
        httpBackend.whenGET('/api/movies').respond([{},{}])
        httpBackend.flush();
        expect(scope.movies.length).toBe(2);
    })
})