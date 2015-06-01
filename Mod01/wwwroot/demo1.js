/**
 * Created by Maurice on 6/1/2015.
 */

(function () {
    'use strict';

    if (true) {
        var name = 'Maurice2';
    }

    setTimeout(function () {
        console.log('in Demo1.js', name);
    }, 1000);
    console.log('in Demo1.js', name);

// An error because fnAnonymous needs to be assigned
    //fnAnonymous();
    fnNamed();

    var fnAnonymous = function () {
        console.log('in fnAnonymous');
    }

    function fnNamed() {
        console.log('in fnNamed');

    }


    fnAnonymous();
    fnNamed();


    var data = [1, 2, 3, 4, 5, '6'];

    function sum(ar) {
        var result = 0;
        for (var i = 0; i < ar.length; i++) {
            result += (+ar[i]);
        }
        return result;
    }

    function product(ar) {
        var result = 1;
        for (var i = 0; i < ar.length; i++) {
            result *= (+ar[i]);
        }
        return result;
    }

    console.log('Sum ', sum(data));
    console.log('Product ', product(data));


    function iterate(ar, fn) {
        for (var i = 0; i < ar.length; i++) {
            fn(+ar[i]);
        }
    };


    var result = 0;
    iterate(data, function (n) {
        result += n;
    })
    console.log('Sum ', result);

    var result = 1;
    iterate(data, function (n) {
        result *= n;
    })
    console.log('Product', result);


    //data=[];
    console.log('Reduce', data.
        map(function (n) {
            return (+n);
        }).reduce(function (n, p) {
            return n + p;
        }, 0));

    function doStuff() {
        //name2 = 'Oops'

        return {
            x: 1
        }
    }


    console.log('doStuff', doStuff());

    var o1 = {
        x: 1,
        fn: function () {
            console.log('this', this)
            console.log('x', this.x);
        }
    };

    o1.fn();

    var fn = o1.fn;
    //fn();
    fn.apply({x:'applied', y:10});


    var o2 = {
        x: 'Hello',
        fn: o1.fn
    };

    o2.fn();

    var fnBound = fn.bind({x:"bound"})
    fnBound();

    var o3 = {
        x:7,
        fn:fnBound
    }
    o3.fn();


    function test(){
        //var arguments=1;
    }
})();

