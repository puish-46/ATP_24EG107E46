// Object for cart items
const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Filter method to filter and get only in-stock products
const inStock = cart.filter((item) => item.inStock === true);
console.log(inStock);

// Map method to create a new array with {name, totalPrice}
const bill = cart.map((item) => ({ name: item.name, totalPrice: item.price * item.quantity }));
console.log(bill);

// Reduce method to calculate the grand total of cart value
const totalPrice = cart.reduce((acc, cartObj) => acc + (cartObj.price * cartObj.quantity), 0);
console.log(totalPrice);

// Find method to get details of "Mouse"
const item = cart.find((item) => item.name === "Mouse");
console.log(item);

// FindIndex method to find the index of "Keyboard"
const itemIndex = cart.findIndex((item) => item.name === "Keyboard");
console.log(itemIndex);
