/*function quantoFaltaPara(m, d) {
    let data = new Date()
    string = m+"/"+d+"/"+ data.getFullYear()
    let dataAni = new Date(string)
   
     if (dataAni < data) { 
        string = m+"/"+d+"/"+ (data.getFullYear()+1)
        dataAni = new Date(string)
     }
    let timeDiff = Math.abs(dataAni.getTime() - data.getTime());
    let diffDays = Math.ceil(timeDiff / (24 * 60 *60 * 1000)); 
    return diffDays
 }
*/




// FUNÇÃO DO PROFESSOR NO CURSO
function quantoFaltaPara(m, d) {
 
   const dataAtual = new Date()
   dataAtual.setHours(0)
   dataAtual.setMinutes(0)
   dataAtual.setSeconds(0)
   dataAtual.setMilliseconds(0)

   let anoAtual = dataAtual.getFullYear()

   const dataNiver = new Date(anoAtual, m -1, d)
   //const dataAtualTS = dataAtual.getTime
   const dataAtualTS = +dataAtual
   let dataNiverTS = +dataNiver 

   if (dataNiverTS <  dataAtualTS) {
      dataNiver.setFullYear(++anoAtual)
      dataNiverTS = +dataNiver
   }

   const UM_DIA = 24 * 60 * 60 * 1000
   const diferenca = dataNiverTS - dataAtualTS
   return diferenca / UM_DIA
}
 
 