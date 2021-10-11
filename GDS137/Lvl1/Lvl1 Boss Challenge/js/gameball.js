var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var timer = setInterval(animate, interval, collisionScore);
var interval = 1000/60; //1000 ms or 1 second / FPS
var ball = new Ball()
var collisionScore = 0
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
		if(ball.vx < 0)
		{
			--ball.vx
		}
		else
		{
			++ball.vx
		}
		collisionScore ++ //collisionScore = collisionScore +1
		ball.color = "red" //Change the color 
		
		
    }

	if(ball.y > canvas.height - ball.radius || ball.y - ball.radius <0)
    {
        ball.vy = -ball.vy ;
		if(ball.vy < 0)
		{
			--ball.vy
		}
		else
		{
			++ball.vy
		}

		collisionScore ++ //Increase collision score
		ball.color = "cyan" //Change the color 
		
		
    }
	
	
	
	//Update the Screen
	ball.draw();
}
