var velX=1; velY=2;
var bola, radio;

window.onload = function ()
{
    setInterval(animaBolas, 30);
    bola = document.getElementById("bola0");
    radio = parseInt(bola.getAttribute("r"));
    
}

function animaBolas() // movimiento bolas
{
    let posXactual = parseInt(bola.getAttribute("cx")) +velX;
    bola.setAttribute("cx",posXactual);

    let posYactual = parseInt(bola.getAttribute("cy")) +velY;
    bola.setAttribute("cx",posYactual);

    // Detectar colisiones

    sizeSVG = document.getElementsByTagName("svg")[0].getBoundingClientRect();

    if ((posXactual-radio) <=0 || (posXactual - radio) >= sizeSVG.width)
        velX *= -1;

    if ((posYactual-radio) <=0 || (posYactual-radio) >= sizeSVG.width)
        velY *= -1;

}