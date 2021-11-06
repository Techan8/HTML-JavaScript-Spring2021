//Defines variable to access canvas properties by ID
var canvas = document.getElementById('canvas')
//Defines the drawing context of the canvas Element
var ctx = canvas.getContext('2d')

var galaxy = new Image()
galaxy.src = "images/galaxy.jpeg"

galaxy.onload = function(){
    ctx.drawImage(galaxy,0,0,800,600)

    //Draw rectangle

ctx.fillStyle = "rgb(0,0,255)"
ctx.strokeStyle = "green"
ctx.lineWidth = "5"

ctx.fillRect(30, 30, 100, 100)
ctx.strokeRect(30, 30, 100, 100)

//Draw line
ctx.moveTo(0,0)
ctx.lineTo(800,600)
ctx.stroke()

ctx.moveTo(800,0)
ctx.lineTo(0,600)
ctx.stroke()

//Draw circle
// ctx.arc(x,y,radius,startAngle, endAngle, isCounterClockwise)

ctx.beginPath()
ctx.arc(400, 300, 50, 0, (3 * Math.PI)/2, false)
ctx.lineTo(450,250)
ctx.closePath()
ctx.fill()

//Draw Shape

ctx.fillStyle = "#55ddef"
ctx.strokeStyle = "yellow"
ctx.lineWidth = "2"
ctx.beginPath()
ctx.moveTo(650,100)
ctx.lineTo(700,140)
ctx.lineTo(675,200)
ctx.lineTo(625,200)
ctx.lineTo(600,140)
ctx.closePath()
ctx.fill()
ctx.stroke()

//Draw an image to Canvas
//Create the instance of the image 
var mario = new Image()
//links the source of the image file 
mario.src = 'images/mario.png'
//Callback function loads and draws it to Canvas
mario.onload = function(){
ctx.drawImage(mario, 600, 300, 40, 80)
}


}

