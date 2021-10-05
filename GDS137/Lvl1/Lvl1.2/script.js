var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)

var x =  canvas.width * 0.5
var y =  canvas.height * 0.5
var radius = 40

function main() 
{
    ctx.clearRect(0,0,canvas.width, canvas.height)

    ctx.beginPath()
    ctx.fillStyle = "purple"
    ctx.arc(this.x, this.y, this.radius, 0, 360*Math.PI /180, true)
    ctx.closePath()
    ctx.fill()
    //update position
    x += 1

    if (x > canvas.width + 40) 
    {
        x = canvas.width * 0.5
    }
    timer = requestAnimationFrame(main)
}
