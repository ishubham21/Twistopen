
/*This function is to toggle the navbar for smaller screens*/
navSmall();
function navSmall() {
    var navCont = document.querySelector(".nav-container");
    var navSm = document.querySelector(".nav-sm");
    var navLi = document.querySelectorAll(".nav-sm-li");
    navCont.addEventListener("click", () => {
        navSm.classList.toggle("display-true");
        navCont.classList.toggle("cross-icon");
        for (let i = 0; i < navLi.length; i++) {
            navLi[i].addEventListener("click", () => {
                navSm.classList.remove("display-true");
                navCont.classList.remove("cross-icon");
            });
        }
    });    
}