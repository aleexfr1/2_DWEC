window.onload = () =>
{

    setInterval(anima, 30);

    


}
    var posX = 0, posY = 0;
    var incX = 2, incY = 2;

    function anima()
    {
        let bola = document.getElementById("bola");
        bola.setAttribute("cx", posX);
        bola.setAttribute("cy", posY);
        posX+=incX;
        posY++;

        if (posX >= 500 || posX <=0)
            incX=-2;

        let bola2 = document.getElementById("bola");
        bola.setAttribute("cx", posX);
        bola.setAttribute("cy", posY);
        posX+=incX;

        if (posY >= 500 || posY <=0)
            incY=-2;
    }