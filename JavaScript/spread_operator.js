// HTML file associated to it is - Practice.html

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

// 2. combining array
let arr1 = ["one", "two"]
let arr2 = ["three", "four"]
let arr3 = [...arr1, ...arr2]
console.log(arr3) 

// 3. adding value to an arary
let arr4= ["zero", ...arr3, "five"]
console.log(arr4)

// 4. combining an object (here the obj 2 overrides the similar properties of object one.)
let obj1 = {name :"alpha", number : 2, date : "001"}
let obj2 = {name :"beta", number :3}
let obj3= {...obj1, ...obj2}
console.log(obj3)
 
// 5. Shallow copy
// problem with existing system
let arr11=["qwe", "rty"]
arr11.push(20)
console.log(arr11)
var arr12=arr11

arr12.push("new")
console.log(arr11)
console.log(arr12)
// it is printing the same value for arr 11 & 12.
// solution - 
let arr21=["qwe", "rty"]
arr21.push(21)
console.log(arr21)
var arr22 = [...arr21]
arr22.push("ten")
console.log(arr21)
console.log(arr22)

// 6.nested copy
var obj21 =[{
    name:"nik1"},
    {name:"nik2"
}]
console.log(obj21)

var obj22 = [...obj21]
console.log(obj22)
obj22[0].name="test"
console.log(obj22, "22")
console.log(obj21)

