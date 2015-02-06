var buttons = document.querySelectorAll('button');

// for (var i = 0; i < buttons.length; i++) {
//     (function(j) {
//         var button = buttons[j];
//         button.addEventListener('click', function() {
//             alert('You clicked button # ' + (j + 1));
//         });
//     })(i);
// }

var forEach = Array.prototype.forEach;

// buttons.forEach = forEach;
//
// buttons.forEach(function(button) {
//     console.log(button);
// });

forEach.call(buttons, function(button, i) {
    button.addEventListener('click', function() {
        alert('You clicked button # ' + (i + 1));
    });
});

var postsUL = document.getElementById('posts');

function render(data) {
    console.log(data.data.children);

    var posts = data.data.children
        // .map(pluck('data'))
        // .map(get.bind(null, 'data'))
        .map(function(post) {
            return get('data', post);
        })
        .filter(not(pluck('over_18')))
        .map(props([ 'title', 'url', 'thumbnail', 'num_comments' ]))
    ;

    console.table(posts);

    posts.forEach(renderLI);

    var total = posts.reduce(function(previous, current) {
        return previous + current.num_comments;
    }, 0);

    console.log(total);

    var avg = total / posts.length;

    console.log(avg);

    var avg2 = posts.reduce(function(p, c, i) {
        return p + (c.num_comments - p) / (i + 1);
    }, 0);

    console.log(avg2);
}

function get(name, obj) {
    return obj[name];
}

function pluck(name) {
    return function(obj) {
        return obj[name];
    };
}

function not(fn) {
    return function(obj) {
        return !fn(obj);
    };
}

function props(keys) {
    return function(obj) {
        var newObj = {};

        keys.forEach(function(key) {
            newObj[key] = obj[key];
        });

        return newObj;
    };
}

function renderLI(post) {
    var li = document.createElement('li');

    if (post.thumbnail) {
        var img = document.createElement('img');
        img.src = post.thumbnail;
        li.appendChild(img);
    }

    li.appendChild(document.createTextNode(post.title));

    postsUL.appendChild(li);
}
