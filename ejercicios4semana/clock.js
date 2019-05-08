'use strict';

// Funcion que imprime segundos en pantalla 

function clock() {
  	var fecha = new Date();
	var segundos = fecha.getSeconds();
	console.log("Segundos=",segundos)
	if(segundos==59){

		clearInterval(inter);
	}
}
  
var inter = setInterval(clock, 1000);

function clock1() {
    var num = 1;
    var segundos = setInterval(function() {
      console.log(num++);
      if (num == 61) {
        clearInterval(segundos);
      }
    }, 1000);
  }
  
  clock();