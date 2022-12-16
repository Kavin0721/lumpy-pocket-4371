document.getElementById('post_data').addEventListener('click',post_data)

async function post_data(){
    event.preventDefault();
    console.log('function check')
    try{
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let password=document.getElementById('password');
    let data={
        name:name.value,
        email:email.value,
        password:password.value
    }


    let res=await fetch('http://localhost:3000/users',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json',
        }
    });
    alert("Account is created")
    location.href='./login.html'
    }
    catch(err){
        console.log("err:",err)
    }
}
// let cb=document.querySelector("#c_box").checked
// if(cb==true){
//     console.log("true")
// }