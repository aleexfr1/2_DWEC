// Ejercicio 1

console.log(Math.random());

console.log(Math.random()*(100)+100);

do{
    var maximo = (parseInt(prompt("Introduce  valor maximo")));
    var minimo = (parseInt(prompt("Introduce  valor minimo")));

if (maximo < minimo)

	alert("El maximo tiene que ser mas grande que el minimo");
    }while(maximo<minimo)

document.write(Math.random()*(maximo-minimo)+minimo);


// Ejercicio 5

var a = (parseInt(prompt("Introduce el valor de x^2")));
var b = (parseInt(prompt("Introduce el valor de x")));
var c = (parseInt(prompt("Introduce el valor del coeficiente")));

function ecuacion(ax,bx,cx,sign){

if(sign===1)

	return((-bx+Math.sqrt((bx*bx)-(4*ax*cx)))/2*ax);
return((-bx-Math.sqrt((bx*bx)-(4*ax*cx)))/2*ax);
}
document.write("la x de "+a+"x<sup>2</sup> + "+b+"x + "+c+" = "+ecuacion(a,b,c,1)+" y "+ecuacion(a,b,c,0));


// Ejercicio 7

document.write("<table>");
document.write("<tr><td>X</td><td>Seno de X</td></tr>");

for(var i = 1; i < 11; i++){

	document.write("<tr>");
	document.write("<td>"+i+"</td>");
	document.write("<td>"+Math.sin(i)+"</td>");
	document.write("</tr>");
}

document.write("</table>");
