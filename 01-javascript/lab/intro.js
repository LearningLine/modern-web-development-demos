var gameOver = false;
var turnNumber = 0;

newGame();

var gameBoard = document.getElementById('gameBoard');
addEvent(gameBoard, 'click', gameBoardClicked);

var startOverButton = document.getElementById('startOver');
addEvent(startOverButton, 'click', startOverClicked);

showCurrentPlayer();

function gameBoardClicked(e) {
    if (gameOver) return;

    var target = e.target || e.srcElement;

    if (target.nodeName == 'TD') {
        var text = target.innerText || target.textContent;

        if (text !== 'X' && text !== 'O') {
            var player = (++turnNumber % 2 == 1) ? 'X' : 'O';
            var x = target.cellIndex;
            var y = target.parentNode.rowIndex;

            target.innerHTML = player;

            if (takeTurn(player, x, y)) {
                setMessage(player + ' wins!');
                gameOver = true;
            } else if (turnNumber >= 9) {
                setMessage('Game over!');
                gameOver = true;
            } else {
                showCurrentPlayer();
            }
        }
    }
}

function startOverClicked(e) {
    clearGameBoard();
    turnNumber = 0;
    gameOver = false;
    showCurrentPlayer();
    newGame();
}

function clearGameBoard() {
    for (var i = 0; i < 3; i++)
        for (var j = 0; j < 3; j++)
        gameBoard.rows[i].cells[j].innerHTML = '&nbsp;';
}

function showCurrentPlayer() {
    setMessage('It\'s ' + ((turnNumber % 2 === 1) ? 'O' : 'X') + '\'s turn!');
}

function setMessage(text) {
    var message = document.getElementById('message');
    message.innerHTML = text;
}

function addEvent(target, eventName, handler) {
    if (target.addEventListener)
        target.addEventListener(eventName, handler, false);
    else if (target.attachEvent)
        target.attachEvent('on' + eventName, handler);
    else
        throw new Error('Get a new browser!');
}