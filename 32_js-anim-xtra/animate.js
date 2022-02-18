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

dotButton.addEventListener( "click", donut );
stopButton.addEventListener( "click",  stopIt );
dvdButton.addEventListener("click", drawDVD);

function donut() {
  const canvas = document.querySelector('#canvas');

  const canvasWidth = 80;
  const canvasHeight = 24;
  const canvasArea = canvasHeight * canvasWidth;
  const yOffset = 12;
  const xOffset = 40;
  const innerRadius = 2;
  const r1Points = 90; // 90
  const r2Points = 314; // 314
  const fov = 5;

  const what = 30;

  let A = 0;
  let B = 0;

  let shades = '.,-~:;=!*#$@'.split('');
  // let shades = 'patrick PATRICK'.split('');

  // buffers
  let b, z;

  let interval = setInterval(() => {
    b = Array(canvasArea).fill(' '); //
    z = Array(7040).fill(0); // z-buffer set to z^-1

    for (let j = 0; j < 6.28; j += 6.28 / r1Points) {
      for (let i = 0; i < 6.28; i += 6.28 / r2Points) {
        let c = Math.sin(i);
        let d = Math.cos(j);
        let e = Math.sin(A);
        let f = Math.sin(j);
        let g = Math.cos(A);

        let h = d + innerRadius;

        let D = 1 / (c * h * e + f * g + fov);

        let l = Math.cos(i);
        let m = Math.cos(B);
        let n = Math.sin(B);
        let t = c * h * g - f * e;

        // floored floats a.k.a. ints
        let x = (xOffset + what * D * (l * h * m - t * n)) << 0;
        let y = (yOffset + (what / 2) * D * (l * h * n + t * m)) << 0;
        let o = (x + canvasWidth * y) << 0;
        let shadeConstant = (((shades.length + 1) * 2) / 3) << 0; // ceil(shade.length * (2/3))
        let N =
          (shadeConstant *
            ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n)) <<
          0;

        if (canvasHeight > y && y > 0 && x > 0 && canvasWidth > x && D > z[o]) {
          z[o] = D;
          b[o] = shades[N > 0 ? N : 0];
        }
      }
    }

    canvas.innerHTML = '';
    let line = [];

    for (let k = 0; k < canvasArea + 1; k++) {
      if (k % canvasWidth) {
        line.push(b[k]);
      } else {
        canvas.innerHTML += line.join('') + '<br />';
        line = [];
      }

      A += 0.00004;
      B += 0.00002;
    }
  }, 17);
}

donut();
