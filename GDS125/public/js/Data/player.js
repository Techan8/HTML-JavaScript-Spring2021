playerData ={
	info:{
		src:`images/spritesheet.png`
	},
	states:{
    	idle:
		{
			fps:60,
			cycle:true,
			frames:[
					{width:512, height:512, startX:515, startY:515},
					{width:512, height:512, startX:1029, startY:515},
					{width:512, height:512, startX:1, startY:1029},
					
			]
		},
		walk:
		{
			fps:15,
			cycle:true,
			frames:[
					{width:512, height:512, startX:1543, startY:1},
					{width:512, height:512, startX:1543, startY:515}
				]
		},
		jump:
		{
			fps:15,
			cycle:false,
			frames:[
					{width:512, height:512, startX:515, startY:1029},
					{width:512, height:512, startX:1029, startY:1029}
				]
		},
		crouch:
		{
			fps:15,
			cycle:false,
			frames:[
					{width:512, height:512, startX:1029, startY:1},
					{width:512, height:512, startX:1, startY:515}
					
				]
		},
		attack:
		{
			fps:15,
			cycle:false,
			width:300,
			frames:[
					{width:512, height:512, startX:1, startY:1},
					{width:512, height:512, startX:515, startY:1}
					
				]
		}
	}
		
}