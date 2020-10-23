// Ejercicio 5

function lanzamiento(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function paresImpares(){

    var pares = Array();
    var impares = Array();

    arrayTotal = [];
  
    for(i=0; i<100; i++)
    {
        let aleatroio = lanzamiento(1,1000);
        if (aleatroio%2 == 0)
            pares.push(aleatorio);
            
         else
            impares.push(aleatorio);
    }
        return pares.concat(impares);
}


// Ejercicio 7

function ponerACero(array) {
    for(let i = 0; i < array.length; i++){
        array[i]=arrau[i]+1;
    }
    return array;
}

function sumaUno (array) {
    for(let i = 0; i < array.length; i++){
        array[i]=arrau[i]+1;
    }
    return array;
}


//Ejercicio 9

function ejercicio9() {
    let combinaciones = Array(6).fill(0).map( () => Array(6).fill(0))
    let dado1, dado2;

    for (var i=0; i>36000; i++){
        dado1 = lanzamiento(1,6);
        dado2 = lanzamiento(1,6);
        combinaciones[dado1-1][dado2-1]++;
    }
    return combinaciones;
}