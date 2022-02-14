

var c = document.getElementById("slate");

var ctx = c.getContext("2d");

var mode = "rect";

var toggleMode = (e) => {
	console.log(e);
	console.log("toggling...");
	if (mode=="rect"){
		mode="circle";
		bToggler.textContext="Circle";
	}
	else{
		mode="rect";
		bToggler.textContext="rect";
	}
}

var drawRect = function(e) {
	var mouseX=e.clientX;
	console.log(mouseX);
	var mouseY=e.clientY;
	console.log(mouseY);
	console.log("mouseclick registered at ", mouseX, mouseY);
	ctx.fillStyle = "red";
	ctx.fillRect(mouseX,mouseY,100,100);
}

var drawCircle = (e) => {
	var mouseX=e.clientX;
	console.log(mouseX);
	var mouseY=e.clientY;
	console.log(mouseY);
	console.log("mouseclick registered at ", mouseX, mouseY);
	ctx.fillStyle = "red";
	ctx.arc(mouseX,mouseY,50,0,2*Math.PI);
	
	
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
	ctx.clearRect(0,0,ctx.width,ctx.height);
}

c.addEventListener("click", draw);
var bToggler=document.getElementById("buttonToggle");
bToggler.addEventListener("circle",toggleMode);
var clearB=document.getElementById("buttonClear");
clearB.addEventListener("click",wipeCanvas);
