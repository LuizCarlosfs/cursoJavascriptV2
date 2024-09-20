function Cachorro(name) {
   let posicao = 0
   this.name = name
   console.log(this)

   this.latir = function(){
        console.log(this.name, " está latindo")
   }

   this.andar = function(distancia) {
    posicao += distancia
    console.log(this.name, "andou ", distancia, "m")
    console.log("A posicaio atual é", posicao, "m")
   }

}



const rex = new Cachorro("rex")
const toto = new Cachorro("toto")

console.log(rex)
rex.latir()
rex.andar(5)
rex.andar(10)
