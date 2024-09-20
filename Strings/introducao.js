
let str1 = "Minha String Bacanuda"
console.log(str1.replace(/i/g, "o"))  // troca os caracteres
console.log(str1)

 console.log(str1.indexOf("string"))  // mostra quando começa a string procurada

 console.log(str1.includes("minha"))  // retorna true se encontrar a string
 console.log(str1.indexOf("minha") >=0)   // substitui includes

 console.log(str1.slice(2, 5))           // pega uma parte 
 console.log(str1.substring(2, 5))        // pega uma parte - igual slice

 console.log(str1.toUpperCase())             // transforma tudo em maiscula
 console.log(str1.toLocaleLowerCase())        // transforma tudo em minuscula

 let strAsObj = new String("minha string como objeto")
 console.log(strAsObj)
 console.log(strAsObj.valueOf())
 console.log(strAsObj.toString())

console.log("1------------------")
str1 = "    " + str1 + "     "
console.log(str1)
console.log(str1.trim())
console.log(str1.trimEnd())
console.log(str1.trimStart())
console.log("2------------------")

str1 ="01234567"
console.log(str1.padStart(20,"*"))  //completa com * até completar 20 caracteres. Se tiver apenas o nº, completa com espaços branco
console.log(str1.padEnd(20,"*"))
console.log(str1)

console.log("3------------------")

let telefone  ="91234-2345"
let telefone2 ="1234-2341"
function mascararTelefone(numero){
    let hifenPosicao = numero.indexOf("-")
       
    if (hifenPosicao ==5) {
        return numero.substring(0,1) + "****-**" + numero.slice(-2)
    } else {
        return numero.substring(0,1) + "***-**" + numero.substring(-2,2)
    }
}

console.log(telefone)
console.log(mascararTelefone(telefone))
console.log(mascararTelefone(telefone2))
//////////////////////////////////////////////////////////////////////////
console.log("4-----------------------------")

let str2 = "Hoje é Sábado"
console.log(str2.startsWith("Hoje",0))    // true se str2 começar com a string procurada. 2º parametro quando inicia a procura
console.log(str2.endsWith("é",6))    // true se str2 terminar com a string procurada. 2º parametro é o tamanha da string. (6= seis primeiras letras)

////////////////////////////////////////////////////////////////////////
console.log("5-----------------------------")
let str3 = "abcdefgh"
console.log(str3.charAt(1))   // mostra a letra que está no indice solicitado(1),como array
console.log(str3[1])   // mostra a letra que está no indice solicitado(1),como array

console.log(str3.charCodeAt(1))  // retorna a table unicode do caracter (b) que está no índice. neste cada=unicode de b





////////////////////////////////////////////////////////////
/*
replace(),          replaceAll() **
indexOf(),          lastIndexOf(),          includes()*,
slice(),            substring(),            split(),
toLowerCase(),      toUpperCase(),
valueOf(),
trim()*,            trimEnd()*,             trimStart()*,
padStart()*,        padEnd()*,
startsWith()*,      endsWith()*,
charAt(),           charCodeAt()            e length */