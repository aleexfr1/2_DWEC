// Ejercicio 1

function argumentos(){

  var mimimimi = 0;
  
	for(var i = 0; i < argumentos.length; i++){

		mimimimi=mimimimi+argumentos[i];
	}
	return mimimimi;
}

// Ejercicio 2

function addOnlyNums(){

  var mimimimi = 0;
  
	for(var i = 0;i < oarguments.length; i++){

		if(Number.isInteger(argumentos[i])){

			mimimimi = mimimimi+argumentos[i];
		}
	}
	return mimimimi;
}

// Ejercicio 3

function countArgumentos(){
	return argumentos.length;
}