var c = document.getElementById('c')
var ctx = c.getContext('2d')

var rps = []
rps[0] = "Rock"
rps[1] = "Paper"
rps[2] = "Scissors"


var btn = document.querySelectorAll('button')
btn[0].addEventListener('click', function (e) { playGame(0) })
btn[1].addEventListener('click', function (e) { playGame(1) })
btn[2].addEventListener('click', function (e) { playGame(2) })


function playGame(playerChoice) {

    ctx.clearRect(0, 0, c.width, c.height)
    var cpuChoice = Math.floor(Math.random() * 2.99)

    switch (playerChoice) {
        case 0:
            if (cpuChoice == 0) {

                ctx.fillStyle = "darkgray"
                ctx.strokeStyle = "black"
                ctx.font = "30px Cursive"
                ctx.textAlign = "center"
                ctx.fillText("Rock-Rock, It's a Tie", c.width / 2, c.height / 2)
                ctx.strokeText("Rock-Rock, It's a Tie", c.width / 2, c.height / 2)

            }
            else if (cpuChoice == 1) {

                ctx.fillStyle = "darkgray"
                ctx.strokeStyle = "black"
                ctx.font = "30px Cursive"
                ctx.textAlign = "center"
                ctx.fillText("Rock-Paper, Computer Wins", c.width / 2, c.height / 2)
                ctx.strokeText("Rock-Paper, Computer Wins", c.width / 2, c.height / 2)
                
            }
            else {

                ctx.fillStyle = "darkgray"
                ctx.strokeStyle = "black"
                ctx.font = "30px Cursive"
                ctx.textAlign = "center"
                ctx.fillText("Rock-Scissors, Player Wins", c.width / 2, c.height / 2)
                ctx.strokeText("Rock-Scissors, Player Wins", c.width / 2, c.height / 2)

            }
            break;
        case 1:
            if (cpuChoice == 0) {

                ctx.fillStyle = "darkgray"
                ctx.strokeStyle = "black"
                ctx.font = "30px Cursive"
                ctx.textAlign = "center"
                ctx.fillText("Paper-Rock, Player Wins", c.width / 2, c.height / 2)
                ctx.strokeText("Paper-Rock, Player Wins", c.width / 2, c.height / 2)

            }
            else if (cpuChoice == 1) {

                ctx.fillStyle = "darkgray"
                ctx.strokeStyle = "black"
                ctx.font = "30px Cursive"
                ctx.textAlign = "center"
                ctx.fillText("Paper-Paper, It's a Tie", c.width / 2, c.height / 2)
                ctx.strokeText("Paper-Paper, It's a Tie", c.width / 2, c.height / 2)

            }
            else {

                ctx.fillStyle = "darkgray"
                ctx.strokeStyle = "black"
                ctx.font = "30px Cursive"
                ctx.textAlign = "center"
                ctx.fillText("Paper-Scissors, Computer Wins", c.width / 2, c.height / 2)
                ctx.strokeText("Paper-Scissors, Computer Wins", c.width / 2, c.height / 2)

            }
            break;
        case 2:
            if (cpuChoice == 0) {

                ctx.fillStyle = "darkgray"
                ctx.strokeStyle = "black"
                ctx.font = "30px Cursive"
                ctx.textAlign = "center"
                ctx.fillText("Scissors-Rock, Computer Wins", c.width / 2, c.height / 2)
                ctx.strokeText("Scissors-Rock, Computer Wins", c.width / 2, c.height / 2)

            }
            else if (cpuChoice == 1) {

                ctx.fillStyle = "darkgray"
                ctx.strokeStyle = "black"
                ctx.font = "30px Cursive"
                ctx.textAlign = "center"
                ctx.fillText("Scissors-Paper, Player Wins", c.width / 2, c.height / 2)
                ctx.strokeText("Scissors-Paper, Player Wins", c.width / 2, c.height / 2)

            }
            else {

                ctx.fillStyle = "darkgray"
                ctx.strokeStyle = "black"
                ctx.font = "30px Cursive"
                ctx.textAlign = "center"
                ctx.fillText("Scissors-Scissors, It's a Tie", c.width / 2, c.height / 2)
                ctx.strokeText("Scissors-Scissors, It's a Tie", c.width / 2, c.height / 2)

            }
            break;
    }
}
