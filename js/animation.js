body= document.getElementById("body");





/* var tl = gsap.timeline();
tl.fromTo(".hero", {opacity: "0.5"}, {duration: 1, opacity: "1", ease: "circ"}).fromTo(".header", {opacity: "0"}, {duration: 1,  opacity: "1", ease: "power2.out"},"-=1").fromTo(".headline-wrapper", {opacity: "0"}, {duration: 1, opacity: "1", ease: "power2.out"},"-=1");

 */
                
var tl = gsap.timeline();
tl.fromTo("#bottom_image", {y: "-100"}, {duration: 1, y: "0", ease: "circ"})
