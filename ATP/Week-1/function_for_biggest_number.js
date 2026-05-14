//finding biggest of three numbers using function
function findBig(num1, num2, num3) {

    // compare numbers
    if (num1 > num2 && num1 > num3) {
        return num1;
    } 
    else if (num2 > num3) {
        return num2;
    } 
    else {
        return num3;
    }
}

//function call
console.log(findBig(10, 30, 20));