class Car {
    constructor (game, x, y){
        this.game= game;
        this.ctx = this.game.canvas.getContext("2d");
        this.x = x;
        this.y = y;

        this.w = parseInt(this.game.canvas.width/3);
        this.h = 10;

        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    draw(x, y){
        this.ctx.clearRect(this.x, this.y, this.w, this.h);

        this.ctx.fillRect(x, y, this.w, this.h);

        this.x = x;
        this.y = y;
    }
    move(to_left = true){
        if (!this.game.win)
            return false;

        let x = this.x;
        if (to_left)
            x -= 10;
        else
            x += 10;

        if (x < 0 || (x + this.w) > this.game.canvas.width)
            return false;

        this.draw(x, this.y);
    }
}
