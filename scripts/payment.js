document.getElementById('checkout').addEventListener('click',checkout);

function checkout(){
    let list ="";
    localStorage.setItem("Apply-list",JSON.stringify(list));
    console.log('function check')
    document.getElementById('main-cont').style.filter='blur(10px)'
    
    let container=document.querySelector('.popup');
   
    container.style.display="";

    
    
}

document.getElementById('debit').addEventListener('click',debit);

function debit(){
    let container=document.querySelector('.popup');
    container.style.display="none";

    let container1=document.querySelector('#card-areaa');
    container1.style.display="";
}

document.getElementById('proceed').addEventListener('click',proceed);

function proceed(){
    let container1=document.querySelector('#card-areaa');
    container1.style.display="none";

    window.prompt('Enter OTP')

    window.location.href='./cong.html'
}

// let appendOtp = document.getElementById("showOTP");    
// function getOTP() {      
//     let otp = Math.floor(Math.random() * (9999 - 1000) + 1000);      
//     appendOtp.innerText="OTP: "+otp;      
//     console.log("OTP: "+otp);      
//     localStorage.setItem("otp",otp);    
// }