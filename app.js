const toggleButton = document.getElementsByClassName("toggle_button")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
const mainCaption = document.getElementsByClassName("main-caption")[0];
const mainDescription = document.getElementsByClassName("main-description")[0];
toggleButton.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
    mainCaption.classList.toggle("hide");
    mainDescription.classList.toggle("hide");
})