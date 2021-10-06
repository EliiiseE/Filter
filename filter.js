(function() {
	var invertbutton = null;

	function myInvert(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		var x = 0;
		var y = 0;
		var width = canvas.width;
		var height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		///////////////////////////////////////////////////////////////////
		// passage d'un tableau 1D (pix) à un tableau 2D pour la composante rouge (tr)

		x = 0;
		y = 0;
		// décaration d'un tableau à 2 dimensions
		var tr = new Array(width).fill(new Array(height));
		var tg = new Array(width).fill(new Array(height));
		var tb = new Array(width).fill(new Array(height));
		var ta = new Array(width).fill(new Array(height));
		
		// boucle pour parcourir toutes les valeurs de mon tableau à 1 dim
		for (var i = 0; i < pix.length; i = i + 4) { 
			pix[i]   = pix[i] ; // 255
			pix[i+1] = pix[i+1] ; // 255
			pix[i+2] = pix[i+2]; // 255
			// pix[i+3] = ta[x][y];
		}
		
		///////////////////////////////////////////////////////////////////
		// passage des tableaux 2D (t?) à un tableau 1D (pix)
		
		for (var x = 0; x < width; x++) { 
			for (var y = 0; y < height ; y++) { 
				tr[x][y] = tr[x][y];
				tg[x][y] = tg[x][y];
				tb[x][y] = tb[x][y];
				ta[x][y] = ta[x][y];
				x = x + 1;
				if(x == width ){ // quand dois je revenir à la ligne
					y = y +1;
					x = 0;
				}
			}
		}
		imgd.data = pix;

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);
		
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
