// ES5  -  2005
function Animal(){}

Animal.prototype.shoAmI = function() {
    return this
}

Animal.categoria = "ser vivo"

const dog = new Animal()

// ES6 - 2015
class Cachorro {
    constructor(nome){
        this.nome = nome
        console.log("chamando metodo estático de dentro do construtor")
        Cachorro.beber()
    }

    static comer() {
        console.log(this)   // Cachorro
        console.log("comendo")
        this.beber()
    }

    static beber() {
        console.log("bebendo")
    }
}

const dog2 = new Cachorro("rex")