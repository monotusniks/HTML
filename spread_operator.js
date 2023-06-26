console.log('Spread operator')
// creating an array

var arr = ["a", "b", "c", 'd' ]
console.log(arr) 
console.log(arr[1])
//to add a value to the array
arr.push('z')
console.log(arr)

//to add object
var obj={
    "name" : "nik",
    "age" :24,
    "number":1234
}
console.log(obj)
obj.hobby="cricket"
console.log(obj.hobby)

// 1. Expanding of strings - 
let text = "Expansion"
let exapnd = [...text]
console.log(exapnd)