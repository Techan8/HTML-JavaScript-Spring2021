
var canvas = document.getElementById(`canvas`);
var context = canvas.getContext(`2d`);

var interval = 1000/60;
var timer = setInterval(animate, interval);

/*------------Use this if you want to implement States---------------*/


var startButton = new GameObject();
startButton.img.src = `images/start.png`
startButton.x =	(512)												//to move the start button in the screen x position
startButton.y = (470)													//to move the start button in the screen x position

var menuBackground = new GameObject();		//to place any image for the background
menuBackground.img.src = `images/menu.png`	
menuBackground.width = canvas.width																//to place any image for start button
menuBackground.height = canvas.height																//to place any image for start button
							

gameStates[`menu`] =function(){
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			gameStates.changeState(`game`)
			sounds.play(`caketown`)
		}
		startButton.color = `yellow`

	}
	else
	{
		startButton.color = `red`
    }
    
	
	menuBackground.drawStaticImage(0,0)
	startButton.render(`drawStaticImage`,0,0)
}

gameStates.changeState(`menu`)

var gravity = 1;
var friction = {x:.85,y:.97}

//Avatar
var wiz = new GameObject({width:128, height:128, spriteData:playerData}).makeSprite(playerData)
wiz.force=1

//Very back background
var sky = new GameObject({width:canvas.width, height:canvas.height, color:"rgba(12,240,229,0)"})
sky.img.src = `images/sky.png`

//The ground
var ground = new GameObject({width:canvas.width*5, height:64,y:canvas.height-32, color: "rgba(12,240,229,0)"})//"rgba(12,240,229,0)"})
ground.img.src = `images/ground.png`

//A platform
var plat = new GameObject({width:256, height:64,y:canvas.height-222, color:"rgba(12,240,229,0)"})
plat.img.src = `images/platform.png`

//A level object when it is moved other objects move with it.
var level = new GameObject({x:0,y:0});
ground.world = level;
plat.world = level;

//Cave foreground Tile Grid
var cave = new Grid(caveData, {world:level, x:1024, tileHeight:64, tileWidth:64});
//Cave background Tile Grid
var caveBack = new Grid(caveBackData, {world:level, x:1024, tileHeight:64, tileWidth:64});
//Cave collision
var caveHit = new Grid(caveHitData,{world:level, x:1024, tileHeight:64, tileWidth:64});

var leftBorder = new GameObject({x:canvas.width/2-100, height: canvas.height, world:level})

//This is a group used for collisions
var g1 = new Group();
g1.color= `rgb(251,0,254)`;

//Adds items to a group
g1.add([ground,plat, leftBorder, caveHit.grid])

//removes items from a group
//g1.remove([plat, cave.grid])

//Used to draw the rectangles
var rects = new Group();
rects.add([ground,plat])

//used to render the sprites
var sprites = new Group();
sprites.add([caveBack.grid, wiz, cave.grid])

//Cave collision
var caveWalls = new Group();
caveWalls.add([caveHit.grid])

//
var levelItems=new Group();
levelItems.add([caveBack.grid, wiz, ground, plat, cave.grid]);

//background
var bg = new GameObject({x:level.x,y:level.y, width:canvas.width*4, height:canvas.height})
bg.img.src=`images/elements.png`

//farbackground
var rbg = new GameObject({x:level.x, y:level.y, width:1024, height:512})
rbg.img.src=`images/background.png`

/*----------------------------BULLET STUFF---------------------------*/

var bullets = []
var canShoot = true;
var shotTimer = 0;
var shotDelay = 30;
var currentBullet = 0;

for(let i=0; i<100; i++)
{
	bullets[i] = new GameObject()
	bullets[i].img.src="images/bubble2.png"
	bullets[i].y = -10000
	bullets[i].width = 65
	bullets[i].height = 30
}

console.log(bullets)





