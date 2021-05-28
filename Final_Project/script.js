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
//array for power up
var numDragonball = 1
var dragonball = new Array()
var superSayan = false
//images
var background1 = new Image()
background1.src = "images/background1.png"
background1.onload = function(){
    main()
}
var goku = new Image()
goku.src = "images/goku.png"
goku.onload = function(){
    main()
}
var aura1 = new Image()
aura1.src = "images/aura1.png"
aura1.onload = function(){
    main()
}
var aura2 = new Image()
aura2.src = "images/aura2.png"
aura2.onload = function(){
    main()
}
var blast = new Image()
blast.src = "images/blast.png"
blast.onload = function(){
    main()
}
var gameoverbg = new Image()
gameoverbg.src = "images/gameoverbg.jpg"
gameoverbg.onload = function(){
    main()
}
var shiball = new Image()
shiball.src = "images/dragonball.png"
shiball.onload = function(){
    main()
}
var sayanaura = new Image()
sayanaura.src = "images/sayanaura.png"
sayanaura.onload = function(){
    main()
}

//utility functions
function randomRange(high, low) {
    return Math.random() * (high - low) + low
}

function gameStart() {
    //For Loop to create the instances of Asteroids

    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid()
    }

    for (var i = 0; i < numDragonball; i++) {
        dragonball[i] = new Dragonball()
    }

    //Create an instance of the PlayerShip
    ship = new PlayerShip()

}


//Constructor Function for Asteroid Class
function Asteroid() {
    this.radius = randomRange(15, 5)
    this.x = randomRange(canvas.width - this.radius, this.radius) - canvas.width
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vx = randomRange(-5, -1)
    this.color = "rgba(12,240,229,0)"

    

    this.drawAsteroid = function() {
        ctx.save
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.drawImage(blast,this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
        ctx.restore()
    }
}

//constructor function for Power Up class
function Dragonball() {
    this.radius = randomRange(20, 15)
    this.x = randomRange(canvas.width - this.radius, this.radius) - canvas.width
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vx = randomRange(-5, -1)
    this.color = "rgba(12,240,229,0)"

    

    this.drawDragonball = function() {
        ctx.save
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.drawImage(shiball,this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
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
                superSayan = false
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
    this.alternatingImage = -30
    this.counter = 0
    this.counter1 = 10
    

    this.drawShip = function () {
        ctx.save() //save previous context until restore
        ctx.translate(this.x, this.y)
        if (this.up || this.left || this.right) {
            ctx.save()
            //Changes the drawing values to animate the flame
            console.log(this.alternatingImage)
            if (this.alternatingImage == -30 && this.counter != 10) {
                this.counter++;
                ctx.drawImage(aura1, -100, -42, 130, 80)
                ctx.drawImage(aura1, -5000, -5000, 130, 80)
            } 
            else{
                this.alternatingImage = -30;
                this.counter1++
                ctx.drawImage(aura2, -100, -42, 130, 80)
                 ctx.drawImage(aura2, -5000, -5000, 130, 80)
                if(this.counter1 = 20){
                    this.counter1 = 0
                    this.counter = 0
                }
            
            }
           
            
            ctx.restore()
        }

        ctx.fillStyle = "rgba(12,240,229,0)"
        ctx.beginPath()
        ctx.moveTo(-10, 10)
        ctx.lineTo(-10, -10)
        ctx.lineTo(10, 0)
        ctx.lineTo(-10, 10)
        ctx.closePath()
        ctx.fill()
        ctx.drawImage(goku, -30, -30, 50, 50)
        ctx.fillRect(0,0,this.w,this.h);
        if(superSayan == true){
            ctx.drawImage(sayanaura, -140, -72, 180, 130)
        }
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
        if (this.x > canvas.height - this.h / 2) {
            this.x = canvas.height - this.h / 2
            this.vx = 0
        }

        //left boundary of screen
        if (this.x < this.h / 2) {
            this.x = this.h / 2
            this.vx = 0
        }
    }

}

gameStates[0] = function () {
    ctx.save()

    ctx.drawImage(background1, 0, 0, canvas.width, canvas.height)
    ctx.font = "70px VT323"
    ctx.fillStyle = "rgb(248, 162, 32)"
    ctx.strokeStyle = "darkred"
    ctx.lineWidth = 3
    ctx.textAlign = "center"
    ctx.fillText("Ki Blast Avoider", canvas.width / 2, canvas.height / 2 - 30)
    ctx.strokeText("Ki Blast Avoider", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = "40px VT323"
    ctx.fillStyle = "rgb(248, 162, 32)"
    ctx.strokeStyle = "darkred"
    ctx.lineWidth = 2
    ctx.textAlign = "center"
    ctx.fillText("Press Space To Start", canvas.width / 2, canvas.height / 2 + 30)
    ctx.strokeText("Press Space To Start", canvas.width / 2, canvas.height / 2 + 30)
    
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
        ship.vy = -5
    } else {
        ship.vy = 0
    }

    //horizontal movement
    if (ship.down) {
        ship.vy = 5
    } else if (ship.right) {
        ship.vx = 5
    } else {
        ship.vx = -5
    }
    //Loops through all asteroids and can check their position
    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        if (detectCollision(distance, ((ship.h / 2) + asteroids[i].radius))) {
            console.log("hit asteroid")
            if(superSayan == false){
                gameOver = true
                currentState = 2
                main()
            }
            

        }

        if (asteroids[i].x < 0 + asteroids[i].radius) {
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius) + canvas.width
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius)
        }
        if (!gameOver) {
            asteroids[i].x += asteroids[i].vx
            asteroids[i].drawAsteroid()
        }
    }
    if (!gameOver) {
        ship.move()
        ship.drawShip()
    }

    while (asteroids.length < numAsteroids) {
        asteroids.push(new Asteroid())
    }

    //loop for dragonball
    for (var i = 0; i < dragonball.length; i++) {
        var dX = ship.x - dragonball[i].x
        var dY = ship.y - dragonball[i].y
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        if (detectCollision(distance, ((ship.h / 2) + dragonball[i].radius))) {
            console.log("touched dragonball")
            dragonball[i].x = randomRange(canvas.width - dragonball[i].radius, dragonball[i].radius) + canvas.width
            dragonball[i].y = randomRange(canvas.height - dragonball[i].radius, asteroids[i].radius)
            if(superSayan == false){
                setInvincible()
                
               
            }
        }

        if (dragonball[i].x < 0 + dragonball[i].radius) {
            dragonball[i].x = randomRange(canvas.width - dragonball[i].radius, dragonball[i].radius) + canvas.width
            dragonball[i].y = randomRange(canvas.height - dragonball[i].radius, asteroids[i].radius)
        }
        if (!gameOver) {
            dragonball[i].x += dragonball[i].vx
            dragonball[i].drawDragonball()
        }
    }
    if (!gameOver) {
        ship.move()
        ship.drawShip()
    }

    while (dragonball.length < numDragonball) {
        dragonball.push(new Dragonball())
    }
}

