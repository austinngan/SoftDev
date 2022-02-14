

var c = document.getElementById("slate");

var ctx = c.getContext("2d");

var mode = "rect";

var toggleMode = (e) => {
	console.log(e);
	console.log("toggling...");
	if (mode==="rect"){
		mode="circle";
		bToggler.textContext="Circle";
	}
	else{
		mode="rect";
		bToggler.textContext="rect";
	}
	document.getElementById("buttonToggle").innerHTML = mode;
}

var drawRect = function(e) {
	var mouseX=e.offsetX;
	console.log(mouseX);
	var mouseY=e.offsetY;
	console.log(mouseY);
	console.log("mouseclick registered at ", mouseX, mouseY);
	ctx.beginPath();
	ctx.fillStyle = "red";
	ctx.fillRect(mouseX,mouseY,100,100);
}

var drawCircle = (e) => {
	var mouseX=e.offsetX;
	console.log(mouseX);
	var mouseY=e.offsetY;
	console.log(mouseY);
	console.log("mouseclick registered at ", mouseX, mouseY);
	ctx.beginPath();
	ctx.fillStyle = "red";
	ctx.arc(mouseX,mouseY,50,0,2*Math.PI);
	ctx.fill();


}

var draw = (e) => {
	if (mode=="rect"){
		drawRect(e);
	}
	else{
		drawCircle(e);
	}
}

var wipeCanvas = () => {
	ctx.clearRect(0,0,600,600);
}

c.addEventListener("click", draw);
var bToggler=document.getElementById("buttonToggle");

bToggler.addEventListener("click",toggleMode);
var clearB=document.getElementById("buttonClear");

clearB.addEventListener("click",wipeCanvas);
