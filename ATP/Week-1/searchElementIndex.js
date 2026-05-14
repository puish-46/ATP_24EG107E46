// Arrow function to search for an element and return its index
const searchElement = (arr, element) => {

    for (let i = 0; i < arr.length; i++) {

        // Check if element found
        if (arr[i] === element) {
            return i;
        }
    }

    return "not found";
}

// Function call
console.log(searchElement([10, 20, 30, 40], 30));
console.log(searchElement([10, 20, 30, 40], 50));
