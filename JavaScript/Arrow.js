// HTML file associated to it is - event_index.html

// Set Timeout and Set interval are also a part of this file.
 
//normal function
function abc(){
    console.log("hello there")
}
abc()
 
// using Arrow function (=>)
 
const efg = ()=> console.log("arrow function")
efg()

// when to user {} brackets

//how we write normally
function sum(data){
    let sum = data +10
    return sum
}
console.log(sum(3))

// writing using arrow with {}
 const ads =(data1, data2)=>{
     let ads = data1+data2+12
     return ads
 }
 console.log(ads(5,3))

 // to reduct this statement more we can write - 

 const sup = (da1,da2)=> da1+da2+15
 console.log(sup(1,2))

 //for an array
 var arr =[1,2,3,4]
 let newArr=arr.map((item)=>item*2)
 console.log(newArr) 

 // problem solved by arraow function
  // existing method
  let obj={
      name:"Nikhil",
      getName:function(){
          console.log(this.name)
          function fullName(){
              console.log(this.name)
              console.log("full name is"+ this.name) //could not get value from this.name here
          }
          fullName()
      }
  }
  obj.getName()

  console.log("")

  // solution
  
  let obj1={
    name1:"Nimish",
    getName:function(){
        console.log(this.name1)
        fullName=()=>{                    // added arrow function here
            console.log(this.name1)
            console.log("full name is"+ this.name1) //could not get value from this.name here
        }
        fullName()
    }
}
obj1.getName()

/************************************************************************************************/
 //setTimeout()
 console.log("")

 let timerId = window.setInterval(function(){
     console.log("hello")
 }, 2000)             //value in millisecond
 console.log(timerId)
 clearTimeout(timerId)

 // setInterval

 let intervalId = window.setInterval(function(){
     console.log("hello")
 }, 5000)
 clearInterval(intervalId)