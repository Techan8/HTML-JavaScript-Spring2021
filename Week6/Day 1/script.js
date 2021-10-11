var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var gravity = 1
var friction = 0.9

var dogeImg = new Image()
dogeImg.src = "images/dogecoin.png"

dogeImg.onload = function(){
    main()
}

function randomRange(high, low){
    return Math.random() * (high - low) + low
}

function GameObject(){
    //these are examples of properties in a class
    this.radius = randomRange(10,2)
    this.color = `rgb(${randomRange(0,255)},${randomRange(0,255)},${randomRange(0,255)})`//"yellow"
    //Use multiplication instead of division so it goes faster *0.5 instead of /2
    this.x = canvas.width * 0.5//randomRange(canvas.width, 0)
    this.y = canvas.height * 0.5//randomRange(canvas.height, 0)
    this.vx = randomRange(30, -30)
    this.vy = randomRange(30, 0)

    //this is an example of a Method in a class
    this.drawCircle = function(){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true)
        ctx.closePath()
        ctx.fill()
    }

    this.drawSquare = function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
    }

    this.drawSprite = function(){
        ctx.drawImage(dogeImg, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
    }

    //this method handles the movement
    this.move = function(){
        //Use this code to make them come to a complete stop
        //this.vx *=friction
        //this.vy *=friction
        this.x += this.vx
        this.y += this.vy

        if(this.y > canvas.height - this.radius){
            //This line resets the particle position
            //this.y = -this.radius

            //Makes sure that the GameObject doesn't leave the screen
            this.y = canvas.height - this.radius

            this.vy = -this.vy * friction

        }
        //left side of canvas
        if(this.x < this.radius){
            this.x = this.radius
            this.vx = -this.vx * friction
        }
        //right side of canvas
        if(this.x > canvas.width - this.radius){
            this.x = canvas.width - this.radius
            this.vx = -this.vx * friction
        }
    }
}

//Create an Instance of the GameObject class
//var particle =  new GameObject()

//particle.x = 10 
//particle.drawCircle()

//Create an array of particles
var particles = []

var numParticles = 100
var timer = requestAnimationFrame(main)

//for loop
for(var i = 0; i<numParticles; i++){
    particles[i] = new GameObject()
    particles[i].drawCircle()
}

function main(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for(var i = 0; i<particles.length; i++){
        //particles[i].y += 1
        particles[i].vy += gravity

        particles[i].move()
        //particles[i].drawCircle()
        //particles[i].drawSquare()
        particles[i].drawSprite()
    }
    timer = requestAnimationFrame(main)
}
