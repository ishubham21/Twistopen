

navSmall();
carouselPop();
offeringPop();

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

/*This function is to enable pop on offerings in smaller screens*/
function offeringPop (){
    var offParent = document.querySelectorAll(".off-parent");
    var offPopover = document.querySelector(".offer-pop");
    var offCross = document.getElementById("off-cross");
    for (let i = 0; i < 8; i++) {
        offParent[i].addEventListener("click", () => {
            offPopover.classList.add("off-disp-tru");
        });
    }
    for (let i = 9; i < 12; i++) {
        offParent[i].addEventListener("click", () => {
            offPopover.classList.add("off-disp-tru");
        });
    }
    
    var popH3 = document.getElementById("off-pop-h3");
    var popP = document.getElementById("off-pop-p");
    offParent[0].addEventListener("click", () => {
        popH3.innerHTML = "UX Audit";
        popP.innerHTML = "A UX audit is a series of steps carried out to help determine why your product is encountering issues or not performing at its intended capacity.Our comprehensive UX audit will provide you with hard data and actionable recommendations that will improve the user experience of your product.";
    });
    offParent[1].addEventListener("click", () => {
        popH3.innerHTML = "UX Research";
        popP.innerHTML = "User experience research is a systematic, customer-centred study, that validates the development of a product from concept to delivery.Our arsenal as UX researchers is our vast domain experience and well honed set of research methods in our tool kit.Investing in user experience research for your business guarantees higher ROI.";
    });
    offParent[2].addEventListener("click", () => {
        popH3.innerHTML = "Visual Facelift";
        popP.innerHTML = "Think your product or website is working fine but feels like the visual elements are not hitting the right notes? That’s when you come to us for a visual facelift, pretty much like a cosmetic surgeon we will amp up only the look and feel of your product without getting into the nitty - gritty of code and functionality.";
    });
    offParent[3].addEventListener("click", () => {
        popH3.innerHTML = "Heuristic Evaluation";
        popP.innerHTML = "User experience research is a systematic, customer-centred study, that validates the development of a product from concept to delivery.Our arsenal as UX researchers is our vast domain experience and well honed set of research methods in our tool kit.Investing in user experience research for your business guarantees higher ROI.";
    });
    offParent[4].addEventListener("click", () => {
        popH3.innerHTML = "Communication Strategy";
        popP.innerHTML = "In order to build a successful product, one needs an effective communication strategy. This helps you define your audience and generate high quality and precise content to help your customers engage successfully with your product. We at Twist Open UX can help you create an impactful communication strategy for your business.";
    });
    offParent[5].addEventListener("click", () => {
        popH3.innerHTML = "Usability Testing";
        popP.innerHTML = "Is your product being used effectively? Is there scope for improvement? Usability testing is a method of testing a product or service on a target group of users to identify usability problems.We capture the insights and provide an effective action plan towards creating a successful product or service.";
    });
    offParent[6].addEventListener("click", () => {
        popH3.innerHTML = "Service Design";
        popP.innerHTML = "Organisations have to adapt quickly to ever evolving business needs, where control is literally in the hands of a customer.Service design is the process of improving the people, processes, culture, and assets of an organisation to improve the quality and interaction of service users as well as service providers.";
    });
    offParent[7].addEventListener("click", () => {
        popH3.innerHTML = "Intranet Interfaces";
        popP.innerHTML = "Intelligent design and development of intranet interfaces ensures the success of good organizational network. We can help you design interfaces that are intuitive, easy to navigate and do not require resources to train employees.";
    });
    offParent[9].addEventListener("click", () => {
        popH3.innerHTML = "UX for SaaS Products";
        popP.innerHTML = "Software as a service is a cloud based hosting of a software application that grants users licence to this software on a subscription model.We can help you develop a phenomenal SaaS product from scratch, for your customers.";
    });
    offParent[10].addEventListener("click", () => {
        popH3.innerHTML = "UX for Enteprise Apps";
        popP.innerHTML = "Enterprise apps are software applications designed specifically for enterprises. They digitise entire business processes through a single software to maximise efficiency and reduce dependencies.Our expertise in the field can help change the game for your business.";
    });
    offParent[11].addEventListener("click", () => {
        popH3.innerHTML = "UX for Mobile & Web Apps";
        popP.innerHTML = "A mobile app is a software application developed for smaller mobile gadgets like phones, watches and tablets while a web application runs on a web browser rather than directly on the mobile device.Looking to develop a web or mobile app ? Our in -house UX capabilities ensure top notch mobile and web app development.";
    });

    offCross.addEventListener("click", () => {
        offPopover.classList.remove("off-disp-tru");
    });
}