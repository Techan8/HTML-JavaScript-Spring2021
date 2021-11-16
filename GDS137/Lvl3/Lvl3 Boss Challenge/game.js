var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var interval = 1000/60; //1000 ms or 1 second / FPS (always set before timer)
var timer = setInterval(animate, interval);


var paddle =  new GameObject()
var ball = new GameObject()
var score = new GameObject()

var pScore = 0
var highScore = 0

var frictionX = 0.97
var frictionY = 0.97
var gravity = 1

//paddle's position
paddle.x = canvas.width/2
paddle.y = 550

//paddle's size
paddle.width = 200
paddle.height = 30

//paddle's color
paddle.color = "#00ffff"

//Ball's size
ball.width = 60
ball.height = 60

//Ball's velocity
ball.vx = 0
ball.vy = 1

//Ball's force
ball.force = 5

//Ball's color
ball.color = "#ff00ff"


function animate()
{
    //Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height);

    //Move the Player to the right
	if(d)
	{
       paddle.vx += paddle.ax *paddle.force
        
	}
   
	if(a)
	{
        paddle.vx +=  paddle.ax * -paddle.force
        
	}

    //applies friction to the paddle
	paddle.vx *= frictionX

    //moves to the paddle
    paddle.x += paddle.vx

    //paddle's screen bounderies
	if(paddle.x + paddle.width > canvas.width + paddle.width/2)
	{
		paddle.x = canvas.width - paddle.width /2
	}

	if( paddle.x < 0 + paddle.width/2 )
	{
		paddle.x = 0 + paddle.width/2
	}
    

    //applies friction to the ball
    ball.vx *= frictionX
    ball.vy *= frictionY

    //applies gravity to the ball
    ball.vy += gravity

    //Moves the ball
    ball.x += ball.vx
    ball.y += ball.vy

    //Bottom screen boundary
    if(ball.y > canvas.height - ball.width/2)
    {
        ball.y = canvas.height -ball.width/2
        ball.vy = -ball.vy
        //resets player's score
        pScore = 0
    }

    //Top screen boundary
    if(ball.y < 0 + ball.width/2)
    {
        ball.y = 0 + ball.width/2
        ball.vy = -ball.vy

    }

    //Right screen boundary
    if(ball.x > canvas.width - ball.width/2)
    {
        ball.x = canvas.width - ball.width/2
        ball.vx = -ball.vx
    }

    //Left screen boundary
    if(ball.x < 0 + ball.width/2)
    {
        ball.x = 0 + ball.width/2
        ball.vx = -ball.vx

    }

    //collision detection
	if (ball.hitTestObject(paddle)) 
	{
		ball.y = paddle.y - paddle.height/2 - ball.height/2
		
		ball.vy = -35

        if(ball.x < paddle.x - paddle.width/3)
        {
            
            ball.vx = -ball.force
              
        }
        if(ball.x > paddle.x + paddle.width/3)
		{
            
			ball.vx = ball.force
		}
		
		if(ball.x < paddle.x - paddle.width/6)
     	{
            
       		ball.vx = -ball.force*5
     	}
		if(ball.x > paddle.x + paddle.width/6)
		{
           
			ball.vx = ball.force*5
		}

       pScore++
		
	}

    if(pScore > highScore)
    {

        highScore = pScore

    }

    
	//Update the Screen
    score.drawScore();
	paddle.drawRect();
    ball.drawCircle();

     //Draws the line
     ctx.save();
     ctx.beginPath()
     ctx.lineWidth = "1"
     ctx.strokeStyle = "black"
     ctx.moveTo(paddle.x, paddle.y)
     ctx.lineTo(ball.x, ball.y)
     ctx.closePath()
     ctx.stroke()
     ctx.restore();



}
