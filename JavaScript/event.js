//1
function firstfunction(){
    console.log("Hello world")
}

//2
// function secondfunction(){
//     console.log("event two")
// }
 
// let btn= document.querySelector("button")
// btn.addEventListener("click", secondfunction)

//3
document.addEventListener("mousemove", handler)
function handler(){
    document.querySelector(".demo").innerHTML = Math.random()
}
function removeHandler(){
    document.removeEventListener("mousemove", handler)
}

//4
document.addEventListener("hello", function(data){
    console.log("hello world", data.detail)
})
 function callCustomMethod(){
     let event = new CustomEvent("hello", {
         detail:{name:"nik"}
     })
     document.dispatchEvent(event)
 }