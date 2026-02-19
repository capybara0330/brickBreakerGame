import Sprite from "./sprite.js";

class Paddle extends Sprite{
    constructor(x, y, width, height, color){
        super(x, y, width, height, color, 0, 0);
        this.displacement = 7;
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        document.addEventListener("keyup", this.keyUpHandler.bind(this));
    }

    keyDownHandler(e){
        if(e.key === "ArrowRight"){
            this.dx = this.displacement;
        }else if(e.key === "ArrowLeft"){
            this.dx = -this.displacement;
        }
    }

    keyUpHandler(e){
        if(e.key === "ArrowRight"){
            this.dx = 0;
        }else if(e.key === "ArrowLeft"){
            this.dx = 0;
        }
    }
}

export default Paddle;