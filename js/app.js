//creamos el modulo Calculadora para que contenga la logica
var Calculadora = (function(){

	var nueve = document.getElementById('9');
	var pantalla = document.getElementById('display');

	nueve.addEventListener('click',function(){
		pantalla.textContent+=9;
	})

	nueve.addEventListener('mousedown',function(){
		nueve.setAttribute('style','transform:scale(0.85,0.85)')
	})

	nueve.addEventListener('mouseout',function(){
        nueve.setAttribute('style','transform:scale(1,1)')
    })




})();


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