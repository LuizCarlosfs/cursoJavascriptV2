import TasksServive from "./Service/Tasks.service.js"
import TasksController from './Controller/Tasks.controller.js'
import TasksView from "./View/Tasks.View.js"
import { userId } from "./config.js"


 const taskService = new TasksServive()
 const ul = document.getElementById("todo-list")
 const tasksView = new TasksView(ul)
 const taskController = new TasksController(taskService, tasksView)

    //ARMAZENAR O DOM EM VARIAVEIS
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    
    const lis = ul.getElementsByTagName("li")


   //createXMLHttpRequest("GET", `${urlUsers}/${userId}/tasks`, init)
   //taskService.getTasks(userId, init)
   taskController.getTasks()


   todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault()

    taskController.add(itemInput.value)
  
    itemInput.value = ""
    itemInput.focus()
   });

   function clickedUl(e) {
    const dataAction = e.target.getAttribute("data-action")
    console.log(e.target)
    if (!dataAction) return

    let currentLi = e.target
    while (currentLi.nodeName !== "LI") {
        currentLi = currentLi.parentElement
    }
    const currentLiIndex = [...lis].indexOf(currentLi)

    const actions = {
        editButton: function () {
            const editContainer = currentLi.querySelector(".editContainer");

            [...ul.querySelectorAll(".editContainer")].forEach(container => {
                container.removeAttribute("style")
            });

            editContainer.style.display = "flex";
        },
        deleteButton: function () {
            // arrInstancesTasks.splice(currentLiIndex, 1)
            // renderTasks()
            taskController.remove(currentLi.getAttribute("data-id"))
        },
        containerEditButton: function () {
            const title = currentLi.querySelector(".editInput").value
            const id = currentLi.getAttribute("data-id")
            //arrInstancesTasks[currentLiIndex].setTitle(val)
            //renderTasks()
            taskController.update({title, id})
        },
        containerCancelButton: function () {
            currentLi.querySelector(".editContainer").removeAttribute("style")
            currentLi.querySelector(".editInput").value = arrInstancesTasks[currentLiIndex].title
        },
        checkButton: function () {
            const id = currentLi.getAttribute("data-id")
            taskController.toggleDone(id)
        }
    }

    if (actions[dataAction]) {
        actions[dataAction]()
    }
}
ul.addEventListener("click", clickedUl)

// codigos de exemplo

fetch("http://localhost:3000/users/")
   .then(resposta => resposta.json())
   .then(resposta => console.log(resposta))
   .catch(err => console.log(err))
   .finally( () => console.log("finally"))


; (async function()  {
    let users = []   

    try{
        await fetch("http://localhost:3002/users/")
            .then( resposta => resposta.json())
            .then(_users => {
                console.log(users)
                users = _users
            })
    } catch (e){
        console.log("----- e ----")
        console.log(e)
    }
    console.log(users)
})()
