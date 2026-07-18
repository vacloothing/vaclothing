// =====================================
// VA CLOTHING - CART
// =====================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");

// ==============================
// Render Cart
// ==============================

function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `
        <div class="empty-cart">
            <h2>Your Cart Is Empty</h2>
            <p>Looks like you haven't added anything yet.</p>
            <a href="shop.html" class="continue-btn">
                Continue Shopping
            </a>
        </div>
        `;

        subtotal.innerHTML = "0 EGP";
        total.innerHTML = "0 EGP";

        return;
    }

    cartItems.innerHTML = "";

    let finalPrice = 0;

    cart.forEach((item, index) => {

        finalPrice += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="">

            <div class="item-info">

                <h3>${item.name}</h3>

                <p>${item.price} EGP</p>

            </div>

            <div class="item-actions">

                <button onclick="decrease(${index})">-</button>

                <span>${item.quantity}</span>

                <button onclick="increase(${index})">+</button>

                <button class="remove-btn"
                onclick="removeItem(${index})">

                <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        </div>

        `;

    });

    subtotal.innerHTML = finalPrice + " EGP";
    total.innerHTML = finalPrice + " EGP";

}

renderCart();


// ==============================
// Increase Quantity
// ==============================

function increase(index){

    cart[index].quantity++;

    saveCart();

}


// ==============================
// Decrease Quantity
// ==============================

function decrease(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }

    saveCart();

}


// ==============================
// Remove Product
// ==============================

function removeItem(index){

    cart.splice(index,1);

    saveCart();

}


// ==============================
// Save
// ==============================

function saveCart(){

    localStorage.setItem("cart",JSON.stringify(cart));

    renderCart();

}
// ==============================
// Checkout Button
// ==============================

const checkoutBtn = document.querySelector(".checkout-btn");

if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {

        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        window.location.href = "checkout.html";

    });
}