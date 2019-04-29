// Codigo con recursividad

function factorial(numero) {
  if (numero == 0) {
    return 1;
  }
  else {
    console.log("Numero", numero)
    return numero * factorial(numero - 1);
  }
}
// PSEUDOCODIGO
// INICIO
// Pedimos un numero al usuario de tipo entero
// Guardamos el numero en una variable llamada "numero"
// Observamos el numero y 
// si el numero igual a 0 
//     regresa un 1,
// si no 
//     regresa el numero multiplicado por el resultado de la funcion a la que se le envia como parametro el numero actual -1 
// FIN
factorial(6);
