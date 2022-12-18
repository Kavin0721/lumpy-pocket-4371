document.getElementById('checkout').addEventListener('click',checkout);

function checkout(){
    console.log('function check')
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

    alert('You have successfully placed your order')
}