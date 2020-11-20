window.onload=main;

function mainGato(){
   cont=0;
   let gato = document.getElementById("gato");
   gato.addEventListener("click", click);
}

function mainGato2(){
    cont=0;
    let gato2 = document.getElementById("gato2");
    gato.addEventListener("click", click);
 }

function click(){
    cont++;
    let p=document.createElement("p");
    p.InnerHTML=cont
}