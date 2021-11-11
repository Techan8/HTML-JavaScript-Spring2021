
function GameObject(obj)
{	
		

		this.x = canvas.width/2;
		this.y = canvas.height/2;
		this.width = 100;
		this.height = 100;
		this.color = "#ff0000";
		this.force = 1;
		this.ax = 1;
		this.ay = 1;
		this.vx = 0;
		this.vy = 0;
		
		
		//------Allows us to pass object literals into the class to define its properties--------//
		//------This eliminate the need to pass in the property arguments in a specific order------------//
		if(obj!== undefined) //If something is inside the parentheses the for loop applies.
		{
			for(value in obj) //value = color, width, height...
			{
				if(this[value]!== undefined)
				this[value] = obj[value];
			}
		}
	
	
	//whether or not the object can jump
	this.canJump = false;
	this.jumpHeight = -25;
	

	this.drawRect = function () {
		ctx.save();
		ctx.fillStyle = "rgba(12,240,229,0)";
		ctx.translate(this.x, this.y);
		ctx.fillRect((-this.width / 2), (-this.height / 2), this.width, this.height);
		ctx.restore();

		
	}

	this.drawCircle = function()
	{
		ctx.save();
			ctx.fillStyle = this.color;
			//ctx.strokeStyle = "black";
			//ctx.lineWidth = "1";
			ctx.beginPath();
			ctx.translate(this.x, this.y);
			ctx.arc(0, 0, this.width/2, 0, 360 *Math.PI/180, true);
			ctx.closePath();
			ctx.fill();
			//ctx.stroke();
		ctx.restore();
		
	}

	this.drawScore = function()
	{
		ctx.save()

		ctx.fillStyle = "black"
		ctx.font = "20px arial"
		ctx.fillText("Score: " + pScore, canvas.width/2 - 268, 40)

		ctx.fillStyle = "black"
		ctx.font = "20px arial"
		ctx.fillText("High Score: " + highScore, canvas.width/2 + 182, 40)

		ctx.restore()
	}
	
	
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
	
	
	//---------Returns object's for the top, bottom, left and right of an object's bounding box.
	this.left = function() 
	{
		return {x:this.x - this.width/2 , y:this.y}
	}
	this.right = function() 
	{
		return {x:this.x + this.width/2 , y:this.y}
	}
	
	this.top = function() 
	{
		return {x:this.x, y:this.y - this.height/2}
	}
	this.bottom = function() 
	{
		return {x:this.x , y:this.y + this.height/2}
	}
	
	this.hitTestObject = function(obj)
	{
		if(this.left().x <= obj.right().x && 
		   this.right().x >= obj.left().x &&
		   this.top().y <= obj.bottom().y &&
		   this.bottom().y >= obj.top().y)
		{
			return true
		}
		return false;
	}
	

	//------Tests whether a single point overlaps the bounding box of another object-------
	this.hitTestPoint = function(obj)
	{
		if(obj.x >= this.left().x && 
		   obj.x <= this.right().x &&
		   obj.y >= this.top().y &&  
		   obj.y <= this.bottom().y)
		{
			return true;
		}
		return false;
	}
	
	/*-----Sets or gets the radius value--------*/
	this.radius = function(newRadius)
	{
		 if(newRadius==undefined)
		 {
			return this.width/2; 
		 }
		 else
		 {
			 return newRadius;
		 }
	}
	
	//Draws the collision points
	this.drawDebug = function()
	{
		var size = 5;
		ctx.save();
		ctx.fillStyle = "black";
		ctx.fillRect(this.left().x-size/2, this.left().y-size/2, size, size);
		ctx.fillRect(this.right().x-size/2, this.right().y-size/2, size, size);
		ctx.fillRect(this.top().x-size/2, this.top().y-size/2, size, size);
		ctx.fillRect(this.bottom().x-size/2, this.bottom().y-size/2, size, size);
		ctx.fillRect(this.x-size/2, this.y-size/2, size, size);
		ctx.restore();
	}
}
