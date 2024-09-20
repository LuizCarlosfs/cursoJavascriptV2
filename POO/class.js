//  ES5
function Animal(tipo) {
    if(this instanceof Animal) {
      if (tipo) this.tipo = tipo
    } else {
         throw new Error("Animal deve ser criado com o operador new")
    }
}

function Cachorro(nome) {
    this.nome = nome
    Animal.call(this, "mamifero")
    //this.constructor = Cachorro

}
Cachorro.prototype = new Animal("mamifero")
Cachorro.prototype.constructor = Cachorro

let dog = new Cachorro("Dog")

Animal.prototype.obterTipo = function() {
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"



/////////////////////////////////////////////////////////////
// ES6 - 2015

class AnimalC{
    constructor(tipo) {
       if(tipo){
           this.tipo = tipo
       }
    }

    obterTipo(){
        return this.tipo
    }
}

class GatoC extends AnimalC{
    constructor(nome) {
        super("manifero")
        this.nome = nome
    }
}

AnimalC.prototype.tipo = "desconhecido"

let animal = new AnimalC("anfibio")
let sapo = new AnimalC()

let mingal = new GatoC("mingal")

// console.log(animal)
// console.log(gato)
// console.log("1 ---------------------")
// console.log(typeof Animal)   // função
// console.log(typeof AnimalC)  // função
// console.log(animal.obterTipo())    
// console.log(gato.obterTipo())    
// console.log("2 -------------------------------")
console.log(Animal.prototype)
console.log(AnimalC.prototype)
console.log("3 -------------------")
console.log(mingal)
console.log(dog)