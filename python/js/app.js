// ===============================
// VA Clothing
// Main JavaScript
// ===============================

// Loader

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

// Sticky Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.9)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";
        header.style.padding = "18px 8%";

    }

    else {

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";
        header.style.padding = "22px 8%";

    }

});

// Smooth Scroll

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Product Hover Light

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background =

        `radial-gradient(circle at ${x}px ${y}px,#202020,#111)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#111";

    });

});

// Fade Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.box,.banner,.featured").forEach(el=>{

observer.observe(el);

});

console.log("VA Clothing Loaded Successfully");
// ===============================
// Toast Notification
// ===============================

function showToast(message){

let toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},300);

},3000);

}