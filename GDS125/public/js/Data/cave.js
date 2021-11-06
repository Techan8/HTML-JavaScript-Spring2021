var x = false;
var caveData = {
	info: {
		layout: [

			[x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x],
			[x, x, 0, 11, 0, 11, 0, 11, 0, 11, 0, 11, 0, 11, x, x],
			[x, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, x],
			[x, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, x],
			[x, 3, 1, x, x, x, x, x, x, x, x, x, x, 1, 3, x],
			[x, x, 4, x, x, x, x, x, x, x, x, x, x, 2, x, x],
			[x, x, 7, x, x, x, x, x, x, x, x, x, x, 9, x, x]

		],
		src: `images/tiles3.png`,
	},
	states:
		[
			{
				fps: 1,
				cycle: true,
				frames: [
					{ width: 128, height: 128, startX: 0, startY: 0 },


				]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 128, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 256, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 384, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 512, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 640, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 768, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 896, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1024, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1152, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1280, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1408, startY: 0 }]
			}
		]
}
var caveBackData = {
	info: {
		layout: [

			[x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x],
			[x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x],
			[x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x],
			[0, x, x, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, x, 2, 11],
			[1, x, x, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, x, 3, 1],
			[2, 5, x, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, x, 5, 4],
			[2, 6, x, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, x, 10, 4]


		],
		src: `images/tiles3.png`,
	},
	states:
		[
			{
				fps: 1,
				cycle: true,
				frames: [
					{ width: 128, height: 128, startX: 0, startY: 0 },


				]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 128, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 256, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 384, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 512, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 640, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 768, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 896, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1024, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1152, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1280, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 128, height: 128, startX: 1408, startY: 0 }]
			}
		]
}

var caveHitData = {
	info: {
		layout: [

			[x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x],
			[x, x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, x, x],
			[x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, x],
			[x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, x],
			[x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x],
			[x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x],
			[x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x]



		],
		src: `images/tiles3.png`
	},
	states:
	[
		{
			fps:1,
			cycle: false, 
			frames: [
				{ width: 128, height: 128, startX: 0, startY: 0 },

			]
		}
	]
}