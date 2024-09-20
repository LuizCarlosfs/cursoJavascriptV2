'use strict'
const pessoa = {
    nome: "daniel"
}

console.log(Object.getOwnPropertyDescriptor(pessoa,"nome"))
Object.defineProperty(pessoa,"sobrenome", {
    value:"Tapias Morales",
    enumerable: true,
    configurable: false
})
///////////////////////////////////////////////////
// definir várias propriedades

Object.defineProperties(pessoa,{
    prop1:{
        value:"prop 1",
        writable:true
    },
    prop2: {
        writable:false,
        value: 10
    }
})
////////////////////////////////////////////////////
console.log(Object.getOwnPropertyDescriptor(pessoa,"sobrenome"))
//pessoa.sobrenome = "teste"   // dá erro, pois writable = false
for (let prop in pessoa){
      console.log(prop)
}
// mostra somente nome, pq enumerable = false na propariedade sobrenome

