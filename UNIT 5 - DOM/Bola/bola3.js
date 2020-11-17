
window.onload = function ()
{

    // Crear bolas

    for (i=0; i<10; i++)
    {
        let circ = document.createElementNS("http://www.w3.org/2000/svg","circle");
        circ.setAttributeNS(null,"cx",20+(i*3));
        circ.setAttributeNS(null,"cy",20+(i*3));
        circ.setAttributeNS(null,"r",2*i);
        circ.setAttributeNS(null,"fill","red");

        document.getElementsByTagName("svg"[0].appendChild(circ));
    }
    setInterval(animaTodasBolas, 30);
    bolas = document.getElementsByTagName("circle");
    for (i=0; i<bolas.length; i++)

    {
        // Velocidad bolas
        bolas[i].velX=1*(i+1);
        bolas[i].velY=1*(i+1);
    }
    
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