//funcion captura de datos del teclado
function teclado(event){
	var tecla = event.which || event.keyCode;
	document.querySelector('.pantalla #display')
	.innerHTML=String.fromCharCode(tecla);
}
//listener para capturar datos del teclado
document.onkeypress=teclado;