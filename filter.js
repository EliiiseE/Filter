(function() {
	var invertbutton = null;

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
			// Add black and white  pix[i] <= 128 ? 0 : 255;
			pix[i] = pix[i] <= 128 ? 0 : 255; // red
			pix[i+1] = pix[i+1] <= 128 ? 0 : 255; // green
			pix[i+2] = pix[i+2] <= 128 ? 0 : 255; // blue
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
	function afterload(){
		invertbutton = document.getElementById('invertbutton');
		graybutton = document.getElementById('graybutton');
		blacknwhitebutton = document.getElementById('blacknwhitebutton');
		redcanalbutton = document.getElementById('redcanalbutton');
		pinkcanalbutton = document.getElementById('pinkcanalbutton');
		addnoisebutton = document.getElementById('addnoisebutton');
		tvnoisebutton = document.getElementById('tvnoisebutton');
		addluminositybutton = document.getElementById('addluminositybutton');
		removeluminositybutton = document.getElementById('removeluminositybutton');
		mirrorbutton = document.getElementById('mirrorbutton');
		blurbutton = document.getElementById('blurbutton');
		frenchybutton = document.getElementById('frenchybutton');

		invertbutton.addEventListener('click', function(ev){
			myInvert();
			}, false);

		graybutton.addEventListener('click', function(ev){
			myGray();
			}, false);

		blacknwhitebutton.addEventListener('click', function(ev){
			myBlacknWhite();
			}, false);

		redcanalbutton.addEventListener('click', function(ev){
			myRedCanal();
			}, false);

		pinkcanalbutton.addEventListener('click', function(ev){
			myPinkCanal();
			}, false);

		addnoisebutton.addEventListener('click', function(ev){
			myAddNoise();
			}, false);

		tvnoisebutton.addEventListener('click', function(ev){
			myTVNoise();
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

		frenchybutton.addEventListener('click', function(ev){
			myFrenchy();
			}, false);
		}

	window.addEventListener('load', afterload, false);
})();