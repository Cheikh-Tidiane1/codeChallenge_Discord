const menuHamburger = document.querySelector(".menu-hamburger")
const contentFloatMenu = document.querySelector(".float-menu-container")
const closeMenu = document.querySelector(".close-menu");

menuHamburger.addEventListener('click',()=>{
    contentFloatMenu.removeAttribute("hidden");
})
closeMenu.addEventListener('click',()=>{
    contentFloatMenu.setAttribute("hidden",true);
})