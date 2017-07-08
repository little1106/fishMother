var can1;
var can2;

var ctx1;
var ctx2;

document.body.onload = game;

function game(){
    init();
}

function init(){
    //获取画笔
    can1 = document.getElementById("canvas1");//fish dusk ui circle
    can2 = document.getElementById("canvas2");//back one fruits
    ctx1 = can1.getContext("2d");
    ctx2 = can2.getContext("2d");
}

function gameloop(){
    requestAnimationFrame(gameloop);//根据机器性能决定重绘时间
}