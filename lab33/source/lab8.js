/* Callbacks en JavaScript */

/* 
* Un Callback en JS es una función, que por
* parametro se le envia otra función, y la función que lo
* recibe, espera a que se ejecute esa función
*/
//funcion suma
function miSuma(miSuma){
	miSuma(3, 4);
}

// uso del callback
miSuma(function(a,b){
	alert("Resultado:" +(a+b));
});

//funcion resta
function miResta(miResta){
	miResta(8, 4);
}

// uso del callback
miResta(function(a,b){
	alert("Resultado:" +(a-b));
});


//funcion multiplicar
function miMult(miMult){
	miMult(10, 5);
}

// uso del callback
miMult(function(a,b){
	alert("Resultado:" +(a*b));
});

//funcion dividir
function miDiv(miDiv){
	miDiv(20, 2);
}

// uso del callback
miDiv(function(a,b){
	alert("Resultado:" +(a/b));
});



// Creación del Callback
function usarUnCallback(miCallback){
	miCallback();
}

// uso del callback
usarUnCallback(function(){
	alert("Creando el primer Callback en JS");
});

// Callback con un parametro
function otroCallback(miOtroCallback){
	miOtroCallback('Un argumento para esta función');
}

// Uso del otro Callback
otroCallback(function(unParametro){
	alert('Lo que recibo como parametro es: ' + unParametro);
});

// Multiples callbacks llamados en determinados casos

function multiplesCallbacks(callback1, callback2, callback3){

	callback1('Primer paso');

	callback2('Segundo paso');

	callback3('Ultimo paso');
}

// Uso de los multiples Callbacks
multiplesCallbacks(
	function(paso1){
		alert("El callback1 me envia por parametro el: " + paso1);
	},

	function(paso2){
		alert("El callback2 me envia por parametro el: " + paso2);
	},

	function(paso3){
		alert("El callback3 me envia por parametro el: " + paso3);
	}
);