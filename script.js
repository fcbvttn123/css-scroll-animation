let defaultScale = .5
let imgDefaultRight = 250
let imgDefaultTop = 200

let img1 = document.querySelector("img#img1")
let prevScrollY = window.scrollY

// window.addEventListener("scroll", img1Animation)

function img1Animation(e) {
    scaleAnimation()
    positionAnimation()
    prevScrollY = window.scrollY
}

function scaleAnimation() {
    // Scroll Down
    if(window.scrollY > prevScrollY) {
        if(defaultScale <= 1) {
            defaultScale += 0.01
            img1.style.transform = `scale(${defaultScale})`
        } else {
            defaultScale = 1
        }
    // Scroll Up
    } else {
        if(defaultScale <= .5) {
            defaultScale = .5
        } 
        defaultScale -= 0.01
        img1.style.transform = `scale(${defaultScale})`
    }
}

function positionAnimation() {
    // Scroll Down
    if(window.scrollY > prevScrollY) {
        if(imgDefaultRight == 0 || imgDefaultTop == 0) {return}
        imgDefaultRight -= 5
        imgDefaultTop -= 3
        img1.style.top = `${imgDefaultTop}px`
        img1.style.right = `${imgDefaultRight}px`
    } 
    // Scroll Up
    else {
        if(imgDefaultRight == 250 || imgDefaultTop == 200) {return}
        imgDefaultRight += 5
        imgDefaultTop += 3
        img1.style.top = `${imgDefaultTop}px`
        img1.style.right = `${imgDefaultRight}px`
    }
}