// Creating the object of user
let user = {
    name: "Ravi",
    city: "Hyderabad"
};

// Creating a copy of user object using spread operator
let copyUser = { ...user, age: 25 };

// Printing both the objects
console.log(user);
console.log(copyUser);
