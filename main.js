const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");




menuEmail.addEventListener("click", toogleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside);




function toogleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")

    const isAsideClose = aside.classList.contains("inactive")

    if (!isAsideClose) {
        aside.classList.add("inactive");
    }
}


function toogleMobileMenu(){

    const isAsideClose = aside.classList.contains("inactive")

    if (!isAsideClose) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive")

}

function toogleCarritoAside(){
    const isMenuMobileClose = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClose = menuEmail.classList.contains("inactive");

    if (!isMenuMobileClose) {
        mobileMenu.classList.add("inactive");
    } 
    if (!isDesktopMenuClose) {
        desktopMenu.classList.add("inactive")
    }
    

    aside.classList.toggle("inactive")
}