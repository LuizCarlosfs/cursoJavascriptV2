import { AlunosService } from './Service/Alunos.service.js'
import { AlunosView } from './Views/Alunos.View.js'
import { AlunosController } from './Controller/Alunos.controler.js'
import { MateriasService } from './Service/Materias.service.js'


const alunosService = new AlunosService()

const alunosView = new AlunosView(document.querySelector('[data-table-alunos]'), 
   new MateriasService().materias

)


const alunosController = new AlunosController(alunosService, alunosView)

document.querySelector("form").addEventListener("submit", function(e){
   e.preventDefault()
   const nome = document.getElementById("first_name").value

   alunosController.add({ nome })
})

document.querySelector("#search_name").addEventListener("input", function(){
   const name = this.value
   sessionStorage.setItem("search", name)

   if(name.length > 2 || name.length ===0){
      alunosController.search(name)
   }
})

const inputEvent = newEvent("input")

if(sessionStorage.getItem("search")){
   document.querySelector("#search_name").value = sessionStorage.getItem("search")

   document.querySelector("#search_name").dispatchEvent(inputEvent)
}
