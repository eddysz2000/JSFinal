//creamos el modulo Calculadora para que contenga la logica
var Calculadora = (function(){

	var operaciones='';
	var numero = 0;
	var isSign = false;
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
	var on = document.getElementById('on');
	var signo = document.getElementById('sign');
	var pantalla = document.getElementById('display');

	cero.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=0;
		}else if (!isSign&&pantalla.textContent.length<8&&pantalla.textContent!='0'){
			pantalla.textContent+=0;
		}else if (isSign&&pantalla.textContent.length<9&&pantalla.textContent!='0'){
			pantalla.textContent+=0;
		}
	})

	uno.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=1;
			numero = 1;
		}else if (!isSign&&pantalla.textContent.length<8){
			pantalla.textContent+=1;
		}else if (isSign&&pantalla.textContent.length<9){
			pantalla.textContent+=1;
		}

	})

	dos.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=2;
		}else if (!isSign&&pantalla.textContent.length<8){
			pantalla.textContent+=2;
		}else if (isSign&&pantalla.textContent.length<9){
			pantalla.textContent+=2;
		}

	})

	tres.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=3;
		}else if (!isSign&&pantalla.textContent.length<8){
			pantalla.textContent+=3;
		}else if (isSign&&pantalla.textContent.length<9){
			pantalla.textContent+=3;
		}

	})

	cuatro.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=4;
		}else if (!isSign&&pantalla.textContent.length<8){
			pantalla.textContent+=4;
		}else if (isSign&&pantalla.textContent.length<9){
			pantalla.textContent+=4;
		}

	})

	cinco.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=5;
		}else if (!isSign&&pantalla.textContent.length<8){
			pantalla.textContent+=5;
		}else if (isSign&&pantalla.textContent.length<9){
			pantalla.textContent+=5;
		}

	})

	seis.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=6;
		}else if (!isSign&&pantalla.textContent.length<8){
			pantalla.textContent+=6;
		}else if (isSign&&pantalla.textContent.length<9){
			pantalla.textContent+=6;
		}

	})

	siete.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=7;
		}else if (!isSign&&pantalla.textContent.length<8){
			pantalla.textContent+=7;
		}else if (isSign&&pantalla.textContent.length<9){
			pantalla.textContent+=7;
		}

	})

	ocho.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=8;
		}else if (!isSign&&pantalla.textContent.length<8){
			pantalla.textContent+=8;
		}else if (isSign&&pantalla.textContent.length<9){
			pantalla.textContent+=8;
		}

	})

	nueve.addEventListener('click',function(){
		if(pantalla.textContent=='0'){
			pantalla.textContent=9;
		}else if (!isSign&&pantalla.textContent.length<8){
			pantalla.textContent+=9;
		}else if (isSign&&pantalla.textContent.length<9){
			pantalla.textContent+=9;
		}

	})

	on.addEventListener('click',function(){
		pantalla.textContent.length=0;
		pantalla.textContent=0;
		isSign=false;
	})

	signo.addEventListener('click',function(){
		
		//activa el signo solo si el contenido es diferente de CERO
		if(pantalla.textContent!=0){
			isSign = !isSign;
		}

		//agrega el signo si se activa y el contenido es diferente de cero, la alternativa es si el signo se desactiva
		if(isSign&&pantalla.textContent!=0){
			pantalla.textContent='-'+pantalla.textContent;
	
		}else if(!isSign&&pantalla.textContent!=0) {
			pantalla.textContent=pantalla.textContent.slice(1,pantalla.textContent.length);
	
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

    on.addEventListener('mousedown',function(){
		on.setAttribute('style','transform:scale(0.85,0.85)')
	})

	on.addEventListener('mouseout',function(){
        on.setAttribute('style','transform:scale(1,1)')
    })

    signo.addEventListener('mousedown',function(){
		signo.setAttribute('style','transform:scale(0.85,0.85)')
	})

	signo.addEventListener('mouseout',function(){
        signo.setAttribute('style','transform:scale(1,1)')
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