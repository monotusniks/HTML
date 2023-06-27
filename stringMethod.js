// HTML file associated to it is - Practice.html

//We have 7 string methods

let str = "Hello my name is Nik and I am doing good."

//1- Includes()
let inclu = str.includes("my")
console.log(inclu)

// 2- indexOf()
let Index = str.indexOf("name")
console.log(Index)

//3- startsWith()
let startw = str.startsWith("Hello")
console.log(startw)

//4- Slice() -used to extract a part of string by giving start and end index
let newstr = str.slice(9,20)
console.log(newstr)

// 5- toLowerCase()

console.log(str.toLowerCase())

// 6- to UpperCase
console.log(str.toUpperCase())

// 7- trim()  removes whitespaces from both sides of a string
let str1 ="   tesst   "
console.log(str1)
console.log(str1.trim())