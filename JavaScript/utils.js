// here we write our resuable method.

export const PI_DATA = 3.14 // suppose the name changes form Pi to PI_Data

export function add(a,b){
    console.log(a+b)
}

export{PI_DATA as PI} // this is called export with allias