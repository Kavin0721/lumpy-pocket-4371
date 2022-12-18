let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else
    sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}


let product_data = [];
//get Products
const getProduct = async () => {
  try {
    const res = await fetch("http://localhost:3000/admincourse")

    const data = await res.json();
    product_data = data;

  } catch (error) {
    console.log("error", error);
  }
}
getProduct();


let users_data = [];
//get Users
const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/users")

    const data = await res.json();
    users_data = data;

  } catch (error) {
    console.log("error", error);
  }
}
getUsers();



import orders from "../components/orders.js"
import products from "../components/products.js"
import users from "../components/users.js"
import add_product from "../components/add_product.js"
import dashboard from "../components/dashboard.js";

// let order_data = [{
//   id: 1,
//   product_id: 1,
//   quantity: 2,
//   price: 120,
//   total_price: 240,
//   shipping_address: "3rd Steat Model Town",
//   delivered: false
// },
// {
//   id: 1,
//   product_id: 1,
//   quantity: 2,
//   price: 120,
//   total_price: 240,
//   shipping_address: "3rd Steat Model Town",
//   delivered: false
// }
//   ,
// {
//   id: 1,
//   product_id: 1,
//   quantity: 2,
//   price: 120,
//   total_price: 240,
//   shipping_address: "3rd Steat Model Town",
//   delivered: false
// },
// {
//   id: 1,
//   product_id: 1,
//   quantity: 2,
//   price: 120,
//   total_price: 240,
//   shipping_address: "3rd Steat Model Town",
//   delivered: false
// }];


const data_div = document.getElementById("data_div");
//dashboard(order_data, data_div);

// document.getElementById("dashboard").onclick = () => {
//   data_div.innerHTML = null;
//   orders(order_data, data_div);
// }

document.getElementById("orders").onclick = () => {
  data_div.innerHTML = null;
  orders(order_data, data_div);
}

document.getElementById("products").onclick = () => {
  data_div.innerHTML = null;
  products(product_data, data_div);
}
document.getElementById("users").onclick = () => {
  data_div.innerHTML = null;
  users(users_data, data_div);
}

document.getElementById("add_product").onclick = () => {
  data_div.innerHTML = null;
  data_div.innerHTML = add_product();

  product_form = document.getElementById("add_product_form");
  console.log(product_form)

  //add product click
  product_form.onsubmit = (e) => {
    e.preventDefault();
    alert("clicked")
    addProduct();


  }
}



//add product
let product_form;
const addProduct = async () => {
  let image = product_form.title.value;
  let name = product_form.brand.value;
  let price =+product_form.price.value;
  let discription = product_form.discount.value;
  let obj={image,name,discription,price}
    //data.push(obj)
    console.log(obj)
    let res= await fetch("http://localhost:3000/admincourse",{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    })


}

