var adyacencia = [[0,[1,2]],[1,[0,3]],[2,[0,4]],[3,[1,4]],[4,[3,2]]];
var masadyacencia = [[0,[2,3]],[1,[3]],[2,[0,4]],[3,[0,1,4,5]],[4,[2,3,6,7]],[5,[3]],[6,[4]],[7,[4]]];
var inicio = 0;

//BUSQUEDA POR ANCHURA

function  BFS (adyacencia,inicio){
  var visitados = [];
  var porVisitar = []; //queue

  //lista de nodos visitados 
  visitados.push(inicio);

  do{
    //obtenemos el ultimo nodo visitado
    ultimoVisitado = visitados[visitados.length-1];
    //obtner los nodos del ultimo nodo visitado
    nodosPorVisitar = adyacencia[ultimoVisitado][1]; 
    //agregamos los nodos temporales a nuestra lista de nodos a visitar
    for( i=0 ; i < nodosPorVisitar.length ; i++){
      if (!visitados.includes(nodosPorVisitar[i])){
        porVisitar.push( nodosPorVisitar[i] );
      }
    }

    // remover el siguiente elemento para visitar y moverlos a visitados  
    siguienteVisita = porVisitar.shift();
    if(!visitados.includes(siguienteVisita)){
      visitados.push( siguienteVisita );
    }
    //debugger; //te detiene el programa ahi mientras tengas la consola abierta
    //}while( porVisitar !== null && porVisitar.length > 0 )
    //Cambiamos la condicion porque cuando tenemos nodos que solo tienen una conexion, el recorrido se termina con el primero y su prier conexion
    }while( visitados.length < adyacencia.length )
  return visitados;
}

// AHORA BUSQUEDA POR PROFUNDIDAD (SOLO CAMBIAMOS SHIFT POR POP)
function  DFS (adyacencia,inicio){
  var visitados = [];
  var porVisitar = []; //stack

  //lista de nodos visitados 
  visitados.push(inicio);

  do{
    //obtenemos el ultimo nodo visitado
    ultimoVisitado = visitados[visitados.length-1];
    //obtner los nodos del ultimo nodo visitado
    nodosPorVisitar = adyacencia[ultimoVisitado][1]; 
    //agregamos los nodos temporales a nuestra lista de nodos a visitar
    for( i=0 ; i < nodosPorVisitar.length ; i++){
      if (!visitados.includes(nodosPorVisitar[i])){
        porVisitar.push( nodosPorVisitar[i] );
      }
    }

    // remover el siguiente elemento para visitar y moverlos a visitados  
    siguienteVisita = porVisitar.pop();
    if(!visitados.includes(siguienteVisita)){
      visitados.push( siguienteVisita );
    }
    //debugger; //te detiene el programa ahi mientras tengas la consola abierta
    //}while( porVisitar !== null && porVisitar.length > 0 )
    //Cambiamos la condicion porque cuando tenemos nodos que solo tienen una conexion, el recorrido se termina con el primero y su prier conexion
  }while( visitados.length < adyacencia.length)
  return visitados;
}