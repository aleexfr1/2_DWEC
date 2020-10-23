var age = parseInt(prompt("Introduce edad"));
var amount = parseInt(prompt("Introduce cantidad"));
var maxage = parseInt(prompt("Introduce edad maxima"));




function calculateSupply()

{
  
document.write("La cantidad necesario será "(+amount *365)*(+maxage - +age));

}

calculateSupply()