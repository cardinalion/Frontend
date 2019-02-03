var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomcolor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
	return color;
}

function randomselect() {
	color1.value = randomcolor();
	color2.value = randomcolor();
	setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomselect);