const task1 = {
    name: "task 1",
    createdAt: new Date(),
    updateAt: null,
    completed: false,
    changeName: function(name) {
        console.log(this)
    }
}
const task2 = {
    name: "task 2",
    createdAt: new Date(),
    completed: false
}

task1.changeName("ksvfdasf")
//console.log(task1)
//console.log(task2)