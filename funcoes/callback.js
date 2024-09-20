const teste = function (cb) {
   console.log("função teste")
   console.log(cb)
   cb("passado por parametro")
}

const fn = function(param) {
    console.log("função anonima de callback")
    console.log(param)
}

teste(fn)