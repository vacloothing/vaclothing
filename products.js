// ==========================
// VAC PRODUCTS MANAGEMENT
// ==========================


let products = JSON.parse(localStorage.getItem("products")) || [];


const form = document.getElementById("productForm");
const table = document.getElementById("productsTable");

let editIndex = null;



// Display Products

function displayProducts(){

    table.innerHTML = "";


    products.forEach((product,index)=>{


        table.innerHTML += `

        <tr>

            <td>
                <img src="${product.image || 'https://via.placeholder.com/60'}">
            </td>


            <td>
                ${product.name}
            </td>


            <td>
                ${product.category}
            </td>


            <td>
                ${product.price} EGP
            </td>


            <td>
                ${product.quantity}
            </td>


            <td>

                <button 
                class="action-btn edit"
                onclick="editProduct(${index})">
                Edit
                </button>


                <button 
                class="action-btn delete"
                onclick="deleteProduct(${index})">
                Delete
                </button>

            </td>


        </tr>

        `;


    });

}



displayProducts();




// Add / Update Product

form.addEventListener("submit",function(e){

    e.preventDefault();


   const product = {

    id:
    editIndex === null
        ? Date.now()
        : products[editIndex].id,

    name:
    document.getElementById("productName").value.trim(),

    price:
    Number(document.getElementById("productPrice").value),

    quantity:
    Number(document.getElementById("productQuantity").value),

    category:
    document.getElementById("productCategory").value,

    image:
    document.getElementById("productImage").value.trim()

};



    if(editIndex === null){

    products.push(product);

}else{

    products[editIndex] = {

        ...products[editIndex],

        ...product

    };

    editIndex = null;

}


    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );


    form.reset();

    displayProducts();


});





// Delete Product

function deleteProduct(index){


    products.splice(index,1);


    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );


    displayProducts();


}





// Edit Product

function editProduct(index){


    const product = products[index];


    document.getElementById("productName").value =
    product.name;


    document.getElementById("productPrice").value =
    product.price;


    document.getElementById("productQuantity").value =
    product.quantity;


    document.getElementById("productCategory").value =
    product.category;


    document.getElementById("productImage").value =
    product.image;


    editIndex = index;


    window.scrollTo({

        top:0,
        behavior:"smooth"

    });


}