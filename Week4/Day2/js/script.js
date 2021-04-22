varcanvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)
var x = 10

var galaxy = new Image()
galaxy.src = "images/galaxy.jpeg"
galaxy.onload = function () {
    main()
}
var mario = new Image()
mario.src = "images/mario.png"
mario.onload = function () {
    main()
}

function main() {
    ctx.clearRect(0,0,canvas.width, canvas.height)

    //draw images
    ctx.drawImage(galaxy, 0, 0, 800, 600)
    ctx.drawImage(mario,x, canvas.height/2,40,80)
    console.log("working")

    //update position
    x += 1

    if (x > canvas.width + 20) {
        x = -20;
    }
    timer = requestAnimationFrame(main)
}
