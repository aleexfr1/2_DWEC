window.onload = () =>
{

    setInterval(anima, 30);

    


}
    var BolaPosX = 0, BolaPosY = 0;
    var Bola2PosX = 0, Bola2PosY = 0;
    var incX = 2, incY = 2;

    function anima()
    {
        let bola = document.getElementById("bola");
        bola.setAttribute("cx", posX);
        bola.setAttribute("cy", posY);
        BolaPosX+=incX;
        BolaPosY++;

        if (BolaPosX >= 500 || BolaPosX <=0)
            incX=-2;

        let bola2 = document.getElementById("bola2");
        bola2.setAttribute("cx", Bola2PosX);
        bola2.setAttribute("cy", Bola2PosY);
        Bola2PosX+=incX;
        Bola2PosY++;

        if (Bola2PosX >= 500 || Bola2PosX <=0)
            incY=-1;
    }