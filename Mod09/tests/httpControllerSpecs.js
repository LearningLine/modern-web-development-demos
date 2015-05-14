/**
 * Created by Maurice on 5/14/2015.
 */


describe('The httpController', function () {
    var scope, httpBackend;

    beforeEach(module('demoApp'));

    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
        httpBackend = $httpBackend;

        $httpBackend.expect('GET', '/api/movies').respond([{title:'The movie'}]);

        scope = $rootScope.$new();
        var ctrl = $controller('httpController', {
            $scope: scope
        })

    }));


    it('has a movies collection on the scope', function () {
        expect(scope.movies.length).toBeDefined();

    });

    it('has a movies collection be filled', function () {
        expect(scope.movies).toEqual([]);
        httpBackend.flush();
        expect(scope.movies).toEqual([{title:'The movie'}]);

    });

    it('will put a valid movie', function(){

        httpBackend.expect('PUT', '/api/movies/42').respond(200);

        scope.save({id: 42, title:'The movie'})

        httpBackend.flush();

        expect(scope.errorMessage).toBeNull();
        httpBackend.verifyNoOutstandingExpectation()


    })

    it('will put a invalid movie', function(){

        scope.save({id: 42, title:''})

        expect(scope.errorMessage).not.toBeNull();

        httpBackend.flush();
        httpBackend.verifyNoOutstandingRequest()


    })

})

