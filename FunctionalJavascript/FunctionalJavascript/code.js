var doMath = function (opFn, a, b, c) {
    return opFn(a, b);
}


var addFn = function (a, b) {
    return a + b;
}

var add5 = doMath.bind(null, addFn, 5);
add5(10);



//function subtractFn(a, b) {
//    return a - b;
//}

////console.log(doMath(addFn, 1, 2));
////console.log(doMath(subtractFn, 2, 1));

//function doMathInTheFuture(opFn, a, b) {
//    return function () {
//        var result = opFn(a, b);
//        console.log(result);
//    }
//}

//var doAdd = doMathInTheFuture(addFn, 1, 2);
//doAdd();

var shawn = {
    name: "Shawn",
    age: 21,
    jobs: ["actor", "entreprenuer"],
    speak: function () {
        console.log(this.name + " says Hi");
    },
    bindButton: function () {
        var self = this;
        //document.querySelector("#speak").addEventListener('click', function () {
        //    self.speak();
        //});
        document.querySelector("#speak").addEventListener('click', this.speak.bind(this))
    },
    listJobs: function () {
        //var self = this;
        this.jobs.forEach(function (job) {
            console.log(this.name + " is a " + job);
        }, this);
    }
}

//var amy = {
//    name: "Amy",
//    age: 22
//}

//shawn.speak.call(amy);

//shawn.bindButton();
//shawn.listJobs();

//var arrLike = {
//    0: "Shawn",
//    1: "Amy",
//    2: "Joe",
//    length: 3
//};

//[].forEach.call(arrLike, function(name) {
//    console.log(name);
//})


//function add() {
//    //console.log(arguments);
//    //return arguments;
//    Array.prototype.forEach.call(arguments, function(x) {
//        console.log(x)});

//    [].forEach.call(arguments, function (x) {
//        console.log(x);
//    })
//}
    
//var addArgs = add(1, 2, 3);

//shawn.speak.call(amy, arg1, arg2);
//shawn.speak.call(amy, [arg1, arg2]);


//shawn.speak();