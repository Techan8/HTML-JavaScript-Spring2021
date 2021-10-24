// JavaScript Document

function GameObject(x,y,w,h,color) 
{
	var ric = new Image()
	ric.src = "images/ric.png"

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
	this.vx = 0;
	this.vy = 0;
	//Ball's force
	this.force = 1
	//Ball's radius
	

	//This draws the Ball to the screen
	this.drawCircle = function () {
		ctx.save();
		ctx.beginPath()
		ctx.fillStyle = "rgba(12,240,229,0)"
		ctx.arc(this.x, this.y, this.width/2, 0, 360 * Math.PI / 180, true)
		ctx.closePath()
		ctx.fill()
		ctx.drawImage(ric, this.x -33, this.y -28, this.width +16, this.height +6)
		ctx.restore();


	}
	//This draws the paddle on the screen
	this.drawRect = function () {
		ctx.save();
		ctx.fillStyle = this.color;
		ctx.translate(this.x, this.y);
		ctx.fillRect((-this.width / 2), (-this.height / 2), this.width, this.height);
		ctx.restore();

		
	}

	this.drawScore = function()
	{
		ctx.save()

		ctx.fillStyle = "black"
		ctx.font = "20px arial"
		ctx.fillText("Player 1 Score: " + p1Score, canvas.width/2 - 168, 40)

		ctx.fillStyle = "black"
		ctx.font = "20px arial"
		ctx.fillText("|  Player 2 Score: " + p2Score, canvas.width/2 -2, 40)

		ctx.restore()
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