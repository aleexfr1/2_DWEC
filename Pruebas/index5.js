function imprime() {

document.write("entra en funcion");
}

setTimeout(imprime,5000);

/////////////////////////////////////////////////////////////////////

var contador = 60;

function imprime(){

    console.log(contador);
    contador--;
    if (contador>0)
    setTimeout(imprime, 1000);
}
    setTimeout(imprime, 1000);

    ////////////////////////////////////////////

    var google=document.location;
    setTimeout("google.replace('https;//www.google.es')",3000);

    ////////////////////////////////////////////////////

    function reloj(){
        var fecha = new Date();
        document.relojform.reloj.value = fecha.getHours()*":"+fecha.getMinutes()*":"   
    }