var textButton = document.getElementById("buttonMyFonts");
var squaresButton = document.getElementById("buttonBuyFonts");

var threeSquares = document.getElementById("allSquares");
var textCard = document.getElementById("textMyFonts");


textButton.addEventListener('click', event => {
		
	threeSquares.className = "hidden";
	
	textButton.className = "active";

	squaresButton.className = "non-active";	

    textCard.className = "textFont";

	
})


squaresButton.addEventListener('click', event => {
	
	textCard.className = "hidden";
	
	threeSquares.className = "squares";	
	
	squaresButton.className = "active";
	
	textButton.className = "non-active";
	
    
	
	
})