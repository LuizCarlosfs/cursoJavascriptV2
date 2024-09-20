let arr = [1,2,3,4]
arr.reverse

// retornar 1 unico valor

let soma = arr.reduce( function(acumulador, atual,i, _arr){
  return acumulador+ atual
})
//console.log(soma)
//console.log(arr)

///////////////////////////////////////////////////////
/* outro exemplo
 1 - 
 nomes = {}
 nomeAtual = "Daniel" -> primeiraletra = nomeAtual[0] = "D"
 return {D : 1}
 2 -
 Nomes = {D: 1}
 nomeAtual "Maria" -> primeiraletra = nomeAtual[0] = "M"
 return {D: 1, M: 1}
3 -
 Nomes = {D: 1, M: 1}
 nomeAtual "Joana" -> primeiraletra = nomeAtual[0] = "J"
 return {D: 1, M: 1, J: 1}
 4 -
 Nomes = {D: 1, M: 1, J: 1}
 nomeAtual "João" -> primeiraletra = nomeAtual[0] = "J"
 return {D: 1, M: 1, J: 2}
 
*/
const nomes =["Danel", "Maria","Joana", "João"]
let nomesPorOrdem= nomes.reduce( function (nomes, nomeAtual){
  let primeiraLetra = nomeAtual[0]
  if (nomes[primeiraLetra]) {
    nomes[primeiraLetra]++
  } else {
    nomes[primeiraLetra] = 1
  }
  return nomes
},{})
console.log(nomesPorOrdem)

/////////////////////////////////////////////////

