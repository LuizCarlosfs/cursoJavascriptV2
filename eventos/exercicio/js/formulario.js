(function() {
    'use strict';

    const txtTitulo= document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")
 
    // btn.addEventListener("click", function(e) {
    formCadastro.addEventListener("submit", function(e) {
       if (!txtTitulo.value) {
         showErrorMessege("preencha todos os campos", function() {
            txtTitulo.focus()
         })
         e.preventDefault()    // não executar os eventos submit
         
       } 
     })

   /////////////////////////////////////////////////////////////////////////
   //   mensagem quando titulo estiver em branco
     const feedbackMessage= document.getElementById("feedbackMessage")
     const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]

     function showErrorMessege(msg, cb){
         //alert(msg)
         //feedbackMessage.setAttribute("class", "show")
         feedbackMessage.classList.add("show")
         feedbackMessage.getElementsByTagName("p")[0].textContent=msg
               
         feedbackMessageCloseBtn.focus()       // está funcionando, mesmo não aparecendo o foco.

      //-----------------------------------------------------------------

      //------------------------------------------------------------


         function hideErrorMessage(){
            console.log("clicado close")
            feedbackMessage.classList.remove("show")
            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)
            feedbackMessageCloseBtn.removeEventListener("keyup", pressedKeyboardOnBtn)


            if (typeof cb === "function") {
               cb()
            }
         }
          // fechar mensagem com Esc
         function pressedKeyboardOnBtn(e) {
            if (e.keyCode === 27){
               hideErrorMessage()
            }
         }

         feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)

         feedbackMessageCloseBtn.addEventListener("keyup", pressedKeyboardOnBtn)
       
     }
     
     feedbackMessageCloseBtn.addEventListener("click", function() {
      feedbackMessage.classList.remove("show")

     })

///////////////////////////////////////////////////////////////////////
// contar caracteres que faltam

     const txtDescricao = document.getElementById("txtDescricao")
     const contadorContainer = document.getElementById("contador")
     const resta = contadorContainer.getElementsByTagName("span")[0]
     const maxima = txtDescricao.maxLength
     mostrarNumero(maxima)

     //contadorContainer.removeAttribute("style")
     contadorContainer.style.display = "block"

     function checkLength(){
        let numeroLetrasDigitadas = this.value.length
        let caractersRestantes = parseInt(maxima)- parseInt(numeroLetrasDigitadas)
        mostrarNumero(caractersRestantes)
     }

     function mostrarNumero(n){
        resta.textContent = n
     }
    
     txtDescricao.addEventListener("input", checkLength) 

   ////////////-------///////////////////////////////////////////////////
    // habilitar/ desabilitar botão Adicionar
      btn.disabled = true

      const chkAceito = document.getElementById("chkAceito")
        chkAceito.addEventListener("change", function() {
         btn.disabled = !this.checked
      })


     //////////////////////////////////////////////////////////////////////  

      })()

  

