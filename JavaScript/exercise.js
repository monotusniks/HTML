//game testing

console.log("hello Lets start the GAME by Guessing the correct Random Number between 1-100")
const uname = prompt("Plese enter username to continue")
// generating random number

let ran = Math.floor((Math.random() * 100) + 1)
//console.log(ran)

let score = 0;



for (let i = 0; i <= 50; i++) {

  let num = prompt("guess a number b/w 1-100");
  num = parseInt(num)
  console.log("the entered number is " + num)

  if (num < ran) {
    console.log("the entered number is 'less' than the generated one.")
  }
  else if (num > ran) {
    console.log("the entered number is 'greater' then the generated one.")
  }
  else if (num == ran) {
    console.log("You have entered the correct number")
    break;
  }

  score++
}

let marks = 100 - score

if (marks >= 95) {
  console.log("    ")
  console.log("You Rock !!")
  console.log("Hey " + uname + " Your Score is " + marks)
}
else if (marks >= 90 && marks < 95) {
  console.log("    ")
  console.log("Need more attention")
  console.log("Hey " + uname + " Your Score is " + marks)
}
else if (marks < 90) {
  console.log("    ")
  console.log("Work Hard")
  console.log("Hey " + uname + " Your Score is " + marks)
}
