// Desafio conta bancária
/*
2. Criar duas classes que herdam de ContaBancaria
- ContaCorrente
    - limite
    - sacar(valor)
- ContaPoupanca
    - aniversario
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

class ContaPoupanca extends ContaBancaria{
   constructor(cliente, numero){
     super(cliente, numero)
     this.aniversario = Date.now()
   }
   sacar(valor) {
      if (valor > this.saldo) {
        throw new Error("Saldo insuficiente")
    }
    this.saldo -= valor
}
}

class ContaCorrente extends ContaBancaria{
    constructor(cliente, numero) {
        super(cliente, numero)
        this.limite = 0
    }

    sacar(valor) {
        let disponivel = this.saldo + this.limite
        if (valor > disponivel) {
            throw new Error("Saldo insuficiente")
        }
        this.saldo -= valor
    }
}

const cp1 = new ContaPoupanca("daniel",1)
const cp2 = new ContaPoupanca("maria",2)
const cc1 = new ContaCorrente("joão",3)

cp1.depositar(1000)
cc1.limite = 1000
cc1.depositar(2000)
console.log(cc1)
cc1.sacar(2000)
console.log(cc1)




