//Ejercicio 1

/* var tabla = "<table>";
navigator.connection;
navigator.cookieEnabled;
navigator.credentials;
navigator.geolocation;
navigator.languages; */

    document.write('<table> <tr> <th>');
	document.write('Elementos');
    document.write('</th> </tr>');

for(prop in navigator){

	document.write('<tr> <td>');
	document.write(prop);
	document.write('</td> </tr>');
}

    document.write('</table>');

//Ejercicio 2

    document.write('<table> <tr> <th>');
    document.write('Elementos');
    document.write('</th> </tr>');

    for(prop in window.screen){

    document.write('<tr> <td>');
    document.write(prop);
    document.write('</td> </tr>');
}

    document.write('</table>');