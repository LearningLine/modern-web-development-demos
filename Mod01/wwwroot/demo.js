/**
 * Created by Maurice on 5/11/2015.
 */
(function () {
    'use strict';

    console.log('in IEFE')

//fn1();
    fn2();


    var fn1 = function () {
        console.log('in fn1')
    };


    function fn2() {
        console.log('In fn2')
    }


    fn1();
    fn2();


    function outerFn(fn) {
        fn();
    }

    outerFn(fn1);


    var msg = 'Hello from demo.js'

    //setTimeout(function () {
    //    console.log(msg)
    //}, 1000);


    function getStuff() {
        return {
            name: 'Maurice'
        };
    }

    console.log(getStuff())


    var numbers = [1, 2, 3, 4, '5'];
    numbers [7] = 7;

    console.log(numbers);

    function addNumbers(data) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i]) {
                sum += data[i];
            }
        }
        return sum;
    }

    function multiplyNumbers(data) {
        var product = 1;
        for (var i = 0; i < data.length; i++) {

            if (data[i]) {
                product *= data[i];
            }
        }
        return product;
    }


    console.log('Sum', addNumbers(numbers))
    console.log('product', multiplyNumbers(numbers))


    function iterate(data, fn) {

        for (var i = 0; i < data.length; i++) {

            if (data[i]) {
                fn((+data[i]))
            }
        }

    }

    var sum = 0;
    iterate(numbers, function (x) {
        sum += x
    })
    console.log('Sum', sum)

    var product = 1;
    iterate(numbers, function (x) {
        product *= x
    })
    console.log('product', product)

    console.log('Sum using reduce', numbers.reduce(function (p, n) {
        return p + (+n);
    }, 0))

    console.log('Product using reduce', numbers.reduce(function (p, n) {
        return p * (+n);
    }, 1))


    var people = [
        {name: 'Mike', city: 'London'},
        {name: 'Joe', city: 'New York'},
        {name: 'Ken', city: 'London'},
        {name: 'Barbie', city: 'New York'},
        {name: 'However', city: 'London'}
    ]

    var nameCity = people.map(function (person) {
            return {name: person.name, city: person.city};
        }
    )

    var namesInLondon = nameCity.reduce(function (pervious, person) {
        if (person.city === 'London') {
            pervious.push(person);
        }
        return pervious;
    }, []);

    console.log(namesInLondon)


    var o1 = {
        x: 123,
        f: function () {
            console.log(this, this.x);
        }
    };

    o1.f();

    var o2 = {
        x: 456,
        f: o1.f
    }

    o2.f();

    var f3 = o1.f;
    //f3();
    f3.call(o1)
    f3.call(o2)
    f3.call({x:9})

    var f4 = f3.bind({x:77});

    f4();
    f4.call(o1)
    f4.call(o2)
    f4.call({x:9})


    //var newVar = 1;
    // console.log(newVar)



    function calculator(){
        var sum=0;

        function add(n) {
            sum += n;
        }

        function print(){
            console.log(sum)

        }

        return  {
            add: add,
            print: print
        };
    }


    var calc = calculator();

    calc.add(1)
    calc.add(2)
    calc.add(3)
    calc.print()

    var calc2 = calculator();

    calc2.add(10)
    calc2.add(20)
    calc2.add(30)
    calc2.print()
})();










