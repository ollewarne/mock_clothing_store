const cart = document.getElementById("cart");
const capItem = document.getElementById("capItem");
const pantsItem = document.getElementById("pantsItem");
const whiteShirtItem = document.getElementById("whiteShirtItem");
const greenShirtItem = document.getElementById("whiteShirtItem");

let capCount = 0;

capItem.querySelector(".addToCart").addEventListener("click", (e) => {
    let newItem = document.createElement("li");
    newItem.textContent = "hello world";
    if (capCount !== 0) {
        cart.replaceChildren("");
        newItem.textContent = `cap ${capCount}`;
        cart.appendChild(newItem);
    } else {
        cart.appendChild(newItem);
    }
    capCount++
});
