class Building {
    constructor (game, x, y){
        this.game= game;

        this.id = this.game.build_id;

        this.x = x;
        this.y = y;
        this.w = parseInt(this.game.canvas.width/3.5);
        this.h = 10;

        this.ctx = this.game.canvas.getContext("2d");
        this.ctx.fillRect((this.x + 1), this.y, (this.w - 1), this.h);
    }
    move(){
        let y = this.y;

        if (y < 0){
            delete this.game.ar_build[this.id];
        }

        y -= 10;

        this.draw(this.x, y);
    }

    draw(x, y){
        this.ctx.clearRect((x + 1), this.y, (this.w - 1), this.h);

        this.ctx.fillRect((x + 1), y, (this.w - 1), this.h);

        this.x = x;
        this.y = y;


        if (this.game.checkIntersect(this)){
            clearInterval(timerId);
            this.game.win = false;
        }

    }

}
