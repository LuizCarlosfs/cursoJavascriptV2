// acrescentar elementos ao final da array
let arr = [1,2,5,7,9]
let teste = arr.push(11,13,true, "ola mundo")

teste == [1,2,5,7,9, 11,13,true, "ola mundo"]

// excluir último elemento
let ultimoitem = arr.pop()
//console.log(arr)

arr == [1,2,5,7,9, 11,13,true]

// exclui o último elemento 
let primeiroitem =  arr.shift()
//console.log(primeiroitem)

// incluir no inicio da array
teste = arr.unshift(4,5,6)
//console.log(teste)
//console.log(arr)

//------------------------------------------
//pegar um pedaço da array
let arr2 = arr.slice(2,4)
//console.log(arr2)
//console.log(arr)

// o metodo mais poderoso. motifica a array original
let arr3 = arr.splice(2,4)
console.log(arr)
console.log(arr3)




