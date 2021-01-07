window.onload=()=> {

}

function ejercicio1 () {
    
    var text = prompt("Texto que comprueba balanceo");
    
    var parentesis = 0;

    var balanced = true;
    
    for(i = 0 ; i < text.length ; i++){ //Comprueba los parentesis
    
        if(text.charAt(i) == "("){
            parentesis ++
        
        } else if(text.charAt(i) == ")"){
            parentesis --
        }
    
        if(parentesis > 0, parentesis < 0){
            balanced = false
        }
    }
    
    console.log(parentesis);


    if(parentesis == 0 && balanced == true){ // Determina si el balance es correcto o no
        document.getElementById("resultado").innerHTML = "Balance is correct"

    } else {
        document.getElementById("resultado").innerHTML = "Balance is wrong"
    }
    
}