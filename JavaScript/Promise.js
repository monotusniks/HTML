function checkIsSuccess(data){
    return new Promise(function(resolve, reject){
        if(data === "success"){
        return resolve("successfully executed")
        }
        else {
            return reject("Unsuccessfully executed")
        }

    })
}
checkIsSuccess("success").then(function(result){
    console.log(result)
})
.catch(function(error){
    console.error(error)
})

// fetching data from GIT (Asynchronus call)
fetch('https://api.github.com/users/monotusniks').then(function(result){
    console.log(result)
})