var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var timer = setInterval(animate, interval, collisionScore);
var interval = 1000/60; //1000 ms or 1 second / FPS
var collisionScore = 0

var ball = new GameObject()
var paddle = new GameObject()

//This is used to stop the player from moving through obstacles.
var prevX;

//paddle position
paddle.x = 5
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
		console.log("Moving up");
		paddle.y += 2;
		if(paddle.y + paddle.h > canvas.height + paddle.h/2)
		{
			paddle.y = canvas.height - paddle.h /2
		}

	}
	if(w)
	{
		console.log("Moving down");
		paddle.y += -2;
		if( paddle.y < 0 + paddle.h/2 )
		{
			paddle.y = 0 + paddle.h/2
		}
	}

	//Move the Ball
	ball.x += ball.vx
	ball.y += ball.vy

    if(ball.x > canvas.width - ball.radius )//|| ball.x - ball.radius <0)
    {
        ball.vx = -ball.vx;
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

	/*if(ball.y > canvas.height - ball.radius || ball.y - ball.radius <0)
    {
        ball.vy = -ball.vy ;*/
		/*if(ball.vy < 0)
		{
			--ball.vy
		}
		else
		{
			++ball.vy
		}*/

		/*collisionScore ++ //Increase collision score
		ball.color = "cyan" //Change the color 
		
		
    }*/
	
	if (ball.hitTestObject(paddle)) {
		//change color
		ball.color = "yellow";
		ball.vx = -ball.vx
	}
	else {
		ball.color = ball.color;
	}

	//Shows Bounding Boxes
	if (ball.hitTestObject(paddle)) {
		//draw bounding boxes
		ctx.strokeRect(ball.x - ball.width / 2, ball.y - ball.height / 2, ball.width, ball.height)
		ctx.strokeRect(paddle.x - paddle.width / 2, paddle.y - paddle.height / 2, paddle.width, paddle.height)
		
	}

	//Demonstrates how often collisions take place
	if (ball.hitTestObject(paddle)) {
		console.log("colliding");
	}

	//Impede movement
	if (ball.hitTestObject(paddle)) {
		paddle.x = prevX;
		console.log("colliding");
	}
	else {
		prevX = paddle.x;
	}
	
	//Update the Screen
	ball.drawCircle();
	
	//Update the Screen
	paddle.drawRect();
}