gameStates[2] = function () {
    if (score > highScore) {
        //set new High Score
        highScore = score
        ctx.save()
        ctx.drawImage(gameoverbg, 0, 0, canvas.width, canvas.height)
        ctx.font = "50px VT323"
        ctx.fillStyle = "darkred"
        ctx.strokeStyle = "rgb(248, 162, 32)"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your high score was:  " + score.toString(), canvas.width / 2, canvas.height / 2 - 120)
        ctx.strokeText("Game Over, your high score was:  " + score.toString(), canvas.width / 2, canvas.height / 2 - 120)
        ctx.fillText("Your new high score is:  " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 90)
        ctx.strokeText("Your new high score is:  " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 90)
        ctx.fillText("New Record", canvas.width / 2, canvas.height / 2)
        ctx.strokeText("New Record", canvas.width / 2, canvas.height / 2)
        ctx.font = "35px VT323"
        ctx.fillStyle = "darkred"
        ctx.strokeStyle = "rgb(248, 162, 32)"
        ctx.textAlign = "center"
        ctx.fillText("Press Space To Play Again", canvas.width / 2, canvas.height / 2 + 50)
        ctx.strokeText("Press Space To Play Again", canvas.width / 2, canvas.height / 2 + 50)
        ctx.restore()

    } else {
        //keep same new High Score
        ctx.save()
        ctx.drawImage(gameoverbg, 0, 0, canvas.width, canvas.height)
        ctx.font = "50px 'VT323', monospace"
        ctx.fillStyle = "darkred"
        ctx.strokeStyle = "rgb(248, 162, 32)"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your score was:  " + score.toString(), canvas.width / 2, canvas.height / 2 - 120)
        ctx.strokeText("Game Over, your score was:  " + score.toString(), canvas.width / 2, canvas.height / 2 - 120)
        ctx.fillText("Your high score is:  " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 90)
        ctx.strokeText("Your high score is:  " + highScore.toString(), canvas.width / 2, canvas.height / 2 - 90)
        ctx.font = "35px 'VT323', monospace"
        ctx.fillStyle = "darkred"
        ctx.strokeStyle = "rgb(248, 162, 32)"
        ctx.textAlign = "center"
        ctx.fillText("Press Space To Play Again", canvas.width / 2, canvas.height / 2 + 50)
        ctx.strokeText("Press Space To Play Again", canvas.width / 2, canvas.height / 2 + 50)
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

function setInvincible(){
    if(superSayan == false){
        superSayan = true
        setTimeout(function(){superSayan=false}, 5000)
        console.log(superSayan)
    }
   
}

//Timer for score
function scoreTimer() {
    if (!gameOver) {
        score++
        //using modulus that returns remainder of a decimal
        //checks to see if remainder is divisble by 5
        if (score % 5 == 0) {
            numAsteroids += 5
            console.log(numAsteroids)
        }
        setTimeout(scoreTimer, 1000)//ms
    }
}