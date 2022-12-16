document.getElementById('sign_in').addEventListener('submit',sign_in)

async function sign_in(){
    event.preventDefault();
    console.log('function check')
    // try{
let email1=document.querySelector("#email").value
let password1=document.querySelector("#password").value
// let send_data={
//     email:email1,
//     password:password1
// }
// let res=await fetch('http://localhost:3000/users',
// {
//     method:'POST',
//     body:JSON.stringify(send_data),
//     headers:{
//        "Content-Type":'application/json'
//     }
// })
// let data=await res.json()
// console.log(data)
// alert("Successful")
// 
// console.log(res)
// // console.log(data)

// if(res.ok==true){
//     alert("Successfully Logged In")
//     location.href = "./home.html"

let res = await fetch ('http://localhost:3000/users')
let data= await res.json();
console.log(data);

let count=0
data.forEach(function (el){
    if (email1==el.email && password1==el.password){
        count++
        
    }
})

if (count==1){
    alert("Successfully Logged In")
    location.href = "./index.html"
}else{
    alert("Enter correct email or password")
}
// }
// else{
//     alert("Login Failed")
// }
//     }
//     // catch(err){
//     //     console.log("err:",err)
//     // }
}

function save(){
    let name=document.getElementById('AddrFirstName').value
    if (name==""){
        let container=document.querySelector('.popup');
        container.innerHTML=null;
        container.style.display="inline";

        let div=document.createElement('img');
        div.src='./image/wrong.jpeg';
        let h2=document.createElement('h2');
        h2.innerHTML=`Sorry!`;
        let p=document.createElement('p');
        p.innerText='Please enter details first. Thanks!'
        let button=document.createElement('button');
        button.innerText="OK"
        button.addEventListener('click',function(){
            ok();
        })


        container.append(div,h2,p,button)
    }else{
        let container=document.querySelector('.popup');
        container.innerHTML=null;
        container.style.display="inline";

        let div=document.createElement('img');
        div.src='./image/Tick image.png';
        let h2=document.createElement('h2');
        h2.innerHTML=`Thank You! ${name}`;
        let p=document.createElement('p');
        p.innerText='Your details has been successfully submitted. Thanks!'
        let button=document.createElement('button');
        button.innerText="OK"
        button.addEventListener('click',function(){
            ok();
        })


        container.append(div,h2,p,button)
    }
}