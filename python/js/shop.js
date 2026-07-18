// ======================================
// VA CLOTHING SHOP
// ======================================

// ==========================
// المنتجات الأساسية
// ==========================

const defaultProducts = [



{
    id:2,
    name:"BOXING OVERSIZED",
    price:420,
    image:"tb.jpeg",
    category:"Oversized"
}

];

// ==========================
// المنتجات المضافة من لوحة التحكم
// ==========================

const adminProducts =
JSON.parse(localStorage.getItem("products")) || [];

// ==========================
// دمج المنتجات بدون تكرار
// ==========================

const products = [...defaultProducts];

adminProducts.forEach(product=>{

    const exist = products.find(item=>

        item.name.toLowerCase() ===
        product.name.toLowerCase()

    );

    if(!exist){

        products.push({

            id:
            product.id || Date.now()+Math.random(),

            name:product.name,

            price:Number(product.price),

            image:product.image,

            category:product.category,

            quantity:
            product.quantity || 1

        });

    }

});

// ==========================
// مكان عرض المنتجات
// ==========================

const container =
document.getElementById("products");

// لو الـ id مختلف

if(!container){

    console.error("Products container not found.");

}
// ==========================
// عرض المنتجات
// ==========================

function renderProducts(){

    if(!container) return;

    container.innerHTML = "";

    if(products.length === 0){

        container.innerHTML = `
        <h2 style="text-align:center;">
            No Products Found
        </h2>
        `;

        return;

    }

    products.forEach(product=>{

        container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h2>${product.name}</h2>

            <p>${product.price} EGP</p>

            <div class="product-buttons">

                <button
                    class="view-btn"
                    onclick="goToProduct(${product.id})">

                    View Product

                </button>

                <button
                    class="cart-btn"
                    onclick="addToCart(${product.id})">

                    Add To Cart

                </button>

            </div>

        </div>

        `;

    });

}

// تشغيل أول مرة

renderProducts();
// ==========================
// البحث
// ==========================

const search = document.getElementById("search");

if(search){

    search.addEventListener("keyup",function(){

        const value = this.value.toLowerCase();

        document.querySelectorAll(".product-card").forEach(card=>{

            const title = card
                .querySelector("h2")
                .innerText
                .toLowerCase();

            card.style.display =
                title.includes(value)
                ? "block"
                : "none";

        });

    });

}

// ==========================
// إضافة للسلة
// ==========================

function addToCart(id){

    const product = products.find(item=>item.id==id);

    if(!product){

        alert("Product Not Found");

        return;

    }

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    const exist =
    cart.find(item=>item.id==id);

    if(exist){

        exist.quantity++;

    }else{

        cart.push({

            ...product,

            quantity:1

        });

    }

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    alert("Product Added To Cart ✔");

}

// ==========================
// صفحة المنتج
// ==========================

function goToProduct(id){

    localStorage.setItem(

        "selectedProduct",

        id

    );

    window.location.href =
    "product.html?id=" + id;

}