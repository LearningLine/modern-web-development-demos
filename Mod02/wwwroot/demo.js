/**
 * Created by Maurice on 6/1/2015.
 */

//
//if (new Date()){
//    console.log('We have a date')
//}
//
//
//if ("dssdbvjsbd") {
//    console.log(true)
//}else{
//    console.log(false)
//}
//
//
//var data =[];
//
//if (data && data.length){
//
//}
//
//
//if (!!value){
//
//}


//console.log(0.1 + 0.2 === 0.3);

(function () {
    //'use strict';

    var x = 1;
    //x.y = 2;
    console.log(x.y);

    console.log(x.toString());


    var data = [1, 2];

    data.maurice = 'me';
    console.log(data.maurice)

    //data.length = 'No'
    data.length = 0
    console.log(data)

    function Animal(name){
        this.name = name;

        for (var n in this){
            console.log(n, this[n])
        }
    }

    Animal.prototype.sleep = function(){
        console.log(this.name + ' is sleeping');
    };


    function Cat(catName) {
        if (this === window) throw new Error('Please use new');


        this.catName = catName;
        Animal.call(this, catName);

        //this.sleep = function () {
        //    console.log(this.name + ' is sleeping');
        //}

        // Don't do this!!!
        //return this;
    }

    //Cat.prototype.sleep = function(){
    //    console.log(this.name + ' is sleeping');
    //};

    Cat.prototype = new Animal();
    Cat.prototype.eat = function(){
        console.log(this.catName + ' is eating')
    };

    var zorro = new Cat('Zorro');
    var diego = new Cat('Diego');
    zorro.sleep();
    diego.sleep();

    zorro.eat();


}());

