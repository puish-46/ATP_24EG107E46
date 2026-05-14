console.log("OTP Sent Successfully");

//Variable to count from 10 to 1
countDown=11;

//Using setInterval print countDown value within 10sec
let interval=setInterval(()=>{
    countDown--;
    console.log(countDown);
    if(countDown==0){
        clearInterval(interval);
        console.log("resend otp");
    }
},1000);


