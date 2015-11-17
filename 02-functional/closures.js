// var button1 = document.getElementById('button1');
// button1.addEventListener('click', function() {
//   console.log('you clicked me!');
// }, false);
//

function init() {
  console.time('init');

  var buttons = document.querySelectorAll('button');

  buttons = Array.prototype.slice.call(buttons);

  buttons.forEach(function(button, i) {
    button.addEventListener('click', function() {
      console.log('You clicked button # %d!', i + 1);
      console.log(button.dataset.title);
    });
  });

  // for (var i = 0; i < buttons.length; i++) {
  //   var button = buttons[i];
  //
  //   // IIFE - immediately-invoked function expression
  //   (function(j) {
  //     button.addEventListener('click', function() {
  //       console.log('You clicked button # %d!', j + 1);
  //     });
  //   })(i);
  // }

  console.timeEnd('init');
}

init();
