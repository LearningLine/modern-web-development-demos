var postsUL = document.getElementById('posts');

var num = 123;
var str = 'abc';
var obj = {};
var arr = [];
var fun = function() {};

function render(data) {
    console.log(data.data.children);

    // var posts = [];
    //
    // for (var i = 0; i < data.data.children.length; i++) {
    //     var post = data.data.children[i];
    //     posts.push(post.data);
    // }

    var posts = data.data.children
        .map(flatten)
        .filter(sfw)
        .map(simplify)
    ;

    console.table(posts);

    posts.forEach(renderLI);

    var total = posts.reduce(function(previous, current) {
        return previous + current.numComments;
    }, 0);

    console.log(total);

    var avg = total / posts.length;

    console.log(avg);

    var avg2 = posts.reduce(function(p, c, i) {
        return p + (c.numComments - p) / (i + 1);
    }, 0);

    console.log(avg2);
}

function flatten(post) {
    return post.data;
}

function sfw(post) {
    return !post.over_18;
}

function simplify(post) {
    return {
        title: post.title,
        url: post.url,
        thumbnail: post.thumbnail,
        numComments: post.num_comments
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
