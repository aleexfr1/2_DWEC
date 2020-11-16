'use strict';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var stick = {
  width: 20,
  height: 100
};

var yPalo = canvas.height/2 - stick.height/2;
var xInitialPosition1 = 25;
var xInitialPosition2 = canvas.width - xInitialPosition1 - stick.width;

var xBall = canvas.width/2;
var yBall = canvas.height/2;
var vxBall = 10;
var vyBall = 10;
var radiusBall = 9;

function DibujarPalo() {
  if (canvas.getContext) { // si puedo acceder al elemento  comprueba si el método existe.


    ctx.fillStyle = '#e8efe8'; // con esto se elige el color y con eso ya se puede pintar, es como elegir primro el pincel
    ctx.fillRect(xInitialPosition1, yPalo, stick.width, stick.height);  // pinta en las cordenadas x y ancho y alto

    ctx.fillRect( xInitialPosition2, yPalo, stick.width, stick.height);
  }
}

function DibujarBola(){
  ctx.fillStyle = '#434743';
  ctx.beginPath();
  ctx.arc(xBall, yBall, radiusBall, 0, 2*Math.PI);
  ctx.fill();
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  DibujarPalo();
  DibujarBola();
}

draw();

function updateBall(){
  if (xBall > canvas.width - radiusBall|| xBall - radiusBall < 0){
    vxBall = - vxBall
  }

  if (yBall > canvas.height - radiusBall|| yBall - radiusBall < 0){
    vyBall = - vyBall
  }

  xBall = xBall + vxBall;
  yBall = yBall + vyBall;
}

function updateStick (){
   this.jugador1 = new stick (5, 0);
   this.jugador1.y = this.height/2 - this.jugador1.height/2;
   this.jugador2 = new Paddle(this.width - 5 - 2, 0);
    this.jugador2.y = this.height/2 - this.jugador2.height/2;

}

updateStick.prototype.update = function()
{
    if (this.paused)
        return;


    if (this.keys.isPressed(83)) { // DOWN
        this.jugador1.y = Math.min(this.height - this.jugador1.height, this.jugador1.y + 4);
    } else if (this.keys.isPressed(87)) { // UP
        this.jugador1.y = Math.max(0, this.jugador1.y - 4);
    }

    if (this.keys.isPressed(40)) { // DOWN
        this.jugador2.y = Math.min(this.height - this.jugador2.height, this.jugador2.y + 4);
    } else if (this.keys.isPressed(38)) { // UP
        this.jugador2.y = Math.max(0, this.jugador2.y - 4);
    }
};

setInterval(function (){
  updateBall();
  draw();
}, 40);