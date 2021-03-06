var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var interval = 1000/60; //1000 ms or 1 second / FPS (always set before timer)
var timer = setInterval(animate, interval);


var player = new GameObject({x:canvas.width/2, y: 750, width:30, height:90, color: "rgba(12,240,229,0)"})
var kiko = new Image()
kiko.src = "images/kiko.png"


var aura = new Image()
aura.src = "images/aura.png"


var lineY = 0
var line = new Image()
line.src = "images/line.png"


var line2Y = -800
var line2 = new Image()
line.src = "images/line.png"


var line3Y = -1600
var line3 = new Image()
line.src = "images/line.png"


var bacteriaM = new GameObject({x: canvas.width/2, y: -70, width: 42, height: 42, color: "rgba(12,240,229,0)"}) //-70
var bacteria1 = new Image()
bacteria1.src = "images/bacteria.png"


var bacteriaL = new GameObject({x: 165, y: -390, width: 42, height: 42, color: "rgba(12,240,229,0)"}) //-390
var bacteria2 = new Image()
bacteria2.src = "images/bacteria.png"


var bacteriaR = new GameObject({x: 840, y: -995, width: 42, height: 42, color: "rgba(12,240,229,0)"}) //-995
var bacteria3 = new Image()
bacteria3.src = "images/bacteria.png"


var toothM = new GameObject({x: canvas.width/2, y: -25, width: 47, height: 47, color: "rgba(12,240,229,0)"}) //-25
var tooth1 = new Image()
tooth1.src = "images/tooth.png"


var toothL = new GameObject({x: 165, y: -285, width: 47, height: 47, color: "rgba(12,240,229,0)"}) //-285
var tooth2 = new Image()
tooth2.src = "images/tooth.png"


var toothR = new GameObject({x: 840, y: -560, width: 47, height: 47, color: "rgba(12,240,229,0)"}) //-560
var tooth3 = new Image()
tooth3.src = "images/tooth.png"


var amt = 1
var invincible = []
var fairyPos = [165, canvas.width/2, 840]
var superFairy = false

for(var i = 0; i < amt; i++)
{
    invincible[i] = new GameObject()
    invincible[i].x = fairyPos[Math.floor(rand(0,2.9))];
    invincible[i].y = rand(-canvas.height, 0)
    invincible[i].width = 47
    invincible[i].height = 47
    invincible[i].vy = rand(1,5);
    invincible[i].color = "rgba(12,240,229,0)"

}

var fairy = new Image()
fairy.src = "images/fairy.png"


var score = new GameObject()
var pScore = 0
var highScore = 0
var speed = 0;

var health = 100
var healthBar = new GameObject({x: 850, y: 50, width: 250, height: 20, color: "blue"})
var healthBarText = new GameObject()

var acc = (pScore % 1000)
/******************************************************** SCREEN ROLLING VELOCITY *******************************************************************/

line.vy = 1
line2.vy = 1
line3.vy= 1

/******************************************************** RANDOM NUMBER FOR VELOCITY ******************************************************************/

bacteriaM.vy = rand(2.5,4.5)
bacteriaL.vy = rand(2.5,4.5)
bacteriaR.vy = rand(2.5,4.5)

toothM.vy = rand(2,4)
toothL.vy = rand(2,4)
toothR.vy = rand(2,4)

/******************************************************** GAME STATES & FUNCTION KEYPRESS ******************************************************************/

var gameStates = []
var currentState = 0
var gameOver = true

var end = new Image()
end.src = "images/gameover.png"

var title = new Image()
title.src = "images/gamestart.png"

var gameplay = new Image()
gameplay.src = "images/instructions.png"   



function keyStart()
{
    if(gameOver == true)
    {
        if(space)
        {
            space = false
            currentState = 1
        }
        
    }
}

function keyContinue()
{
    if(gameOver == true)
    {
        if(space)
        {
            space = false
            currentState = 2
        }
   }
}

function keyRestart()
{
    if(gameOver == true)
    {
        if(space)
        {
            space = false
            health = 100
            player.x = canvas.width / 2

            bacteriaM.y = rand(-250, -495)
            bacteriaL.y = rand(-250, -495)
            bacteriaR.y = rand(-250, -495)

            toothM.y = rand(-25, -560)
            toothL.y = rand(-25, -560)
            toothR.y = rand(-25, -560)

            invincible.y = rand(-2500, -2000 )

            currentState = 2
        }
    }
}



gameStates[0] = function()
{
    ctx.drawImage(title, 0, 0, canvas.width, canvas.height)
    keyStart()

}

