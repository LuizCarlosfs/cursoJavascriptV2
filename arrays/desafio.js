let soma = 0
// function sum() {
//   for (let i=0; i < arguments.length; i++){
//    soma += arguments[i]
// }
//  return soma
// }

function sum(){
    //const numbers = Array.from(arguments)
    const numbers = [...arguments]
    return numbers.reduce( function(sum, atual) {
       return sum + atual
    }, 0)
}


function averege() {
    return sum(...arguments) / arguments.length
}

console.log(sum(1,2,3,4,5))
console.log(averege(1,2,3,4,5))
