if(localStorage.getItem("admin")!="true"){

window.location.href="login.html";

}
// ====================================
// VA CLOTHING ADMIN DASHBOARD
// ====================================

// بيانات الطلبات (مؤقتًا)

let orders = JSON.parse(localStorage.getItem("orders")) || [];

// عناصر الصفحة

const ordersTable = document.getElementById("ordersTable");
const ordersCount = document.getElementById("ordersCount");
const revenue = document.getElementById("revenue");
const productsCount = document.getElementById("productsCount");
// ==========================
// عرض الطلبات
// ==========================

function renderOrders(){

    ordersTable.innerHTML = "";

    let totalRevenue = 0;

    if(orders.length === 0){

        ordersTable.innerHTML = `
        <tr>
            <td colspan="4">
                No Orders Yet
            </td>
        </tr>
        `;

    }

    orders.forEach((order,index)=>{

        totalRevenue += order.total;

        ordersTable.innerHTML += `

        <tr>

        <td>${order.name}</td>

        <td>${order.phone}</td>

        <td>${order.total} EGP</td>

        <td>

        <select onchange="changeStatus(${index},this.value)">

        <option ${order.status=="Pending"?"selected":""}>Pending</option>

        <option ${order.status=="Preparing"?"selected":""}>Preparing</option>

        <option ${order.status=="Shipped"?"selected":""}>Shipped</option>

        <option ${order.status=="Delivered"?"selected":""}>Delivered</option>

        </select>

        </td>

        </tr>

        `;

    });

    ordersCount.innerHTML = orders.length;

    revenue.innerHTML = totalRevenue + " EGP";
const products = JSON.parse(localStorage.getItem("products")) || [];
productsCount.innerHTML = products.length + 3;
}

renderOrders();


// ==========================
// تغيير حالة الطلب
// ==========================

function changeStatus(index,status){

    orders[index].status = status;

    localStorage.setItem("orders",JSON.stringify(orders));

}


// ==========================
// حذف كل الطلبات
// ==========================
function clearOrders(){

    if(confirm("Delete All Orders?")){

        orders = [];

        localStorage.removeItem("orders");

        renderOrders();

    }

}
