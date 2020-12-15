
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("demo").innerHTML += this.responseText;
            datos = JSON.parse(this.responseText);

            for(i=0; i<datos.listaNotas.length; i++)
            
            alert(notas.listaNotas[i].titulo)
        }
    };
    xhttp.open("GET", "texto.txt", true);
    xhttp.send();
}