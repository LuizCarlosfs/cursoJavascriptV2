const pessoas = [
    {
        nome: "Daniel",
        idade: 40
    },    {
        nome: "Maria",
        idade: 28
    },    {
        nome: "Joao",
        idade: 15
    },    {
        nome: "Lucia",
        idade: 64
    },
    {
        nome: "Elias",
        idade: 30
    }
]

for (let i=0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}