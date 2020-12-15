window.onload = function () {

    setInterval(loadMails, 5000);
} 

var cont = 0;



function loadMails() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("demo").innerHTML += this.responseText;
            correos = JSON.parse(this.responseText);

            for(i=cont; i<correos.listaCorreos.length; i++) {


            let tr = document.createElement("tr");
            let remitente = document.createElement("td").appendChild(document.createTextNode(correos.listaCorreos[i].remitente));
            let asunto = document.createElement("td").appendChild(document.createTextNode(correos.listaCorreos[i].asunto));
            let destinatario = document.createElement("td").appendChild(document.createTextNode(correos.listaCorreos[i].destinatario));
            let mensaje = document.createElement("td").appendChild(document.createTextNode(correos.listaCorreos[i].mensaje));
            
            tr.appendChild(remitente);
            tr.appendChild(asunto);
            tr.appendChild(destinatario);
            tr.appendChild(mensaje);

            document.getElementById("tabla").appendChild(tr);
            cont++;
        }
    }
    };
    xhttp.open("GET", "correos.json", true);
    xhttp.send();
}

