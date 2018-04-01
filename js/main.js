var GAME = new Game('canvas');

document.onkeypress = function(e) {
    if (e.key == 'd' || e.key == 'D' ){
        GAME.car.move(false);
    }
    else if (e.key == 'a' || e.key == 'A' ) {
        GAME.car.move(true);
    }
};

var timerId = setInterval(function() {
    GAME.generateLine();
}, 50);
