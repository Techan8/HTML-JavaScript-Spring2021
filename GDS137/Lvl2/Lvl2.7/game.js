var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var timer = setInterval(animate, interval, collisionScore);
var interval = 1000/60; //1000 ms or 1 second / FPS
var collisionScore = 0

var ball = new GameObject()
//Ball's size
ball.width = 80
ball.height = 80
//Ball's velocity
ball.vx = -2
ball.vy = 0
var paddle = new GameObject()

//This is used to stop the player from moving through obstacles.
var prevX;

//paddle position
paddle.x = 5
paddle.y = canvas.height/2

//paddle size
paddle.width = 20
paddle.height = 200

function animate()
{
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height);
	//Move the Player to the right
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

	//paddle screen bounderies
	if(paddle.y + paddle.height > canvas.height + paddle.height/2)
	{
		paddle.y = canvas.height - paddle.height /2
	}

	if( paddle.y < 0 + paddle.height/2 )
	{
		paddle.y = 0 + paddle.height/2
	}
	
	//Move the Ball
	ball.x += ball.vx
	ball.y += ball.vy

    if(ball.x > canvas.width - ball.width/2 )//|| ball.x - ball.width/2 <0)
    {
		ball.x = canvas.width - ball.width/2 
        ball.vx = -ball.vx;
		//increase velocity at collision
		/*if(ball.vx < 0)
		{
			--ball.vx
		}
		else
		{
			++ball.vx
		}*/
		collisionScore ++ //collisionScore = collisionScore +1
		ball.color = "red" //Change the color 
		
		
    }
	//lose condition - resets the ball to the middle of screen if passes L edge
	if(ball.x <  0 - ball.width/2)

	{
		
		ball.x = canvas.width/2
		ball.y = canvas.height/2
		
	}
	if(ball.y > canvas.height - ball.width/2 )
    {
		ball.y = canvas.height - ball.width/2
        ball.vy = -ball.vy ;
		/*if(ball.vy < 0)
		{
			--ball.vy
		}
		else
		{
			++ball.vy
		}*/

		collisionScore ++ //Increase collision score
		ball.color = "cyan" //Change the color 
		
		
    }

	if (ball.y - ball.width/2 <0)
	{
		ball.y = 0 + ball.width/2 
		ball.vy = -ball.vy ;
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

	//Update the Screen
	ball.drawCircle();
	paddle.drawRect();

}
