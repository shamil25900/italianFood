const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".navbar");


function toggleNavbar() {
    nav_header.classList.toggle("active");

}

mobile_nav.addEventListener("click", ( ) => toggleNavbar( ));