const delay = (ms) => {
    const startTime = new Date().getTime()
    while (new Date().getTime() - startTime <= 2000) {
        // espera um pouco
    }
}

this.addEventListener("message", function(e){
    console.log(e)
    console.log(e.data)
    delay(3000)
    this.self.postMessage("processo demorado finalizado")

})