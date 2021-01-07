// ######## Begining of page animation ############
var tl = gsap.timeline({ defaults:{opacity:0, ease:"back"}});
function init() {
    tl.from(".page-wrapper", {autoAlpha:0})  //this nullifies visibility:hidden; from CSS 
    .from(".logo", {duration: 1.5, rotation: -180, scale: 0.2, ease:"bounce"})
    .from("h1, h3", {x:80, duration:1}, "-=1")
    .from("h2", {x:-80, duration:1}, "<")
    .from(".animate", {y:50}, "-=0.2")
    .from(".img-box", {scale:0, transformOrigin:"50% 50%", stagger:0.2}, "-=0.5")
    .from(".form-group", {scale:0, transformOrigin:"50% 50%", stagger:0.2}, "-=2")
    .from(".btn", {y:50}, "-=1") 
    .from("#prevButton", {x:-30}, "-=1.5")
    .from("#nextButton", {x:30}, "-=1.5")
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
    const slides = document.getElementsByClassName('box-slide');
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
    //modalPreviews[slideIndex - 1].className += ' active';
    //!!!!!!!!!!!!!!!!!! popraviti ovo, ako odkomentiram .slide se nalazi jedan preko drugoga i dugmeta za carousel ne rade
};
// ############ End of Modal image gallery ###################

// ############ Start of Carousel  ###################
var slideDelay = 1.5;
var slideDuration = 0.3;
var snapX;

var slides = document.querySelectorAll(".slide");
var prevButton = document.querySelector("#prevButton");
var nextButton = document.querySelector("#nextButton");
var progressWrap = gsap.utils.wrap(0, 1);

var numSlides = slides.length;

gsap.set(slides, {
  xPercent: i => i * 100
});

var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100);
var timer = gsap.delayedCall(slideDelay);

var animation = gsap.to(slides, {
  xPercent: "+=" + (numSlides * 100),
  duration: 1,
  ease: "none",
  paused: true,
  repeat: -1,
  modifiers: {
    xPercent: wrap
  }
});

var proxy = document.createElement("div");
var slideAnimation = gsap.to({}, {});
var slideWidth = 0;
var wrapWidth = 0;
resize();

window.addEventListener("resize", resize);

prevButton.addEventListener("click", function() {
  animateSlides(1);
});

nextButton.addEventListener("click", function() {
  animateSlides(-1);
});

function animateSlides(direction) {

  timer.restart(true);
  slideAnimation.kill();

  var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);

  slideAnimation = gsap.to(proxy, {
    x: x,
    duration: slideDuration,
    onUpdate: updateProgress
  });  
}

function updateProgress() { 
  animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
}

function resize() {

  var norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;

  slideWidth = slides[0].offsetWidth;
  wrapWidth = slideWidth * numSlides;
  snapX = gsap.utils.snap(slideWidth);

  gsap.set(proxy, {
    x: norm * wrapWidth
  });

  animateSlides(0);
  slideAnimation.progress(1);
}

/* ########## Disabeling image download ################# */
function nocontext(e) {
    var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;
        if (clickedTag == "IMG") {
            alert(alertMsg);
            return false;
        }
    }
var alertMsg = "Image is copyrighted!";
document.oncontextmenu = nocontext;