// versão do professor
function calcularIMC(peso, altura){
    if (peso == undefined || altura === undefined) {
       throw Error("Precisa de 2 parâmetros: peso e altura")  
    }
    return peso / (altura * altura)
}

function classificaIMC(imc) {
    if (imc  <= 16.9){
        msg="Muito abaixo do peso 16 a 16,9 kg/m2"
    } else if (imc <= 18.4){
        msg= "Abaixo do peso 17 a 18,4 kg/m2"
    } else if (imc <= 24.9){
        msg="Peso normal 18.5 a 24.9 kg/m2"
    } else if (imc <= 29.9){
        msg="Acima do peso 25 a 29,9 kg/m2"
    } else if (imc <=34.9){
        msg="Obesidade Grau I 30 a 34,9 kg/m2"
    }  else if (imc <=40){
        msg = "Obesidade Grau II 35 a 40 kg/m2"
    } else{
       msg ="Obesidade grau III maior que 40kg/m2" 
    }
    
    return msg
}
let imc = calcularIMC(71,1.70)
console.log(imc)
console.log(classificaIMC(imc))
