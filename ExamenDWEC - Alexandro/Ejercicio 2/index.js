window.onload=()=> {

}

function ejercicio2(arrayFechas, fechaInicio, fechaFin) {
        let arrayFechaInicio=fechaInicio.split("/");
        let arrayFechaFin=fechaFin.split("/");

        let ArrayFin;

    arrayFechas.array.forEach(element => {
        
        let newArray = element.split("/");
        if(newArray[2] > arrayFechaInicio && newArray[2] < arrayFechaFin[2]){
            ArrayFin.push(element);

        } else if(newArray[2]==arrayFechaInicio[2] || newArray[2]==arrayFechaFin[2]){
            if(newArray[1] > arrayFechaInicio && newArray[1] < arrayFechaFin[1])
            ArrayFin.push(element);

        }  else if(newArray[1]==arrayFechaInicio[1] || newArray[1]==arrayFechaFin[1]) {
            if(newArray[0] > arrayFechaInicio && newArray[0] < arrayFechaFin[0])
            ArrayFin.push(element);

        }
    });

        return ArrayFin;
}

    console.log(ejercicio2(["18/12/2020", "19/12/2020", "20/12/2020"], "18/12/2020", "20/12/2020"));