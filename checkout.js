// =====================================
// VA CLOTHING - CHECKOUT
// =====================================

const checkoutItems = document.getElementById("checkoutItems");
const checkoutTotal = document.getElementById("checkoutTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

// عرض المنتجات

function loadCheckout(){

    checkoutItems.innerHTML = "";

    total = 0;

    cart.forEach(item=>{

        total += item.price * item.quantity;

        checkoutItems.innerHTML += `

        <div class="checkout-item">

            <span>

            ${item.name} × ${item.quantity}

            </span>

            <span>

            ${item.price * item.quantity} EGP

            </span>

        </div>

        `;

    });

    checkoutTotal.innerHTML = total + " EGP";

}

loadCheckout();


// ==============================
// إرسال الطلب
// ==============================

function placeOrder(){

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const address = document.getElementById("address").value.trim();

    const size = document.getElementById("size").value;

    const payment = document.getElementById("payment").value;

    const note = document.getElementById("note").value.trim();

    if(name=="" || phone=="" || address==""){

        alert("Please Complete All Required Fields");

        return;

    }

    let products = "";

    cart.forEach(item=>{

        products += `• ${item.name} x${item.quantity} - ${item.price * item.quantity} EGP\n`;

    });

    const message =

`🛍️ VA CLOTHING ORDER

👤 Name: ${name}

📱 Phone: ${phone}

📍 Address: ${address}

📏 Size: ${size}

💳 Payment: ${payment}

📝 Notes:
${note}

------------------------

${products}

------------------------

💰 TOTAL: ${total} EGP`;

    const whatsapp =
`https://wa.me/201102737753?text=${encodeURIComponent(message)}`;

let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push({

id: Date.now(),

name,

phone,

address,

size,

payment,

note,

total,

status: "Pending"

});



localStorage.setItem("orders",JSON.stringify(orders));
    window.open(whatsapp,"_blank");

    localStorage.removeItem("cart");

    setTimeout(()=>{

        window.location.href="index.html";

    },1000);

}