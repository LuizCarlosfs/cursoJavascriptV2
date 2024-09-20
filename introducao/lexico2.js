function teste(){
    console.log(this)
 }
 const teste2 = () => {
    console.log('teste2')
    console.log(this)
 }
 teste()

 const obj = {
    n:0,
    teste: teste,     // quanto so nomes são iguias, pode colocar somente teste,
    teste2
 }
 obj.teste2()