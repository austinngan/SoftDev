// Team People :: Cameron Nelson (Bob), Austin Ngan (Gerald)  
// SoftDev pd2
// K28 -- Getting more comfortable with the dev console and the DOM
// 2022-02-08t
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
var fac = (n) =>{
	if (n==0){
		return 1;
		}
		
	else{
		return (fac(n-1)*n);
	}
		
}

var fib = (n) => {
	if (n==0){
		return 0p;
	}
// could also do if (n<=1){return n}

	if (n==1){
		return 1;
	}
	else{
		return (fib(n-1)+fib(n-2));
	}
}


var gcd = (a,b) =>{
	if (a>b){
		if (a%b==0){
			return b;
	}
		else{
			return (gcd(b, (a%b)));
		}
	
	}
	if (b>a){
		if (b%a==0){
			return a;
	}
		else{
			return (gcd(a, (b%a)));
		}
	
	}
	else{
		return a;
		}
	}

var gen_fact = () =>{
	document.getElementById("a").innerHTML = fact(5);
} 

var gen_fib = () =>{
	document.getElementById("b").innerHTML = fib(5);
}

// var fibPress = document.getElementById("a").innerHTML = fact(5);
// fibPress.addEventListener('click', fib);
// document.createElement(<HTML TAG NAME>)
// element.getAttribute(<NAME>)
// element.setAttribute(<NAME>, <VALUE>)