gameStates[1] = function()
{
    ctx.drawImage(gameplay, 0, 0, canvas.width, canvas.height)
    keyContinue()

}

gameStates[2] = function()
{
    /******************************************************** IMPLEMENT VELOCITY ******************************************************************/
    
    lineY += line.vy
    line2Y += line2.vy
    line3Y += line3.vy

    bacteriaM.y += bacteriaM.vy
    bacteriaL.y += bacteriaL.vy
    bacteriaR.y += bacteriaR.vy

    toothM.y += toothM.vy
    toothL.y += toothL.vy
    toothR.y += toothR.vy

 
    /******************************************************** DRAWS ELEMENTS ON ROLLING SCREEN ******************************************************************/

    ctx.drawImage(line, 0, lineY,  canvas.width, canvas.height +5)
    ctx.drawImage(line, 0, line2Y, canvas.width, canvas.height)
    ctx.drawImage(line, 0, line3Y, canvas.width, canvas.height)
    
    /******************************************************** PLAYER'S MOVEMENT ******************************************************************/
    
    if(d && player.x == canvas.width/2)
    {
        player.x = 840
        d = false
    }

    if(a && player.x == canvas.width/2)
    {
        player.x = 165
        a = false
    }

    if(d && player.x == 165)
    {
        player.x = canvas.width/2
        d = false

    }

    if(a && player.x == 840)
    {
        player.x = canvas.width/2
        a = false
    }

    /******************************************************** BACKGROUND MOVEMENT ******************************************************************/

    if(lineY  > canvas.height)
    {
        lineY = -1600
    }

    if(line2Y >  canvas.height)
    {
        line2Y = -1600
    }


    if(line3Y >  canvas.height)
    {
        line3Y = -1600
    }
    /********************************************************** Score Incremnt *********************************************************************/

    var divident = 3;
    speed = (pScore / 50);
    console.log(speed);
    /******************************************************** BACTERIA'S MOVEMENT ******************************************************************/

    if(bacteriaM.y  > canvas.height)
    {
        bacteriaM.y = rand(-250, -495)
        bacteriaM.vy = rand(2.5,4.5) + (speed / divident);
    }

    if(bacteriaL.y  > canvas.height)
    {
        bacteriaL.y = rand(-250, -495)
        bacteriaL.vy = rand(2.5,4.5) + (speed / divident);
    }

    if(bacteriaR.y  > canvas.height)
    {
        bacteriaR.y = rand(-250, -495)
        bacteriaR.vy = rand(2.5,4.5) + (speed / divident);
    }

    /******************************************************** TOOTH'S MOVEMENT ******************************************************************/
    
    if(toothM.y > canvas.height)
    {
        toothM.y = rand(-25, -560)
        toothM.vy = rand(2,4) + (speed / divident);
    }

    if(toothL.y > canvas.height)
    {
        toothL.y = rand(-25, -560)
        toothL.vy = rand(2,4) + (speed / divident);
    }

    if(toothR.y > canvas.height)
    {
        toothR.y = rand(-25, -560)
        toothR.vy = rand(2,4) + (speed / divident);
    }

    /************************************************************ COLLISION DETECTION ******************************************************************/

    if(player.hitTestObject(toothM))
    {
        toothM.y = 10000
        pScore = pScore + 50
        
    }

    if(player.hitTestObject(toothL))
    {
        toothL.y = 10000
        pScore = pScore + 50

    }

    if(player.hitTestObject(toothR))
    {
        toothR.y = 10000
        pScore = pScore + 50

    }

    if(player.hitTestObject(bacteriaM))
    {
        if(superFairy == false)
        {
            bacteriaM.y = 10000
            health = health - 20
            pScore = 0
        }
        


    }

    if(player.hitTestObject(bacteriaL))
    {
        if(superFairy == false)
        {
            bacteriaL.y = 10000
            health = health - 20
            pScore = 0
        }
        

    }

    if(player.hitTestObject(bacteriaR))
    {
        if(superFairy == false)
        {
            bacteriaR.y = 10000
            health = health - 20
            pScore = 0
        }
        

    }

    if(pScore > highScore)
    {

        highScore = pScore

    }

    /************************************************************ INVINCIBILITY ******************************************************************/
    
    for(var f = 0; f < invincible.length; f++)
    {
        invincible[f].y += invincible[f].vy

        if(invincible[f].y > canvas.height)
        {
            invincible[f].x = fairyPos[Math.floor(rand(0,2.9))];
            invincible[f].y = rand(-2500, -2000 )
            invincible[f].vy = rand(3,5)
			
        }

        if(player.hitTestObject(invincible[f]))
		{
			invincible[f].x = fairyPos[Math.floor(rand(0,2.9))];
            invincible[f].y = rand(-3500, -3000 )
            invincible[f].vy = rand(3,5)

            health = health + 20
            if(health > 100)
            {
                health = 100
            }

            if(superFairy == false)
            {
                setInvincible()
            }

			
		}

        invincible[f].drawRect();
    }
    
    /************************************************************ DRAWS ON CANVAS ******************************************************************/
    
    player.drawRect()
    bacteriaM.drawCircle()  
    bacteriaL.drawCircle()  
    bacteriaR.drawCircle()  
    toothM.drawRect()
    toothL.drawRect()
    toothR.drawRect()

    for(var f = 0; f < invincible.length; f++)
    {
        ctx.drawImage(fairy, invincible[f].x -39, invincible[f].y -35, 80, 70 )
    }
    
    ctx.drawImage(kiko, player.x -70, player.y -100 , 150, 150)
    if(superFairy == true)
    {
        ctx.drawImage(aura, player.x -70, player.y -100 , 150, 150)
    }

    ctx.drawImage(bacteria1, bacteriaM.x - 24.5, bacteriaM.y - 25, 50, 50)
    ctx.drawImage(bacteria2, bacteriaL.x - 24.5, bacteriaL.y - 25, 50, 50)
    ctx.drawImage(bacteria3, bacteriaR.x - 24.5, bacteriaR.y - 25, 50, 50)
    ctx.drawImage(tooth1, toothM.x - 24.75, toothM.y - 25, 50, 50)
    ctx.drawImage(tooth2, toothL.x - 24.75, toothL.y - 25, 50, 50)
    ctx.drawImage(tooth3, toothR.x - 24.75, toothR.y - 25, 50, 50)
    healthBarText.drawHealthText()
    score.drawScore()

    /************************************************************ HEALTH & GAME OVER CONDITION ******************************************************************/
    
    if(health == 100)
    {
        ctx.fillStyle =  "rgb(133, 207, 216)" //"rgba(12,240,229,0)";
		ctx.strokeStyle = "black";
		ctx.lineWidth = "2";
		ctx.fillRect(725, 50, 250, 20);
		ctx.strokeRect(725, 50, 250, 20 )
    }

    if(health == 80)
	{
		ctx.fillStyle =  "rgb(133, 207, 216)" //"rgba(12,240,229,0)";
		ctx.strokeStyle = "rgb(116, 16, 98)"
		ctx.lineWidth = "2";
		ctx.fillRect(725, 50, 200, 20);
		ctx.strokeRect(725, 50, 250, 20 )
	}

    if(health == 60)
	{
		ctx.fillStyle =  "rgb(133, 207, 216)" //"rgba(12,240,229,0)";
		ctx.strokeStyle = "rgb(116, 16, 98)"
		ctx.lineWidth = "2";
		ctx.fillRect(725, 50, 150, 20);
		ctx.strokeRect(725, 50, 250, 20 )
	}

    if(health == 40)
	{
		ctx.fillStyle =  "rgb(133, 207, 216)" //"rgba(12,240,229,0)";
		ctx.strokeStyle = "rgb(116, 16, 98)"
		ctx.lineWidth = "2";
		ctx.fillRect(725, 50, 100, 20);
		ctx.strokeRect(725, 50, 250, 20 )
	}

    if(health == 20)
	{
		ctx.fillStyle =  "rgb(133, 207, 216)" //"rgba(12,240,229,0)";
		ctx.strokeStyle = "rgb(116, 16, 98)"
		ctx.lineWidth = "2";
		ctx.fillRect(725, 50, 50, 20);
		ctx.strokeRect(725, 50, 250, 20 )
	}

    
    if(health <= 0)
    {
        superFairy = false 
        currentState++

    }
}
gameStates[3] = function()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);


        ctx.drawImage(end, 0, 0, canvas.width, canvas.height)

        keyRestart()
}

/************************************************************ MAIN FUNCTION (ANIMATE) ******************************************************************/

function animate()
{

	ctx.clearRect(0,0,canvas.width, canvas.height);

    gameStates[currentState]()

    

}

/************************************************************ INVINCIBILITY FUNCTION ******************************************************************/

function setInvincible()
{
    if(superFairy == false)
    {
        superFairy = true
        setTimeout(function(){superFairy=false}, 5000)
        
    }
}
