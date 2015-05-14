/**
 * Created by Maurice on 5/14/2015.
 */


describe('The movieValidation', function(){

    beforeEach(module('demoApp'));



        it('can validate a movie', inject( function(movieValidation){

            var result = movieValidation.validate({title:'The title'});

            expect(result).toBeNull();
        }));

        it('can fail a movie', inject( function(movieValidation){

            var result = movieValidation.validate({title:''});

            expect(result).toBe('No movie title');
        }));

})