// Team People :: Cameron Nelson (Bob), Austin Ngan (Gerald) 
// SoftDev pd2
// K27 -- Basic functions in JavaScript
// 2022-02-04
// --------------------------------------------------


var fac = (n) =>{
	if (n==0){
		return 1
		}
		
	else{
		return (fac(n-1)*n)
	}
		
}

var fib = (n) => {
	if (n==0){
		return 0
	}
// could also do if (n<=1){return n}

	if (n==1){
		return 1
	}
	else{
		return (fib(n-1)+fib(n-2))
	}
}



//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

