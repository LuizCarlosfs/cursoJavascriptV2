function getRandomNumber(inicio = 0, fim = 10, integer= true) {
  
//   if (integer) {
//     return Math.parseInt(Math.random() * (fim - inicio) + inicio);
//   } else{
//     return Math.random() * (fim - inicio) + inicio; 
//   }  

let r = Math.random() * (fim - inicio ) + inicio
return integer ? parseInt(r) : r

 }


console.log(getRandomNumber(1,5))