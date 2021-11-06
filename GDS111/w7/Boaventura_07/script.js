var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)

var gameStates = []
var currentState = 0

option.style.display = "none"

var rps = []
rps[0] = "rock"
rps[1] = "paper"
rps[2] = "scissors"

var pScore = 0
var cScore = 0

var rock = new Image()
rock.src = 'images/rock.png'
var rock2 = new Image()
rock2.src = 'images/rock2.png'
var paper = new Image()
paper.src = 'images/paper.png'
var paper2 = new Image()
paper2.src = 'images/paper2.png'
var scissors = new Image()
scissors.src = 'images/scissors.png'
var scissors2 = new Image()
scissors2.src = 'images/scissors2.png'
var computer = new Image()
computer.src = 'images/computer.png'

var gameOver = true


document.addEventListener("keydown", keyPressDown)
document.addEventListener("keyup", keyPressUp)

var btn = document.querySelectorAll('button')
btn[0].addEventListener("click", function (e) { game(0) })
btn[1].addEventListener("click", function (e) { game(1) })
btn[2].addEventListener("click", function (e) { game(2) })


function keyPressDown(e) {
    console.log(e.keyCode)
}

function keyPressUp(e) {
    console.log(e.keyCode)
    if (gameOver == true) {
        if (e.keyCode == 32) {
            //this is space bar
            //game(4);
            gameOver = false
            changeState() 
        }
    }
}

function changeState() {
    if (currentState >= gameStates.length - 1) {
        currentState = 0
    }
    else {
        currentState++
    }

}

function game(pChoice) {
    gameOver = true
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    var cChoice = Math.floor(Math.random() * 2.99)

    switch (pChoice) {
        case 0:
            console.log(cChoice)
            if (cChoice == 0) {
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "50px Reggae One"
                ctx.fillText("RPS GAME", 500, 75)
                ctx.strokeText("RPS GAME", 500, 75)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.textAlign = "center"
                ctx.fillText("Rock-Rock, It's a Tie", canvas.width / 2, canvas.height / 2 + 15)
                ctx.strokeText("Rock-Rock, It's a Tie", canvas.width / 2, canvas.height / 2 + 15)
                console.log("here")
                ctx.drawImage(rock, 450, 500, 100, 80)
                ctx.drawImage(rock2, 450, 650, 100, 80)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Player Score: " + pScore, 250, 230)
                ctx.strokeText("Player Score: " + pScore, 250, 230)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Computer Score: " + cScore, 720, 230)
                ctx.strokeText("Computer Score: " + cScore, 720, 230)
            }
            else if (cChoice == 1) {

                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "50px Reggae One"
                ctx.fillText("RPS GAME", 500, 75)
                ctx.strokeText("RPS GAME", 500, 75)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.textAlign = "center"
                ctx.fillText("Rock-Paper, Computer Wins", canvas.width / 2, canvas.height / 2 + 15)
                ctx.strokeText("Rock-Paper, Computer Wins", canvas.width / 2, canvas.height / 2 + 15)
                ctx.drawImage(paper, 450, 500, 100, 80)
                ctx.drawImage(rock2, 450, 650, 100, 80)
                cScore++
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Player Score: " + pScore, 250, 230)
                ctx.strokeText("Player Score: " + pScore, 250, 230)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Computer Score: " + cScore, 720, 230)
                ctx.strokeText("Computer Score: " + cScore, 720, 230)


            }
            else {
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "50px Reggae One"
                ctx.fillText("RPS GAME", 500, 75)
                ctx.strokeText("RPS GAME", 500, 75)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.textAlign = "center"
                ctx.fillText("Rock-Scissors, Player Wins", canvas.width / 2, canvas.height / 2 + 15)
                ctx.strokeText("Rock-Scissors, Player Wins", canvas.width / 2, canvas.height / 2 + 15)
                ctx.drawImage(scissors, 450, 500, 100, 80)
                ctx.drawImage(rock2, 450, 650, 100, 80)
                pScore++
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Player Score: " + pScore, 250, 230)
                ctx.strokeText("Player Score: " + pScore, 250, 230)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Computer Score: " + cScore, 720, 230)
                ctx.strokeText("Computer Score: " + cScore, 720, 230)

            }
            break;
        case 1:
            if (cChoice == 0) {
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "50px Reggae One"
                ctx.fillText("RPS GAME", 500, 75)
                ctx.strokeText("RPS GAME", 500, 75)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.textAlign = "center"
                ctx.fillText("Paper-Rock, Player Wins", canvas.width / 2, canvas.height / 2 + 15)
                ctx.strokeText("Paper-Rock, Player Wins", canvas.width / 2, canvas.height / 2 + 15)
                ctx.drawImage(rock, 450, 500, 100, 80)
                ctx.drawImage(paper2, 450, 650, 100, 80)
                pScore++
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Player Score: " + pScore, 250, 230)
                ctx.strokeText("Player Score: " + pScore, 250, 230)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Computer Score: " + cScore, 720, 230)
                ctx.strokeText("Computer Score: " + cScore, 720, 230)
            }
            else if (cChoice == 1) {
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "50px Reggae One"
                ctx.fillText("RPS GAME", 500, 75)
                ctx.strokeText("RPS GAME", 500, 75)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.textAlign = "center"
                ctx.fillText("Paper-Paper, It's a Tie", canvas.width / 2, canvas.height / 2 + 15)
                ctx.strokeText("Paper-Paper, It's a Tie", canvas.width / 2, canvas.height / 2 + 15)
                ctx.drawImage(paper, 450, 500, 100, 80)
                ctx.drawImage(paper2, 450, 650, 100, 80)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Player Score: " + pScore, 250, 230)
                ctx.strokeText("Player Score: " + pScore, 250, 230)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Computer Score: " + cScore, 720, 230)
                ctx.strokeText("Computer Score: " + cScore, 720, 230)


            }
            else {
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "50px Reggae One"
                ctx.fillText("RPS GAME", 500, 75)
                ctx.strokeText("RPS GAME", 500, 75)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.textAlign = "center"
                ctx.fillText("Paper-Scissors, Computer Wins", canvas.width / 2, canvas.height / 2 + 15)
                ctx.strokeText("Paper-Scissors, Computer Wins", canvas.width / 2, canvas.height / 2 + 15)
                ctx.drawImage(scissors, 450, 500, 100, 80)
                ctx.drawImage(paper2, 450, 650, 100, 80)
                cScore++
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Player Score: " + pScore, 250, 230)
                ctx.strokeText("Player Score: " + pScore, 250, 230)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Computer Score: " + cScore, 720, 230)
                ctx.strokeText("Computer Score: " + cScore, 720, 230)

            }
            break;
        case 2:
            if (cChoice == 0) {
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "50px Reggae One"
                ctx.fillText("RPS GAME", 500, 75)
                ctx.strokeText("RPS GAME", 500, 75)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.textAlign = "center"
                ctx.fillText("Scissors-Rock, Computer Wins", canvas.width / 2, canvas.height / 2 + 15)
                ctx.strokeText("Scissors-Rock, Computer Wins", canvas.width / 2, canvas.height / 2 + 15)
                ctx.drawImage(rock, 450, 500, 100, 80)
                ctx.drawImage(scissors2, 450, 650, 100, 80)
                cScore++
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Player Score: " + pScore, 250, 230)
                ctx.strokeText("Player Score: " + pScore, 250, 230)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Computer Score: " + cScore, 720, 230)
                ctx.strokeText("Computer Score: " + cScore, 720, 230)
            }
            else if (cChoice == 1) {
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "50px Reggae One"
                ctx.fillText("RPS GAME", 500, 75)
                ctx.strokeText("RPS GAME", 500, 75)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.textAlign = "center"
                ctx.fillText("Scissors-Paper, Player Wins", canvas.width / 2, canvas.height / 2 + 15)
                ctx.strokeText("Scissors-Paper, Player Wins", canvas.width / 2, canvas.height / 2 + 15)
                ctx.drawImage(paper, 450, 500, 100, 80)
                ctx.drawImage(scissors2, 450, 650, 100, 80)
                pScore++
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Player Score: " + pScore, 250, 230)
                ctx.strokeText("Player Score: " + pScore, 250, 230)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Computer Score: " + cScore, 720, 230)
                ctx.strokeText("Computer Score: " + cScore, 720, 230)

            }
            else {
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "50px Reggae One"
                ctx.fillText("RPS GAME", 500, 75)
                ctx.strokeText("RPS GAME", 500, 75)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.textAlign = "center"
                ctx.fillText("Scissors-Scissors, It's a Tie", canvas.width / 2, canvas.height / 2 + 15)
                ctx.strokeText("Scissors-Scissors, It's a Tie", canvas.width / 2, canvas.height / 2 + 15)
                ctx.drawImage(scissors, 450, 500, 100, 80)
                ctx.drawImage(scissors2, 450, 650, 100, 80)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Player Score: " + pScore, 250, 230)
                ctx.strokeText("Player Score: " + pScore, 250, 230)
                ctx.fillStyle = "#0ff"
                ctx.strokeStyle = "black"
                ctx.font = "35px Reggae One"
                ctx.fillText("Computer Score: " + cScore, 720, 230)
                ctx.strokeText("Computer Score: " + cScore, 720, 230)
            }
            break;
    }

}


