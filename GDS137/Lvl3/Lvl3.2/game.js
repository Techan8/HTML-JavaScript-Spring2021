var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var timer = setInterval(animate, interval, p1Score, p2Score);
var interval = 1000/60; //1000 ms or 1 second / FPS
var collisionScore = 0

var ball = new GameObject()
//Ball's size
ball.width = 40
ball.height = 40
//Ball's velocity
ball.vx = -2
ball.vy = 0

var paddle = new GameObject()
var paddle2 = new GameObject()
//paddle position
paddle.x = 5
paddle.y = canvas.height/2
paddle2.x = 1019
paddle2.y = canvas.height/2
//paddle size
paddle.width = 20
paddle.height = 200
paddle2.width = 20
paddle2.height = 200
//paddle's color
paddle.color = "blue"
paddle2.color = "red"

var Score =  new GameObject()
var p1Score = 0
var p2Score = 0

//This is used to stop the player from moving through obstacles.
var prevX;

function animate()
{
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height);
	//Move the paddles up and down
	if(s)
	{
		console.log("Moving up");
		paddle.y += 2;
		

	}
	if(w)
	{
		console.log("Moving down");
		paddle.y += -2;
		
	}

	if(up)
	{
		console.log("Moving up");
		paddle2.y += -2;
		

	}
	if(down)
	{
		console.log("Moving down");
		paddle2.y += 2;
		
	}

	//paddle screen bounderies
	if(paddle.y + paddle.height > canvas.height + paddle.height/2)
	{
		paddle.y = canvas.height - paddle.height /2
	}

	if( paddle.y < 0 + paddle.height/2 )
	{
		paddle.y = 0 + paddle.height/2
	}

	if(paddle2.y + paddle2.height > canvas.height + paddle2.height/2)
	{
		paddle2.y = canvas.height - paddle2.height /2
	}

	if( paddle2.y < 0 + paddle2.height/2 )
	{
		paddle2.y = 0 + paddle2.height/2
	}
	
	//Move the Ball
	ball.x += ball.vx
	ball.y += ball.vy

	//lose condition - resets the ball to the middle of screen if passes R edge
    if(ball.x > canvas.width - ball.width/2 )//|| ball.x - ball.width/2 <0)
    {
		ball.x = canvas.width/2
		ball.y = canvas.height/2
		//Change the color
		ball.color = "black"  
		p1Score++
		
    }
	//lose condition - resets the ball to the middle of screen if passes L edge
	if(ball.x <  0 - ball.width/2)

	{
		
		ball.x = canvas.width/2
		ball.y = canvas.height/2
		p2Score++
		
	}
	//boundary bottom screen
	if(ball.y > canvas.height - ball.width/2 )
    {
		ball.y = canvas.height - ball.width/2
        ball.vy = -ball.vy ;
		 //Change the color
		ball.color = "cyan" 
		
		
    }
	
	//boundary top screen
	if (ball.y < 0 + ball.width/2 )
	{
		ball.y = 0 + ball.width/2 
		ball.vy = -ball.vy ;

		collisionScore ++ //Increase collision score
		ball.color = "lightgreen" //Change the color
	}


	//collision detection
	if (ball.hitTestObject(paddle)) 
	{
		ball.x = paddle.x + paddle.width/2 + ball.width/2
		//changes color of the ball
		ball.color = "yellow"
		//changes the direction of the ball
		ball.vx = -ball.vx

		//changes ball's velocity direction
		if(ball.y < paddle.y - paddle.y/6)
     	{
       		ball.vy = -ball.force
     	}
		else if(ball.y > paddle.y + paddle.height/6)
		{
			ball.vy = ball.force
		}
		
	}
	
	else {
		ball.color = ball.color;
		
	}

	if (ball.hitTestObject(paddle2)) 
	{
		ball.x = paddle2.x - paddle2.width/2 - ball.width/2
		//changes color of the ball
		ball.color = "orange"
		//changes the direction of the ball
		ball.vx = -ball.vx

		//changes ball's velocity direction
		if(ball.y < paddle2.y - paddle2.y/6)
     	{
       		ball.vy = -ball.force
     	}
		else if(ball.y > paddle2.y + paddle2.height/6)
		{
			ball.vy = ball.force
		}
		
	}
	
	else {
		ball.color = ball.color;
		
	}

	//Update the Screen
	ball.drawCircle();
	paddle.drawRect();
	paddle2.drawRect();
	Score.drawScore();
	


}
