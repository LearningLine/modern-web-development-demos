/**
 * Created by Maurice on 6/4/2015.
 */


describe('The messageService', function(){
var theMessageService
    beforeEach(module('demoServices'));

    beforeEach(inject(function(messageService){
        theMessageService = messageService;
    }))

    it('says hello', function(){

        var msg = theMessageService.getGreeting();
        expect(msg).toBe('Hello there :-)');
    })

})