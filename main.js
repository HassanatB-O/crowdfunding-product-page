let selectBtn = document.querySelectorAll(".select-btn")
let thankYouModal = document.getElementById("thank-you-modal")
let gotBtn = document.getElementById("got-btn")
let body = document.getElementById("container")
let backBtn = document.getElementById("back-btn")
let backProjectModal = document.getElementById("back-project")
let closeModal = document.getElementById("icon-close-modal")
let hamburgerIcon = document.getElementById("icon-hamburger")
let total = document.getElementById("amount-people-p")


selectBtn.forEach(selection =>{
    selection.addEventListener('click', () =>{
        console.log("selected")
        thankYouModal.style.display = "block"
        body.style.opacity = "0.5"
        thankYouModal.style.filter = "brightness(1)"
        window.scrollTo(0,0)
        total.innerText = (parseInt(total.innerText) + 1)
    })
})

gotBtn.addEventListener('click', () =>{
    thankYouModal.style.display = "none"
    body.style.opacity = "1"
})

backBtn.addEventListener('click', () =>{
    backProjectModal.style.display = "block"
    body.style.opacity = "0.5"
    backProjectModal.style.filter = "brightness(1)"
})

closeModal.addEventListener('click', () =>{
    backProjectModal.style.display = "none"
    body.style.opacity = "1"
})

document.getElementById("radio-stand-two").addEventListener('click', () =>{
    document.getElementById("enter-pledge").style.display = "block"
})

document.getElementById("bookmark-btn").addEventListener('click', () =>{
    document.getElementById("bookmark-btn-colored").style.display = "flex"
    document.getElementById("bookmark-btn").style.display = "none"
})

document.getElementById("bookmark-btn-colored").addEventListener('click', () =>{
    document.getElementById("bookmark-btn-colored").style.display = "none"
    document.getElementById("bookmark-btn").style.display = "flex"
})

hamburgerIcon.addEventListener('click', () =>{
    document.getElementById("hamburger-ul").style.display = "block"
    body.style.opacity = "0.7"
    document.getElementById("icon-close-menu").style.display = "block"
    hamburgerIcon.style.display = "none"
})

document.getElementById("icon-close-menu").addEventListener('click', () =>{
    body.style.opacity = "1"
    document.getElementById("hamburger-ul").style.display = "none"
    hamburgerIcon.style.display = "block"
    document.getElementById("icon-close-menu").style.display = "none"
})
