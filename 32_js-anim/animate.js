// Team Mountain People :: Kevin Cao (Pipi), Austin Ngan (Gerald)
// SoftDev pd2
// K32 -- More Moving Parts
// 2022-02-17r

// model for HTML5 canvas-based animation

// SKEELTON


//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");
var dvdButton = document.getElementById("buttonDVD");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "blue";

var requestID;  //init global var for use with animation frames

//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...");
  console.log(requestID);
  ctx.clearRect(0,0,600,600);
  // YOUR CODE HERE
};


var radius = 0;
var growing = true;


//var drawDot = function() {
var drawDot = () => {
  console.log("drawDot invoked...");
  window.cancelAnimationFrame(requestID);
  requestID = window.requestAnimationFrame(drawCircle);
  console.log(requestID);

};

var drawCircle = () => {
	clear();
	ctx.fillStyle = 'blue';
	ctx.beginPath();
	ctx.arc(c.clientWidth / 2, c.clientHeight / 2, radius, 0,  2 * Math.PI);
	ctx.fill();
	if (growing) {
		if (++radius == Math.min(c.clientWidth / 2,c.clientHeight / 2)) {
			growing = false;
		}
	} else {
		if (--radius == 0) {
			growing = true;
		}
	}
	requestID=window.requestAnimationFrame(drawCircle);
}

//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame(requestID);

};


var drawDVD = () => {
  var image = new Image(); // CREATE NEW IMAGE
  console.log("draw dvd");
  let x = Math.floor(Math.random() * (c.width - 120));
  let y = Math.floor(Math.random() * (c.height - 80));
  dX = 1;
  dY = 1;
  image.onload = function drawDVD1 () {
    cancelAnimationFrame(requestID);
    clear();
    if (x == c.width - 120 || x == 0) {
      dX *= -1;
    }
    if (y == c.height - 80 || y == 0) {
      dY *= -1;
    }
    x += dX;
    y += dY;
    ctx.drawImage(image, x, y, 120, 80);
    requestID = requestAnimationFrame(drawDVD1)
  };
  image.src = "logo_dvd.jpg";
};

dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
dvdButton.addEventListener("click", drawDVD);

