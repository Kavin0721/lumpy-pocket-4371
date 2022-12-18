//navbar and footer importing


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
/*--------------------------------------------- to hide and show the sidebar end ---------------------------------------------*/




/*--------------------------------------------- down arrow ---------------------------------------------------------*/

let angle_arrow_1 = document.querySelector('#sidebar-div-1 a+i')
let angle_arrow_2 = document.querySelector('#sidebar-div-2 a+i')
let angle_arrow_3 = document.querySelector('#sidebar-div-3 a+i')
let drop_down_div_1 = document.querySelector('.sidebar-subdiv-1')
let drop_down_div_2 = document.querySelector('.sidebar-subdiv-2')
let drop_down_div_3 = document.querySelector('.sidebar-subdiv-3')



/*----------------------------------------------------- down arrow end -----------------------------------------------------*/


/*------------------------------- redirecting tab -------------------------------*/

const homeReturn = document.querySelector('#n_left>img')
homeReturn.onclick = () => {
    window.location.href = "index.html"
}
/*------------------------------- redirecting tab end-------------------------------*/


//the selected items will be contain in data-intern object 

//Fetching data from localhost
const url="http://localhost:3000/Internships";
 
let local=async ()=>{
    let res= await fetch(url)
    let data =await res.json();
     displayJob(data);
    // console.log(data);
}
local();
//Select tag
let searchtype = document.getElementById('types')
searchtype.onchange = () => {
    let pquery = document.getElementById('types').value;
        showPref(pquery);
    }
    
    const showPref = async (pquery) => {
        let res = await fetch(`${url}?Mode=${pquery}`)
        res = await res.json();
        displayJob(res)
    
    }

// City input function
let searchCity = document.getElementById('cityname')
searchCity .oninput = () => {
let cquery = document.getElementById('cityname').value;
    showCity(cquery);
}

const showCity = async (cquery) => {
    let res = await fetch(`${url}?city=${cquery}`)
    res = await res.json();
    displayJob(res)

}





// Search input function 
let searchBtn = document.getElementById('btnSearch')
searchBtn.onclick = () => {
let query = document.getElementById('search').value;
    showSearch(query);
}

const showSearch = async (query) => {
    let res = await fetch(`${url}?courses=${query}`)
    res = await res.json();
    displayJob(res)
//     console.log(res)
// console.log(query);

}
 
// let data=JSON.parse(localStorage.getItem("data-intern"))||[];
// window.addEventListener("load",function(){
//   display(progData);
// });

function displayJob(data){
    document.getElementById("joblist").innerHTML=" ";
    data.forEach(function(ele,index){
        let div=document.createElement("div");
        div.setAttribute("class","col interncol")
        let img=document.createElement("img")
        img.src=ele.Logo;
        let title =document.createElement("h4");
        title.innerText=`${ele.Skill} from- ${ele.program}` //element's.name;
        let desc=document.createElement("p");
        desc.innerText=`${ele.duration},${ele.Mode},${ele.city}` //element's.description;
        let price=document.createElement("h5");
        price.innerText=`₹${ele.pay}` //element's.price;
        
       
        let btn2=document.createElement("button");
        btn2.innerHTML="APPLY";
        btn2.setAttribute("class"," btn Apply btn-danger");
        btn2.addEventListener("click",function(){
        
            Addi(ele,index);
           
        });
        div.append(img,title,desc,price,btn2);
        document.getElementById("joblist").append(div);
    });
 }

 let ApplyData=JSON.parse(localStorage.getItem("Apply-list"))||[];

 
  function  Addi(elem)
  {
    ApplyData.push(elem);
        localStorage.setItem("Apply-list",JSON.stringify(ApplyData));
 }