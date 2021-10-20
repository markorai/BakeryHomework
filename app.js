const toggleButton = document.getElementsByClassName("toggle_button")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
const image = document.getElementById("changing-img");
toggleButton.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
    image.classList.toggle("hide-image");
})