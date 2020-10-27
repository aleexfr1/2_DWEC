const btn = document.querySelector('button'); // Coge el boton que hay en la pagina

function random(number) {
  return Math.floor(Math.random() * (number+1)); // Crea numeros aleatorios
}

btn.onclick = function() {  // Le ponemos una funcion al hacer click en el boton

  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}



// Otras formas de crear "eventos"

// Creamos la funcion y la asociamos junto al tipo de evento en el boton desde el HTML
function random(number) {
    return Math.floor(Math.random() * (number+1)); // Crea numeros aleatorios
    
function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
  }