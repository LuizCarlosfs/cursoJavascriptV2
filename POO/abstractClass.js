class Animal{
    constructor(tipo){

    if (this.constructor == Animal) {
        throw new Error("Animal é uma class abstrata")
    }

    if (tipo){
          this.tipo = tipo
       }
    }

    comer() {
        throw new Error("Method 'comer()' must be implemented")
    }
}

class Gato extends Animal{
    constructor(nome) {
        super("mamifero")
        this.nome = nome
    }

    comer() {
        console.log(`${this.tipo} está comendo`)
    }
}

//const animal = new Animal("mamifero")
const mingal = new Gato("mingal")