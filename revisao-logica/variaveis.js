// var, let, const

// var -> ES -> cross-browser
// let e const -> ES2015

let teste = 'minha string'
teste = 10;
//console.log(teste);

//-----------------------------------------
//  conversão de variáveis 
let n1 = '13a';
let n2 = n1
let n3 = n1

n1 = parseInt(n1)
n2 = parseFloat(n2)
n3 = Number(n3)



//parseInt   -> converte string p/ numero, mesmo com letras após numero
//parseFloat -> converte para decimal a parte numerica da string
//Number     -> converte string para numero, mas não pode ter letras


console.log(n1, n2, n3, typeof n1)

//----------------------------------------------------
// converter numero para string
n1 = 11
n1 = n1.toString();
console.log(n1, typeof n1)

//-----------------------------------------------------------
// operadores
//  ** -> potência
//  And (&&)
//  or (||)
//  not (!)
let msgMaiorIdade = (idade >=18 ? "true" : "false")
 
// falsy values -> 0, "", NaN.undedfined, null, false
// truthy -> todo os demais

// switch
let dia=""
switch (diaSemana){
   case 0:
     dia = 'domingo'
     break
   case 1:
    dia = 'segunda'
    break

    default:
      dia =' - - '  
}
//---------------------------------------------------
