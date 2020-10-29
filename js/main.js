
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

/*Owl Carousel*/
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    center: true,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})