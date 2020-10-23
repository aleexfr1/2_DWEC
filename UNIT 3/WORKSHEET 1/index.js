//Ejercicio 2
function lanzamiento(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Ejercicio 3

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;

function ejercicio3() {

    for(let i=0; i<6000; i++){

        let numeroResultado = lanzamiento(1,6);
        if(numeroResultado ==1) {
            num1++;
        }
        else if (numeroResultado ==2) {
            num2++;
        }
        else if (numeroResultado ==3) {
            num3++;
        }
            
        else if (numeroResultado ==4) {
            num4++;
        }
        else if (numeroResultado ==5) {
            num25++;
        }
        else {
        num6++;
        }
    }

//Ejercicio 6
function potencia(base, exponente) {
    if (exponente==1)
    return base;
    
    else
        return base * potencia(base,exponente -1);
}

//Ejercicio 7

function factorial(numero) {
    if (numero == 0)
        return 1;
    
    else 
        return numero * factorial(numero-1);
}