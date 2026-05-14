// Promise
console.log("I will send 10000 tomorrow");

let futureCondition = true;

// Promise producer (creates promise)
const promiseObj = new Promise((fulfilled, rejected) => {
    setTimeout(() => {
        if (futureCondition === true) {
            fulfilled("I have received 10000");
        } else {
            rejected("I have not received 10000");
        }
    }, 5000);
});

// Promise consumer
promiseObj
.then((message) => console.log(message))
.catch((errorMessage) => console.log(errorMessage));
