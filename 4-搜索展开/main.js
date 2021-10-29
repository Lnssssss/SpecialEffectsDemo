let btn = document.querySelector('.btn')
let input = document.querySelector('.input')
let search = document.querySelector('.search')

btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
})
