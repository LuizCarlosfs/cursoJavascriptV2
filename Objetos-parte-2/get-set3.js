/*
Desafio
crie um objeto pessoa
Deve ter uma propriedade get chamada usuarios que deve armazenar uma array de strings
Deve ter uma propriedade get chamada usuario que deve retornar o último usuario da array
Sempre que alterar o usuário (set), não deve substituir, mas sim colocar num array, se já não existir
*/
;(function(){
   let usuarios = []
   this.pessoa = {

     get usuario(){
        if(usuarios.length){
           return usuarios[usuarios.lenght -1]
        }
     },
     
     set usuario(_usuario){
        if (usuarios.indexOf(_usuario) < 0){
          usuarios.push(_usuario)
        }
     },

     get usuarios(){  
        return [].concat(usuarios)       
     }
   }
})()

