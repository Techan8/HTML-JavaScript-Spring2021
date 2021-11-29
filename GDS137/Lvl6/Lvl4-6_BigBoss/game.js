var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var interval = 1000/60; //1000 ms or 1 second / FPS (always set before timer)
var timer = setInterval(animate, interval);

var player = new GameObject({x: canvas.width/2, y: 775, width: 50, height: 50, color: "#ffff00"})

var amt = 5;	
var circle = [];
var square = [];
var colors = ["orange", "green", "purple"];
var colors2 = ["yellow", "blue", "pink"];
var gravity = 1
var frictionX = 0.97
var frictionY = 0.97


var score = new GameObject()
var pScore = 0

//i = count or counter like in c++
for(var i = 0; i < amt; i++)
{

    

	circle[i] = new GameObject({x: rand(0, canvas.width), y: rand(-canvas.height, 0), width: 30, height: 30,});
	circle[i].vy = rand(1,5);
	circle[i].color = colors[Math.floor(rand(0,2.9))];
}

for(var i = 0; i < amt; i++)
{

    

	square[i] = new GameObject({x: rand(0, canvas.width), y: rand(-canvas.height, 0), width: 30, height: 30,});
	square[i].vy = rand(3,5);
	square[i].color = colors2[Math.floor(rand(0,2.9))];
}


function animate()
{
	ctx.clearRect(0,0,canvas.width, canvas.height);	
	
    for(var c = 0; c < circle.length; c++)
	{
        circle[c].y += circle[c].vy

        if(circle[c].y > canvas.height)
        {
            circle[c].x = rand(0, canvas.width)
            circle[c].y = rand(-canvas.height, 0)
            circle[c].vy = rand(3,5)
			
        }

		if(player.hitTestObject(circle[c]))
		{
			player.color = "darkred"
			setTimeout(changeColor, 500)
			pScore = 0
			
			for(var i = 0; i < circle.length; i++ )
			{
				circle[i].x = rand(0, canvas.width)
            	circle[i].y = rand(-canvas.height, 0)
            	circle[i].vy = rand(3,5)

				square[i].x = rand(0, canvas.width)
            	square[i].y = rand(-canvas.height, 0)
            	square[i].vy = rand(3,5)

			}
			
		}
	
		circle[c].drawCircle();

	}


	for(var s = 0; s < square.length; s++)
	{
        square[s].y += square[s].vy

        if(square[s].y > canvas.height)
        {
            square[s].x = rand(0, canvas.width)
            square[s].y = rand(-canvas.height, 0)
            square[s].vy = rand(3,5)
        }
        

		if(player.hitTestObject(square[s]))
		{
			player.color = "darkgreen"
			setTimeout(changeColor, 500) // waits half a second before changing back to initial color
			pScore++
			square[s].x = rand(0, canvas.width)
            square[s].y = rand(-canvas.height, 0)
            square[s].vy = rand(3,5)
		}
		
		square[s].drawRect();

	}
	

    
    //Move the Player left/right with keys
	if(d)
	{
        player.x += 10
        
	}
   
	if(a)
	{
        player.x += -10
        
	}

    //applies friction to the player
	//player.vx *= frictionX

    //moves to the player
    player.x += player.vx

    //player's screen bounderies
	if(player.x + player.width > canvas.width + player.width/2)
	{
		player.x = canvas.width - player.width /2
	}

	if(player.x < 0 + player.width/2 )
	{
		player.x = 0 + player.width/2
	}

	

    player.drawRect()
    score.drawScore()
}


function changeColor()
{
	player.color = "#ffff00"
}

