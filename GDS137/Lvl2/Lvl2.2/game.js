var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var timer = setInterval(animate, interval);
var interval = 1000/60; //1000 ms or 1 second / FPS
var paddle = new GameObject()

//paddle position
paddle.x = 25
paddle.y = canvas.height/2

//paddle size
paddle.w = 20
paddle.h = 200

function animate()
{
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height);
	//Move the Player to the right
	if(s)
	{
		console.log("Moving down");
		paddle.y += 2;
		
	}
	if(w)
	{
		console.log("Moving up");
		paddle.y += -2;
		
	}
	
	//Update the Screen
	paddle.drawRect();
}
