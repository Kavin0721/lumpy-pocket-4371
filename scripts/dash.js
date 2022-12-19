//Navbar import

import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import sidebar from "../components/sidebar.js";
import payment from "../components/payment.js";

const navbar_div = document.getElementById('navbar')
navbar_div.innerHTML = navbar();

const footer_div = document.getElementById('footer')
footer_div.innerHTML = footer();

const sidebar_div = document.getElementById('sidebar')
sidebar_div.innerHTML = sidebar();

const payment_div = document.getElementById('payment')
payment_div.innerHTML = payment();





/*--------------------------------------------- to hide and show the sidebar---------------------------------------------*/

const humburger_menu = document.querySelector('#n_left>i')

const sidebar_lines = document.querySelector('.sidebar-div-main>i')



humburger_menu.onclick = () => {
    sidebar_div.style.display = ''
}

sidebar_lines.onclick = () => {
    sidebar_div.style.display = 'none';
}
/*--------------------------------------------- to hide and show the sidebar end ---------------------------------------------*/




/*--------------------------------------------- down arrow ---------------------------------------------------------*/

let angle_arrow_1 = document.querySelector('#sidebar-div-1 a+i')
let angle_arrow_2 = document.querySelector('#sidebar-div-2 a+i')
let angle_arrow_3 = document.querySelector('#sidebar-div-3 a+i')
let drop_down_div_1 = document.querySelector('.sidebar-subdiv-1')
let drop_down_div_2 = document.querySelector('.sidebar-subdiv-2')
let drop_down_div_3 = document.querySelector('.sidebar-subdiv-3')


angle_arrow_1.onclick = () => {
    console.log('hello');
    drop_down_div_1.style.display = drop_down_div_1.style.display === 'none' ? '' : 'none';
}

    angle_arrow_2.onclick = () => {
        console.log('hie');
        drop_down_div_2.style.display = drop_down_div_2.style.display === 'none' ? '' : 'none';
    }

    angle_arrow_3.onclick = () => {
        console.log('hie');
        drop_down_div_3.style.display = drop_down_div_3.style.display === 'none' ? '' : 'none';
    }
/*----------------------------------------------------- down arrow end -----------------------------------------------------*/


/*------------------------------- redirecting tab -------------------------------*/

const homeReturn = document.querySelector('#n_left>img')
homeReturn.onclick = () => {
    window.location.href = "index.html"
}
/*------------------------------- redirecting tab end-------------------------------*/




//the selected items will be contain in data-intern object 

//Fetching data from localhost
// const url="http://localhost:3000/courses";
 
// let local=async ()=>{
//     let res= await fetch(url)
//     let data =await res.json();
//      display(data);
//     console.log(data);
// }
// local();
// document.querySelector("#filter").addEventListener("change",PSort);
// function PSort(){
//   let selected=document.querySelector("#filter").value;
  
//   let filterlist=addedTask.filter(function(ele){
//     return ele.pay==selected;
//   });
//   displaytable(filterlist);
// }
// document.getElementById("").addEventListener("change",function())

// function filterHTL(){

// }

let data=JSON.parse(localStorage.getItem("Apply-list"))||[];
window.addEventListener("load",function(){
  display(data);
});
let x=0,y=0,z=0;
function display(data){
    document.getElementById("prod").innerHTML=" ";
    data.forEach(function(ele,index){
        let div=document.createElement("div");
        div.setAttribute("class","col interncol")
        let img=document.createElement("img")
        img.src=ele.Logo;
        let title =document.createElement("h5");
        title.innerText=ele.Skill//element's.name;
        let price=document.createElement("p");
        price.innerText=`₹${ele.pay} `//element's.price;
        
        let btn1=document.createElement("button");
        btn1.innerHTML="BACKOUT";
        btn1.setAttribute("class","btn backout btn-outline-danger");
        btn1.addEventListener("click",function(){

            Dele(index);
        });
        
        div.append(img,title,price,btn1);
        document.getElementById("prod").append(div);
        let amount=document.getElementById("amount");
        x=x+(+(ele.pay));
   amount.innerText=`₹${x}`
   let gst=document.getElementById("gstpercent");
   y=((x/100)*9);
   gst.innerText=`₹${y}`;
   let gst1=document.getElementById("gstpercent1");
   z=((x/100)*9);
   gst1.innerText=`₹${z}`;
   let total=document.getElementById("total");
   total.innerHTML=`₹${(x+y+z)}`;

    });
   // displayig the RHS total-amount  
   
 }

// Checkout code

  function Dele(index)
  {  
        data.splice(index,1); 
        localStorage.setItem("Apply-list",JSON.stringify(data))
        display(data);
   }

   document.querySelector('#n_right>i:last-child').addEventListener('click',login);

function login(){
  console.log('function check')
  window.location.href='login.html'
}

// document.getElementById('main-cont').addEventListener('click',)

  