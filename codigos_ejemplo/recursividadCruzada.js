// PSEUDOCODIGO

// Negativo
// INICIO
// Solicitamos un numero como parametro
// Guardamos el numero en variable num
// Si el num < 0
//     el numero es negativo
// Si no
//     manda a llamar a funcion positivo
// FIN

// Positivo
// INICIO
// Solicitamos un numero como parametro
// Guardamos el numero en variable num
// Si el num >= 0
//     el numero es positivo
// Si no
//     manda a llamar a funcion Negativo
// FIN

function negativo(num){
  if (num < 0){
    return "El numero es negativo";
  }
  else{
    return positivo(num)
  }
}

function positivo(num){
  if (num >= 0){
    return "El numero es positivo";
  }
  else{
    return negativo(num)
  }
}

positivo(-12);