//nested object creation
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

//creating a copy of order by using deepshallo operator
let copyOrder=structuredClone(order);

//making changes in the copyOrder
copyOrder.customer.address.city="Rajasthan";
copyOrder.items[0].price=500;

//printing the both original and copied object
console.log(order);
console.log(copyOrder);