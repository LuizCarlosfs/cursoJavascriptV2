function fn(cb) {
  console.log("executar acao de callback")
  console.log(typeof cb)
  cb()
}

fn(function() {
    console.log("funcao passada por parametro")
})