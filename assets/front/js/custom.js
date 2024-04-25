$('.women-third-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$('.about-third-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.men-third-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});


var swiper = new Swiper(".productSlideThumbs", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".productSlide", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
thumbs: {
    swiper: swiper,
},
});



//PRODUCT QUANTITY SELECT INPUT

// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


// PRICING SECTION JS

function logoPrice () {
    const logoCrousal = document.querySelector(".logoCrousal")
    const brandingCrousal = document.querySelector(".brandingCrousal")
    const webCrousal = document.querySelector(".webCrousal")
    const marketingCrousal = document.querySelector(".marketingCrousal")
    const logoCrousalMobile = document.querySelector(".logoCrousal-mobile-view")
    const brandingCrousalMobile = document.querySelector(".brandingCrousal-mobile-view")
    const webCrousalMobile = document.querySelector(".webCrousal-mobile-view")
    const marketingCrousalMobile = document.querySelector(".marketingCrousal-mobile-view")
    logoCrousal.style.display = "flex"
    brandingCrousal.style.display = "none"
    webCrousal.style.display = "none"
    marketingCrousal.style.display = "none"
    
    if (window.matchMedia("(max-width: 575px)").matches){
    logoCrousalMobile.style.display = "block"
    brandingCrousalMobile.style.display = "none"
    webCrousalMobile.style.display = "none"
    marketingCrousalMobile.style.display = "none"
    }
    
}
function brandingPrice(){
    const logoCrousal = document.querySelector(".logoCrousal")
    const brandingCrousal = document.querySelector(".brandingCrousal")
    const webCrousal = document.querySelector(".webCrousal")
    const marketingCrousal = document.querySelector(".marketingCrousal")
    const logoCrousalMobile = document.querySelector(".logoCrousal-mobile-view")
    const brandingCrousalMobile = document.querySelector(".brandingCrousal-mobile-view")
    const webCrousalMobile = document.querySelector(".webCrousal-mobile-view")
    const marketingCrousalMobile = document.querySelector(".marketingCrousal-mobile-view")

    logoCrousal.style.display = "none"
    brandingCrousal.style.display = "flex"
    webCrousal.style.display = "none"
    marketingCrousal.style.display = "none"
    if (window.matchMedia("(max-width: 575px)").matches){
        logoCrousalMobile.style.display = "none"
        brandingCrousalMobile.style.display = "block"
        webCrousalMobile.style.display = "none"
        marketingCrousalMobile.style.display = "none"
        }
}
function webPrice (){
    const logoCrousal = document.querySelector(".logoCrousal")
    const brandingCrousal = document.querySelector(".brandingCrousal")
    const webCrousal = document.querySelector(".webCrousal")
    const marketingCrousal = document.querySelector(".marketingCrousal")
    const logoCrousalMobile = document.querySelector(".logoCrousal-mobile-view")
    const brandingCrousalMobile = document.querySelector(".brandingCrousal-mobile-view")
    const webCrousalMobile = document.querySelector(".webCrousal-mobile-view")
    const marketingCrousalMobile = document.querySelector(".marketingCrousal-mobile-view")
    logoCrousal.style.display = "none"
    brandingCrousal.style.display = "none"
    webCrousal.style.display = "flex"
    marketingCrousal.style.display = "none"
    if (window.matchMedia("(max-width: 575px)").matches){
        logoCrousalMobile.style.display = "none"
        brandingCrousalMobile.style.display = "none"
        webCrousalMobile.style.display = "block"
        marketingCrousalMobile.style.display = "none"
        }
}
function marketingPrice (){
    const logoCrousal = document.querySelector(".logoCrousal")
    const brandingCrousal = document.querySelector(".brandingCrousal")
    const webCrousal = document.querySelector(".webCrousal")
    const marketingCrousal = document.querySelector(".marketingCrousal")
    const logoCrousalMobile = document.querySelector(".logoCrousal-mobile-view")
    const brandingCrousalMobile = document.querySelector(".brandingCrousal-mobile-view")
    const webCrousalMobile = document.querySelector(".webCrousal-mobile-view")
    const marketingCrousalMobile = document.querySelector(".marketingCrousal-mobile-view")
    logoCrousal.style.display = "none"
    brandingCrousal.style.display = "none"
    webCrousal.style.display = "none"
    marketingCrousal.style.display = "flex"
    if (window.matchMedia("(max-width: 575px)").matches){
        logoCrousalMobile.style.display = "none"
        brandingCrousalMobile.style.display = "none"
        webCrousalMobile.style.display = "none"
        marketingCrousalMobile.style.display = "block"
        }
}

// Portfolio
function logoPort(){
    const logoPortfolio = document.querySelector(".logoPortfolio")
    const brandingPortfolio = document.querySelector(".brandingPortfolio")
    const webPortfolio = document.querySelector(".webPortfolio")
    logoPortfolio.style.display= "block"
    brandingPortfolio.style.display = "none"
    webPortfolio.style.display ="none"
}
function webPort(){
    const logoPortfolio = document.querySelector(".logoPortfolio")
    const brandingPortfolio = document.querySelector(".brandingPortfolio")
    const webPortfolio = document.querySelector(".webPortfolio")
    logoPortfolio.style.display= "none"
    brandingPortfolio.style.display = "none"
    webPortfolio.style.display ="block"
}
function brandPort(){
    const logoPortfolio = document.querySelector(".logoPortfolio")
    const brandingPortfolio = document.querySelector(".brandingPortfolio")
    const webPortfolio = document.querySelector(".webPortfolio")
    logoPortfolio.style.display= "none"
    brandingPortfolio.style.display = "block"
    webPortfolio.style.display ="none"
}
// Mobile Responsive Pricing Screen Reset
window.addEventListener('resize', function() {
    const logoCrousalMobile = document.querySelector(".logoCrousal-mobile-view")
    const brandingCrousalMobile = document.querySelector(".brandingCrousal-mobile-view")
    const webCrousalMobile = document.querySelector(".webCrousal-mobile-view")
    const marketingCrousalMobile = document.querySelector(".marketingCrousal-mobile-view")
    if (!window.matchMedia("(max-width: 768px)").matches) {
        logoCrousalMobile.style.display = "none"
        brandingCrousalMobile.style.display = "none"
        webCrousalMobile.style.display = "none"
        marketingCrousalMobile.style.display = "none"
    }
});



// Toggle button

document.getElementById("main-btn").onclick = function() {
    this.classList.toggle("clicked");
};
