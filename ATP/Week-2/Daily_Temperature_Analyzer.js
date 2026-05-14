//array of temperatures with the values
const temperatures = [32, 35, 28, 40, 38, 30, 42]

//using filter for temperatures above 35
const filter=temperatures.filter((element)=>element>35)
console.log(filter)

//map to convet temperature from celsius to fahrenheit  
const fahrenheit=temperatures.map((element)=>element=((9/5)*element)+32)
console.log(fahrenheit)

//reduce method to calculate the average of the temperature
let average=temperatures.reduce((acc,element)=>acc+element)
console.log(average/(temperatures.length))


//find method to find the temperature above 40
const filter2=temperatures.find((element)=>element>40)
console.log(filter2)

//findIndex method to find the index of temperature of 28
const index=temperatures.findIndex((element,index)=>element==28)
console.log(index)