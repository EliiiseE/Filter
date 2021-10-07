(function() {
	var invertbutton = null;
	//Help to get the noise
	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	}

	function myInvert(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Inverser les couleurs : 255 - pix[i];
			pix[i] = 255 - pix[i]; // red
			pix[i+1] = 255 - pix[i+1]; // green
			pix[i+2] = 255 - pix[i+2]; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}

	function myGray(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Gray is the average between pixels
			let average =(pix[i] + pix[i+1] + pix[i+2])/3;
			
			pix[i] = average; // red
			pix[i+1] = average; // green
			pix[i+2] = average; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}
	
	function myBlacknWhite(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Add average and if > 128 so add 255 else 0
			let average =(pix[i] + pix[i+1] + pix[i+2])/3;
				
			pix[i] = average > 128 ? 255 : 0; // red
			pix[i+1] = average > 128 ? 255 : 0; // green
			pix[i+2] = average > 128 ? 255 : 0; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}

	function myBurn(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {

			pix[i] = pix[i] > 128 ? 255 : 0; // red
			pix[i+1] = pix[i+1] > 128 ? 255 : 0; // green
			pix[i+2] = pix[i+2] > 128 ? 255 : 0; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}

	function myRedCanal() {
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Keep only red
			pix[i] = pix[i]; // red
			pix[i+1] = 0; // green
			pix[i+2] = 0; // blue
			// i+3 is alpha (the fourth element)
		}	

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}

	function myPinkCanal() {
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Keep Rec and Blue -> Pink/Violet
			pix[i] = pix[i]; // red
			pix[i+1] = 0; // green
			pix[i+2] = pix[i+2]; // blue
			// i+3 is alpha (the fourth element)
		}	

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}

	function myGraynColor() {
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Gray + 1 color ---> yellow filter
			let average =(pix[i] + pix[i+1] + pix[i+2])/3;
			
			pix[i] = average; // red
			pix[i+1] = pix[i+1]; // green
			pix[i+2] = 0; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}

	function myAddNoise(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Add noise
			if(getRandomIntInclusive(1, 100) == 1){
				var noiceColor = getRandomIntInclusive(1, 2) == 1 ? 255 : 0;
				pix[i] = noiceColor; // red
				pix[i+1] = noiceColor; // green
				pix[i+2] = noiceColor; // blue
				// i+3 is alpha (the fourth element)
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}	

	function mycolorNoise(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		//console.log(pix);

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// add color noise + pixel that way we could have the picture AND the noise 
			// 0 to 100 because then there is too much white
			pix[i] = pix[i] + getRandomIntInclusive(0, 100); // red
			pix[i+1] = pix[i+1] + getRandomIntInclusive(0, 100); // green
			pix[i+2] = pix[i+2] + getRandomIntInclusive(0, 100); // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}

	function myAddLuminosity(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			// Add luminosity 
			pix[i] = pix[i] + 20; // red
			pix[i+1] = pix[i+1] + 20; // green
			pix[i+2] = pix[i+2] + 20; // blue
			// i+3 is alpha (the fourth element)
		}
		
		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
	
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}

	function myRemoveLuminosity(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			//Remove luminosity
			pix[i] = pix[i] - 20; // red
			pix[i+1] = pix[i+1] - 20; // green
			pix[i+2] = pix[i+2] - 20; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}

	function myVerticalMirror(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// 1 tab 1D -> 4 tab 2D (r,g,b,a)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));

		// copy values
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}

		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				// - 1 array starts at 0 not 1
				pix[x*4+y*(width*4)+0] = tr[width-1-x][y];
				pix[x*4+y*(width*4)+1] = tg[width-1-x][y];
				pix[x*4+y*(width*4)+2] = tb[width-1-x][y];
				pix[x*4+y*(width*4)+3] = ta[width-1-x][y];
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}

	function myHorizontalMirror(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// 1 tab 1D -> 4 tab 2D (r,g,b,a)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));

		//  copy values
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}

		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				// - 1 array starts at 0 not 1
				pix[x*4+y*(width*4)+0] = tr[x][height-1-y];
				pix[x*4+y*(width*4)+1] = tg[x][height-1-y];
				pix[x*4+y*(width*4)+2] = tb[x][height-1-y];
				pix[x*4+y*(width*4)+3] = ta[x][height-1-y];
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}

	function myBlur(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// 1 tab 1D -> 4 tab 2D (r,g,b,a)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));

		//  copy values
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}

		// Add blur
		for (var y = 1; y < (height-1); y++) {
			for (var x = 1; x < (width-1); x++) {
				tr[x][y] = (tr[x-1][y-1] + tr[x][y-1] + tr[x+1][y-1] + tr[x-1][y] + tr[x][y] + tr[x+1][y] + tr[x-1][y+1] + tr[x][y+1] + tr[x+1][y+1]) / 9;
				tg[x][y] = (tg[x-1][y-1] + tg[x][y-1] + tg[x+1][y-1] + tg[x-1][y] + tg[x][y] + tg[x+1][y] + tg[x-1][y+1] + tg[x][y+1] + tg[x+1][y+1]) / 9;
				tb[x][y] = (tb[x-1][y-1] + tb[x][y-1] + tb[x+1][y-1] + tb[x-1][y] + tb[x][y] + tb[x+1][y] + tb[x-1][y+1] + tb[x][y+1] + tb[x+1][y+1]) / 9;
				// ta[x][y] = ta[x][y];
			}
		}

		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				// - 1 array starts at 0 not 1
				pix[x*4+y*(width*4)+0] = tr[x][y];
				pix[x*4+y*(width*4)+1] = tg[x][y];
				pix[x*4+y*(width*4)+2] = tb[x][y];
				pix[x*4+y*(width*4)+3] = ta[x][y];
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);

		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}

	function afterload(){
		invertbutton = document.getElementById('invertbutton');
		graybutton = document.getElementById('graybutton');
		blacknwhitebutton = document.getElementById('blacknwhitebutton');
		burnbutton = document.getElementById('burnbutton');
		redcanalbutton = document.getElementById('redcanalbutton');
		pinkcanalbutton = document.getElementById('pinkcanalbutton');
		grayncolorbutton = document.getElementById('grayncolorbutton');
		addnoisebutton = document.getElementById('addnoisebutton');
		colornoisebutton = document.getElementById('colornoisebutton');
		addluminositybutton = document.getElementById('addluminositybutton');
		removeluminositybutton = document.getElementById('removeluminositybutton');
		mirrorbutton = document.getElementById('mirrorbutton');
		blurbutton = document.getElementById('blurbutton');

		invertbutton.addEventListener('click', function(ev){
			myInvert();
			}, false);

		graybutton.addEventListener('click', function(ev){
			myGray();
			}, false);

		blacknwhitebutton.addEventListener('click', function(ev){
			myBlacknWhite();
			}, false);

		burnbutton.addEventListener('click', function(ev){
			myBurn();
			}, false);

		redcanalbutton.addEventListener('click', function(ev){
			myRedCanal();
			}, false);

		pinkcanalbutton.addEventListener('click', function(ev){
			myPinkCanal();
			}, false);

		grayncolorbutton.addEventListener('click', function(ev){
			myGraynColor();
			}, false);

		addnoisebutton.addEventListener('click', function(ev){
			myAddNoise();
			}, false);

		colornoisebutton.addEventListener('click', function(ev){
			mycolorNoise();
			}, false);

		addluminositybutton.addEventListener('click', function(ev){
			myAddLuminosity();
			}, false);

		removeluminositybutton.addEventListener('click', function(ev){
			myRemoveLuminosity();
			}, false);

		verticalmirrorbutton.addEventListener('click', function(ev){
			myVerticalMirror();
			}, false);

		horizontalmirrorbutton.addEventListener('click', function(ev){
			myHorizontalMirror();
			}, false);

		blurbutton.addEventListener('click', function(ev){
			myBlur();
			}, false);
		}

	window.addEventListener('load', afterload, false);
})();