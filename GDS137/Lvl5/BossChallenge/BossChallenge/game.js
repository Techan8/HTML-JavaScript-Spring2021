var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var interval = 1000/60; //1000 ms or 1 second / FPS (always set before timer)
var timer = setInterval(animate, interval);

var player = new GameObject()
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

var bacteriaM = -70
var bacteria1 = new Image()
bacteria1.src = "images/bacteria.png"
bacteria1.onload = function()
{
    animate()
}

var bacteriaL = -390
var bacteria2 = new Image()
bacteria2.src = "images/bacteria.png"
bacteria2.onload = function()
{
    animate()
}

var bacteriaR = -995
var bacteria3 = new Image()
bacteria3.src = "images/bacteria.png"
bacteria3.onload = function()
{
    animate()
}

var toothM = -25
var tooth1 = new Image()
tooth1.src = "images/tooth.png"
tooth1.onload =  function()
{
    animate()
}

var toothL = -285
var tooth2 = new Image()
tooth2.src = "images/tooth.png"
tooth2.onload =  function()
{
    animate()
}

var toothR = -560
var tooth3 = new Image()
tooth3.src = "images/tooth.png"
tooth3.onload =  function()
{
    animate()
}

/******************************************************** PLAYER'S INFO ******************************************************************************/

player.width = 30
player.height = 75
player.x = canvas.width/2
player.y = 750

/******************************************************** SCREEN ROLLING VELOCITY *******************************************************************/

line.vy = 1
line2.vy = 1
line3.vy= 1

/******************************************************** RANDOM NUMBER FOR VELOCITY ******************************************************************/

bacteria1.vy = rand(2.5,4.5)
bacteria2.vy = rand(2.5,4.5)
bacteria3.vy = rand(2.5,4.5)

tooth1.vy = rand(2,4)
tooth2.vy = rand(2,4)
tooth3.vy = rand(2,4)


function animate()
{

	ctx.clearRect(0,0,canvas.width, canvas.height);


    /******************************************************** IMPLEMENT VELOCITY ******************************************************************/
    lineY += line.vy
    line2Y += line2.vy
    line3Y += line3.vy

    bacteriaM += bacteria1.vy
    bacteriaL += bacteria2.vy
    bacteriaR += bacteria3.vy

    toothM += tooth1.vy
    toothL += tooth2.vy
    toothR += tooth3.vy

 
    /******************************************************** DRAWS ELEMENTS ON ROLLING SCREEN ******************************************************************/

    ctx.drawImage(bacteria1, 480, bacteriaM , 50, 50)
    ctx.drawImage(bacteria2, 145, bacteriaL , 50, 50)
    ctx.drawImage(bacteria3, 820, bacteriaR , 50, 50)
    ctx.drawImage(tooth1, 480, toothM, 50, 50)
    ctx.drawImage(tooth2, 145, toothL, 50, 50)
    ctx.drawImage(tooth3, 820, toothR, 50, 50)
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

    if(bacteriaM  > canvas.height)
    {
        bacteriaM = -250
        bacteria1.vy = rand(2.5,4.5)
    }

    if(bacteriaL  > canvas.height)
    {
        bacteriaL = -350
        bacteria2.vy = rand(2.5,4.5)
    }

    if(bacteriaR  > canvas.height)
    {
        bacteriaR = -495
        bacteria3.vy = rand(2.5,4.5)
    }

    /******************************************************** TOOTH'S MOVEMENT ******************************************************************/

    if(toothM  > canvas.height)
    {
        toothM = -25
        tooth1.vy = rand(2,4)
    }

    if(toothL  > canvas.height)
    {
        toothL = -285
        tooth2.vy = rand(2,4)
    }

    if(toothR  > canvas.height)
    {
        toothR = -560
        tooth3.vy = rand(2,4)
    }

    /************************************************************ DRAWS ON CANVAS ******************************************************************/
    player.drawRect()   
    ctx.drawImage(kiko, player.x -70, player.y -110 , 150, 150)
    
}