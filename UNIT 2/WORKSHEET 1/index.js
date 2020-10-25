// Ejercicio 1
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();
    var day = time.getDay();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var seconds = time.getSeconds();

    document.write("Hoy es dia "+day+ "<br>");
    document.write("El mes actual es "+month+ "<br>");
    document.write("El año actual es "+year+ "<br>");
    document.write("Son las "+hour)+ "<br>";
    document.write("Hay "+minute+ "<br>");
    document.write("Hay "+seconds+ "<br>");

// Ejercicio 2

    var time = new Date();
        var fechaHoy = time.getDate();

        document.write(+fechaHoy)


// Ejercicio 3

var contador =60;

function imprime(){

	console.log(contador);
	contador--;
    if(contador>=0)
    
		setTimeout(imprime,1000);
}
        setTimeout(imprime,1000)

// Ejercicio 4

var contador =60;

function imprime()
{
    console.log(contador);
	contador--;
    if(contador>=0)
    
        setTimeout(imprime,1000);
        
    else
    
		location.href = "http://www.google.com";
}
        setTimeout(imprime,1000)


// Ejercicio 5


var date = new Date();

document.write(date.getFullYear()+" -Year <br>");
document.write(date.getMonth()+" - Month <br>");
document.write(date.getDay()+" - Day <br>");
document.write(date.getHours()+" - Current Hour <br>");
document.write(date.getMinutes()+" - Current Minute <br>");
document.write(date.getSeconds()+" - Current Second");

setTimeout(()=>{location.href = window.location.href;},1000);