import { Endereco } from "../Model/Endereco.model.js"

export default class EnderecoView {
    constructor(dados) {
        this.dados = dados
    }
  
     mostrarErro(erro){
        document.querySelector("#bs-feedback .content").textContent = erro
        document.querySelector("#bs-feedback").style.transform = "translateY(0)"
     }
    
     esconderErro(){
        document.querySelector("#bs-feedback").removeAttribute("style")
     }
    
     mostrarEndereco(dados){
      
       document.querySelector("#inputLogradouro").value = dados.logradouro
       document.querySelector("#inputBairro").value = dados.bairro
       document.querySelector("#inputCidade").value = dados.localidade
       document.querySelector("#inputEstado").value = dados.uf
    
       document.querySelector("#inputNumero").focus()

     }


    
}