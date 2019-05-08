'use strict';

// Funcion que imprime los numeros del 1 al 100 y en los pares imprime el numero más
// la palabra "buzz", mientras que en los impares el numero y la palabra "fizz"

function buzzfizz(){
	for( i = 1 ; i <= 100 ; i++ ){
		if( i%2 == 0 ){
			console.log("Numero",i,"buzz");
		}else{
			console.log("Numero",i,"fizz");
		}
	}
}