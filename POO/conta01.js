// Desafio conta bancária
/*
1. criar conta abstrata ContaBancaria
  - cliente
  - numero
  - saldo
  - depositar(valor)
  - sacar(valor)
*/
class ContaBancaria{
    constructor(cliente, numero){

    if (this.constructor === ContaBancaria) {
        throw new Error("ContaBancaria é uma class abstrata")
    }

    if (numero){
          this.cliente = cliente
          this.numero = numero
          this.saldo = 0
       }
    }

    depositar(valor) {
       this.saldo += valor
    }

    sacar(valor){
        throw new Error("metodo sacar() precisa se implentado")
    }
}



