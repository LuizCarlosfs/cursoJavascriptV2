import { Endereco } from "../Model/Endereco.model.js" 
import { urlPath } from "../config.js"
import { createFetch } from "../createFetch.js"
import EnderecoView from "../View/Endereco.View.js"

const enderecoView = new EnderecoView()
let endereco = new Endereco()
let userId =  endereco.id

export default class EnderecoService{
   constructor()  {
    this.enderecos = []
   }
 
   add() {

         endereco = new Endereco()
         userId =  endereco.id
  
        createFetch("POST", `${urlPath}`, JSON.stringify(endereco) )
          .then( () => this.getTasks(userId))
          .then(dados => cb())
          .catch(err => err(err))
   }

    async getTasks(userId) {

     const fn = (endereco) => {
         this.enderecos = enderecos.map(endereco => {
             const { cep, logradouro, numero, bairro, cidade, estado, id } = endereco
             return new endereco(cep, logradouro, numero, bairro, cidade, estado, id)
         })
        
         if (typeof sucess === "function") sucess(this.tasks)
         return this.endere
     }
   }

//    return createFetch("GET", `${urlPath}/${userId}`)
//            .then(response => {
//               return fn(response)
//            })
//            .catch(erro => {
//                if(typeof error === "function") {
//                 return error(erro.message)
//            }
//               throw Error(erro.message)
//              })
//    }


 //remove(id, cb, error, userId){   
 remove(){
       endereco = new Endereco()
       userId =  endereco.id

      createFetch("DELETE", `${urlPath}/${userId}`)
            .then(() => this.getTasks(userId))
            .then( () => cb())
           // .catch(err => error(err.message))

  }

  update() {
      endereco = new Endereco()
      userId =  endereco.id 

      createFetch("PATCH", `${urlPath}/${userId}`,  JSON.stringify(endereco))
         .then(() => this.getTasks(userId))
         .catch(err => error(err.message))
         // .catch(() => {
         //    const err = "CEP não localizado para alteração!"
         //    enderecoView.mostrarErro(err)
         // })

   }

//    getById(id){
//       return this.tasks.find(task => parseInt(task.id) === id)
//    }
   
}