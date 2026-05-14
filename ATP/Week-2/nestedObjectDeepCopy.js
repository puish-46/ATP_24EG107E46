// Nested object creation
const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

// Creating a deep copy of order using structuredClone
let copyOrder = structuredClone(order);

// Making changes in the copyOrder
copyOrder.customer.address.city = "Rajasthan";
copyOrder.items[0].price = 500;

// Printing both original and copied object
console.log(order);
console.log(copyOrder);
