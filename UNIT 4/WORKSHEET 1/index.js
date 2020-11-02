// Ejercicio 1 

function myFunction(){
    alert ("Hola, que tal?");
}

// Ejercicio 2

document.addEventListener('mousemove', function(){fn()});
function fn(){
    var e=window.event;
    console.log("X: "+e.clientX+" Y: "+e.clientY);
}

// Ejercicio 4
  
function tabla(){
    document.write("<table id='t' style='border-collapse: collapse;border: solid 2px'>");

    for(var i = 0; i < 10; i++){

        document.write("<tr>");

        for(var j = 0; j < 10; j++){

            document.write("<td style='border:solid 1px; padding: 25px'>  </td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
    var array = document.getElementsByTagName("td");

    for(var i = 0; i < 100; i++){

        array[i].addEventListener("mousemove",function(){pintar()});

    }
}
function pintar(){

    if(window.event.shiftKey==true){
        window.event.target.style.backgroundColor="blue";

    }else{

        if(window.event.ctrlKey==true){

            window.event.target.style.backgroundColor="red";
        }
    }
}

// Ejercicio 5

function tabla(){
    document.write("<table id='t' style='border-collapse: collapse;border: solid 2px'>");
    for(var i = 0; i < 100; i++){

        document.write("<tr>");

        for(var j = 0; j < 100; j++){

            document.write("<td style='padding: 5px'> </td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");

    document.write("<br><button id='boton'>BORRAR TODO</button>");

    document.getElementById("boton").addEventListener('click',borrar);

    var array=document.getElementsByTagName("td");

    for(var i = 0; i < 10000; i++){

        array[i].addEventListener("mousemove",function(){pintar()});
        array[i].addEventListener("click",function(){borrar1()});
    }
}
function pintar(){
    if(window.event.shiftKey == true){

        window.event.target.style.backgroundColor="blue";

    }else{

        if(window.event.ctrlKey == true){

            window.event.target.style.backgroundColor="red";
        }
    }
}
function borrar1(){

    window.event.target.style.backgroundColor="white";
}
function borrar(){

    var array=document.getElementsByTagName("td");
    
    for(var i=0;i<10000;i++){

        array[i].style.backgroundColor="white";
    }
}

// Ejercicio 9

function startDrag(e) {
    var e = window.event;
    // IE uses srcElement, others use target
    var targ = e.target ? e.target : e.srcElement;
    offsetX = e.clientX;
    offsetY = e.clientY;
    // assign default values for top and left properties
    if(!targ.style.left) { targ.style.left='0px'};
    if (!targ.style.top) { targ.style.top='0px'};

    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;
    document.onmousemove=dragDiv;
    
}
function dragDiv(e) {
    if (!drag) {return};

    if (!e) { var e = window.event};

    var targ=e.target?e.target:e.srcElement;

    targ.style.left=coordX+e.clientX-offsetX+'px';
    targ.style.top=coordY+e.clientY-offsetY+'px';
    return false;
}
function stopDrag() {
    drag=false;
}
window.addEventListener("load",function(){
    
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
})
startDrag();