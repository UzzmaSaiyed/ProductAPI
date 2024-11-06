let product = [
    {
        "name": "Laptop",
        "quantity": 15,
        "price": 120000
    },
    {
        "name": "Smartphone",
        "quantity": 30,
        "price": 75000
    },
    {
        "name": "Headphones",
        "quantity": 50,
        "price": 8000
    },
    {
        "name": "Wireless Mouse",
        "quantity": 100,
        "price": 2500
    },
    {
        "name": "Keyboard",
        "quantity": 75,
        "price": 4500
    },
    {
        "name": "Monitor",
        "quantity": 40,
        "price": 30000
    },
    {
        "name": "USB Drive",
        "quantity": 200,
        "price": 1500
    },
    {
        "name": "External Hard Drive",
        "quantity": 25,
        "price": 10000
    },
    {
        "name": "Tablet",
        "quantity": 20,
        "price": 45000
    },
    {
        "name": "Webcam",
        "quantity": 60,
        "price": 5500
    }
];

module.exports = product;
function displayProducts() {
    const output = document.getElementById('output');
    output.textContent = JSON.stringify(product, null, 2);
}