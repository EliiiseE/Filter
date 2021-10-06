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
		//console.log(pix);

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
	
	function afterload(){
		invertbutton = document.getElementById('invertbutton');

		invertbutton.addEventListener('click', function(ev){
			myInvert();
			}, false);

	}
	window.addEventListener('load', afterload, false);
})();
