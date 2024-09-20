function Animal(tipo) {
    if(tipo) this.tipo = tipo
}

Animal.prototype.obterTipo = function() {
    return this.tipo
}

Animal.prototype.tipo = "desconhecido"

function Cachorro(nome, tipo) {
    this.nome = nome
    Animal.call(this, tipo)
    //this.constructor = Cachorro
    Object.defineProperty(Cachorro.prototype, "constructor", {
        value: Cachorro,
        enumerable: false  // não será mostrada
    })



}
Cachorro.prototype = new Animal()

let rex = new Cachorro("Rex", "mamifero")
//console.log(rex)

for(let prop in rex) {
    if (rex.hasOwnProperty(prop)) {
      console.log(prop)
    }
}

console.log(rex instanceof Animal)
console.log("1 ---------------------------")
console.log(Cachorro.prototype.isPrototypeOf(rex))
console.log("2 ---------------------------")
console.log(Object.getPrototypeOf(rex))
console.log(rex.__proto__)
console.log(rex.__proto__ === Object.getPrototypeOf(rex))


