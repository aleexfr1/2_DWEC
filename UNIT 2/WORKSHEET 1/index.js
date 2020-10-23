// Ejercicio 1
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();
    var day = time.getDay();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var seconds = time.getSeconds();

    document.write("Hoy es dia "+day+ "<br>");
    document.write("El mes actual es "+month+ "<br>");
    document.write("El año actual es "+year+ "<br>");
    document.write("Son las "+hour)+ "<br>";
    document.write("Hay "+minute+ "<br>");
    document.write("Hay "+seconds+ "<br>");

// Ejercicio 2

    var time = new Date();
        var fechaHoy = time.getDate();

        document.write(+fechaHoy)