console.log("OTP Sent Successfully");

// Variable to count from 10 to 1
let countDown = 11;

// Using setInterval to print countDown value within 10 sec
let interval = setInterval(() => {
    countDown--;
    console.log(countDown);
    if (countDown === 0) {
        clearInterval(interval);
        console.log("Resend OTP");
    }
}, 1000);
