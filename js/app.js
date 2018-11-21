//creamos el modulo Calculadora para que contenga la logica
var Calculadora = (function(){

	var textoFijo = "hola ";

	function concatenarTexto(nombre){
		return textoFijo+nombre;
	}

	return {
		mensaje: function(nombre){
			var mensaje = concatenarTexto(nombre);
			console.log(mensaje);
		}
	};
})();

document.getElementById('9').onclick=Calculadora.mensaje(9);

/*
document.getElementById('9').onclick=teclaPresionada;

//funcion captura de datos del teclado
function teclado(event){
	var tecla = event.which || event.keyCode;
	var vtecla ='';
	if (tecla <81){
		vtecla = vtecla+String.fromCharCode(tecla);
		document.querySelector('.pantalla #display').innerHTML=vtecla;
	}
	
}
//listener para capturar datos del teclado
document.onkeypress=teclado;

*/