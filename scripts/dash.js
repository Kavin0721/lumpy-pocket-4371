//the selected items will be contain in data-intern object 

let iarr=JSON.parse(localStorage.getItem("data-intern"))||[];
window.addEventListener("load",function(){
  display(progData);
});

function display(iarr){
    document.getElementById("prod").innerHTML=" ";
    progData.forEach(function(elem,index){
        let div=document.createElement("div");
        div.setAttribute("class","col")
        let img=document.createElement("img")
        img.src// element's.image;
        let title =document.createElement("h4");
        title.innerText //element's.name;
        let desc=document.createElement("p");
        desc.innerText //element's.description;
        let price=document.createElement("h5");
        price.innerText //element's.price;
        
        let btn1=document.createElement("button");
        btn1.innerHTML="BACKOUT";
        btn1.setAttribute("class","btn btn-outline-danger");
        btn1.addEventListener("click",function(){

            Dele(index);
        });
        let btn2=document.createElement("button");
        btn2.innerHTML="PROCEED";
        btn2.setAttribute("class","btn-outline-success");
        btn2.addEventListener("click",function(){
        
            Addi(elem,index);
            Dele(index);
        });
        div.append(img,title,);
        document.getElementById("prod").append(div);
    });
 }

 let doneData=JSON.parse(localStorage.getItem("done-list"))||[];

  function deleteprogfunc(index)
  {  
        iarr.splice(index,1); 
        localStorage.setItem("priority-list",JSON.stringify(iarr))
        display(iarr);
   }
  function Addprogfunc(elem)
  {
        doneData.push(elem);
        localStorage.setItem("done-list",JSON.stringify(doneData));
 }