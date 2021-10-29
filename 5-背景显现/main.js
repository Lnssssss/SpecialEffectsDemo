let text = document.querySelector('.loading-text')
let bg   = document.querySelector('.bg')

let load = 0

let timer = setInterval(blurring, 30)

function blurring() {
    load += 1
    if (load > 99) {
        clearInterval(timer)
    }
    text.innerText = `${load}%`
    text.style.opacity = 1-load/100
    bg.style.filter = `blur(${30-load/100*30}px)`

}
