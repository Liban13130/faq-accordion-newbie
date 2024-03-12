let buttons = document.querySelectorAll(".content")
let active = document.querySelectorAll(".active")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.marginBottom = "20px"
    })
})

buttons[0].addEventListener("click", () => {
    active[0].classList.toggle("active-0")
})

buttons[1].addEventListener("click", () => {
    active[1].classList.toggle("active-1")
})

buttons[2].addEventListener("click", () => {
    active[2].classList.toggle("active-2")
})

buttons[3].addEventListener("click", () => {
    active[3].classList.toggle("active-3")
})