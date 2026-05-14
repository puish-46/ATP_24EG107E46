// Finding the biggest of three numbers using a function
function findBig(num1, num2, num3) {

    // Compare numbers
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

// Function call
console.log(findBig(10, 30, 20));
