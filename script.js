 var tl = gsap.timeline({ defaults:{opacity:0, ease:"back"}});
gsap.set(".page-wrapper", {})
function init() {
    tl.from(".page-wrapper", {autoAlpha:0})  //this nullifies visibility:none; from CSS 
    .from(".logo", {duration: 1.5, rotation: -180, scale: 0.2, ease:"bounce"})
    .from("h1, h3", {x:80, duration:1}, "-=1")
    .from("h2", {x:-80, duration:1}, "<")
    .from(".animate", {y:30}, "-=0.2")
    .from(".img-box", {scale:0, transformOrigin:"50% 50%", stagger:0.2}, "-=0.5")
    .from(".form-group", {scale:0, transformOrigin:"50% 50%", stagger:0.2}, "-=0.5")
    .from("button", {y:50}, "-=0.1") 
}

window.addEventListener("load", function(event) { 
  init(); //do stuff after page load it self, don't forget about autoAlpha
});
