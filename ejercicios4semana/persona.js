'use strict';

module.exports = class Figuras {
  constructor(tipo, numLados, medidaLados) {
    this.tipo = tipo;
    this.numLados = numLados;
    this.medidaLados = medidaLados;
  }


  area() {
    switch (this.tipo) {
      case 'cuadrado':
        //console.log("Dar medida de lado");
        var area = this.medidaLados[0] * this.medidaLados[0];
        return console.log("Area del cuadrado =", area)
        break;
      case 'rectangulo':
        //console.log("Dar medida de la base y medida de la altura");
        var area = this.medidaLados[0] * this.medidaLados[1];
        return console.log("Area del rectangulo =", area)
        break;
      case 'triangulo':
        //console.log("Dar medida de la base y medida de la altura");
        var area = (this.medidaLados[0] * this.medidaLados[1]) / 2;
        return console.log("Area del triangulo =", area)
        break;
      case 'circulo':
        //console.log("Dar medida del radio");
        var area = (Math.PI * Math.pow(this.medidaLados[0], 2));
        return console.log("Area del circulo =", area)
        break;
      default:
        return console.log('Figura no reconocida');
    }
  }
}