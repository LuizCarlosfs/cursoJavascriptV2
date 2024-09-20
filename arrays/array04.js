let arr1 = ["a", "b", "c"]
let arr2 = [].concat(arr1)

arr2[arr2.length] = "novo valor"

arr2 == ["a", "b", "c", "novo valor"]