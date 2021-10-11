var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var timer = setInterval(animate, interval);
var interval = 1000/60; //1000 ms or 1 second / FPS
var ball = new Ball()


function Ball()
{
    //Ball's position
    this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//Ball's dimensions
	this.width = 100;
	this.height = 100;
	
	//Ball's velocity or speed on each axis
	this.vx = 1;
	this.vy = 0;
	
	//Ball's color
	this.color = "purple";

    //Ball's radius
	this.radius = 40

	//This draws the Ball to the screen
	this.draw = function()
	{
		ctx.save();
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 360*Math.PI /180, true)
        ctx.closePath()
        ctx.fill()
		ctx.restore();
    }

    //This changes the Ball's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}		
		
}

function animate()
{
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Ball
	ball.x += ball.vx

    if(ball.x > canvas.width - ball.radius || ball.x - ball.radius <0)
    {
		//ball.x = canvas.width - ball.radius
        ball.vx = -ball.vx;
    }

	
	
	//Update the Screen
	ball.draw();
}