const navBtn = document.querySelector(".nav__btn");
const namMenu = document.querySelector(".nav-menu");

let navisOpen = false;
navBtn.addEventListener("click", function(){
    if(navisOpen){
        navBtn.classList.remove("nav__btn--open");
        namMenu.style.left = "-25rem";
        navisOpen = false;
    }
    else
    {
        navBtn.classList.add("nav__btn--open");
        namMenu.style.left = "0rem";
        navisOpen = true;
    }
})