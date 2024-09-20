(function() {
    
        const nomeUsuario = null
        const elemento = document.querySelector(".top-bar p")

     if (nomeUsuario) {
        //document.querySelector(".top-bar p").textContent="Bem-vindo(a), " + nomeUsuario
        const elemento = document.querySelector(".top-bar p")
        //elemento.textContent  += nomeUsuario
        elemento.innerHTML += "<b>" + nomeUsuario + "<b>"
    } else {
        //elemento.parentElement.style.display = "none"    // só esconde 
        // elemento remove()  // não funciona ie
        const elementoParaRemover = elemento.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)

    }
}
)()