let container = document.querySelector('.container')

window.addEventListener('keydown',(event)=>{
    container.innerHTML=`
        <div class="key box">${event.key ===' '?'Space':event.key}<small>event.key</small></div>
        <div class="key box">${event.keyCode}<small>event.keyCode</small></div>
        <div class="key box">${event.code}<small>event.code</small></div>
    `
})
