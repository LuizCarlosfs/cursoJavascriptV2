// criar um array com numeros randomicos não repetidos
function generateRandomNumberInteger(max) {
    return parseInt(Math.random() * max)
}

let arr =[]
while(arr.length <20){
    let randomNumber = generateRandomNumberInteger(30)
    console.log
    
    if(arr.indexOf(randomNumber) <0) {
        arr.push(randomNumber)
    }
}
console.log(arr)