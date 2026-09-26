let path = "M 10 150 Q 250 150 1000 150";
let finalPath = "M 10 150 Q 250 150 1000 150"

const string = document.querySelector("#string")

string.addEventListener('mousemove', (e) => {
    const y = e.offsetY
    const x = e.offsetX
    path = `M 10 150 Q ${x} ${y} 1000 150`
    console.log(path);

    gsap.to('#string svg path', {
        attr: { d: path },
        duration: 0.5,
        ease: "power3.out"
    })
})
string.addEventListener('mouseleave', () => {
    gsap.to('#string svg path', {
        attr: { d: finalPath },
        duration: 1.2,
        ease: "elastic"
    })
})