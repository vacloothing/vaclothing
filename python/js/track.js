function trackOrder(){

let id=document.getElementById("orderId").value;

let orders=

JSON.parse(localStorage.getItem("orders")) || [];

let order=

orders.find(item=>item.id==id);

if(order){

document.getElementById("result").innerHTML=

`

<h2>${order.status}</h2>

<p>${order.name}</p>

`;

}

else{

document.getElementById("result").innerHTML=

"Order Not Found";

}

}