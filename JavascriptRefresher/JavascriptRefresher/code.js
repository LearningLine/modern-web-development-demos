//console.log("here");
//
//var s = "shawn";
////console.log(s);

//var shawn = {
//    name: "Shawn",
//    age: 21,
//    speak: function () {
//        console.log("hi");
//    }
//}

//var o = {}

//var a = ["Shawn", 21, true, [], {}, ]

//foo();

//function foo() {
//    console.log("foo");
//}

//var bar = function () {
//    console.log("bar");
//}
//bar();


//if (false !== "0") {
//    console.log("true");
//}
//else console.log("false");

//for (var i = 0 ; i < a.length; i++)
//{
//    console.log(a[i]);
//}

//function printMe(x) {
//    console.log(x);
//}

//a.forEach(
//    printMe
//    );

//var numArr = [1, 2, 3];

//var result = numArr.reduce(function (prevValue, curValue) {
//    return prevValue + curValue;
//}, 0)
//console.log(result);


//var x = 1;
//var x = 1;

function getTicketCreator(name) {
    var x = 0;    
    var getTicket = function() {
        console.log(name, x);
        x++;
    }
    return getTicket;
}

var spaceMountainTicket = getTicketCreator("Space Mountain");
var dumboTicket = getTicketCreator("Dumbo");
spaceMountainTicket();
spaceMountainTicket();
dumboTicket();

//var myAdder = getCounter();
//myAdder();
//myAdder();
//myAdder();


