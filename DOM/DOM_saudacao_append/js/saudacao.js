(function() {
    const nomeUsuario = "Daniel"

    if (nomeUsuario) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p> Olá, <b> ${nomeUsuario} <b> </p>`

        // aonde aparecerá o elemento
        // elementoPai.insertBefore(novoElemento, elementoReferencia)
        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)

    }


        
} )()