import { MyMod2 } from "./mod2.js"

function myMod1(){
   console.log("myMod 1 executado") 
   return "valor retornado de myMod1"
}

export default myMod1

export function myMod1_nomeada(){
   return "função exportada nomeada"
}

export const PI = "PI: "+ Math.PI


console.log(new MyMod2())


