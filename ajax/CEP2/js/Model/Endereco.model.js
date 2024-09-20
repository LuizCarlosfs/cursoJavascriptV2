export function Endereco(cep, logradouro, numero, bairro, cidade, estado, id) {
//export function Endereco(dado) {
    
    // if (!CompositionEvent) {
    //     throw new Error("Task need a required parameter: cep")
    // }

        this.cep = document.querySelector("#inputCEP").value
        this.logradouro = document.querySelector("#inputLogradouro").value
        this.numero = document.querySelector("#inputNumero").value
        this.bairro = document.querySelector("#inputBairro").value
        this.cidade = document.querySelector("#inputCidade").value 
        this.estado = document.querySelector("#inputEstado").value
        
        this.id = id || document.querySelector("#inputCEP").value




}   

