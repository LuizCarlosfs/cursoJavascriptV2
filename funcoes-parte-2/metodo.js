function miar(){
    console.log(this.name, "fala: miau")
}

const dog = {
    name: "rex",
    falar() {
        console.log(this.name, "fala: au au")
    }
}
const cat = {
    name: "mingal",
    falar(){
        console.log("-------------")
        console.log(this)
        miar.call(this)
    }
}
dog.falar()
cat.falar()
