var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var x =  canvas.width * 0.5
var y =  canvas.height * 0.5
var radius = 40

ctx.beginPath()
ctx.fillStyle = "purple"
ctx.arc(this.x, this.y, this.radius, 0, 360*Math.PI /180, true)
ctx.closePath()
ctx.fill()



