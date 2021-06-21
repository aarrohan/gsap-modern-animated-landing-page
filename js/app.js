const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger-menu');
const headline = document.querySelector('.headline');

if ($(window).width() < 1400) {

    const tl = new TimelineMax();

    tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "100%" },{ width: "80%", ease: Power2.easeInOut})
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(logo, 0.5, { opacity: "0", x: "30" }, { opacity: "1", x: "0" }, "-=0.5")
    .fromTo(hamburger, 0.5, { opacity: "0", x: "-30" }, { opacity: "1", x: "0" }, "-=0.5")
    .fromTo(headline, 0.5, { left: "-100%" }, { left: "20%" }, "-=0.5");

} else {

    const tl = new TimelineMax();

    tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "100%" },{ width: "80%", ease: Power2.easeInOut})
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(logo, 0.5, { opacity: "0", x: "30" }, { opacity: "1", x: "0" }, "-=0.5")
    .fromTo(hamburger, 0.5, { opacity: "0", x: "-30" }, { opacity: "1", x: "0" }, "-=0.5")
    .fromTo(headline, 0.5, { left: "-100%" }, { left: "10%" }, "-=0.5");

}