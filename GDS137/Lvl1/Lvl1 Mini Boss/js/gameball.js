var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var timer = setInterval(animate, interval);
var interval = 1000/60; //1000 ms or 1 second / FPS
var ball = new Ball()

function animate()
{
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Ball
	ball.x += ball.vx
	ball.y += ball.vy

    if(ball.x > canvas.width - ball.radius || ball.x - ball.radius <0)
    {
        ball.vx = -ball.vx;
    }

	if(ball.y > canvas.height - ball.radius || ball.y - ball.radius <0)
    {
        ball.vy = -ball.vy;
    }
	
	//Update the Screen
	ball.draw();
}