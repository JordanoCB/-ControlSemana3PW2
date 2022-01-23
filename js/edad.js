function edad(){
    var edad = parseFloat(document.getElementById("edad").value);

    if(isNaN(edad)){
        document.getElementById("comprobacion").innerHTML = "Ingrese edad";
    }
    else{
        if(edad < 18){
            document.getElementById("comprobacion").innerHTML = "eres menor de edad";
        }
        else{
            document.getElementById("comprobacion").innerHTML = "usted es mayor de edad";
        }
    }

}