/*
Para pesquisar na Internet, no Google procure:
MDN javascript
*/
const data = new Date()
console.log(data)
console.log(data.getDay())   // dia da semana
console.log(data.getDate())   // dia do mês
console.log(data.getMonth())   //  mês - mes - 1, começa no 0

console.log("1-------------------")
console.log(data.getTime())   // milesegundos
console.log(data.getFullYear())  // ano

console.log("2 ----------------------")
console.log(data.getHours())    // numero de horas
console.log(data.getUTCHours())  // hora da Europa. Horário universal (GMT)

console.log("3 ----------------------")
console.log(data.getTimezoneOffset())   // retorna a diferença da hora local para hora universal (GMT), em minutos (180)

console.log("4 ----------------------")

console.log(data)
data.setDate(19)    // altera o valor do dia
console.log(data)
////////////////////////////////////////////////////////////////////////////
console.log("5 ---------------------------------------------------------")
console.log(data.toString())
console.log(data.toDateString())  // sun May 19 2024
console.log(data.toISOString())
console.log(data.toLocaleDateString())    // 19/05/2024

console.log(data.toLocaleString())   // 19/05/2024, 14:06:56
console.log(data.toUTCString())  




