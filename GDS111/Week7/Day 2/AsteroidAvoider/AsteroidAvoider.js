var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var ship
//var to setup number of asteroids
var numAsteroids = 10
//array for asteroids
var asteroids = new Array()
var gameOver = true
var gameStates = []
var currentState = 0
var score = 0
var highScore = 0

//utility functions
function randomRange(high, low) {
    return Math.random() * (high - low) + low
}

function gameStart(){
    //For Loop to create the instances of Asteroids

    for (var i = 0; i < numAsteroids; i++) {
    asteroids[i] = new Asteroid()
    }

    //Create an instance of the PlayerShip
    ship = new PlayerShip()

}


//Constructor Function for Asteroid Class
function Asteroid() {
    this.radius = randomRange(15, 2)
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vy = randomRange(10, 5)
    this.color = "white"

    this.drawAsteroid = function () {
        ctx.save
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()

    }
}

//Setup the keyboard Event Handlers
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = true
        }
        if (e.keyCode == 65) {
            ship.left = true
        }
        if (e.keyCode == 68) {
            ship.right = true
        }
        if (e.keyCode == 83) {
            ship.down = true
        }
    }

    if (gameOver) {

        //checking for spacebar
        if (e.keyCode == 32) {
            if (currentState == 2) {
                //game over screen restarts game
                currentState = 0
                //resets number of Asteroids
                numAsteroids = 10
                //empties asteroids array
                asteroids = []
                //resets the score
                score = 0
                gameStart()
                main()
            }
            else {
                //main screen starts the game
                gameStart()
                currentState = 1
                gameOver = false
                main()
                scoreTimer()
                console.log("space")
            }
        }
    }
}


function pressKeyUp(e) {
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = false
        }
        if (e.keyCode == 65) {
            ship.left = false
        }
        if (e.keyCode == 68) {
            ship.right = false
        }
        if (e.keyCode == 83) {
            ship.down = false
        }
    }
}

//Constructor function
function PlayerShip() {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.w = 20
    this.h = 20
    this.vx = 0 //for velocity
    this.vy = 0
    this.up = false //boolean
    this.down = false
    this.left = false
    this.right = false
    this.flamelength = 30

    this.drawShip = function () {
        ctx.save() //save previous context until restore
        ctx.translate(this.x, this.y)
        if (this.up || this.left || this.right) {
            ctx.save()
            //Changes the drawing values to animate the flame
            if (this.flamelength == -30) {
                this.flamelength = -10
                ctx.fillStyle = "yellow"
            } else {
                this.flamelength = -30
                ctx.fillStyle = "orange"
            }
            ctx.beginPath()

            ctx.moveTo(this.flamelength, 0)
            ctx.lineTo(-5, -5)
            ctx.lineTo(-5, 5)
            ctx.lineTo(this.flamelength, 0)
            ctx.closePath()
            ctx.fill()
            ctx.restore()
        }

        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.moveTo(-10, 10)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, -10)
        ctx.closePath()
        ctx.fill()
        ctx.restore() //restore element on canvas the way it was

    }

    this.move = function () {
        this.x += this.vx
        this.y += this.vy

        //setting up the boundaries
        //bottom boundary of screen
        if (this.y > canvas.height - this.h / 2) {
            this.y = canvas.height - this.h / 2
            this.vy = 0
        }

        //top boundary of screen
        if (this.y < this.h / 2) {
            this.y = this.h / 2
            this.vy = 0
        }

        //right boundary of screen
        if (this.x > canvas.width - this.w / 2) {
            this.x = canvas.width - this.w / 2
            this.vx = 0
        }

        //left boundary of screen
        if (this.x < this.w / 2) {
            this.x = this.w / 2
            this.vx = 0
        }
    }

}

gameStates[0] = function () {
    ctx.save()
    ctx.font = "30px Arial"
    ctx.fillStyle = "blue"
    ctx.textAlign = "center"
    ctx.fillText("Asteroid Avoider", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = "15px Arial"
    ctx.fillStyle = "blue"
    ctx.textAlign = "center"
    ctx.fillText("Press Space To Start", canvas.width / 2, canvas.height / 2 + 20)
    ctx.restore()
}

gameStates[1] = function () {

    //code for displaying score
    ctx.save()
    ctx.font = "15px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()

    //update player movement
    //vertical movement
    if (ship.up) {
        ship.vy = -10
    } else {
        ship.vy = 3
    }

    //horizontal movement
    if (ship.left) {
        ship.vx = -3
    } else if (ship.right) {
        ship.vx = 3
    } else {
        ship.vx = 0
    }
    //Loops through all asteroids and can check their position
    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        if (detectCollision(distance, (ship.h / 2 + asteroids[i].radius))) {
            console.log("hit asteroid")
            gameOver = true
            currentState = 2
            main()

        }

        if (asteroids[i].y > canvas.height + asteroids[i].radius) {
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height
        }
        if (!gameOver) {
            asteroids[i].y += asteroids[i].vy
            asteroids[i].drawAsteroid()
        }
    }
    if (!gameOver) {
        ship.move()
        ship.drawShip()
    }

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid)
    }
}

gameStates[2] = function () {
    if(score > highScore){
        //set new High Score
        highScore = score
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = "red"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your high score was:  " + score.toString(), canvas.width / 2, canvas.height / 2 - 60)
        ctx.fillText("Your new high score is:  " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 30)
        ctx.fillText("New Record", canvas.width / 2, canvas.height / 2)
        ctx.font = "15px Arial"
        ctx.fillStyle = "red"
        ctx.textAlign = "center"
        ctx.fillText("Press Space To Play Again", canvas.width / 2, canvas.height / 2 + 20)
        ctx.restore()

    }else{
        //keep same new High Score
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = "red"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your score was:  " + score.toString(), canvas.width / 2, canvas.height / 2 - 60)
        ctx.fillText("Your high score is:  " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 30)
        ctx.font = "15px Arial"
        ctx.fillStyle = "red"
        ctx.textAlign = "center"
        ctx.fillText("Press Space To Play Again", canvas.width / 2, canvas.height / 2 + 20)
        ctx.restore()
    }
    
}

function main() {
    //clear canvas 
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    gameStates[currentState]()

    if (!gameOver) {
        timer = requestAnimationFrame(main)
    }

}

function detectCollision(distance, calcDistance) {
    return distance < calcDistance
}

//Timer for score
function scoreTimer(){
    if(!gameOver){
        score++
        //using modulus that returns remainder of a decimal
        //checks to see if remainder is divisble by 5
        if(score % 5 == 0){
            numAsteroids += 1
            console.log(numAsteroids)
        }
        setTimeout(scoreTimer, 1000)//ms
    }
}