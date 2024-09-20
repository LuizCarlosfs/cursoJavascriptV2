;(function(){
    let usuarios = []
    this.pessoa = {

    get usuario(){   // mostrar o ultimo
        if (usuarios.length >=0) {
            return usuarios[usuarios.length-1]
        }
    },
 

  set usuario(_pessoa){
    if (usuarios.indexOf(_pessoa) <0) {
        usuarios.push(_pessoa)
    }
     
  },

  get usuarios(){
     return [].concat(usuarios)
  }

  }


})()



