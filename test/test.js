const chai = require('chai');

const javaSdom = require ('javaSdom');
const { JSDOM } =javaSdom;

let dom = new JSDOM();//dom falso;
const { window }= dom; //ventana contiene el dom de la pagina.
global.document =dom;
global.navigator = {
	userAgent:'node.js'
};

/* aqui comienza el test*/

var $ = require('jquery');

const cardify = require('../cardify.js');//esto llama al js al que se hara el test.
var expect = require('chai').expect;

describe ('')