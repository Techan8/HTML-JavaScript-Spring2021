// JavaScript Document

function GameObject(x,y,w,h,color) 
{
	//Default Values
	if (x == undefined)
		this.x = canvas.width / 2;
	else
		this.x = x;
	if (y == undefined)
		this.y = canvas.height / 2;
	else
		this.y = y;

	if (w == undefined)
		this.width = 100;
	else
		this.width = w;
	if (h == undefined)
		this.height = 100;
	else
		this.height = h;

	//player's color
	if (color == undefined)
		this.color = "purple";
	else
		this.color = color;

	//player's velocity or speed on each axis
	this.vx = 1;
	this.vy = 1;
	//Ball's radius
	this.radius = 40

	//This draws the Ball to the screen
	this.drawCircle = function () {
		ctx.save();
		ctx.beginPath()
		ctx.fillStyle = this.color
		ctx.arc(this.x, this.y, this.radius, 0, 360 * Math.PI / 180, true)
		ctx.closePath()
		ctx.fill()
		ctx.restore();


	}

	this.drawRect = function () {
		ctx.save();
		ctx.fillStyle = this.color;
		ctx.translate(this.x, this.y);
		ctx.fillRect((-this.w / 2), (-this.h / 2), this.w, this.h);
		ctx.restore();

	}

	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
	
	this.left = function() 
	{
		return this.x - this.width/2;
	}
	this.right = function() 
	{
		return this.x + this.width/2;
	}
	
	this.top = function() 
	{
		return this.y - this.height/2;
	}
	this.bottom = function() 
	{
		return this.y + this.height/2;
	}
	
	this.hitTestObject = function(obj)
	{
		if(this.left() < obj.right() && 
		   this.right() > obj.left() &&
		   this.top() < obj.bottom() &&
		   this.bottom() > obj.top())
		{
			return true
		}
		return false;
	}

}