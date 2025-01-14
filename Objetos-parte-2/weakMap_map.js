const myMap = new Map()
const myObj = new Object()

myObj.prop1 = "prop1"

myMap.set("prop1", "prop 1")
console.log(myMap.get("prop1"))

const myMap2 = new Map([[0,"zero"], [1,"um"],[2,"dois"]])
console.log(myMap2.get(0))
console.log(myMap2.get(2))
console.log("-------------------")
console.log(myMap2.keys())
console.log(myMap2.values())
console.log(myMap2.entries())
console.log("-  keys ------------------")
 
let keys = myMap2.keys()
for (let k of keys){
    console.log(k)
}
console.log("-  values -------------")
for (let v of myMap2.values()){
    console.log(v)
}
console.log(' --  WeakMap  --------------------------')

/////////////////////////////////////////////////////////////////////////////
let _contador = new WeakMap()
class Contador{
    constructor(){
        //this.contadr =0
        _contador.set(this, 0)
    }
    increment(){
        //this.contador++
        _contador.set(this, _contador.get(this) + 1)
        console.log(_contador.get(this))
    }

    get contador(){
        return _contador.get(this)
    }

}

const c1 = new Contador()
c1.increment()
console.log(c1.contador)
c1.increment()
c1.increment()
c1.increment()
c1.increment()
console.log(c1.contador)