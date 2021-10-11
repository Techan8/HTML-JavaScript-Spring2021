// JavaScript Document

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
	this.vy = 1;
	
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