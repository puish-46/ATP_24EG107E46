//creating the object of user
let user = {
    name: "Ravi",
    city: "Hyderabad"
};

//creating a copy of user object using spread operator
let copyUser={...user, age:25}

//printing both the objects
console.log(user)
console.log(copyUser)