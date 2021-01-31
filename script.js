const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.body;
const random_btn = document.getElementById("random");

function gradient()
 {
	body.style.background = "linear-gradient(to right, "+color1.value+","+color2.value+")";
	css.textContent = body.style.background+";";
 }

 function getRandom()
 {
 	return Math.floor(Math.random()*256);
 }

 function random_color()
 {
 	const r = getRandom();
 	const g = getRandom();
 	const b = getRandom();

 	body.style.background = "linear-gradient(to right, rgb("+r+","+g+","+b+"),rgb("+b+","+r+","+g+"))";
//  	console.log(body.style.background);

 }

color1.addEventListener("input",gradient);

color2.addEventListener("input",gradient);

random_btn.addEventListener("click",random_color);
