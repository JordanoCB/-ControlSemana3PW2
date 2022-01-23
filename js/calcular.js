function calcular(){
    var v1 = parseFloat(document.getElementById("valor1").value);
    var v2 = parseFloat(document.getElementById("valor2").value);
    var resultado = v1 * v2;

    if(isNaN(v1) || isNaN(v2)){
        document.getElementById("resultado").innerHTML = "Favor ingresar ambos valores";
    }
    else{
        document.getElementById("resultado").innerHTML = resultado;
    }
}