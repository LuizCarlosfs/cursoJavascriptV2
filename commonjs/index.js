const fs = require("fs")
const emoji = require("node-emoji")

const mod1 = require("./modules/mod1")
// console.log("-- mod1 --")
// console.log(mod1.fn)
// console.log(mod1.fn())

console.log(__dirname)
console.log(__filename)
console.log("----------------------")

const mod2 = require("./modules/mod2")
const mod3 = require("./modules/mod3")

console.log(mod2)
console.log(mod3)

// fs.writeFile('teste.txt', 'ola mundo', err =>  {
//     if(err) throw err
//     console.log("saved!", emoji.get("coffee"))
// })
