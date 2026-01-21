let total = 0;

function addToCart(productName, price) {
    const cartItems = document.getElementById("cartItems");
    const listItem = document.createElement("li");

    listItem.textContent = `${productName} - ₹${price}`;
    cartItems.appendChild(listItem);

    total += price;
    document.getElementById("totalAmount").textContent = `Total: ₹${total}`;
}
