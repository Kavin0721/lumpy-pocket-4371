const sidebar = () => {
    return `<div class="sidebar-div-main">
    <i class="fa-solid fa-bars"></i>
    <img src="./images/Intern-transparent.png" alt="error">
</div>
<div class="sidebar-div">
    <i class="fa-solid fa-house"></i>
    <a href="dashboard.html">Dashboard</a>
</div>
<div class="sidebar-div">
    <i class="fa-solid fa-user-secret"></i>
    <a href="Internship.html">Internship</a>
</div>
<div class="sidebar-div">
    <i class="fa-solid fa-suitcase"></i>
    <a href="">Jobs</a>
</div>
<div class="sidebar-div">
    <i class="fa-solid fa-file-circle-plus"></i>
    <a href="">Post Internship</a>
</div>
<div class="sidebar-div" id="sidebar-div-1">
    <i class="fa-solid fa-address-card"></i>
    <a href="">Courses </a>
    <i class="fa-solid fa-angle-down"></i>
    <div class="sidebar-subdiv-1" style="display: none;">
        <a href="">Online Courses</a>
        <a href="">Classroom Training</a>
    </div>
</div>
<div class="sidebar-div">
    <i class="fa-solid fa-phone-volume"></i>
    <a href="">Contact Us</a>
</div>
<hr style="margin: 20px 0;">
<div class="sidebar-div" id="sidebar-div-2">
    <i class="fa-solid fa-lines-leaning"></i>
    <a href="">Register</a>
    <i class="fa-solid fa-angle-down"></i>
    <div class="sidebar-subdiv-2" style="display: none">
        <div><a href="">Company</a></div>
        <a href="">Student</a>
    </div>
</div>
<div class="sidebar-div" id="sidebar-div-3">
    <i class="fa-solid fa-right-to-bracket"></i>
    <a href="">Login</a>
    <i class="fa-solid fa-angle-down"></i>
    <div class="sidebar-subdiv-3" style="display: none;">
        <a href="">Company</a>
        <a href="">Student</a>
    </div>
</div>`
}


export default sidebar;