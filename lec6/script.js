
function breaktheText() {
    const h1 = document.querySelector("h1")
    const h1Text = h1.textContent

    let clutter = ""
    const splittedText = h1Text.split("")
    let halfValue = Math.floor(splittedText.length / 2)
    splittedText.forEach((char, index) => {

        if (index < halfValue) {
            clutter += `<span class= "a" >${char}</span>`
        } else {
            clutter += `<span class="b" >${char}</span>`
        }
        // console.log(clutter)
    })

    h1.innerHTML = clutter
}

breaktheText()

gsap.from("h1 .a", {
    y: 50,
    duration: 0.6,
    delay: 0.3,
    stagger: 0.15,
    opacity: 0
})
gsap.from("h1 .b", {
    y: 50,
    duration: 0.6,
    delay: 0.3,
    stagger: -0.15,
    opacity: 0
})


// gsap.from("h1 span", {
//     opacity: 0,
//     y: 50,
//     delay: 0.2,
//     duration: 0.8,
//     stagger: 0.15,
// })
