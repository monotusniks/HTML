// HTML file associated to it is - Practice.html
// syntax - arr.methodName(function (currentItem, index, actualArray) {

//})

let arr=[2,3,5,7,9,10]
// Map()

let newArray=arr.map(function(currentItem, index, array){
    console.log("curremt item "+ currentItem + " index is "+ index+ " array is "+array)
    return currentItem*2
})
console.log(arr)
console.log(newArray)

//filter
let fillt = arr.filter(function(currentItem, index, array){
    return currentItem<7
})
console.log(fillt)

//every()
let age = [19, 21, 23, 25, 28]
let checkage= age.every(function(currentItem){
    return currentItem > 18
})
console.log(checkage)

// some() , it also works as every, but rather than checking for all the values, it stops after geting the first match.

// sort()
var names =["three", "one", "four", "two"]
console.log(names.sort())

// sorting numbers is different
let nub =[10,34,55,32,56,70]
let sortednub = nub.sort(function(a,b){
    return a-b //assending & b-a for decending
})
console.log(sortednub)

//reduce() (basically sum all the element of array)
// have a diff syntax - array.reduce(function(total, currentVlaue, index, array){

//}, initalValue)

let numb = [1,2,3]
let sum = numb.reduce(function(total, currentItem){
    return total+currentItem
},0)
console.log(sum)

//forEach() it not have a return type
numb.forEach(function(currentItem){
    console.log(currentItem)
})

//********************************* */