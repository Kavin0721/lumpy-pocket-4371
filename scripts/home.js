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
/*------------------------------- redirecting tab end-------------------------------*/



/*--------------------------------------------------------slider------------------------------------------------------------------------------*/
let slider_div = document.querySelectorAll('#slider')
slider_div.forEach( )