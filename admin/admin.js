
let form=document.getElementById("form")
let data=JSON.parse(localStorage.getItem("course_data"))||[]
form.onsubmit=(event)=>{
    event.preventDefault()
    let image=document.getElementById("image").value
    let name=document.getElementById("name").value
    let discription=document.getElementById("discription").value
    let price= +document.getElementById("price").value
    let obj={image,name,discription,price}
    data.push(obj)
    //console.log(obj)
    localStorage.setItem("course_data",JSON.stringify(data))

}
console.log(form)

let con=document.getElementById("container")
let appendsdata=(data)=>{
    con.innerHTML=null

    data.forEach(({image,name,discription,price}) => {
 
        let div=document.createElement("duv")
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
            editedata({image,name,discription,price})
        }

        let de=document.createElement("button")
        de.innerHTML="Delete"
        div.append(i,n,d,p,ed,de)
        con.append(div)
       
    });

}
appendsdata(data)
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
    discription.value=data.discription
    let price= +document.getElementById("eprice")
    //price.disabled=false

    price.disabled=false
    //console.log(typeof )
    price.value=data.price

    let edite=document.getElementById("edit")
    edite.disabled=false
}