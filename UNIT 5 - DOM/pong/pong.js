

// variables globales y el canvas
var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'), keydown = [],
	twoPlayers = true, ball_speed_i = 0, winner = 0,
	play = false, score_1 = score_2 = 0 ,background = new Image;

// input del teclado
(function() {
	window.addEventListener('keydown',function(e) {
		keydown[e.keyCode] = true;
	},false);
	window.addEventListener('keyup',function(e) {
		keydown[e.keyCode] = false;
	},false)
})();

// objetos del juego
var player1 = {
	x:20,y:250,width:20,height:100
},
player2 = {
	x:760,y:250,width:20,height:100
},
ball = {
	x:400,y:parseInt(Math.random()*570+15),radio:15,dir:1,angle:120
};


// Imagenes - Palos

var img_blok = new Image;
img_blok.src = 'img/Block2.png';

// fondo 

function fondo() {
	var backs = new Array('img/0033.jpg');
	var i = parseInt(Math.random()*backs.length);
	background.src = backs[i];
}
// funciones del juego
function drawBackground() {
	ctx.drawImage(background,0,0,800,600);
}
function DibujarObjetos() {

	// dibujar los objetos
	ctx.save();
	ctx.fillStyle = 'orange';
	if(winner != 0) ctx.globalAlpha = 0;// hacer invisibles si ya existe un ganador

	ctx.drawImage(img_blok,player1.x,player1.y,player1.width,player1.height);
	ctx.drawImage(img_blok,player2.x,player2.y,player2.width,player2.height);
	ctx.beginPath();
	ctx.arc(ball.x,ball.y,ball.radio,0,7);
	ctx.fill();
	ctx.restore();

	// dibujar el marcador
	ctx.save();
	ctx.shadowOffsetX = shadowOffsetY = 0;
	ctx.shadowBlur = 10;
	ctx.shadowColor = '#fff';
	ctx.font = '36px Arial';
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.verticalAlign = 'middle';
	ctx.fillText(score_1,20,30);
	ctx.fillText(score_2,780,30);
	ctx.restore();
}
function moverJugadores() {
	// mover player1 {
	if(keydown[65]) player1.y -= 10;
	if(keydown[90]) player1.y += 10;
	// colisiones del player1
	if(player1.y < 0) player1.y = 0;
	if(player1.y > 500) player1.y = 500;
	// /mover player1 }

	// mover player2 {
	// dos jugadores
	if(twoPlayers) {
		if(keydown[38]) player2.y -= 10;
		if(keydown[40]) player2.y += 10;
	}
	// un jugador
	if(!twoPlayers && ball.dir == 1) {
		if(ball.y - 50 < player2.y) player2.y -= 10;
		if(ball.y - 50 > player2.y) player2.y += 10;
	}
	// colisiones del player2
	if(player2.y < 0) player2.y = 0;
	if(player2.y > 500) player2.y = 500;
	// /mover player2}

	// mover la bola {
	ball.x += (4 + ball_speed_i)*ball.dir;
	ball.y += Math.sin(ball.angle)*(4 + ball_speed_i);
	// colision con los jugadores
	// player2
	if (ball.x + ball.radio > player2.x &&
		ball.y > player2.y &&
		ball.y < player2.y + player2.height
		)
	{
		ball.dir = -1;
		ball_speed_i += 0.25;
		var snd = snd_colision;
		snd.currentTime = 0;
		snd.play();
	}
	// player1
	if (ball.x - ball.radio < player1.x + player1.width &&
		ball.y > player1.y &&
		ball.y < player1.y + player1.height
		)
	{
		ball.dir = 1;
		ball_speed_i += 0.25;
		var snd = snd_colision;
		snd.currentTime = 0;
		snd.play();
	}
	// colision con las paredes
	if(ball.y + ball.radio > 600 && winner == 0) {
		ball.angle = -ball.angle;
		var snd = snd_colision;
		snd.currentTime = 0;
		snd.play();
	}
	if(ball.y - ball.radio < 0 && winner == 0) {
		ball.angle = -ball.angle;
		var snd = snd_colision;
		snd.currentTime = 0;
		snd.play();
	}



	// Determinar ganador

	if(ball.x < 0 && winner == 0) {
		winner = 'jugador DOS';
		score_2 += 1;
		ball.x = 400;
	}
	if(ball.x > 800 && winner == 0) {
		winner = 'jugador UNO';
		score_1 += 1;
		ball.x = 400;
	}
}
// TextoGanador
function ganador() {
	if(winner != 0) {
		ctx.save();
		ctx.shadowOffsetX = shadowOffsetY = 0;
		ctx.shadowBlur = 10;
		ctx.shadowColor = '#fff';
		ctx.font = '40px Arial';
		ctx.fillStyle = 'black';
		ctx.textAlign = 'center';
		ctx.verticalAlign = 'middle';
		ctx.fillText('Gana el '+winner,400,300);
		ctx.fillText('presione espacio para continuar',400,340);
		ball.x = 0;
		ctx.restore();
		// reanudar el juego
		if(keydown[32]) {
			winner = 0;
			ball_speed_i = 0;
			ball.angle = 120;
			ball.x = 400;
			ball.y = 300;
			ball.dir = 1;
			player1.y = player2.y = 250;
			snd_go.play();
			fondo();
		}
	}

}
// pantalla principal inicial del juego
function IniciarJuego() {
	ctx.save();
	ctx.shadowOffsetX = shadowOffsetY = 0;
	ctx.shadowBlur = 10;
	ctx.shadowColor = '#fff';
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.verticalAlign = 'middle';
	ctx.font = '42px verdana';
	ctx.fillText('Pong',400,200);
	ctx.font = '32px verdana';
	ctx.fillText('Presione 1 para jugar solo',400,300);
	ctx.fillText('Presione 2 para dos jugadores',400,380);
	ctx.font = '24px verdana';
	ctx.fillText('use "A" y "Z" para subir y bajar',400,332);
	ctx.fillText('use "A" y "Z" para subir y bajar: Jugador 1',400,412);
	ctx.fillText('use "Arriba" y "Abajo" para subir y bajar: Jugador 2',400,436);
	ctx.restore();

	// 1 jugador
	if(keydown[97] || keydown[49]){
		play = true;
		twoPlayers = false;
		snd_go.play();
		fondo();
	}
	// 2 jugadores
	if(keydown[98] || keydown[50]){
		play = true;
		twoPlayers = true;
		snd_go.play();
	}
}

// tamaño y fondo del canvas
canvas.width = 800; canvas.height = 600;

fondo();

autoScale(canvas);


// funcion principal
function main() {

	drawBackground(); // imagen de fondo
	// si el juego inicia
	if(play) {
		moverJugadores();
		
		DibujarObjetos();

		ganador();

	} else { 
		IniciarJuego();
	}
}

setInterval(main,25);
