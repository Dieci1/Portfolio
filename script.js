window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//Portfolio section - Modal

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) =>{
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () =>{
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});


//Website dark/light theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"] ("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"] ("sun");
}



//scroll to top button

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
})

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        } else {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});


//Download curriculom
function downloadCurriculum(event) {
    event.preventDefault(); // Evita il comportamento predefinito del browser

    var curriculumPath = "./materiale/PasqualeIoio.pdf";
    var downloadLink = document.createElement('a');
    downloadLink.href = curriculumPath;
    downloadLink.download = 'PasqualeIoio.pdf';  
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

var buttons = document.querySelectorAll('.btn'); // Seleziona tutti gli elementi con la classe "btn"

buttons.forEach(function(button) {
    button.addEventListener('click', downloadCurriculum); // Aggiungi l'evento di click a ciascun bottone
});


//Responsive navigation menu toggle

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//scroll reveal animations

//common reveal options to create reveal animation
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

//target elements, and specify options to create reveal animation
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', {delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .about-info .btn', {delay: 600, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', {delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', {delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', {delay: 600, origin: 'right' });
ScrollReveal().reveal('.home-img, .about-img', {delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.skills-description, .service-description, .contact-card, .contact-left h2 ', {delay: 700, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio, .img-card', {delay: 800, origin: 'bottom', interval: 200});
ScrollReveal().reveal('footer .group', {delay: 500, origin: 'top', interval: 200 });

