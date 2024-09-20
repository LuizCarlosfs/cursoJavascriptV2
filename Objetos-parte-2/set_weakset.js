// Set não repete valores
const _set = new Set()
const _weakset = new WeakSet

const arr = [1,2,3,4,2,3,5]

_set.add(1)
_set.add(5)
_set.add(7)
_set.add(6)
_set.add(6)

console.log(_set.size)
console.log(_set.has(6))
_set.delete(6)
console.log(_set.size)
console.log(_set.has(6))
console.log("-------------")

for (let el of _set) {
    console.log(el)
}
console.log("---   keys")
for (let el of _set.keys()) {
    console.log(el)
}
console.log("---   values")
for (let el of _set.values()) {
    console.log(el)
}
/////////////////////////////////////////////////////////////////
// weakset -  funciona apenas com dados passados por referência. Não aceita valores primitivos
let obj2 ={}
; (function(){
    let obj1 = {foo: "bar"}
    let obj2 = {foo: "bar2"}
    _set.add(obj1)
    _weakset.add(obj2)
     
})()

console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log(_set.size)
console.log(_weakset.has(obj2))

