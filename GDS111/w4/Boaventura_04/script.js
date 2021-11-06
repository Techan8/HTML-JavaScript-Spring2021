var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.lineWidth = "5"
ctx.fillRect(85,302,100,100)
ctx.strokeRect(85,302,100,100)

ctx.lineWidth = "5"
ctx.strokeStyle = "rgb(255,0,0)"
ctx.moveTo(85,682)
ctx.lineTo(278,549)
ctx.stroke()

ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "red"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.arc(385,442,65,0,Math.PI*2, false)
ctx.closePath()
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#ff00ff"
ctx.strokeStyle = "#00ffff"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.moveTo(557,308)
ctx.lineTo(667,283)
ctx.lineTo(724,380)
ctx.lineTo(650,465)
ctx.lineTo(548,420)
ctx.closePath()
ctx.fill()
ctx.stroke()

ctx.fillStyle = "#ffff00"
ctx.strokeStyle = "rgb(32,32,32)"
ctx.lineWidth = "5"
ctx.beginPath()
ctx.moveTo(635,496)
ctx.lineTo(668,555)
ctx.lineTo(733,567)
ctx.lineTo(688,615)
ctx.lineTo(696,681)
ctx.lineTo(636,653)
ctx.lineTo(575,681)
ctx.lineTo(583,615)
ctx.lineTo(538,567)
ctx.lineTo(604,554)
ctx.closePath()
ctx.fill()
ctx.stroke()
