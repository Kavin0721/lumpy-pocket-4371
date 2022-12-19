import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import sidebar from "../components/sidebar.js";

const navbar_div = document.getElementById('navbar')
navbar_div.innerHTML = navbar();

const footer_div = document.getElementById('footer')
footer_div.innerHTML = footer();

const sidebar_div = document.getElementById('sidebar')
sidebar_div.innerHTML = sidebar();





/*--------------------------------------------- to hide and show the sidebar---------------------------------------------*/

const humburger_menu = document.querySelector('#n_left>i')

const sidebar_lines = document.querySelector('.sidebar-div-main>i')



humburger_menu.onclick = () => {
    sidebar_div.style.display = ''
}

sidebar_lines.onclick = () => {
    sidebar_div.style.display = 'none';
}

// document.onclick = (event) => {
//   if(event.target  !== 'humburger_menu' && event.target  !== 'sidebar_lines'){
//     sidebar_div.style.display = '';
//   }
// }
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

let getdata=async()=>{
    let res=await fetch("http://localhost:3000/admincourse")
    let data=await res.json()
    appendsdata(data)
    console.log(data)
}
getdata()


let con=document.getElementById("container")
let appendsdata=(data)=>{
    con.innerHTML=null

    data.forEach(({image,name,discription,price}) => {
 
        let div=document.createElement("div")
        let i=document.createElement("img")
        i.src=image
        let n=document.createElement("h3")
        n.innerHTML=name
        let d=document.createElement("p")
        d.innerHTML=discription
        let hr=document.createElement("hr")
        let p=document.createElement("h4")
        p.innerHTML=`$ ${price}`
        let emi=document.createElement("h5")
        emi.innerHTML=`EMI starting at $ ${Math.ceil(price/12)} Per Month`
        let l=document.createElement("span")
        l.innerHTML="Learn More"
        let a=document.createElement("button")
        a.innerHTML="Add To Cart"
        console.log(p.innerHTML)
        // let ed=document.createElement("button")
        // ed.innerHTML="Edit"
        // ed.onclick=()=>{
        //     editedata({image,name,discription,price})
        // }

        // let de=document.createElement("button")
        // de.innerHTML="Delete"
        div.append(i,n,d,hr,p,emi,l,a)
        con.append(div)
       
    });
}
console.log("dheeraj")

document.querySelector('#n_right>i:last-child').addEventListener('click',login);

function login(){
  console.log('function check')
  window.location.href='login.html'
}

