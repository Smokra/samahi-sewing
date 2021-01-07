// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  
  // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
  // you could also use addEventListener() instead
  window.onload = function() {
    
     // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
     window.requestAnimationFrame(function() {
    
        // GSAP custom code goes here     
        let tl = gsap.timeline()
        tl.from(".logo", {duration: 1.5, rotation: -180, opacity: 0, scale: 0.2, ease:"bounce"})
          
     });
    
  };

});

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
