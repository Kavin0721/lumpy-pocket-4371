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
    save();
    // alert("Successfully Logged In")
    // location.href = "./index.html"
}else{
    unsave();
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
    let name=document.getElementById('name').value
    
    let container=document.querySelector('.popup');
    container.innerHTML=null;
    container.style.display="inline";

    let div=document.createElement('img');
    div.src='./images/Tick image.png';
    let h2=document.createElement('h2');
    h2.innerHTML=`Perfect! ${name}`;
    let p=document.createElement('p');
    p.innerText='Successfully Logged in!'
    let button=document.createElement('button');
    button.innerText="OK"
    button.addEventListener('click',function(){
        oks();
    })


    container.append(div,h2,p,button)
}

function unsave(){
    let name=document.getElementById('name').value
    
    let container=document.querySelector('.popup');
    container.innerHTML=null;
    container.style.display="inline";

    let div=document.createElement('img');
    div.src='./images/wrong.jpeg';
    let h2=document.createElement('h2');
    h2.innerHTML=`Sorry! ${name}`;
    let p=document.createElement('p');
    p.innerText='Please enter correct details. Thanks!'
    let button=document.createElement('button');
    button.innerText="OK"
    button.addEventListener('click',function(){
        ok();
    })


    container.append(div,h2,p,button)
}

function ok(){
    event.preventDefault();
    let popup=document.querySelector('.popup');
    popup.style.display="none";

    document.getElementById('name').value=null;
    document.getElementById('email').value=null;
    document.getElementById('password').value=null;
    
}

function oks(){
    event.preventDefault();
    let popup=document.querySelector('.popup');
    popup.style.display="none";

    window.location.href='./index.html'
    
}