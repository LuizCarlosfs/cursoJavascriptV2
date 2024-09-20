let numero = 1234567.890

console.log(numero.toFixed(2))
console.log(typeof numero.toFixed(2))

console.log(numero.toPrecision(7))         // numero de digotos que quer no numero
console.log(typeof numero.toPrecision(3))

console.log("1----------------------")
numero = 12.34567
console.log(numero.toExponential())        // transforma em numero exponencial, base 10
console.log(numero.toExponential(4))        // qtde de casas decimais

console.log("2----------------------")
numero = 15
console.log(numero.toString())
console.log(numero.toString(2))   // base do numero que vai representar. 2 base binária


console.log("3----------------------")
numero = 123456.789
console.log(numero.toLocaleString())         
console.log(numero.toLocaleString("pt-BR"))   // formatar o número para moeda
console.log(numero.toLocaleString("pt-BR",{style: "currency", currency:"BRL"}))
console.log(numero.toLocaleString("pt-PT",{style: "currency", currency:"EUR"}))

console.log("3----------------------")
console.log(Number.MAX_VALUE, Number.MIN_VALUE)   // mostra o maior numero que o JS trabalha e menor numero, próximo de Zero

console.log("4----------------------")

let numeroAsString = "3.456a"
console.log(isNaN(numeroAsString))   // verifica se a string pode ser convertido em numero. Retorna False se pode converter em Numero
console.log(numeroAsString, typeof numeroAsString, parseFloat(numeroAsString))

