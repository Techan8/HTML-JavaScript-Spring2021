var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var interval = 1000/60; //1000 ms or 1 second / FPS (always set before timer)
var timer = setInterval(animate, interval);

var player = new GameObject()
var kiko = new Image()
kiko.src = "images/kiko.png"
kiko.onload = function(){
    animate()
}
player.width = 30
player.height = 75
player.x = canvas.width/2
player.y = 750


function animate()
{
    //Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height);

    //Move the Player to the right
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

    
	
   


    player.drawRect()
    ctx.drawImage(kiko, player.x -100, player.y-200 , 200, 200)
    //Draws the line
    ctx.save();
    ctx.beginPath()
    ctx.lineWidth = "1"
    ctx.strokeStyle = "black"
    ctx.moveTo(325,0)
    ctx.lineTo(325, 800)
    ctx.closePath()
    ctx.stroke()
    ctx.restore();

    ctx.save();
    ctx.beginPath()
    ctx.lineWidth = "1"
    ctx.strokeStyle = "black"
    ctx.moveTo(675,0)
    ctx.lineTo(675, 800)
    ctx.closePath()
    ctx.stroke()
    ctx.restore();
}