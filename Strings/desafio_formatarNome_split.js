function formatarNome(nomeCompleto) {


const nomeAsArray = nomeCompleto.split(" ")
if(nomeAsArray.length ===1) {
    return nomeCompleto
}

//console.log(nomeAsArray)
let primeiroNome = nomeAsArray.shift()   // remove elemento de indice 0. Retorna valor removido
return nomeAsArray.join(" ") +", " + primeiroNome       // join junta todos os elementos de um array

}


console.log(formatarNome("Daniel"))
console.log(formatarNome("Daniel Morales"))
console.log(formatarNome("Daniel Tapias Morales"))
