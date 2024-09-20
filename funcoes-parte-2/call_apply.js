//var name = "Daniel"
//let name2 = "Daniel 2"

// let e const nao criam propriedades do objeto global. Para criar propriedade usar var

function teste(str,n) {
    //console.log(this)
    console.log(this.name)
    //console.log(this.name2)
    console.log(str, n)
}

// chamando a função com call, muda o this. Deixa de ser global.
teste("teste",333)
teste.call({ name: "Maria" },"string",20) 
teste.apply({name : "João"}, [" da Silva", 28])
teste.call({ name: "João 2"}, ...[" da Silva", 38])

const teste2 = teste.bind({ name: "Joana "})
teste2("joaquina", 30)
