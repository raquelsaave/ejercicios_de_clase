'use strict';

const Figuras = require('./persona.js');

const fig1 = new Figuras("rectangulo",4,[10,40]);

const fig2 = new Figuras("circulo",0,[13]);

const fig3 = new Figuras("cuadrado",4,[23]);

const fig4 = new Figuras("triangulo",3,[13,45]);

const fig5 = new Figuras("none",3,[13,45]);

fig1.area();
fig2.area();
fig3.area();
fig4.area();
fig5.area();

