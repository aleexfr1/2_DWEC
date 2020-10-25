var tabla="<table>";

for(var i =0; i<x2; i++) {
    tabla += "<tr>";

    for(var j=0; j<x2; j++) {
        tabla+="<td>";

        if (i == 0)
        tabla+= palabra[j]+"</td>";

        else if ( i == x2.length-1)
            tabla+= iversa[j]+"</td>"
    }

    tabla+="</table>"
}