// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.from('#page1 h1', {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 0.5,
    stagger: true
})

gsap.to("#page2 h1", {
    x: "-150%",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -300%",
        scrub: 2,
        pin: true,

    }


})