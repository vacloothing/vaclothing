// =====================================
// VA CLOTHING PRODUCT PAGE
// =====================================

// رقم المنتج من الرابط

const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

// ==========================
// المنتجات الأساسية
// ==========================

const defaultProducts = [

{
    id:1,
    name:"I WANT YOU FOREVER",
    price:420,
    image:"tw.jpeg",
    category:"Oversized"
},

{
    id:2,
    name:"BOXING OVERSIZED",
    price:420,
    image:"tb.jpeg",
    category:"Oversized"
}

];

// ==========================
// منتجات الأدمن
// ==========================

const adminProducts =
JSON.parse(localStorage.getItem("products")) || [];

// دمج المنتجات

const products = [...defaultProducts];

adminProducts.forEach(product=>{

    const exist = products.find(p=>

        p.name.toLowerCase()===product.name.toLowerCase()

    );

    if(!exist){

        products.push({

            id:product.id || Date.now()+Math.random(),

            name:product.name,

            price:Number(product.price),

            image:product.image,

            category:product.category,

            quantity:product.quantity || 1

        });

    }

});

// المنتج الحالي

const product = products.find(item=>item.id==productId);

// عناصر الصفحة

const image = document.getElementById("productImage");
const name = document.getElementById("productName");
const price = document.getElementById("productPrice");

// عرض المنتج

if(product){

    image.src = product.image;

    name.innerHTML = product.name;

    price.innerHTML = product.price + " EGP";

}else{

    alert("Product Not Found");

    window.location.href = "shop.html";

}

// المقاس

let selectedSize = "";

// اختيار المقاس

document.querySelectorAll(".sizes button").forEach(button=>{

    button.addEventListener("click",()=>{

        document.querySelectorAll(".sizes button").forEach(btn=>{

            btn.classList.remove("active-size");

        });

        button.classList.add("active-size");

        selectedSize = button.innerText;

    });

});

// إضافة للسلة

document.getElementById("buyNow").addEventListener("click",()=>{

    if(selectedSize===""){

        alert("Please Select Size");

        return;

    }

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    const exist = cart.find(item=>

        item.id==product.id &&
        item.size===selectedSize

    );

    if(exist){

        exist.quantity++;

    }else{

        cart.push({

            ...product,

            size:selectedSize,

            quantity:1

        });

    }

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    alert("✔ Product Added To Cart");

    window.location.href = "cart.html";

});