gameStates[0] = function () {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    ctx.fillStyle = "#0ff"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2
    ctx.shadowColor = "#0ff"
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 10
    ctx.textAlign = "center"
    ctx.font = "50px Reggae One"
    ctx.fillText("Welcome To The RPS Game", canvas.width / 2, canvas.height / 2 - 50)
    ctx.strokeText("Welcome To The RPS Game", canvas.width / 2, canvas.height / 2 - 50)
    ctx.font = "30px Reggae One"
    ctx.fillText("Press Spacebar To Start", canvas.width / 2, canvas.height / 2 + 25)
    ctx.strokeText("Press Spacebar To Start", canvas.width / 2, canvas.height / 2 + 25)
 

}

gameStates[1] = function () {
    if(!gameOver){
    
    option.style.display = "block"
    //title
    ctx.fillStyle = "#0ff"
    ctx.strokeStyle = "black"
    ctx.font = "50px Reggae One"
    ctx.fillText("RPS GAME", 500, 75)
    ctx.strokeText("RPS GAME", 500, 75)
    //p&cpu score
    ctx.fillStyle = "#0ff"
    ctx.strokeStyle = "black"
    ctx.font = "35px Reggae One"
    ctx.fillText("Player Score: " + pScore, 250, 230)
    ctx.strokeText("Player Score: " + pScore, 250, 230)
    ctx.fillStyle = "#0ff"
    ctx.strokeStyle = "black"
    ctx.font = "35px Reggae One"
    ctx.fillText("Computer Score: " + cScore, 720, 230)
    ctx.strokeText("Computer Score: " + cScore, 720, 230)
    //images
    ctx.drawImage(computer, 435, 500, 100, 70)
    ctx.drawImage(rock, 200, 650, 70, 60)
    ctx.drawImage(paper, 450, 650, 80, 60)
    ctx.drawImage(scissors, 700, 650, 70, 60)
    }
   

}


function main() {
    //clear canvas
    if(!gameOver)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    gameStates[currentState]()
    

    //call main function
    timer = requestAnimationFrame(main)
}