window.onload=()=>{
    setInterval(loadMails,3000);
}

function loadMails() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("demo").innerHTML += this.responseText;
            datos = JSON.parse(this.responseText);

            for(i=0; i<datos.listaCorreos.length; i++) {


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

        }
    }
    };
    xhttp.open("GET", "correos.json", true);
    xhttp.send();
}

