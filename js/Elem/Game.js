class Game {
    constructor (canvas_id){
        this.canvas = document.getElementById(canvas_id);
        this.car = new Car(this, 10, 10);
        this.ar_build = {};
        this.build_counter = 9;
        this.build_id = 0;

        this.win = true;
    }
    generateLine(){
        this.build_counter++;
        if (this.build_counter == 30){
            this.build_counter = 0;

            let b = new Building(this, this.getRandomArbitary(), 490);
            this.build_id++;

            this.ar_build[this.build_id] = b;
        }

        for (let key in this.ar_build) {
            let o = this.ar_build[key];
            if (o instanceof Building)
                o.move();
        }
    }
    getRandomArbitary(){
        return parseInt( Math.random() * (this.canvas.width - parseInt(this.canvas.width/3))  / 1);
    }
    checkIntersect (a) {
        let b = this.car;
        b.y1 = b.y + b.h;
        b.x1 = b.x + b.w;

        a.y1 = a.y + a.h;
        a.x1 = a.x + a.w;

        return (
            (
              (
                ( a.x>=b.x && a.x<=b.x1 )||( a.x1>=b.x && a.x1<=b.x1  )
              ) && (
                ( a.y>=b.y && a.y<=b.y1 )||( a.y1>=b.y && a.y1<=b.y1 )
              )
            )||(
              (
                ( b.x>=a.x && b.x<=a.x1 )||( b.x1>=a.x && b.x1<=a.x1  )
              ) && (
                ( b.y>=a.y && b.y<=a.y1 )||( b.y1>=a.y && b.y1<=a.y1 )
              )
            )
          )||(
            (
              (
                ( a.x>=b.x && a.x<=b.x1 )||( a.x1>=b.x && a.x1<=b.x1  )
              ) && (
                ( b.y>=a.y && b.y<=a.y1 )||( b.y1>=a.y && b.y1<=a.y1 )
              )
            )||(
              (
                ( b.x>=a.x && b.x<=a.x1 )||( b.x1>=a.x && b.x1<=a.x1  )
              ) && (
                ( a.y>=b.y && a.y<=b.y1 )||( a.y1>=b.y && a.y1<=b.y1 )
              )
            )
        );
    }
}
