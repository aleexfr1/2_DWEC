// Ejercicio 1.A


function getString(){

    var cadena=(prompt("Introduce tu cadena"));
    
	return cadena;
}

function invierteCadena(cad_arg){

	var length=cad_arg.length;
    var cadInvertida="";
    
	while (length>=0){

		cadInv=cadInvertida+cad_arg.charAt(length);
		length--;
	}
	    document.write(cadInvertida);;
}

// Ejercicio 1.B

function getString(){
	var string=(prompt("Introduce tu cadena"));
	return string;
}

function invierteCadena(cad_arg){
	var length=cad_arg.length;
	var cadInv="";
	while (length>=0){
		cadInv=cadInv+cad_arg.charAt(length);
		length--;
	}
	document.write(cadInv+" ");;
}

function numPalabras(string){

	var cadena=string;
	var contador=0;
	let primerBlanco = /^ /;
	let ultimoBlanco = / $/;
    let variosBlancos = /[ ]+/g;
    
	cadena = cadena.replace (primerBlanco,"");
	cadena = cadena.replace (ultimoBlanco,"");
	cadena = cadena.replace (variosBlancos," ");
    tempSplit=cadena.split(" ");
    
    contador=tempSplit.length;
    
	return(contador);
}

function inviertePalabras(cad_arg){

	let primerBlanco = /^ /;
	let ultimoBlanco = / $/;
    let variosBlancos = /[ ]+/g;
    
	cad_arg = cad_arg.replace (primerBlanco,"");
	cad_arg = cad_arg.replace (ultimoBlanco,"");
    cad_arg = cad_arg.replace (variosBlancos," ");
    
    var length=cad_arg.length-1;
    
	for(var i=0;i<=numPalabras(cad_arg)-1;i++){

		invierteCadena(cad_arg.substring(0,cad_arg.indexOf(" ")));
		cad_arg=cad_arg.substring(cad_arg.indexOf(" "),length);
	}
}

// Ejercicio 1.C

function getString(){

	var string=(prompt("Introduce tu cadena"));
	return string;
}
    var longitud=0;
    var stringMasLargo="";

function isLonger(cad_arg){

    for(pal of cad_arg)
    
	if(pal.length > longitud){
		longitud = pal.length;
		stringMasLargo=pal;
	}
}

function numPalabras(string){

	var cadena=string;
	var contador=0;
	let primerBlanco = /^ /;
	let ultimoBlanco = / $/;
    let variosBlancos = /[ ]+/g;
    
	cadena = cadena.replace (primerBlanco,"");
	cadena = cadena.replace (ultimoBlanco,"");
	cadena = cadena.replace (variosBlancos," ");

	tempSplit=cadena.split(" ");
    contador=tempSplit.length;
    
	return(contador);
}

function palabraLarga(cad_arg){

	let primerBlanco = /^ /;
	let ultimoBlanco = / $/;
    let variosBlancos = /[ ]+/g;
    
	cad_arg = cad_arg.replace (primerBlanco,"");
	cad_arg = cad_arg.replace (ultimoBlanco,"");
	cad_arg = cad_arg.replace (variosBlancos," ");

    isLonger(cad_arg.split(" "));
    
	console.log("La palabra mas larga es:"+stringMasLargo);
}

// Ejercicio 1.D

function getString(texto){

    var string=(prompt(texto));
    
	return string;
}

var longitud=0;

function separarCadena(cad_arg, lMaxima){

	let primerBlanco = /^ /;
	let ultimoBlanco = / $/;
    let variosBlancos = /[ ]+/g;
    
	cad_arg = cad_arg.replace (primerBlanco,"");
	cad_arg = cad_arg.replace (ultimoBlanco,"");
    cad_arg = cad_arg.replace (variosBlancos," ");
    
    longitud=lMaxima;
    
	isLonger(cad_arg.split(" "));
}

function isLonger(cad_arg){

    for(pal of cad_arg)
    
	if(pal.length >= longitud){
		console.log(pal);
	}
}

// Ejercicio 1.E
  
function getString(texto){

    var string=(prompt(texto));
    
	return string;
}

var longitud=0;

function cadenaBien(cad_arg){

	let primerBlanco = /^ /;
	let ultimoBlanco = / $/;
    let variosBlancos = /[ ]+/g;
    
	cad_arg = cad_arg.replace (primerBlanco,"");
	cad_arg = cad_arg.replace (ultimoBlanco,"");
    cad_arg = cad_arg.replace (variosBlancos," ");
    
	cambiarCases(cad_arg);
}

function cambiarCases(cad_arg){

    document.write(cad_arg.charAt(0).toUpperCase());
    
    for(var i=1;i<cad_arg.length;i++)
    
		document.write(cad_arg.charAt(i).toLowerCase());
    }
    

    // Ejercicio 2

    function getString(){

        var cadena = (prompt("Introduce tu cadena"));

        return cadena;
    }
    function upperCases(string){

        var upper = false;
        var lower = false;
        var x = string.length-1;

        while(x >= 0){
            var char = string.charAt(x);

            if(char === char.toUpperCase() && char !==" " && isNaN(char*1)){
                upper=true;
            }
            if(char === char.toLowerCase() && char !==" " && isNaN(char*1)){
                lower = true;
            }
            x--;
        }
        if(upper===true && lower===true)

            console.log("Tiene ambos tipos");
        else

            if(upper===true)

                console.log("Tiene mayusculas solo");
            else

                console.log("Tiene minusculas solo");
    }


    // Ejercicio 7

  
function getString(){

	var cadena = (prompt("Introduce tu cadena"));
	return cadena;
}
function isPalin(string){

    var x = string.length-1;
    var igual = true;
    
	for(var i = 0; i <= x; i++){

		if(string.charAt(i)!==string.charAt(x)){
			igual=false;
		}
		x--;
	}
    if(igual)
    
		console.log("Es un palindromo");
	else
		console.log("No es un palindromo");

}
