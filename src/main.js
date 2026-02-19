import "./style.css";
import Block from "./model/block.js";
import Sprite from "./model/sprite.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const redBlock = new Block(20, 40, 50, 50, "#FF0000");

const blueSprite = new Sprite(
    canvas.width/2,
    canvas.height - 30,
    10,
    10,
    "#0095DD",
    2,
    -2
);

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    redBlock.draw(ctx);
    blueSprite.draw(ctx);
    blueSprite.move();

    window.requestAnimationFrame(draw);
}

draw();