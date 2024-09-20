const arr = [1,5,10, "ola", true]

let sohNumeros = arr.some(function(el) {
    
    return typeof el === "number"
})

arr.filter(function(el, i, _arr){})

let arr1 = arr.map(function(el, i, _arr) {
    return el*el
})

console.log(arr1)