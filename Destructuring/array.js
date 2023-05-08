//Destructing in array
let arr = ["hi" ,1 , 2 , "amit"]

//Destructing is a convenient way to extract values 
//Skip the value using comma , get value variable , default value (e ='hlo') 
let [,a,,d,e='hlo'] = arr

console.log(a,d,e)