//creamos el modulo Calculadora para que contenga la logica
var Calculadora = (function(){

	var operaciones='';
	var cero = document.getElementById('0');
	var uno = document.getElementById('1');
	var dos = document.getElementById('2');
	var tres = document.getElementById('3');
	var cuatro = document.getElementById('4');
	var cinco = document.getElementById('5');
	var seis = document.getElementById('6');
	var siete = document.getElementById('7');
	var ocho = document.getElementById('8');
	var nueve = document.getElementById('9');
	var pantalla = document.getElementById('display');

	
	
	cero.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=0;
		}else if (pantalla.textContent.length<8&&pantalla.textContent!='0'){
			pantalla.textContent+=0;
		}
	})

	uno.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=1;
		}else if (pantalla.textContent.length<8){
			pantalla.textContent+=1;
		}
		
	})

	dos.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=2;
		}else if (pantalla.textContent.length<8){
			pantalla.textContent+=2;
		}
		
	})

	tres.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=3;
		}else if (pantalla.textContent.length<8){
			pantalla.textContent+=3;
		}
		
	})

	cuatro.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=4;
		}else if (pantalla.textContent.length<8){
			pantalla.textContent+=4;
		}
		
	})

	cinco.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=5;
		}else if (pantalla.textContent.length<8){
			pantalla.textContent+=5;
		}
		
	})

	seis.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=6;
		}else if (pantalla.textContent.length<8){
			pantalla.textContent+=6;
		}
		
	})

	siete.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=7;
		}else if (pantalla.textContent.length<8){
			pantalla.textContent+=7;
		}
		
	})

	ocho.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=8;
		}else if (pantalla.textContent.length<8){
			pantalla.textContent+=8;
		}
		
	})

	nueve.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=9;
		}else if (pantalla.textContent.length<8){
			pantalla.textContent+=9;
		}
		
	})

	cero.addEventListener('mousedown',function(){
		cero.setAttribute('style','transform:scale(0.85,0.85)')
	})

	cero.addEventListener('mouseout',function(){
        cero.setAttribute('style','transform:scale(1,1)')
    })

	uno.addEventListener('mousedown',function(){
		uno.setAttribute('style','transform:scale(0.85,0.85)')
	})

	uno.addEventListener('mouseout',function(){
        uno.setAttribute('style','transform:scale(1,1)')
    })

    dos.addEventListener('mousedown',function(){
		dos.setAttribute('style','transform:scale(0.85,0.85)')
	})

	dos.addEventListener('mouseout',function(){
        dos.setAttribute('style','transform:scale(1,1)')
    })

    tres.addEventListener('mousedown',function(){
		tres.setAttribute('style','transform:scale(0.85,0.85)')
	})

	tres.addEventListener('mouseout',function(){
        tres.setAttribute('style','transform:scale(1,1)')
    })

    cuatro.addEventListener('mousedown',function(){
		cuatro.setAttribute('style','transform:scale(0.85,0.85)')
	})

	cuatro.addEventListener('mouseout',function(){
        cuatro.setAttribute('style','transform:scale(1,1)')
    })

    cinco.addEventListener('mousedown',function(){
		cinco.setAttribute('style','transform:scale(0.85,0.85)')
	})

	cinco.addEventListener('mouseout',function(){
        cinco.setAttribute('style','transform:scale(1,1)')
    })

    seis.addEventListener('mousedown',function(){
		seis.setAttribute('style','transform:scale(0.85,0.85)')
	})

	seis.addEventListener('mouseout',function(){
        seis.setAttribute('style','transform:scale(1,1)')
    })

    siete.addEventListener('mousedown',function(){
		siete.setAttribute('style','transform:scale(0.85,0.85)')
	})

	siete.addEventListener('mouseout',function(){
        siete.setAttribute('style','transform:scale(1,1)')
    })

    ocho.addEventListener('mousedown',function(){
		ocho.setAttribute('style','transform:scale(0.85,0.85)')
	})

	ocho.addEventListener('mouseout',function(){
        ocho.setAttribute('style','transform:scale(1,1)')
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