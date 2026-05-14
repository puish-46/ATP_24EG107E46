//function to calculate the sum of n number of elements
function findSum(...nums){
    let sum=nums.reduce((acc,element)=>acc+element);  //reduce method to calculate sum
    console.log(sum)
}

//function call
findSum(10,20,30,40,50,60,70,80,90,100);