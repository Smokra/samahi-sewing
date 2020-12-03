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


 /* .to(".car.yellow", {duration: 5, x:500, ease:"none"}, "-=1")
  //this allows the green car to come in as the yellow car leaves
  .fromTo(".car.green", {x:0} , {duration: 5, x:500, ease:"none"}, "-=1")

//this creates the seamless loop from time of 1 second to 9 seconds
let controller = tl.tweenFromTo(1, 9, {ease:"none", repeat:-1})

//click anywhere to toggle play/pause
document.addEventListener("click", () => controller.paused(!controller.paused()))
*/