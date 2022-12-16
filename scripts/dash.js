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
        let title =document.createElement("h4");
        title.innerText=`${ele.Skill} from- ${ele.program}` //element's.name;
        let desc=document.createElement("p");
        desc.innerText=`${ele.duration},${ele.Mode},${ele.city}` //element's.description;
        let price=document.createElement("h5");
        price.innerText=`₹${ele.pay} `//element's.price;
        
        let btn1=document.createElement("button");
        btn1.innerHTML="BACKOUT";
        btn1.setAttribute("class","btn btn-outline-danger");
        btn1.addEventListener("click",function(){

            Dele(index);
        });
        
        div.append(img,title,desc,price,btn1);
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
        localStorage.setItem("priority-list",JSON.stringify(data))
        display(data);
   }
  