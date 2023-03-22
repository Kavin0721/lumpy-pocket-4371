import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import sidebar from "../components/sidebar.js";

const navbar_div = document.getElementById('navbar')
navbar_div.innerHTML = navbar();

const footer_div = document.getElementById('footer')
footer_div.innerHTML = footer();

const sidebar_div = document.getElementById('sidebar')
sidebar_div.innerHTML = sidebar();





/*--------------------------------------------- to hide and show the sidebar---------------------------------------------*/

const humburger_menu = document.querySelector('#n_left>i')

const sidebar_lines = document.querySelector('.sidebar-div-main>i')



humburger_menu.onclick = () => {
    sidebar_div.style.display = ''
}

sidebar_lines.onclick = () => {
    sidebar_div.style.display = 'none';
}

// document.onclick = (event) => {
//   if(event.target  !== 'humburger_menu' && event.target  !== 'sidebar_lines'){
//     sidebar_div.style.display = '';
//   }
// }
/*--------------------------------------------- to hide and show the sidebar end ---------------------------------------------*/




/*--------------------------------------------- down arrow ---------------------------------------------------------*/

let angle_arrow_1 = document.querySelector('#sidebar-div-1 a+i')
let angle_arrow_2 = document.querySelector('#sidebar-div-2 a+i')
let angle_arrow_3 = document.querySelector('#sidebar-div-3 a+i')
let drop_down_div_1 = document.querySelector('.sidebar-subdiv-1')
let drop_down_div_2 = document.querySelector('.sidebar-subdiv-2')
let drop_down_div_3 = document.querySelector('.sidebar-subdiv-3')


angle_arrow_1.onclick = () => {
    console.log('hello');
    drop_down_div_1.style.display = drop_down_div_1.style.display === 'none' ? '' : 'none';
}

    angle_arrow_2.onclick = () => {
        console.log('hie');
        drop_down_div_2.style.display = drop_down_div_2.style.display === 'none' ? '' : 'none';
    }

    angle_arrow_3.onclick = () => {
        console.log('hie');
        drop_down_div_3.style.display = drop_down_div_3.style.display === 'none' ? '' : 'none';
    }
/*----------------------------------------------------- down arrow end -----------------------------------------------------*/



/*------------------------------- redirecting tab -------------------------------*/

const homeReturn = document.querySelector('#n_left>img')
homeReturn.onclick = () => {
    window.location.href = "index.html"
}


const internLogo = document.querySelector('#n_right>i+i')
internLogo.onclick = () => {
  window.location.href = 'dashboard.html'
}
/*------------------------------- redirecting tab end-------------------------------*/



/*--------------------------------------------------------carousel------------------------------------------------------------------------------*/
const slider_img = [
    "./images/in4.jpg",
    "./images/in3.jpg",
    "./images/in2.jpg",
    "./images/in1.jpg",
  ];
  
  const slider_title = [
    "Harshil Bhadra",
    "Amani Nagda",
    "Siddharth Viyyapu",
    "Sshikha Bodwaani",
  ];
  
  const slider_intern = [
    "Intern at Porsche",
    "Intern at Viacom18",
    "Intern at Gooseberry Homes",
    "Sr. Exec. HR at BookMyShow",
  ];
  
  const slider_descp = [
    '"If you are more than satisfied with a particular product/firm who gives you more than you expect then there’s no need to find a substitute. Its similar with Intern Theory, the best team who makes continuous efforts and always ready to help! Thanks for giving me the best start."',
    '"I was on a look out for an internship to spend my summer productively and I stumbled upon Inter Theory. Their team was very kind and kept me updated. I applied for Viacom18 and got through. I thank Intern Theory team for giving me this opportunity."',
    '"I created my profile because I had before Intern Theory, not come across a consultancy that would execute the responsibility of getting a result for your application irrespective of being failure or success the way they did. Theyve set the bars really high! Kudos team!"',
    '"We have been using InternTheory for over a year now and are very happy with the quality of applications that we receive. Their team has been very helpful in screening applications for the various internship requirements we had. It has been a delight working with them."',
  ];
  
  const slider_div = document.getElementById("slider");
  
  let i = 1;
  
  let main_div = document.createElement("div");
  main_div.className = 'slider-box'
  let sub_div_a = document.createElement("div");
  sub_div_a.className = 'slider-intern-details'
  let sub_div_b = document.createElement("div");
  sub_div_b.className = 'slider-intern-lookout'
  
  let img = document.createElement("img");
  img.src = slider_img[0];
  
  let title = document.createElement("h5");
  title.innerText = slider_title[0];
  
  let resp = document.createElement("p");
  resp.innerText = slider_intern[0];
  
  let desc = document.createElement("p");
  desc.innerText = slider_descp[0];
  
  sub_div_a.append(img, title, resp);
  sub_div_b.append(desc);
  main_div.append(sub_div_a, sub_div_b);
  slider_div.append(main_div)
  
  const carousel = () => {
  
    setInterval(() => {
  
      if (i === slider_img.length) {
        i = 0;
      }
      slider_div.innerHTML = null;
      let main_div = document.createElement("div");
      let sub_div_a = document.createElement("div");
      let sub_div_b = document.createElement("div");
  
      let img = document.createElement("img");
      img.src = slider_img[i];
  
      let title = document.createElement("h5");
      title.innerText = slider_title[i];
  
      let resp = document.createElement("p");
      resp.innerText = slider_intern[i];
  
      let desc = document.createElement("p");
      desc.innerText = slider_descp[i];
  
      sub_div_a.append(img, title, resp);
      sub_div_b.append(desc);
      main_div.append(sub_div_a, sub_div_b);
      slider_div.append(main_div)
      i++
  
    }, 4000);
  };
  
  carousel();
  
/*--------------------------------------------------------carousel end------------------------------------------------------------------------------*/
  
document.querySelector('#n_right>i:last-child').addEventListener('click',login);

function login(){
  console.log('function check')
  window.location.href='login.html'
}



/*-------------------------------------------------- Input box functionality -------------------------------------------------*/

const url="http://localhost:3000/Internships";

let srch = document.getElementById('searchBtnn')
srch.onclick = async () => {
  let data = srch.value;
  let res = await fetch(`{url}?courses=${data}`)
  res = await res.json()
  
}