/*----------------------------BULLET STUFF-----------------------------*/
gameStates[`game`] = function()
{
	
	if(!keys[`W`] && !keys[`S`] && !keys[`D`] && !keys[`A`] && wiz.canJump)
		wiz.changeState(`idle`)
	
	if(keys[`W`] && wiz.canJump)
	{
		wiz.canJump = false;
		wiz.vy = wiz.jumpHeight;
		wiz.changeState(`jump`)
		sounds.play(`jumping`)
	}
	if(keys[`S`])
	{
		wiz.top={x:0, y:0};
		wiz.changeState(`crouch`)
		
	}
	else
	{
		wiz.height = 128;
	}
	if(keys[`D`] && wiz.currentState != `crouch`)
	{
		wiz.changeState(`walk`)
		wiz.vx += wiz.force
		wiz.dir=1;
	}
	if(keys[`A`] && wiz.currentState != `crouch`)
	{
		wiz.changeState(`walk`)
		wiz.vx += -wiz.force
		wiz.dir=-1;
	}
	if(keys[` `])
	{
		wiz.top={x:0, y:0};
		wiz.changeState(`attack`)
	}
	
	shotTimer--;
	if(shotTimer <= 0)
	{
		//wiz.changeState(`attack`)
		canShoot = true
	}
	else
	{
		canShoot = false
	}
	
	if (keys[` `])
	{
		if(canShoot)
		{
			shotTimer = shotDelay
			console.log(`Boom`)

			bullets[currentBullet].vx = 5 * wiz.dir;
			bullets[currentBullet].world = level;
			bullets[currentBullet].x = wiz.x - level.x + 20;
			bullets[currentBullet].dir = wiz.dir  //makes bullets direction same as wizard
			bullets[currentBullet].y = wiz.y;
			sounds.play(`shooting`)

			currentBullet++;
			if(currentBullet >= bullets.length)
			{
				currentBullet = 0
			}
		}
		
	}
	else
	{
		shotTimer = 0
	}

	wiz.vy+= gravity
	wiz.vx *= friction.x
	wiz.vy *= friction.y
	wiz.x += Math.round(wiz.vx)
	wiz.y += Math.round(wiz.vy)

	
	let offset = {x:Math.round(wiz.vx), y:Math.round(wiz.vy)}

	while(g1.collide(wiz.bottom) && wiz.vy>=0)
	{
		wiz.canJump = true;
			wiz.vy=0;
			wiz.y--;
			offset.y--;
	}
	
	while(g1.collide(wiz.top) && wiz.vy<=0)
	{
		wiz.canJump = true;
			wiz.vy=0;
			wiz.y++;
			offset.y++;
	}

	while(g1.collide(wiz.right) && wiz.vx>=0)
	{
		wiz.canJump = true;
			wiz.vx=0;
			wiz.x--;
			offset.x--;
	}

	while(g1.collide(wiz.left) && wiz.vx<=0)
	{
		wiz.canJump = true;
			wiz.vx=0;
			wiz.x++;
			offset.x++;
	}

	//Makes the level move
	wiz.x -= offset.x;
	level.x -= offset.x;
	rbg.x -= offset.x*.75;

	
	

	bg.x = level.x*.75;
	
	if(rbg.x < -rbg.width || rbg.x > rbg.width)
	{
		rbg.x=0; 
	}

	sky.drawStaticImage([-512,-500]);
	rbg.drawStaticImage([0,0]);
	rbg.drawStaticImage([-rbg.width,0]);
	rbg.drawStaticImage([rbg.width,0]);
	bg.drawStaticImage([0,0]);
	plat.drawStaticImage([-112,-35]);
	ground.drawStaticImage([-500,-32]);

	rects.render(`drawRect`)


	sprites.play().render(`drawSprite`);
	
	for(let i=0; i<bullets.length; i++)
	{
		bullets[i].move()
		bullets[i].drawStaticImage()
		//bullets[i].angle+=10  --------> rotation
	}

}
/*----------------------------------------------------------------------*/

//-------------------------AnimationLoop--------------------------------

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	/*-----------Use for State Machine ---------------------------------*/
	gameStates[gameStates.currentState]();
	/*-------------------------------------------------------------------*/
}



