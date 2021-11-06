var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)

var xpos = -5

var start = 58
var finish = 956

var gameOver = true

var goku = new Image()
goku.src = 'images/goku.png'

goku.onload = function(){
    main()
}
var vegeta = new Image()
vegeta.src = 'images/vegeta.png'

vegeta.onload = function(){
    main()
}

var startFuel = randomNumber(high = 920, low = 770)
var anotherStartFuel = randomNumber(high = 920, low = 770)
var fuel = startFuel
var anotherFuel = anotherStartFuel
var fullBarWidth = 512
var anotherFullBarWidth = 512

var sec = 3
var fps = 60
var frames = fps


document.addEventListener('keydown', keyPressDown)
document.addEventListener('keyup', keyPressUp)

function main() {
    
    timer = requestAnimationFrame(main)
 
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (gameOver) {
        
        ctx.fillStyle = "black"
        ctx.font = "40px Permanent Marker"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2)
    }
    else {
        if (!gameOver && sec > 0) {

            runStartTimer()
            drawStartTimer()
        } else {
            if (gameOver == false && fuel > 0 && sec <= 0) {
                
                xpos++
                fuel--
            }

        }

        drawStartLine()
        drawFinishLine()
        drawCarImage()
        drawAnotherCarImage()
        drawFuelBar()
        drawAnotherFuelBar()
        drawFuelText()
        drawAnotherFuelText()

        if (xpos > finish + 90 || fuel <= 0) {
            drawResults()
        }

    }
}

function keyPressDown(e) {
    console.log(e.keyCode)
    if (e.keyCode == 32) {
        if (!gameOver && fuel <= 0) {
            restartGame()
        }
        gameOver = false
    }

}
function keyPressUp(e) {
    console.log(e.keyCode)
    if (e.keyCode == 32) {
        document.addEventListener("keydown", keyPressDown)
    }
}

function drawStartLine() {
    ctx.strokeStyle = "black"
    ctx.strokeRect(start, 135, 10, 500)
    ctx.lineWidth = 7
    ctx.fillStyle = "yellow"
    ctx.fillRect(start, 135, 10, 500)
}

function drawFinishLine() {
    ctx.strokeStyle = "black"
    ctx.strokeRect(finish, 135, 10, 500)
    ctx.lineWidth = 7
    ctx.fillStyle = "red"
    ctx.fillRect(finish, 135, 10, 500)
}

function drawCarImage() {
    ctx.drawImage(goku, xpos, canvas.height / 2.25 - 80, 120, 140)
}

function drawAnotherCarImage() {
    ctx.drawImage(vegeta, xpos, canvas.height / 1.5 - 80, 120, 140)
}

function drawFuelBar() {
    var barCurrentWidth = fullBarWidth * getFuelPercentage()
    ctx.strokeStyle = "white"
    ctx.strokeRect(start, 37, fullBarWidth, 10)
    ctx.fillStyle = "rgba(0, 0, 0, 0.75)"
    ctx.fillRect(start, 37, fullBarWidth, 10)
    if (fuel > 0)
        ctx.fillStyle = "orange"
    ctx.fillRect(start, 37, barCurrentWidth, 10)
}

function drawAnotherFuelBar() {
    var barCurrentWidth = fullBarWidth * getFuelPercentage()
    ctx.strokeStyle = "white"
    ctx.strokeRect(start, 70, fullBarWidth, 10)
    ctx.fillStyle = "rgba(0, 0, 0, 0.75)"
    ctx.fillRect(start, 70, fullBarWidth, 10)
    if (fuel > 0)
        ctx.fillStyle = "blue"
    ctx.fillRect(start, 70, barCurrentWidth, 10)
}

function getFuelPercentage() {
    return fuel / startFuel
}

function drawFuelText() {
    ctx.fillStyle = "orange"
    ctx.font = "25px Permanent Marker"
    ctx.fillText(fuel, start, 33)
}

function drawAnotherFuelText() {
    ctx.fillStyle = "blue"
    ctx.font = "25px Permanent Marker"
    ctx.fillText(fuel, start, 68)
}

function runStartTimer() {
    frames -= 1
    if (frames < 0) {
        frames = fps
        sec -= 1
    }
}

function drawStartTimer() {
    ctx.fillStyle = "black"
    ctx.font = "40px Permanent Marker"
    ctx.textAlign = "center"
    ctx.fillText(sec, canvas.width / 2, canvas.height / 2)
}

function randomNumber(high, low) {
    return Math.round(Math.random() * (high - low) + low)
}
function drawResults() {
    if (xpos +90> finish) {
        
        ctx.fillStyle = "yellow"
        ctx.font = "30px Permanent Marker"
        ctx.textAlign = "center"
        ctx.fillText("Goku and Vegeta made it in time to the tournament!", canvas.width / 2, canvas.height / 2)
    }
    else {
        ctx.fillStyle = "red"
        ctx.font = "30px Permanent Marker"
        ctx.textAlign = "center"
        ctx.fillText("Goku and Vegeta did not reach the tournament in time..", canvas.width / 2, canvas.height / 2)
    }
}

function restartGame() {
    location.reload()
}