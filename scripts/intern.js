
//the selected items will be contain in data-intern object 

//Fetching data from localhost
const url="http://localhost:3000/courses";
 
let local=async ()=>{
    let res= await fetch(url)
    let data =await res.json();
     displayJob(data);
    console.log(data);
}
local();




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
        price.innerText=ele.pay //element's.price;
        
       
        let btn2=document.createElement("button");
        btn2.innerHTML="APPLY";
        btn2.setAttribute("class","btn-outline-success");
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