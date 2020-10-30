

navSmall();
carouselPop();

/*This function is to toggle the navbar for smaller screens*/
function navSmall() {
    var navCont = document.querySelector(".nav-container");
    var navSm = document.querySelector(".nav-sm");
    var navLi = document.querySelectorAll(".nav-sm-li");
    navCont.addEventListener("click", () => {
        navSm.classList.toggle("display-true");
        navCont.classList.toggle("cross-icon");
    });

    /*This snippet makes sure that nav is set to 
    display:none when a link is clicked, so to 
    avoid any reverse working of the icon in any case*/    
    for (let i = 0; i < navLi.length; i++) {
        navLi[i].addEventListener("click", () => {
            navSm.classList.remove("display-true");
            navCont.classList.remove("cross-icon");
        });
    }
}
/*This function ensures displaying of different texts upon clicking of different elements*/
function carouselPop() {
    var carItem = document.querySelectorAll(".item");
    var popup = document.querySelector(".popup");
    var popCross = document.getElementById("cross-close");
    var popText = document.getElementById("pop-text");
    for (let i = 0; i < carItem.length; i++) {
        carItem[i].addEventListener("click", () => {
            popup.classList.add("popup-display-true");
        });
    }
    carItem[0].addEventListener("click", () => {
        popText.innerHTML = "Awesome! <br> We can help you build it right the first time. Share your email."
    });
    carItem[1].addEventListener("click", () => {
        popText.innerHTML = "Fantastic! <br> We can help you with your product. Share your email.";
    });
    carItem[2].addEventListener("click", () => {
        popText.innerHTML = "Right on! <br> We can help you uncover valuable user insights.Share your email.";
    });
    carItem[3].addEventListener("click", () => {
        popText.innerHTML = "Lovely! <br> We can help you jazz your product up.Share your email.";
    });
    carItem[4].addEventListener("click", () => {
        popText.innerHTML = "Great! <br> We can help you manage your resources better.Share your email.";
    });
    
    /*Closing the popover*/
    popCross.addEventListener("click", () => {
        popup.classList.remove("popup-display-true");
    });
}
    