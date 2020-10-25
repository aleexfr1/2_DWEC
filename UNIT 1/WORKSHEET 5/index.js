// Ejercicio 1
var nombre = (prompt("Introduce tu nombre"));
var apellidos = (prompt("Introduce tus apellidos"));
var edad = parseInt(prompt("Introduce edad"));

document.write("Hola mi nombre es "+nombre+" <br>");
document.write("Mis apellidos son "+apellidos+" <br>");
document.write("Tengo "+edad+" anos <br>");

//Ejercicio 2
var nombre = (prompt("Introduce tu nombre"));
alert("¡Hola!"+nombre);

//Ejercicio 3
var nombre = (prompt("Introduce tu nombre"));
var apellidos = (prompt("Introduce tus apellidos"));
var edad = parseInt(prompt("Introduce edad"));
var ciclo = (prompt("¿Que ciclo estudias?"));

alert("Hola me llamo "+nombre+ +apellidos)
alert("Tengo" +edad+ "años")
alert("Estudio "+ciclo)

//Ejercicio 4
var numero = (prompt("Introduce un numero"));
if(numero % 2 == 0) {
    return "par";

}
    else {
        return "impar";
    }


// CONDICIONALES O IF //

//Ejercicio 5

var edad = parseInt(prompt("Introduce tu edad"));
if(edad >= 18) {
    return "Mayor de edad";

}
    else {
        return "Menor de edad";
    }

//Ejercicio 6
var edad = parseInt(prompt("Introduce tu edad"));
var localidad = (prompt("Introduce tu localidad"));

if(edad == 25 && localidad == Madrid) {
    
    document.write("Enhorabuena");

}

//Ejercicio 7
var numero = parseInt(prompt("Introduce un numero"));

if(numero > 100) {

    alert("Enhorabuena, ha recibido un descuento")

    document.write("Su nuevo precio es "+numero*0,85)
}

//Ejercicio 8
var nombre = (prompt("Introduce tu nombre"));

if (nombre == Pablo && Eduardo ) {

    alert("Bienvenido")
}

if (nombre == Ana && Clara) {
    alert("Bienvenida")
}

//Ejercicio 9
var edad = parseInt(prompt("Introduce tu edad"));
var localidad = (prompt("Introduce tu localidad"));

if (edad >= 18 && edad <= 30 && localidad == Madrid) {

    alert("Puede acceder al carnet de empresarios emprendedores")
}

// IF - ELSE

//Ejercicio 10
var nombre = (prompt("Introduce tu nombre"));
var apellidos = (prompt("Introduce tus apellidos"));

if (nombre == Ricardo) {
    document.write("Los apellidos son "+apellidos)

}

else {
    document.write("Porfavor, escriba sus apellidos")
}

//Ejercicio 11
var edad = (prompt("Introduce tu edad"));

if (edad >= 67) {
    document.write("Se puede jubilar")

}

else {
    document.write("Lo siento, la edad para jubilarse son 67")
}

//Ejercicio 12
var edad = (prompt("Introduce tu edad"));

if (edad < 5) {
    document.write("Jardin de Infancia")

}
if (edad > 6 && edad < 11) {
    document.write("Primaria")

}
if (edad > 12 && edad < 16) {
    document.write("ESO")

}
if (edad > 17 && edad < 21) {
    document.write("Bachillerato o Ciclos")

}
if (edad > 21) {
    document.write("Universidad")

}

//Ejercicio 13
var hermanos = parseInt(prompt("Introduce numero de hermanos"));
var cantidad = parseInt(prompt("Introduce cantidad"));

if(hermanos >= 3) {
    document.write("La nueva cantidad es "+cantidad*0,85)
}

if(hermanos < 3) {
    document.write("La nueva cantidad es "+cantidad*0,95)
}

else {
    document.write("La cantidad sigue siendo "+cantidad)
}

//Ejercicio 14
var examen1 = parseInt(prompt("Introduce nota del examen 1"));
var examen2 = parseInt(prompt("Introduce nota del examen 2"));
var trabajo1 = parseInt(prompt("Introduce nota del trabajo 1"));
var trabajo2 = parseInt(prompt("Introduce nota del trabajo 2"));
var sumaExamen = (examen1 + examen2)*0.75;
var sumaTrabajo = (trabajo1 + trabajo2)*0.25;
var sumaTotal = (sumaExamen+sumaTrabajo)/2;

if(sumaTotal>=5) {
    alert("Has aprobado")
}
else {
    alert("Ha suspendido")
}

//Ejercicio 15