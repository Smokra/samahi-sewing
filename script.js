// ######## Begining of page animation ############
var tl = gsap.timeline({ defaults:{opacity:0, ease:"back"}});
gsap.set(".page-wrapper", {rotationY:15})
function init() {
    tl.from(".page-wrapper", {autoAlpha:0})  //this nullifies visibility:hidden; from CSS 
    //.to(".content-bg", {opacity:1, scale:1, transformOrigin:"50% 50%", duration:0.9})
    .from(".logo", {duration: 1.5, rotation: -180, scale: 0.2, ease:"bounce"})
    .from("h1, h3", {x:80, duration:1}, "-=1")
    .from("h2", {x:-80, duration:1}, "<")
    //.from("p", {y:80, duration:1}, "-=0.2")
    .from(".animate", {y:30}, "-=0.2")
    .from(".img-box", {scale:0, transformOrigin:"50% 50%", stagger:0.2}, "-=0.5")
    .from(".form-group", {scale:0, transformOrigin:"50% 50%", stagger:0.2}, "-=1")
    .from("button", {y:50}, "-=0.1") 
}

window.addEventListener("load", function(event) { 
  init(); //do stuff after page load it self, don't forget about autoAlpha
});
// ######## End of page animation ############


// ############ Begining of Modal image gallery ###################
let slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
    document.getElementById('Lightbox').style.display = 'flex';
};

function closeLightbox() {
    document.getElementById('Lightbox').style.display = 'none';
};

function changeSlide(n) {
    showSlide(slideIndex += n);
};

function toSlide(n) {
    showSlide(slideIndex = n);
};

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    let modalPreviews = document.getElementsByClassName('modal-preview');

    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    };

    slides[slideIndex - 1].style.display = 'block';
    modalPreviews[slideIndex - 1].className += ' active';
};
// ############ End of Modal image gallery ###################
