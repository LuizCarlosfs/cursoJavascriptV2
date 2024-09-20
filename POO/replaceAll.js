if (!String.prototype.replaceAll2) {
    String.prototype.replaceAll2 = function(busca, troca){

        if (!(busca instanceof String || typeof busca === "string")){
            throw Error("firs parameter must be a string")
        }
        if (!(troca instanceof String || typeof troca === "string")){
            throw Error("second parameter must be a string")
        }

         return this.valueOf().split(busca).join(troca)
    }
}

let novo = "testando a troca"

console.log(novo.valueOf())
console.log(novo.valueOf().split("a"))
console.log(novo.replaceAll2("a", "B"))
console.log("-----------------------")
console.log(novo.split("a").join("B"))
