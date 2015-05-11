/**
 * Created by Maurice on 5/11/2015.
 */
(function () {
    //'use strict';


    //function Dog(name){
    //    if (this === window) throw new Error('Please use new!')
    //
    //    this.name = name;
    //
    //    this.bark = function(){
    //        console.log(this.name + ' is barking');
    //    }
    //}

    function Animal(name) {
        if (this === window) throw new Error('Please use new!')

        this.name = name;
    }

    Animal.prototype.sleep = function () {
        console.log(this.name + ' is sleeping');
    };

    function Dog(dogName) {
        if (this === window) throw new Error('Please use new!')

        Animal.call(this, dogName)

        this.dogName = dogName;
    }

    Dog.prototype = new Animal();

    Dog.prototype.bark = function () {
        console.log(this.dogName + ' is barking');
    };


    var pluto = new Dog('Pluto');
    pluto.bark();
    pluto.sleep();

    var fifi = new Dog('Fifi');
    fifi.bark();

    console.log("typeof  pluto", typeof  pluto)

    delete Dog.prototype.bark
    //Dog.prototype.bark = 1;

    console.log("pluto instanceof Dog", pluto instanceof Dog)

    if (typeof(pluto.bark) === 'function') {
        pluto.bark();
    } else {
        console.log('bark is not a function')
    }

    if (pluto.bark) {
        pluto.bark();
    }

    for (var p in pluto) {
        if (pluto.hasOwnProperty(p)) {
            console.log(p, pluto[p])
        }
    }

})();










