let box = document.querySelectorAll('.box')

window.addEventListener('scroll', scrollShow)

scrollShow()

function scrollShow(){
    let triggerBottom = window.innerHeight/5*4

    box.forEach(item=>{
        let itemTop = item.getBoundingClientRect().top
        if(itemTop < triggerBottom){
            item.classList.add('show')
        }else {
            item.classList.remove('show')
        }
    })
}

