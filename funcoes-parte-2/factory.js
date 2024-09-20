function criarCachorro(name) {
    let posicao = 0
    return {
        name,
        latir() {
            console.log(this.name, "está latindo")
        },
        andar(distancia) {
            posicao += distancia
            console.log(this.name, "andou ", distancia, " m")
        },

        get posicao(){
            console.log(`a posição atual de ${this.name} é ${posicao}`)
            return posicao
        }
    }
}

const rex = criarCachorro("Rex")

console.log("------- rex posicao")
rex.andar(10)
rex.andar(5)
console.log(rex.posicao)
console.log(rex)


const toto = criarCachorro("Toto")
console.log("----- toto posicao")

toto.andar(20)
toto.andar(-3)
console.log(toto.posicao)
console.log(toto)


