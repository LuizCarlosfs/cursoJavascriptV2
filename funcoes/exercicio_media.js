(function() {
function calcularMedia() {
    let total = 0
  
    for (let i=0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
          throw Error("Função aceita somente números")
        }
        total += arguments[i]
        
    }
    return total/arguments.length || 0

}

console.log(calcularMedia(2,4,9))
})()
