let itemUn = document.querySelector(".item-1")
let itemDeux = document.querySelector(".item-2")
let itemTrois = document.querySelector(".item-3")
let itemQuatre = document.querySelector(".item-4")

let active = document.querySelector(".active")

itemUn.addEventListener('click', () => {
    active.classList.toggle("active")
})

itemDeux.addEventListener('click', () => {
    active.classList.toggle("active")
})

itemTrois.addEventListener('click', () => {
    active.classList.toggle("active")
})

itemQuatre.addEventListener('click', () => {
    active.classList.toggle("active")
})