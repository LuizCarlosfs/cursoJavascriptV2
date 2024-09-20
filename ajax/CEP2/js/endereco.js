import { urlCEP, urlPath } from "./config.js"
import EnderecoView from "./View/Endereco.View.js"
//import { Endereco } from "./Model/Endereco.model.js"
import EnderecoService from "./Service/Endereco.Service.js"


  
 const enderecoView = new EnderecoView()
 const enderecoService = new EnderecoService
 //const endereco = new Endereco()
 


 
    const $cep = document.querySelector("#inputCEP")
    $cep.addEventListener("input", function(e){
       let cep = this.value
       cep = cep.replace("-","")
       if(cep.length === 8) {
          const promise = obterEndereco(cep)
             .then(dado => {
                 if(dado.erro) throw Error("CEP inexistente")
                  enderecoView.mostrarEndereco(dado)
                 })
             .catch(err => {
               enderecoView.mostrarErro(err.message)
             })
         
       }
     
    })
 
    document.querySelector("#bs-feedback .close").addEventListener("click", function () {
      enderecoView.esconderErro() 
     })

     document.querySelector("#btIncluir").addEventListener("click", function (){
       //const enderecoService = new enderecoService()
       enderecoService.add()
      })

      document.querySelector("#btExcluir").addEventListener("click", function() {
         enderecoService.remove()
      })
      document.querySelector("#btAlterar").addEventListener("click", function() {
         enderecoService.update()
      })

  ;  async function obterEndereco(cep) {
       let url = `${urlCEP}${cep}/json/`
 

       const resposta = await fetch(url)
       //console.log("resposta = ",resposta)

       if(!resposta.ok) throw Error("CEP Invalido")
       const json = await resposta.json()
       console.log("json=",json)
       return json
   }

   


