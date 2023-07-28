// testing the code =
console.log("hello Lets start the GAME by Guessing the correct Random Number")

// generating random number

let ran = Math.floor((Math.random() *100)+1)
//console.log(ran)

let score =0;



for(let i=0; i<=50; i++){

    let num = prompt("guess a number");
    num=parseInt(num)
    console.log("the entered number is "+ num)

    if (num<ran){
        console.log("the entered number is 'less' than the generated one.")
    }
    else if(num > ran){
        console.log("the entered number is 'greater' then the generated one.")
    }
    else if(num == ran){
        console.log("You have entered the correct number")
        break;
    }

    score++ 
}

let marks = 100-score

if(marks >=95 ){
    console.log("    ")
    console.log("Your Rock !!")
    console.log("Your Score is "+ marks)
}
else if (marks >= 90 && marks< 95){
    console.log("    ")
    console.log("Need more attention")
    console.log("Your Score is "+ marks)
}
else if(marks < 90){
    console.log("    ")
    console.log("Work Hard")
    console.log("Your Score is "+ marks)
}