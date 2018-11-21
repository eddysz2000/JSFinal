//creamos el modulo Calculadora para que contenga la logica
var Calculadora = (function(){
	return {
		sumar: function(numero){
			return numero;
		}
	};
})();


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