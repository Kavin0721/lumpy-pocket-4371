
import navbar from "./components/navbar.js"
let navbars=document.getElementById("navbar")
navbars.innerHTML=navbar()

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

