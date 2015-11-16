$(function() {
  console.log('Hello, JavaScript!');

  setTimeout(function() {
    // DOM - Document Object Model API:
    var h1 = document.getElementById('header');
    h1.textContent = 'Dynamic Text!';

    // jQuery:
    $('#header').text('Hello, jQuery!').css('color', 'red');
  }, 2000);

  var str = 'abc'; // string
  var num = 123.456; // double
  var bool = true; // boolean
  var obj = {
    name: 'Jason',
    age: 41
  };
  var arr = [
    123,
    'abc',
    true
  ];
  var dt = new Date();
  var re = new RegExp('abc');
  var n = null;
  var u;

  console.log(typeof str);
  console.log(typeof num);
  console.log(typeof bool);
  console.log(typeof obj);
  console.log(typeof arr);
  console.log(typeof dt);
  console.log(typeof re);
  console.log(typeof n);
  console.log(typeof u);

  var json = JSON.stringify(obj);
  var obj2 = JSON.parse(json);

  if (num) {

  }

  // falsy:
  // - false
  // - 0
  // - ''
  // - null
  // - undefined
  // - NaN
  // truthy:
  // - !falsy

  var userInput = '0';
  var userNumber = parseInt(userInput);
  if (!isNaN(userNumber)) {
    console.log('valid number!');
  }

  function someFunction(arg) {
    arg = arg || 'default';
  }

  someFunction(null);

  function sayHello(person) {
    // var name = person ? person.name : 'person';
    var name = person && person.name || 'person';
    console.log('Hello, ' + name);
  }

  sayHello({ name: 'Jason' });
  sayHello({});
  sayHello(null);
  sayHello();

  function doStuff(options) {
    options = options || {};

    if (options.foo) {
      console.log('foo');
    } else {
      console.log('not foo');
    }
  }

  var str = '123';
  var num = parseInt(str);
  var num2 = +'123';

});
