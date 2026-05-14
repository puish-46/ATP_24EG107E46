// Nested object creation
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

// Creating a shallow copy of user using spread operator
let copyUser = { ...user };

// Making changes in the copyUser
copyUser.name = "puish";
copyUser.preferences.theme = "white";

// Printing both original and copied object
console.log(user);
console.log(copyUser);
