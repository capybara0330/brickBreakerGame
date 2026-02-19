import Sprite from "./sprite.js";

class Ball extends Sprite{
    constructor(x, y, width, height, color, dx, dy){
        super(x, y, width, height, color, dx, dy);
    }

    bounce(canvasWidth, canvasHeight){
        if(this.x < 0 || this.x + this.width > canvasWidth){
            this.dx *= -1;
        }

        if(this.y < 0 || this.y + this.height > canvasHeight){
            this.dy *= -1;
        }
    }
}

export default Ball;