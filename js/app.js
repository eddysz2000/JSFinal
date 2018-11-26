//creamos el modulo Calculadora para que contenga la logica
var Calculadora = (function(){

	var acumulador = 0;
	var cadenaAcumulador ='';
	var ultimo = 0;
	var isSign = false;
	var isPunto = false;
	var isEjecutado = false;
	var repetir = false;
	var operador = '';
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
	var punto = document.getElementById('punto');
	var on = document.getElementById('on');
	var signo = document.getElementById('sign');
	var pantalla = document.getElementById('display');
	var suma = document.getElementById('mas');
	var resta = document.getElementById('menos');
	var multiplica = document.getElementById('por');
	var divide = document.getElementById('dividido')
	var igual = document.getElementById('igual');

	
	//funciones para agregar los numeros en pantalla, se considera un digito mas en caso se tenga el signo negativo activo y uno mas si hay punto decimal
	cero.addEventListener('click',function(){
		if(pantalla.textContent=='0'||isEjecutado){
			pantalla.textContent=0;
		}else if (!isSign&&!isPunto&&pantalla.textContent.length<8&&pantalla.textContent!='0'){
			pantalla.textContent+=0;
		}else if (isSign&&!isPunto&&pantalla.textContent.length<9&&pantalla.textContent!='0'){
			pantalla.textContent+=0;
		}else if (!isSign&&isPunto&&pantalla.textContent.length<9&&pantalla.textContent!='0'){
			pantalla.textContent+=0;
		}else if (isSign&&isPunto&&pantalla.textContent.length<10&&pantalla.textContent!='0'){
			pantalla.textContent+=0;
		}
		ultimo = Number(pantalla.textContent);
		isEjecutado=false
	})

	uno.addEventListener('click',function(){
		if(pantalla.textContent=='0'||isEjecutado){
			pantalla.textContent=1;
		}else if (!isSign&&!isPunto&&pantalla.textContent.length<8){
			pantalla.textContent+=1;
		}else if (isSign&&!isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=1;
		}else if (!isSign&&isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=1;
		}else if (isSign&&isPunto&&pantalla.textContent.length<10){
			pantalla.textContent+=1;
		}
		ultimo = Number(pantalla.textContent);
		isEjecutado=false
	})

	dos.addEventListener('click',function(){
		if(pantalla.textContent=='0'||isEjecutado){
			pantalla.textContent=2;
		}else if (!isSign&&!isPunto&&pantalla.textContent.length<8){
			pantalla.textContent+=2;
		}else if (isSign&&!isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=2;
		}else if (!isSign&&isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=2;
		}else if (isSign&&isPunto&&pantalla.textContent.length<10){
			pantalla.textContent+=2;
		}
		ultimo = Number(pantalla.textContent);
		isEjecutado=false
	})

	tres.addEventListener('click',function(){
		if(pantalla.textContent=='0'||isEjecutado){
			pantalla.textContent=3;
		}else if (!isSign&&!isPunto&&pantalla.textContent.length<8){
			pantalla.textContent+=3;
		}else if (isSign&&!isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=3;
		}else if (!isSign&&isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=3;
		}else if (isSign&&isPunto&&pantalla.textContent.length<10){
			pantalla.textContent+=3;
		}
		ultimo = Number(pantalla.textContent);
		isEjecutado=false
	})

	cuatro.addEventListener('click',function(){
		if(pantalla.textContent=='0'||isEjecutado){
			pantalla.textContent=4;
		}else if (!isSign&&!isPunto&&pantalla.textContent.length<8){
			pantalla.textContent+=4;
		}else if (isSign&&!isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=4;
		}else if (!isSign&&isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=4;
		}else if (isSign&&isPunto&&pantalla.textContent.length<10){
			pantalla.textContent+=4;
		}
		ultimo = Number(pantalla.textContent);
		isEjecutado=false
	})

	cinco.addEventListener('click',function(){
		if(pantalla.textContent=='0'||isEjecutado){
			pantalla.textContent=5;
		}else if (!isSign&&!isPunto&&pantalla.textContent.length<8){
			pantalla.textContent+=5;
		}else if (isSign&&!isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=5;
		}else if (!isSign&&isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=5;
		}else if (isSign&&isPunto&&pantalla.textContent.length<10){
			pantalla.textContent+=5;
		}
		ultimo = Number(pantalla.textContent);
		isEjecutado=false
	})

	seis.addEventListener('click',function(){
		if(pantalla.textContent=='0'||isEjecutado){
			pantalla.textContent=6;
		}else if (!isSign&&!isPunto&&pantalla.textContent.length<8){
			pantalla.textContent+=6;
		}else if (isSign&&!isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=6;
		}else if (!isSign&&isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=6;
		}else if (isSign&&isPunto&&pantalla.textContent.length<10){
			pantalla.textContent+=6;
		}
		ultimo = Number(pantalla.textContent);
		isEjecutado=false
	})

	siete.addEventListener('click',function(){
		if(pantalla.textContent=='0'||isEjecutado){
			pantalla.textContent=7;
		}else if (!isSign&&!isPunto&&pantalla.textContent.length<8){
			pantalla.textContent+=7;
		}else if (isSign&&!isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=7;
		}else if (!isSign&&isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=7;
		}else if (isSign&&isPunto&&pantalla.textContent.length<10){
			pantalla.textContent+=7;
		}
		ultimo = Number(pantalla.textContent);
		isEjecutado=false
	})

	ocho.addEventListener('click',function(){
		if(pantalla.textContent=='0'||isEjecutado){
			pantalla.textContent=8;
		}else if (!isSign&&!isPunto&&pantalla.textContent.length<8){
			pantalla.textContent+=8;
		}else if (isSign&&!isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=8;
		}else if (!isSign&&isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=8;
		}else if (isSign&&isPunto&&pantalla.textContent.length<10){
			pantalla.textContent+=8;
		}
		ultimo = Number(pantalla.textContent);
		isEjecutado=false
	})

	nueve.addEventListener('click',function(){
		if(pantalla.textContent=='0'||isEjecutado){
			pantalla.textContent=9;
		}else if (!isSign&&!isPunto&&pantalla.textContent.length<8){
			pantalla.textContent+=9;
		}else if (isSign&&!isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=9;
		}else if (!isSign&&isPunto&&pantalla.textContent.length<9){
			pantalla.textContent+=9;
		}else if (isSign&&isPunto&&pantalla.textContent.length<10){
			pantalla.textContent+=9;
		}
		ultimo = Number(pantalla.textContent);
		isEjecutado=false
	})

	//funcion que controla el punto decimal
	punto.addEventListener('click',function(){
		if(!isPunto&&pantalla.textContent=='0'||isEjecutado){
			pantalla.textContent=0+'.';
		}else if (!isPunto&&pantalla.textContent!=0) {
			pantalla.textContent+='.';
		}
		isPunto=true;
	})

	//funcion de borrado de memoria, tambien desactiva el signo y el punto e inicializa variables de control
	on.addEventListener('click',function(){
		pantalla.textContent.length=0;
		pantalla.textContent=0;
		isSign=false;
		isPunto=false;
		isEjecutado=false;
		acumulador=0;
		ultimo=0;
		operador='';
	})

	//funcion que controla el signo y su comportamiento
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

	//funcion que agrega la operacion de suma
	suma.addEventListener('click',function(){
		
		if (pantalla.textContent!=0&&pantalla.textContent!='0.'){
			if(repetir||!isEjecutado){
				acumulador = Number(pantalla.textContent);
			}else{
				acumulador = acumulador + ultimo;
			}
			pantalla.textContent='';
			operador = '+';
			repetir = false;
			
		}
		isSign=false;
		isPunto=false;
		isEjecutado=false;
		
	})

	//funcion que agrega la operacion de resta
	resta.addEventListener('click',function(){
		
		if (pantalla.textContent!=0&&pantalla.textContent!='0.'){
			if(repetir||!isEjecutado){
				acumulador = Number(pantalla.textContent);
			}else {
				acumulador = acumulador - ultimo;
			}
			
			pantalla.textContent='';
			operador = '-';
			repetir = false;
			
		}
		isSign=false;
		isPunto=false;
		isEjecutado=false;
		
	})

	//funcion que agrega la operacion de multiplicacion
	multiplica.addEventListener('click',function(){
		
		if (pantalla.textContent!=0&&pantalla.textContent!='0.'){
			if(repetir||!isEjecutado){
				acumulador = Number(pantalla.textContent);
			}else {
				acumulador = acumulador * ultimo;
			}
			
			pantalla.textContent='';
			operador = '*';
			repetir = false;
			
		}
		isSign=false;
		isPunto=false;
		isEjecutado=false;
		
	})

	//funcion que agrega la operacion de division
	divide.addEventListener('click',function(){
		
		if (pantalla.textContent!=0&&pantalla.textContent!='0.'){
			if(repetir||!isEjecutado){
				acumulador = Number(pantalla.textContent);
			}else {
				acumulador = acumulador / ultimo;
			}
			
			pantalla.textContent='';
			operador = '/';
			repetir = false;
			
		}
		isSign=false;
		isPunto=false;
		isEjecutado=false;
		
	})

	//funcion para calcular el resultado final, puede repetir la ultima operacion realizada
	igual.addEventListener('click',function(){
		
		//validacion por si se esta volviendo a presioanr el boton IGUAL
		if(!repetir){
			ultimo = Number(pantalla.textContent);
		}

		switch (operador){
			case '+':
				acumulador = acumulador + ultimo;
			break;
			case '-':
				acumulador = acumulador - ultimo;
			break;
			case '*':
				acumulador = acumulador * ultimo;
			break;
			case '/':
				acumulador = acumulador / ultimo;
			break;
		}
		if (acumulador>99999999) {
			pantalla.textContent='Error, max';
		}else{
			cadenaAcumulador = String(Math.round((acumulador) * 10000000) / 10000000);
			
			//formateo del resultado segun sea el tipo de resultado
			if (cadenaAcumulador.length>10) {
				if (acumulador<0&&!isPunto) {
					cadenaAcumulador=cadenaAcumulador.slice(1,9);
				}else if (acumulador<0&&isPunto) {
					cadenaAcumulador=cadenaAcumulador.slice(1,10);
				}else if (acumulador>0&&!isPunto) {
					cadenaAcumulador=cadenaAcumulador.slice(1,8);
				}else if (acumulador>0&&isPunto) {
					cadenaAcumulador=cadenaAcumulador.slice(1,9);
				}
			}
			
			pantalla.textContent = cadenaAcumulador;
		}
		
		
		if (acumulador<=0){
			isSign=true;
		}else{
			isSign=false;
		}
		repetir = true;
		isPunto=false;
		isEjecutado=true;
		
	})


	//cambio de estilo al momento de presionar los botones
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

    punto.addEventListener('mousedown',function(){
		punto.setAttribute('style','transform:scale(0.85,0.85)')
	})

	punto.addEventListener('mouseout',function(){
        punto.setAttribute('style','transform:scale(1,1)')
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

    suma.addEventListener('mousedown',function(){
		suma.setAttribute('style','transform:scale(0.85,0.85)')
	})

	suma.addEventListener('mouseout',function(){
        suma.setAttribute('style','transform:scale(1,1)')
    })

    resta.addEventListener('mousedown',function(){
		resta.setAttribute('style','transform:scale(0.85,0.85)')
	})

	resta.addEventListener('mouseout',function(){
        resta.setAttribute('style','transform:scale(1,1)')
    })

    multiplica.addEventListener('mousedown',function(){
		multiplica.setAttribute('style','transform:scale(0.85,0.85)')
	})

	multiplica.addEventListener('mouseout',function(){
        multiplica.setAttribute('style','transform:scale(1,1)')
    })

    divide.addEventListener('mousedown',function(){
		divide.setAttribute('style','transform:scale(0.85,0.85)')
	})

	divide.addEventListener('mouseout',function(){
        divide.setAttribute('style','transform:scale(1,1)')
    })

    igual.addEventListener('mousedown',function(){
		igual.setAttribute('style','transform:scale(0.85,0.85)')
	})

	igual.addEventListener('mouseout',function(){
        igual.setAttribute('style','transform:scale(1,1)')
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