var carItem = document.querySelectorAll(".item");
var popup = document.querySelector(".popup");
var popCross = document.getElementById("cross-close");
var popText = document.getElementById("pop-text");
for (let i = 0; i < carItem.length; i++) {
    carItem[i].addEventListener("click", () =>{
        popup.classList.add("popup-display-true");
    });
    if (i === 1) {
        popText.textContent = "Fantastic! We can help you with your product. Share your email." ;
    }
    else if (i === 2){
        popText.textContent = "Hello";
    }
}
popCross.addEventListener("click", () => {
    popup.classList.remove("popup-display-true");
});

/*This function is to toggle the navbar for smaller screens*/
navSmall();
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
