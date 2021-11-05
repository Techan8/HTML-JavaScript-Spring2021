//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var win


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});
	win =  new GameObject()

	platform0 = new GameObject();
		platform0.width = 200;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";
	
	platform1 = new GameObject();
		platform1.width = 350;
		platform1.height = 25
		platform1.x = platform1.width/2 + 325;
		platform1.y = canvas.height - platform1.height/2 - 100;
		platform1.color = "black";
		
	platform2 = new GameObject();
		platform2.width = 175;
		platform2.height = 25
		platform2.x = platform2.width/2 + 800;
		platform2.y = canvas.height - platform2.height/2 - 200;
		platform2.color = "purple";

	platform3 = new GameObject();
		platform3.width = 250;
		platform3.height = 25
		platform3.x = platform3.width/2 + 400;
		platform3.y = canvas.height - platform3.height/2 - 325;
		platform3.color = "pink";

	platform4 = new GameObject();
		platform4.width = 350;
		platform4.height = 25
		platform4.x = platform4.width/2 + 75;
		platform4.y = canvas.height - platform4.height/2 - 450;
		platform4.color = "green";

		platform5 = new GameObject();
		platform5.width = canvas.width;
		platform5.height = 25
		platform5.x = platform5.width/2 + 150;
		platform5.y = canvas.height - platform5.height/2 - 600;
		platform5.color = "cyan";
	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	
	collision(platform0)
	collision(platform1)
	collision(platform2)
	collision(platform3)
	collision(platform4)
	collision(platform5)

	
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 
		
	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		
	}
	
	if(player.x >= goal.x)
	{
		win.drawText();
	}
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	platform4.drawRect();
	platform5.drawRect();

	//Show hit points
	player.drawRect();
	goal.drawCircle();
}

function collision(platform)
{
	while(platform.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	while(platform.hitTestPoint({x:player.left().x , y:player.bottom().y}) && player.vy >=0) 
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	
	while(platform.hitTestPoint({x:player.x + player.width/2, y:player.y + player.height/2}) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	
}
