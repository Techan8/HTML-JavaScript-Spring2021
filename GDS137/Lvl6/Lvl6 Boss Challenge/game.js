var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var interval = 1000/60; //1000 ms or 1 second / FPS (always set before timer)
var timer = setInterval(animate, interval);

var player = new GameObject({x:canvas.width/2, y: 750, width:30, height:90, color: "red"})
var kiko = new Image()
kiko.src = "images/kiko.png"
kiko.onload = function()
{
    animate()
}

var lineY = 0
var line = new Image()
line.src = "images/line.png"
line.onload = function()
{
    animate()
}

var line2Y = -800
var line2 = new Image()
line.src = "images/line.png"
line.onload = function()
{
    animate()
}

var line3Y = -1600
var line3 = new Image()
line.src = "images/line.png"
line.onload = function()
{
    animate()
}

var bacteriaM = new GameObject({x: canvas.width/2, y: -70, width: 42, height: 42, color: "green"}) //-70
var bacteria1 = new Image()
bacteria1.src = "images/bacteria.png"
bacteria1.onload = function()
{
    animate()
}

var bacteriaL = new GameObject({x: 165, y: -390, width: 42, height: 42, color: "green"}) //-390
var bacteria2 = new Image()
bacteria2.src = "images/bacteria.png"
bacteria2.onload = function()
{
    animate()
}

var bacteriaR = new GameObject({x: 840, y: -995, width: 42, height: 42, color: "green"}) //-995
var bacteria3 = new Image()
bacteria3.src = "images/bacteria.png"
bacteria3.onload = function()
{
    animate()
}

var toothM = new GameObject({x: canvas.width/2, y: -25, width: 47, height: 47, color: "cyan"}) //-25
var tooth1 = new Image()
tooth1.src = "images/tooth.png"
tooth1.onload =  function()
{
    animate()
}

var toothL = new GameObject({x: 165, y: -285, width: 47, height: 47, color: "cyan"}) //-285
var tooth2 = new Image()
tooth2.src = "images/tooth.png"
tooth2.onload =  function()
{
    animate()
}

var toothR = new GameObject({x: 840, y: -560, width: 47, height: 47, color: "cyan"}) //-560
var tooth3 = new Image()
tooth3.src = "images/tooth.png"
tooth3.onload =  function()
{
    animate()
}

var score = new GameObject()
var pScore = 0
var highScore = 0

var health = 100
var healthBar = new GameObject({x: 850, y: 50, width: 250, height: 20, color: "blue"})
var healthBarText = new GameObject()

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


function animate()
{

	ctx.clearRect(0,0,canvas.width, canvas.height);


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

    /******************************************************** BACTERIA'S MOVEMENT ******************************************************************/

    if(bacteriaM.y  > canvas.height)
    {
        bacteriaM.y = -250
        bacteriaM.vy = rand(2.5,4.5)
    }

    if(bacteriaL.y  > canvas.height)
    {
        bacteriaL.y = -350
        bacteriaL.vy = rand(2.5,4.5)
    }

    if(bacteriaR.y  > canvas.height)
    {
        bacteriaR.y = -495
        bacteriaR.vy = rand(2.5,4.5)
    }

    /******************************************************** TOOTH'S MOVEMENT ******************************************************************/

    if(toothM.y > canvas.height)
    {
        toothM.y = -25
        toothM.vy = rand(2,4)
    }

    if(toothL.y > canvas.height)
    {
        toothL.y = -285
        toothL.vy = rand(2,4)
    }

    if(toothR.y > canvas.height)
    {
        toothR.y = -560
        toothR.vy = rand(2,4)
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
        bacteriaM.y = 10000
        health = health - 20
        pScore = 0


    }

    if(player.hitTestObject(bacteriaL))
    {
        bacteriaL.y = 10000
        health = health - 20
        pScore = 0

    }

    if(player.hitTestObject(bacteriaR))
    {
        bacteriaR.y = 10000
        health = health - 20
        pScore = 0
        

    }

    if(pScore > highScore)
    {

        highScore = pScore

    }

    

    
    /************************************************************ DRAWS ON CANVAS ******************************************************************/
    
    player.drawRect()
    bacteriaM.drawCircle()  
    bacteriaL.drawCircle()  
    bacteriaR.drawCircle()  
    toothM.drawRect()
    toothL.drawRect()
    toothR.drawRect()
    ctx.drawImage(kiko, player.x -70, player.y -100 , 150, 150)
    ctx.drawImage(bacteria1, bacteriaM.x - 24.5, bacteriaM.y - 25, 50, 50)
    ctx.drawImage(bacteria2, bacteriaL.x - 24.5, bacteriaL.y - 25, 50, 50)
    ctx.drawImage(bacteria3, bacteriaR.x - 24.5, bacteriaR.y - 25, 50, 50)
    ctx.drawImage(tooth1, toothM.x - 24.75, toothM.y - 25, 50, 50)
    ctx.drawImage(tooth2, toothL.x - 24.75, toothL.y - 25, 50, 50)
    ctx.drawImage(tooth3, toothR.x - 24.75, toothR.y - 25, 50, 50)
    healthBarText.drawHealthText()
    score.drawScore()

    /************************************************************ GAME OVER CONDITION ******************************************************************/
    if(health == 100)
    {
        ctx.fillStyle =  "blue" //"rgba(12,240,229,0)";
		ctx.strokeStyle = "black";
		ctx.lineWidth = "2";
		ctx.fillRect(725, 50, 250, 20);
		ctx.strokeRect(725, 50, 250, 20 )
    }

    if(health == 80)
	{
		ctx.fillStyle =  "blue" //"rgba(12,240,229,0)";
		ctx.strokeStyle = "black";
		ctx.lineWidth = "2";
		ctx.fillRect(725, 50, 200, 20);
		ctx.strokeRect(725, 50, 250, 20 )
	}

    if(health == 60)
	{
		ctx.fillStyle =  "blue" //"rgba(12,240,229,0)";
		ctx.strokeStyle = "black";
		ctx.lineWidth = "2";
		ctx.fillRect(725, 50, 150, 20);
		ctx.strokeRect(725, 50, 250, 20 )
	}

    if(health == 40)
	{
		ctx.fillStyle =  "blue" //"rgba(12,240,229,0)";
		ctx.strokeStyle = "black";
		ctx.lineWidth = "2";
		ctx.fillRect(725, 50, 100, 20);
		ctx.strokeRect(725, 50, 250, 20 )
	}

    if(health == 20)
	{
		ctx.fillStyle =  "blue" //"rgba(12,240,229,0)";
		ctx.strokeStyle = "black";
		ctx.lineWidth = "2";
		ctx.fillRect(725, 50, 50, 20);
		ctx.strokeRect(725, 50, 250, 20 )
	}

    
    if(health <= 0)
    {
        ctx.clearRect(0,0,canvas.width, canvas.height);

        ctx.save();
		ctx.fillStyle = "black"
    	ctx.font = "50px arial"
    	ctx.fillText("GAME OVER... ", 350, 425)
		ctx.restore();

    }

   

}

