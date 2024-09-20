const teste = (function(){
    let n =0
    return function testeInterno(){
        console.log("testeInterno chamado ", ++n)
        return "retorno de testeInterno " + n
    }
})()

console.log(teste())
let str = teste
teste()
teste()

// Uma closure é uma função interna que possui acesso a (referência) variáveis independentes da função externa.
// Em outras palavras, a função definida na closure se lembra do ambiente na qual foi criada.