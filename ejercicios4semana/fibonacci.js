'use strict';

//Funcion que regresa los primeros 5 numeros fibonacci

function fibonacci() {
  	var num1 = 0 
  	var num2 = 1;
	for( i = 0 ; i < 5 ; i++ ){
		var guardar = num1;
   		num1=num2;
    	num2=guardar+num2;
		console.log("Fibonacci = ", num1);
    }  
}