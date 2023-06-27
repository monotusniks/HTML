// HTML file associated to it is - Practice.html

let arr = ["one", "two"]
//previously we used to do- (for array destructuring)
let x= arr[0]
let y= arr[1]
console.log(x)
console.log(y)
console.log("old vs new")

//but after using destructuring, we can write it as:
let[com1, com2] = arr
console.log(com1)
console.log(com2)

// obj destructuring
let object1={
    name: "nimish",
    date: "27/06",
    Number: 123
}

console.log(object1.name) //old way

let {name, date, title}= object1  //new way - destructuring
console.log(name)
console.log(date)
console.log(Number)