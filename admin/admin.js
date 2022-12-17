import navbar from "../components/navbar.js"
let navbars=document.getElementById("navbar")
navbars.innerHTML=navbar()
console.log(navbar())
import footer from "../components/footer.js"
let footers=document.getElementById("footer")
footers.innerHTML=footer()
let url="http://localhost:3000/admincourse"

let form=document.getElementById("form")
// let data=JSON.parse(localStorage.getItem("course_data"))||[]
form.onsubmit=async(event)=>{
    event.preventDefault()
    let image=document.getElementById("image").value
    let name=document.getElementById("name").value
    let discription=document.getElementById("discription").value
    let price= +document.getElementById("price").value
    let obj={image,name,discription,price}
    data.push(obj)
    //console.log(obj)
    let res= await fetch("http://localhost:3000/admincourse",{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    })
    // localStorage.setItem("course_data",JSON.stringify(data))

}
console.log(form)
let getdata=async()=>{
    let res=await fetch("http://localhost:3000/admincourse")
    let data=await res.json()
    console.log(data)
    appendsdata(data)

}
getdata()


let con=document.getElementById("container")
let appendsdata=(data)=>{
    con.innerHTML=null

    data.forEach(({image,name,discription,price,id}) => {
 
        let div=document.createElement("div")
        let i=document.createElement("img")
        i.src=image
        let n=document.createElement("p")
        n.innerHTML=name
        let d=document.createElement("p")
        d.innerHTML=discription
        let p=document.createElement("p")
        p.innerHTML=price
        console.log(p.innerHTML)
        let ed=document.createElement("button")
        ed.innerHTML="Edit"
        ed.onclick=()=>{
            editedata({image,name,discription,price,id})
        }
        //console.log({image,name,discription,price})

        let de=document.createElement("button")
        de.innerHTML="Delete"
        de.onclick=async(event)=>{
            event.preventDefault()
            let res= await fetch(`http://localhost:3000/admincourse/${id}`,{
                method:"DELETE"

            })

        }
        div.append(i,n,d,p,ed,de)
        con.append(div)
       
    });

}

let editedata=(data)=>{
    console.log(data.name)
    let image=document.getElementById("eimage")
    image.disabled=false
    console.log(image)
    image.value=data.image
    let name=document.getElementById("ename")
    name.disabled=false
    name.value=data.name
    let discription=document.getElementById("ediscription")
    discription.disabled=false
    //console.log(discription)
    discription.value=data.discription
    let price= document.getElementById("eprice")
    //price.disabled=false
    console.log(price)

    price.disabled=false
    //console.log(typeof )
    price.value=data.price
    
    let edite=document.getElementById("edit")
    edite.disabled=false
    edite.onclick=async()=>{
        let image=document.getElementById("eimage").value
        let name=document.getElementById("ename").value
        let discription=document.getElementById("ediscription").value
        let price= +document.getElementById("eprice").value
        let obj={image, name,discription,price}
        console.log(data.id)
       // console.log(data.id)
       let res=await fetch(`${url}/${data.id}`,{
        method:"PATCH",
        body:JSON.stringify(obj),
        headers:{
          "Content-Type":"application/json"
        }
       })

    }

}